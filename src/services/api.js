import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase.js";

const COLLECTIONS = {
  blogs: "blogs",
  users: "users",
  newsletter: "newsletter",
  files: "files",
};

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map((tag) => String(tag).trim()).filter(Boolean);
  return String(tags)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
};

const calculateReadTime = (content = "") => {
  const text = content.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const toBlogRecord = (docSnap) => ({
  id: docSnap.id,
  _id: docSnap.id,
  ...docSnap.data(),
});

const ensureUserProfile = async (firebaseUser) => {
  if (!firebaseUser) return null;

  const userRef = doc(db, COLLECTIONS.users, firebaseUser.uid);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const data = userDoc.data();
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email || data.email,
      name: data.name || firebaseUser.displayName || "",
      role: data.role || "user",
      ...data,
    };
  }

  const profile = {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
    name: firebaseUser.displayName || "",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await setDoc(userRef, profile);
  return profile;
};

const toAuthUser = (firebaseUser) => {
  if (!firebaseUser) return null;
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
    name: firebaseUser.displayName || "",
    photoURL: firebaseUser.photoURL || "",
  };
};

const getUniqueSlug = async (title, currentId = null) => {
  const baseSlug = slugify(title || "");
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (true) {
    const q = query(collection(db, COLLECTIONS.blogs), where("slug", "==", uniqueSlug));
    const snapshot = await getDocs(q);
    const duplicates = snapshot.docs.filter((docSnap) => docSnap.id !== currentId);
    if (duplicates.length === 0) break;
    uniqueSlug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return uniqueSlug;
};

const resolveImageUrl = (path) => {
  if (!path) return "";
  if (typeof path !== "string") return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path;
};

const authAPI = {
  onAuthStateChanged,
  login: async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const profile = toAuthUser(credential.user);
    return { data: profile };
  },
  register: async ({ email, password, displayName }) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
      await updateProfile(credential.user, { displayName });
    }
    const profile = await ensureUserProfile(credential.user);
    return { data: profile };
  },
  logout: async () => {
    await firebaseSignOut(auth);
    return { data: null };
  },
  me: async () => {
    if (!auth.currentUser) return { data: null };
    const profile = toAuthUser(auth.currentUser);
    return { data: profile };
  },
};

const uploadImage = async (file) => {
  if (!file) throw new Error("No file provided for upload");
  const fileName = `${Date.now()}-${file.name}`;
  const storageRef = ref(storage, `blog-images/${fileName}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const url = await getDownloadURL(uploadTask.ref);

  const metadata = {
    name: file.name,
    url,
    type: file.type,
    size: file.size,
    uploadedBy: auth.currentUser?.uid || null,
    uploadedAt: new Date(),
    relatedTo: "blogs",
  };

  await addDoc(collection(db, COLLECTIONS.files), metadata);
  return { success: true, data: { url, metadata } };
};

const buildBlogCollection = () => collection(db, COLLECTIONS.blogs);

const filterBlogs = (blogs, { search, category, tag } = {}) => {
  const term = String(search || "").trim().toLowerCase();

  return blogs.filter((blog) => {
    if (category && category !== "All" && category !== "all" && blog.category !== category) {
      return false;
    }

    if (tag && tag.trim()) {
      return Array.isArray(blog.tags) && blog.tags.includes(tag);
    }

    if (!term) return true;

    return [
      blog.title,
      blog.shortDescription,
      blog.content,
      ...(Array.isArray(blog.tags) ? blog.tags : []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(term);
  });
};

const sortBlogs = (blogs, sort) => {
  const direction = sort?.startsWith("-") ? "desc" : "asc";
  const field = sort?.replace(/^-/, "") || "publishedAt";

  return [...blogs].sort((a, b) => {
    const left = a[field] ?? "";
    const right = b[field] ?? "";

    if (left === right) return 0;
    if (direction === "asc") return left > right ? 1 : -1;
    return left < right ? 1 : -1;
  });
};

const paginate = (blogs, page = 1, limit = 9) => {
  const offset = (page - 1) * limit;
  return blogs.slice(offset, offset + limit);
};

const getAllBlogs = async (params = {}) => {
  const { page = 1, limit = 9, search, category, tag, sort } = params;
  const status = "published";

  const q = query(collection(db, COLLECTIONS.blogs), where("status", "==", status));
  const snapshot = await getDocs(q);
  const docs = snapshot.docs.map(toBlogRecord);
  const filtered = filterBlogs(docs, { search, category, tag });
  const sorted = sortBlogs(
    filtered,
    sort || "-publishedAt"
  );

  return {
    data: {
      data: paginate(sorted, page, limit),
      pagination: {
        total: sorted.length,
        page,
        pages: Math.max(1, Math.ceil(sorted.length / limit)),
        limit,
      },
    },
  };
};

const getBlogBySlug = async (slug) => {
  const q = query(
    collection(db, COLLECTIONS.blogs),
    where("slug", "==", slug),
    where("status", "==", "published")
  );
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return { data: { data: null, related: [] } };
  }

  const blog = toBlogRecord(snapshot.docs[0]);
  const related = snapshot.docs
    .map(toBlogRecord)
    .filter((item) => item.id !== blog.id && item.category === blog.category)
    .slice(0, 3);

  return { data: { data: blog, related } };
};

const blogAPI = {
  getAll: getAllBlogs,
  getBySlug: getBlogBySlug,
};

const getAdminBlogs = async (params = {}) => {
  const { page = 1, limit = 10, search, status = "all", category, sortBy, sortDir } = params;
  const q = query(collection(db, COLLECTIONS.blogs));
  const snapshot = await getDocs(q);

  let blogs = snapshot.docs.map(toBlogRecord);

  if (status && status !== "all") {
    blogs = blogs.filter((blog) => blog.status === status);
  }

  if (category && category !== "all") {
    blogs = blogs.filter((blog) => blog.category === category);
  }

  if (search) {
    blogs = blogs.filter((blog) =>
      [blog.title, blog.shortDescription, blog.content, ...(blog.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(String(search).toLowerCase())
    );
  }

  const sortField = sortBy || "createdAt";
  const direction = sortDir === "asc" ? "asc" : "desc";
  blogs = sortBlogs(blogs, `${direction === "desc" ? "-" : ""}${sortField}`);

  return {
    data: {
      data: paginate(blogs, page, limit),
      pagination: {
        total: blogs.length,
        page,
        pages: Math.max(1, Math.ceil(blogs.length / limit)),
        limit,
      },
    },
  };
};

const getAdminBlogById = async (id) => {
  const docRef = doc(db, COLLECTIONS.blogs, id);
  const snapshot = await getDoc(docRef);
  return { data: { data: snapshot.exists() ? toBlogRecord(snapshot) : null } };
};

const createBlog = async (payload = {}, imageFile) => {
  const blogRef = doc(collection(db, COLLECTIONS.blogs));
  const now = new Date();

  const featuredImageUrl = imageFile ? (await uploadImage(imageFile)).data.url : payload.featuredImage || "";
  const slug = await getUniqueSlug(payload.title, blogRef.id);

  const blog = {
    ...payload,
    _id: blogRef.id,
    createdAt: now,
    updatedAt: now,
    publishedAt: payload.status === "published" ? now : null,
    slug,
    featuredImage: featuredImageUrl,
    tags: normalizeTags(payload.tags),
    readTime: calculateReadTime(payload.content || ""),
  };

  await setDoc(blogRef, blog);
  return { data: { data: blog } };
};

const updateBlog = async (id, payload = {}, imageFile) => {
  const docRef = doc(db, COLLECTIONS.blogs, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return { data: null };
  }

  const current = snapshot.data();
  const now = new Date();
  const featuredImageUrl = imageFile
    ? (await uploadImage(imageFile)).data.url
    : payload.featuredImage !== undefined
    ? payload.featuredImage
    : current.featuredImage;

  const updates = {
    ...payload,
    updatedAt: now,
    featuredImage: featuredImageUrl,
    tags: normalizeTags(payload.tags !== undefined ? payload.tags : current.tags),
    readTime: payload.content ? calculateReadTime(payload.content) : current.readTime,
  };

  if (payload.title && payload.title !== current.title) {
    updates.slug = await getUniqueSlug(payload.title, id);
  }

  if (payload.status === "published" && !current.publishedAt) {
    updates.publishedAt = now;
  }

  await updateDoc(docRef, updates);
  return { data: { data: { ...current, ...updates, id, _id: id } } };
};

const deleteBlog = async (id) => {
  await deleteDoc(doc(db, COLLECTIONS.blogs, id));
  return { data: { success: true } };
};

const bulkDeleteBlogs = async (ids = []) => {
  await Promise.all(ids.map((id) => deleteDoc(doc(db, COLLECTIONS.blogs, id))));
  return { data: { success: true, message: `${ids.length} blog(s) deleted successfully` } };
};

const subscribeNewsletter = async (email) => {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedEmail) {
    throw new Error("Email is required");
  }

  await addDoc(collection(db, COLLECTIONS.newsletter), {
    email: normalizedEmail,
    createdAt: new Date(),
  });

  return { data: { success: true, message: "Subscribed successfully" } };
};

const newsletterAPI = {
  subscribe: subscribeNewsletter,
};

const adminBlogAPI = {
  getAll: getAdminBlogs,
  getById: getAdminBlogById,
  create: createBlog,
  update: updateBlog,
  delete: deleteBlog,
  bulkDelete: bulkDeleteBlogs,
  uploadImage,
};

const api = {
  auth: authAPI,
  blogAPI: {
    getAll: getAllBlogs,
    getBySlug: getBlogBySlug,
  },
  adminBlogAPI,
  newsletterAPI,
  resolveImageUrl,
};

export default api;
export { authAPI, blogAPI, adminBlogAPI, newsletterAPI, resolveImageUrl };
