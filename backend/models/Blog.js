const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      trim: true,
      maxlength: [400, "Short description cannot exceed 400 characters"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    featuredImage: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    authorRole: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    metaTitle: {
      type: String,
      trim: true,
      default: "",
    },
    metaDescription: {
      type: String,
      trim: true,
      default: "",
    },
    metaKeywords: {
  type: String,
  trim: true,
  default: "",
},
canonicalUrl: {
  type: String,
  trim: true,
  default: "",
},
    readTime: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    
  },
  { timestamps: true }
);

// Auto-generate a unique slug from the title before validation
blogSchema.pre("validate", async function (next) {
  if (!this.isModified("title") && this.slug) {
    return next();
  }

  const baseSlug = slugify(this.title || "", {
    lower: true,
    strict: true,
    trim: true,
  });

  let uniqueSlug = baseSlug;
  let counter = 1;

  const BlogModel = this.constructor;
  // Ensure slug uniqueness, ignoring the current document on updates
  while (
    await BlogModel.findOne({
      slug: uniqueSlug,
      _id: { $ne: this._id },
    })
  ) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  this.slug = uniqueSlug;
  next();
});

// Automatically set publishedAt when status changes to published
blogSchema.pre("save", function (next) {
  if (this.isModified("status") && this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

blogSchema.index({ title: "text", shortDescription: "text", tags: "text" });

module.exports = mongoose.model("Blog", blogSchema);
