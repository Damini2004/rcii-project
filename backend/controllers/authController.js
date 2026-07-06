const asyncHandler = require("express-async-handler");

// @desc    Get current authenticated user profile
// @route   GET /api/auth/me
// @access  Private
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ success: true, data: req.user });
});

module.exports = { getCurrentUser };
