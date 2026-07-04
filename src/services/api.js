import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Attach admin JWT token (if present) to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("rcii_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-logout on 401 from protected admin endpoints
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith("/admin")) {
      localStorage.removeItem("rcii_admin_token");
      localStorage.removeItem("rcii_admin_user");
      if (window.location.pathname !== "/admin/login") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

// Resolve a relative image path (e.g. /uploads/blog-123.png) into a full backend URL
export const resolveImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const origin = API_URL.replace(/\/api\/?$/, "");
  return `${origin}${path}`;
};

// ---------------- Public blog endpoints ----------------
export const blogAPI = {
  getAll: (params = {}) => api.get("/blogs", { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
};

// ---------------- Admin auth ----------------
export const authAPI = {
  login: (email, password) => api.post("/admin/login", { email, password }),
  me: () => api.get("/admin/me"),
};

// ---------------- Admin blog management ----------------
export const adminBlogAPI = {
  getAll: (params = {}) => api.get("/blogs/admin/all", { params }),
  getById: (id) => api.get(`/blogs/admin/${id}`),
  create: (formData) =>
    api.post("/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  update: (id, formData) =>
    api.put(`/blogs/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  delete: (id) => api.delete(`/blogs/${id}`),
  bulkDelete: (ids) => api.post("/blogs/bulk-delete", { ids }),
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append("image", file);
    return api.post("/blogs/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default api;
