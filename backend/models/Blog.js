const {
  createId,
  createQuery,
  deleteDocument,
  getDocument,
  listDocuments,
  matchesQuery,
  saveDocument,
} = require("../utils/firestore");

const COLLECTION = "blogs";

class Blog {
  constructor(data = {}) {
    Object.assign(this, {
      _id: data._id || data.id || createId(),
      title: data.title || "",
      slug: data.slug || "",
      shortDescription: data.shortDescription || "",
      content: data.content || "",
      featuredImage: data.featuredImage || "",
      category: data.category || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || "",
      authorRole: data.authorRole || "",
      status: data.status || "draft",
      metaTitle: data.metaTitle || "",
      metaDescription: data.metaDescription || "",
      metaKeywords: data.metaKeywords || "",
      canonicalUrl: data.canonicalUrl || "",
      readTime: data.readTime || "",
      publishedAt: data.publishedAt || null,
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date(),
    });
  }

  static find(query = {}) {
    return createQuery(loadBlogs(query));
  }

  static findOne(query = {}) {
    return createSingleQuery(loadBlogs(query).then((rows) => rows[0] || null));
  }

  static async findById(id) {
    const data = await getDocument(COLLECTION, id);
    return data ? new Blog(data) : null;
  }

  static async countDocuments(query = {}) {
    const rows = await loadBlogs(query);
    return rows.length;
  }

  static async create(data = {}) {
    const blog = new Blog(data);
    await blog.save();
    return blog;
  }

  static async deleteMany(query = {}) {
    const rows = await loadBlogs(query);
    await Promise.all(rows.map((blog) => deleteDocument(COLLECTION, blog._id)));
    return { deletedCount: rows.length };
  }

  async save() {
    if (!this.title) throw new Error("Title is required");
    if (!this.shortDescription) throw new Error("Short description is required");
    if (!this.content) throw new Error("Blog content is required");
    if (!this.category) throw new Error("Category is required");
    if (!this.author) throw new Error("Author name is required");

    this.slug = await getUniqueSlug(this.title, this._id);

    if (this.status === "published" && !this.publishedAt) {
      this.publishedAt = new Date();
    }

    const saved = await saveDocument(COLLECTION, this.toJSON());
    Object.assign(this, saved);
    return this;
  }

  async deleteOne() {
    await deleteDocument(COLLECTION, this._id);
  }

  toJSON() {
    return { ...this, id: this._id };
  }
}

async function loadBlogs(query = {}) {
  const rows = await listDocuments(COLLECTION);
  return rows.filter((row) => matchesQuery(row, query)).map((row) => new Blog(row));
}

async function getUniqueSlug(title, currentId) {
  const baseSlug = slugify(title || "");
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (await Blog.findOne({ slug: uniqueSlug, _id: { $ne: currentId } })) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return uniqueSlug;
}

function createSingleQuery(promise) {
  const state = { select: null };
  const chain = {
    select(fields) {
      state.select = fields;
      return chain;
    },
    async exec() {
      const item = await promise;
      if (!item || !state.select) return item;
      const excluded = String(state.select)
        .split(/\s+/)
        .filter((field) => field.startsWith("-"))
        .map((field) => field.slice(1));
      excluded.forEach((field) => delete item[field]);
      return item;
    },
    then(resolve, reject) {
      return chain.exec().then(resolve, reject);
    },
    catch(reject) {
      return chain.exec().catch(reject);
    },
  };

  return chain;
}

module.exports = Blog;

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
