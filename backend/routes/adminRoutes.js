const express = require("express");
const { body } = require("express-validator");
const { loginAdmin, getAdminProfile } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  loginAdmin
);

router.get("/me", protect, getAdminProfile);

module.exports = router;
