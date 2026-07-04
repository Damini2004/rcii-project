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
router.get("/admin/all", protect, getAdminBlogs);
router.get("/admin/:id", protect, getAdminBlogById);
router.post("/bulk-delete", protect, bulkDeleteBlogs);
router.post("/upload", protect, upload.single("image"), uploadImage);

// ---------- Public routes ----------
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// ---------- Protected CRUD ----------
router.post("/", protect, upload.single("featuredImage"), blogValidation, validateRequest, createBlog);
router.put("/:id", protect, upload.single("featuredImage"), updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
