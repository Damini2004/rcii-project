// Run with: npm run seed:admin
// Creates (or updates the password of) the default admin account defined in .env
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");

const run = async () => {
  await connectDB();

  const name = process.env.ADMIN_NAME || "Admin";
  const email = (process.env.ADMIN_EMAIL || "admin@rcii.com").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "ChangeMe@123";

  let admin = await Admin.findOne({ email }).select("+password");

  if (admin) {
    admin.name = name;
    admin.password = password;
    await admin.save();
    console.log(`Existing admin "${email}" password updated.`);
  } else {
    admin = await Admin.create({ name, email, password, role: "superadmin" });
    console.log(`Admin created: ${email}`);
  }

  console.log("You can now log in at /admin/login with these credentials.");
  await mongoose.connection.close();
  process.exit(0);
};

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
