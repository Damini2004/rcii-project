const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAE5RfS_WUWNGukRXgsgyQP16KzKy0pdf8",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "studio-1970939832-85b97.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "studio-1970939832-85b97",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "studio-1970939832-85b97.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "1060080534709",
  appId: process.env.FIREBASE_APP_ID || "1:1060080534709:web:ae3ccbc7e2bb892c8baafc",
};

const connectDB = async () => {
  if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
    throw new Error("Firebase projectId and apiKey are required");
  }

  console.log(`Firebase Firestore configured: ${firebaseConfig.projectId}`);
};

const getFirebaseServiceAccount = () => {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  }

  if (process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_PROJECT_ID) {
    return {
      project_id: process.env.FIREBASE_PROJECT_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  }

  return null;
};

module.exports = connectDB;
module.exports.firebaseConfig = firebaseConfig;
module.exports.getFirebaseServiceAccount = getFirebaseServiceAccount;
