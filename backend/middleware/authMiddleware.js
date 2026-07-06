const asyncHandler = require("express-async-handler");
const { initFirebaseAdmin } = require("../config/firebaseAdmin");

const firebaseAdmin = initFirebaseAdmin();

// Protect routes - verifies Firebase ID token and attaches user profile to req.user
const protect = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {
    res.status(401);
    throw new Error("Not authorized, no token provided");
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = await firebaseAdmin.auth().verifyIdToken(token);
    const userRef = firebaseAdmin.firestore().doc(`users/${decoded.uid}`);
    const userDoc = await userRef.get();

    let profile;
    if (!userDoc.exists) {
      const userRecord = await firebaseAdmin.auth().getUser(decoded.uid);
      profile = {
        uid: decoded.uid,
        name: userRecord.displayName || "",
        email: userRecord.email || decoded.email,
        role: "user",
        createdAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
      };
      await userRef.set(profile);
    } else {
      profile = userDoc.data();
    }

    req.user = {
      uid: decoded.uid,
      email: profile.email || decoded.email,
      name: profile.name || decoded.name || "",
      role: profile.role || "user",
    };

    return next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed or expired");
  }
});

module.exports = { protect };
