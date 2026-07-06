const admin = require("firebase-admin");
const { getFirebaseServiceAccount } = require("./db");

let initialized = false;

const initFirebaseAdmin = () => {
  if (initialized) return admin;

  const serviceAccount = getFirebaseServiceAccount();
  if (!serviceAccount) {
    throw new Error(
      "Firebase service account credentials are required. Set FIREBASE_SERVICE_ACCOUNT or FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY."
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

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
