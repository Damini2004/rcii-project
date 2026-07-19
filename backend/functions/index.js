const functions = require("firebase-functions");
const admin = require("firebase-admin");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
}

admin.initializeApp();

const app = require("../app");

exports.api = functions
  .runWith({
    memory: "1GB",
    timeoutSeconds: 60,
  })
  .https.onRequest(app);
