const { validationResult } = require("express-validator");

// Runs after express-validator checks; returns 400 with first error message if any failed
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }
  next();
};

module.exports = validateRequest;
