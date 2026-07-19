const admin = require("firebase-admin");
const { getFirebaseServiceAccount } = require("./db");

let initialized = false;

const initFirebaseAdmin = () => {
  if (initialized) return admin;

  const serviceAccount = getFirebaseServiceAccount();
  const initOptions = serviceAccount
    ? { credential: admin.credential.cert(serviceAccount) }
    : undefined;

  admin.initializeApp(initOptions);

  initialized = true;
  return admin;
};

const isAdminUser = (customClaims = {}) => {
  if (!customClaims) return false;
  if (customClaims.admin === true) return true;
  const role = String(customClaims.role || "").toLowerCase();
  return role === "admin" || role === "superadmin";
};

module.exports = {
  initFirebaseAdmin,
  isAdminUser,
};
