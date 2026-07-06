const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");
const connectDB = require("../config/db");

const { firebaseConfig, getFirebaseServiceAccount } = connectDB;
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`;
let cachedAccessToken = null;

const operators = {
  ne: "$ne",
  in: "$in",
  regex: "$regex",
  text: "$text",
};

const createId = () => randomUUID();

const listDocuments = async (collectionName) => {
  const documents = [];
  let pageToken = "";

  do {
    const url = pageToken
      ? `${collectionPath(collectionName)}?pageToken=${encodeURIComponent(pageToken)}`
      : collectionPath(collectionName);
    const data = await request(url, { allow404: true });
    documents.push(...(data?.documents || []));
    pageToken = data?.nextPageToken || "";
  } while (pageToken);

  return documents.map(fromDocument);
};

const getDocument = async (collectionName, id) => {
  if (!id) return null;
  const doc = await request(`${collectionPath(collectionName)}/${encodeURIComponent(String(id))}`, {
    allow404: true,
  });
  return doc ? fromDocument(doc) : null;
};

const saveDocument = async (collectionName, data) => {
  const id = String(data._id || data.id || createId());
  const now = new Date();
  const payload = {
    ...data,
    _id: id,
    createdAt: data.createdAt || now,
    updatedAt: now,
  };

  await request(`${collectionPath(collectionName)}/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify({ fields: toFirestoreFields(payload) }),
  });

  return payload;
};

const deleteDocument = async (collectionName, id) => {
  await request(`${collectionPath(collectionName)}/${encodeURIComponent(String(id))}`, {
    method: "DELETE",
    allow404: true,
  });
};

const matchesQuery = (item, query = {}) => {
  return Object.entries(query).every(([field, expected]) => {
    if (field === operators.text) {
      const term = String(expected?.$search || "").toLowerCase().trim();
      if (!term) return true;
      return [item.title, item.shortDescription, ...(Array.isArray(item.tags) ? item.tags : [])]
        .join(" ")
        .toLowerCase()
        .includes(term);
    }

    const actual = item[field];

    if (expected && typeof expected === "object" && !Array.isArray(expected) && !(expected instanceof Date)) {
      if (operators.ne in expected) return actual !== expected[operators.ne];
      if (operators.in in expected) return expected[operators.in].includes(actual);
      if (operators.regex in expected) {
        const flags = expected.$options || "";
        return new RegExp(expected[operators.regex], flags).test(String(actual || ""));
      }
    }

    if (Array.isArray(actual)) return actual.includes(expected);
    return actual === expected;
  });
};

const sortItems = (items, sort = {}) => {
  const entries = Object.entries(sort);
  if (!entries.length) return [...items];

  return [...items].sort((a, b) => {
    for (const [field, direction] of entries) {
      const result = compareValues(a[field], b[field]);
      if (result !== 0) return Number(direction) < 0 ? -result : result;
    }
    return 0;
  });
};

const pickFields = (item, fields) => {
  if (!fields) return item;
  const names = String(fields).split(/\s+/).filter(Boolean);
  if (!names.length) return item;

  const include = names.filter((name) => !name.startsWith("-"));
  const exclude = names.filter((name) => name.startsWith("-")).map((name) => name.slice(1));
  const source = item.toJSON ? item.toJSON() : { ...item };
  const output = include.length
    ? include.reduce((data, name) => {
        data[name] = source[name];
        return data;
      }, {})
    : { ...source };

  exclude.forEach((name) => delete output[name]);
  return output;
};

const createQuery = (promise) => {
  const state = {
    sort: null,
    skip: 0,
    limit: null,
    select: null,
  };

  const chain = {
    sort(sort) {
      state.sort = sort;
      return chain;
    },
    skip(skip) {
      state.skip = Number(skip) || 0;
      return chain;
    },
    limit(limit) {
      state.limit = Number(limit);
      return chain;
    },
    select(fields) {
      state.select = fields;
      return chain;
    },
    async exec() {
      let rows = await promise;
      rows = Array.isArray(rows) ? rows : rows ? [rows] : [];
      if (state.sort) rows = sortItems(rows, state.sort);
      if (state.skip || Number.isFinite(state.limit)) {
        rows = rows.slice(state.skip, Number.isFinite(state.limit) ? state.skip + state.limit : undefined);
      }
      rows = state.select ? rows.map((row) => pickFields(row, state.select)) : rows;
      return rows;
    },
    then(resolve, reject) {
      return chain.exec().then(resolve, reject);
    },
    catch(reject) {
      return chain.exec().catch(reject);
    },
  };

  return chain;
};

async function request(url, options = {}) {
  const accessToken = await getAccessToken();
  const separator = url.includes("?") ? "&" : "?";
  const requestUrl = accessToken ? url : `${url}${separator}key=${encodeURIComponent(firebaseConfig.apiKey)}`;
  const response = await fetch(requestUrl, {
    method: options.method || "GET",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: options.body,
  });

  if (response.status === 404 && options.allow404) return null;
  if (response.status === 204) return null;

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.error?.message || `Firestore request failed with status ${response.status}`);
  }

  return data;
}

async function getAccessToken() {
  const serviceAccount = getFirebaseServiceAccount();
  if (!serviceAccount) return null;

  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now() + 60 * 1000) {
    return cachedAccessToken.token;
  }

  const now = Math.floor(Date.now() / 1000);
  const assertion = jwt.sign(
    {
      iss: serviceAccount.client_email,
      scope: "https://www.googleapis.com/auth/datastore",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    },
    serviceAccount.private_key,
    { algorithm: "RS256" }
  );

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Unable to authenticate Firebase service account");
  }

  cachedAccessToken = {
    token: data.access_token,
    expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
  };

  return cachedAccessToken.token;
}

function collectionPath(collectionName) {
  return `${BASE_URL}/${collectionName}`;
}

function fromDocument(doc) {
  const data = fromFirestoreFields(doc.fields || {});
  const id = doc.name.split("/").pop();
  return { ...data, _id: data._id || id, id };
}

function toFirestoreFields(data) {
  return Object.entries(data).reduce((fields, [key, value]) => {
    if (value !== undefined) fields[key] = toFirestoreValue(value);
    return fields;
  }, {});
}

function toFirestoreValue(value) {
  if (value === null) return { nullValue: null };
  if (value instanceof Date) return { timestampValue: value.toISOString() };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(toFirestoreValue) } };
  if (typeof value === "boolean") return { booleanValue: value };
  if (typeof value === "number") {
    return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  }
  if (typeof value === "object") return { mapValue: { fields: toFirestoreFields(value) } };
  return { stringValue: String(value) };
}

function fromFirestoreFields(fields) {
  return Object.entries(fields).reduce((data, [key, value]) => {
    data[key] = fromFirestoreValue(value);
    return data;
  }, {});
}

function fromFirestoreValue(value) {
  if ("nullValue" in value) return null;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("timestampValue" in value) return new Date(value.timestampValue);
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(fromFirestoreValue);
  if ("mapValue" in value) return fromFirestoreFields(value.mapValue.fields || {});
  return value.stringValue || "";
}

function compareValues(a, b) {
  const left = a instanceof Date ? a.getTime() : a ?? "";
  const right = b instanceof Date ? b.getTime() : b ?? "";
  if (left > right) return 1;
  if (left < right) return -1;
  return 0;
}

module.exports = {
  createId,
  createQuery,
  deleteDocument,
  getDocument,
  listDocuments,
  matchesQuery,
  saveDocument,
  sortItems,
};
