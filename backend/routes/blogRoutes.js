const express = require("express");
const { body } = require("express-validator");
const {
  getBlogs,
  getBlogBySlug,
  getAdminBlogs,
  getAdminBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  bulkDeleteBlogs,
  uploadImage,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

const blogValidation = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("shortDescription").trim().notEmpty().withMessage("Short description is required"),
  body("content").trim().notEmpty().withMessage("Content is required"),
  body("category").trim().notEmpty().withMessage("Category is required"),
  body("author").trim().notEmpty().withMessage("Author is required"),
];

// ---------- Admin-only routes (must be declared before /:slug) ----------
router.get("/admin/all", protect, allowRoles("admin"), getAdminBlogs);
router.get("/admin/:id", protect, allowRoles("admin"), getAdminBlogById);
router.post("/bulk-delete", protect, allowRoles("admin"), bulkDeleteBlogs);
router.post("/upload", protect, allowRoles("admin"), upload.single("image"), uploadImage);

// ---------- Public routes ----------
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// ---------- Protected CRUD ----------
router.post("/", protect, allowRoles("admin"), upload.single("featuredImage"), blogValidation, validateRequest, createBlog);
router.put("/:id", protect, allowRoles("admin"), updateBlog);
router.delete("/:id", protect, allowRoles("admin"), deleteBlog);

module.exports = router;
