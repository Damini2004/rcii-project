const asyncHandler = require("express-async-handler");
const Blog = require("../models/Blog");

const calculateReadTime = (content = "") => {
  const text = content.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

// @desc    Get all published blogs (public) with pagination, search, filter, sort
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 9;
  const skip = (page - 1) * limit;

  const query = { status: "published" };

  if (req.query.search) {
    query.$text = { $search: req.query.search };
  }

  if (req.query.category && req.query.category !== "All") {
    query.category = req.query.category;
  }

  if (req.query.tag) {
    query.tags = req.query.tag;
  }

let sort = { publishedAt: -1, createdAt: -1 };

if (req.query.sort === "oldest") {
  sort = { publishedAt: 1, createdAt: 1 };
}

if (req.query.sort === "title") {
  sort = { title: 1 };
}

if (req.query.sort === "-publishedAt") {
  sort = { publishedAt: -1, createdAt: -1 };
}

if (req.query.sort === "publishedAt") {
  sort = { publishedAt: 1, createdAt: 1 };
}

  const [blogs, total] = await Promise.all([
    Blog.find(query).sort(sort).skip(skip).limit(limit),
    Blog.countDocuments(query),
  ]);

  res.json({
    success: true,
    data: blogs,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
      limit,
    },
  });
});

// @desc    Get single published blog by slug
// @route   GET /api/blogs/:slug
// @access  Public
const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  // Fetch a small set of related blogs from the same category
  const related = await Blog.find({
    category: blog.category,
    status: "published",
    _id: { $ne: blog._id },
  })
    .sort({ publishedAt: -1 })
    .limit(3)
    .select("title slug featuredImage publishedAt readTime");

  res.json({ success: true, data: blog, related });
});

// @desc    Get all blogs for admin (any status), with pagination/search/sort
// @route   GET /api/blogs/admin/all
// @access  Private
const getAdminBlogs = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const query = {};

  if (req.query.search) {
    query.title = { $regex: req.query.search, $options: "i" };
  }

  if (req.query.status && req.query.status !== "all") {
    query.status = req.query.status;
  }

  if (req.query.category && req.query.category !== "all") {
    query.category = req.query.category;
  }

  let sort = { createdAt: -1 };
  if (req.query.sortBy) {
    const dir = req.query.sortDir === "asc" ? 1 : -1;
    sort = { [req.query.sortBy]: dir };
  }

  const [blogs, total] = await Promise.all([
    Blog.find(query).sort(sort).skip(skip).limit(limit),
    Blog.countDocuments(query),
  ]);

  res.json({
    success: true,
    data: blogs,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
      limit,
    },
  });
});

// @desc    Get single blog by id (admin - any status)
// @route   GET /api/blogs/admin/:id
// @access  Private
const getAdminBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({ success: true, data: blog });
});

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
  const {
    title,
    shortDescription,
    content,
    category,
    tags,
    author,
    authorRole,
    status,
    metaTitle,
    metaDescription,
    featuredImage,
    metaKeywords,
canonicalUrl,
  } = req.body;

  if (!title || !shortDescription || !content || !category || !author) {
    res.status(400);
    throw new Error("Title, short description, content, category and author are required");
  }

  const blog = await Blog.create({
    title,
    shortDescription,
    metaKeywords,
    canonicalUrl,
    content,
    category,
    tags: Array.isArray(tags) ? tags : tags ? String(tags).split(",").map((t) => t.trim()).filter(Boolean) : [],
    author,
    authorRole,
    status: status || "draft",
    metaTitle,
    metaDescription,
    featuredImage: featuredImage || (req.file ? `/uploads/${req.file.filename}` : ""),
    readTime: calculateReadTime(content),
  });

  res.status(201).json({ success: true, data: blog });
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const fields = [
    "title",
    "shortDescription",
    "content",
    "category",
    "author",
    "authorRole",
    "status",
    "metaTitle",
    "metaDescription",
    "metaKeywords",
    "canonicalUrl",
  ];

  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      blog[field] = req.body[field];
    }
  });

  if (req.body.tags !== undefined) {
    blog.tags = Array.isArray(req.body.tags)
      ? req.body.tags
      : String(req.body.tags).split(",").map((t) => t.trim()).filter(Boolean);
  }

  if (req.file) {
    blog.featuredImage = `/uploads/${req.file.filename}`;
  } else if (req.body.featuredImage !== undefined) {
    blog.featuredImage = req.body.featuredImage;
  }

  if (req.body.content) {
    blog.readTime = calculateReadTime(req.body.content);
  }

  if (req.body.status === "published" && !blog.publishedAt) {
  blog.publishedAt = new Date();
}
  const updated = await blog.save();

  res.json({ success: true, data: updated });
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  await blog.deleteOne();

  res.json({ success: true, message: "Blog deleted successfully" });
});

// @desc    Bulk delete blogs
// @route   POST /api/blogs/bulk-delete
// @access  Private
const bulkDeleteBlogs = asyncHandler(async (req, res) => {
  const { ids } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    res.status(400);
    throw new Error("Please provide an array of blog ids to delete");
  }

  await Blog.deleteMany({ _id: { $in: ids } });

  res.json({ success: true, message: `${ids.length} blog(s) deleted successfully` });
});

// @desc    Upload a featured image (standalone endpoint used by the rich text editor / form)
// @route   POST /api/blogs/upload
// @access  Private
const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("No image file provided");
  }

  res.json({
    success: true,
    data: { url: `/uploads/${req.file.filename}` },
  });
});

module.exports = {
  getBlogs,
  getBlogBySlug,
  getAdminBlogs,
  getAdminBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  bulkDeleteBlogs,
  uploadImage,
};
