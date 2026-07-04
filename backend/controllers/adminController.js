const asyncHandler = require("express-async-handler");
const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

// @desc    Login admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  const admin = await Admin.findOne({ email: email.toLowerCase() }).select("+password");

  if (!admin || !(await admin.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.json({
    success: true,
    data: {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id),
    },
  });
});

// @desc    Get current logged-in admin profile
// @route   GET /api/admin/me
// @access  Private
const getAdminProfile = asyncHandler(async (req, res) => {
  res.json({ success: true, data: req.admin });
});

module.exports = { loginAdmin, getAdminProfile };
