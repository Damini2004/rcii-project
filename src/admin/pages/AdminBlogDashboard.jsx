import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ImageOff,
} from "lucide-react";
import AdminLayout from "../layout/AdminLayout";
import { adminBlogAPI, resolveImageUrl } from "../../services/api";

function StatusBadge({ status }) {
  const isPublished = status === "published";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${
        isPublished ? "bg-[#eaf8ef] text-[#25a85c]" : "bg-[#fff4e5] text-[#c8850a]"
      }`}
    >
      {status}
    </span>
  );
}

function AdminBlogDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ pages: 1, total: 0 });
  const [selected, setSelected] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null); // single blog or "bulk"

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminBlogAPI.getAll({
        search: search || undefined,
        status: statusFilter,
        sortBy,
        sortDir,
        page,
        limit: 10,
      });
      setBlogs(res.data.data);
      setPagination(res.data.pagination);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, sortBy, sortDir, page]);

  useEffect(() => {
    const debounce = setTimeout(fetchBlogs, 300);
    return () => clearTimeout(debounce);
  }, [fetchBlogs]);

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === blogs.length) {
      setSelected([]);
    } else {
      setSelected(blogs.map((b) => b._id));
    }
  };

  const toggleSelectOne = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const confirmDelete = async () => {
    try {
      if (deleteTarget === "bulk") {
        await adminBlogAPI.bulkDelete(selected);
        toast.success(`${selected.length} blog(s) deleted`);
        setSelected([]);
      } else {
        await adminBlogAPI.delete(deleteTarget._id);
        toast.success("Blog deleted");
      }
      setDeleteTarget(null);
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-[#071044]">Blog Dashboard</h1>
          <p className="text-[12px] font-semibold text-[#7a839e]">
            {pagination.total} total blog{pagination.total === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="flex h-[42px] items-center gap-2 rounded-[6px] bg-[#321cff] px-5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#230fbf]"
        >
          <Plus size={16} /> Add Blog
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex h-[42px] min-w-[240px] flex-1 items-center rounded-[6px] border border-[#dce1f1] bg-white px-3">
          <Search size={16} className="mr-2 text-[#8a92aa]" />
          <input
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            placeholder="Search by title..."
            className="w-full bg-transparent text-[12px] font-semibold outline-none placeholder:text-[#8a92aa]"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => {
            setPage(1);
            setStatusFilter(e.target.value);
          }}
          className="h-[42px] rounded-[6px] border border-[#dce1f1] bg-white px-3 text-[12px] font-semibold text-[#303b5d] outline-none"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        {selected.length > 0 && (
          <button
            onClick={() => setDeleteTarget("bulk")}
            className="flex h-[42px] items-center gap-2 rounded-[6px] border border-red-300 bg-red-50 px-4 text-[12px] font-bold text-red-600 transition hover:bg-red-100"
          >
            <Trash2 size={14} /> Delete Selected ({selected.length})
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-[12px] border border-[#e8ebf7] bg-white shadow-[0_8px_24px_rgba(30,40,90,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="border-b border-[#e8ebf7] bg-[#fbfcff] text-[11px] font-bold uppercase text-[#7a839e]">
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={blogs.length > 0 && selected.length === blogs.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-4 py-3">Image</th>
                <th className="cursor-pointer px-4 py-3" onClick={() => toggleSort("title")}>
                  <span className="flex items-center gap-1">
                    Title <ArrowUpDown size={12} />
                  </span>
                </th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="cursor-pointer px-4 py-3" onClick={() => toggleSort("createdAt")}>
                  <span className="flex items-center gap-1">
                    Created <ArrowUpDown size={12} />
                  </span>
                </th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-[13px] font-semibold text-[#7a839e]">
                    Loading blogs...
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-[13px] font-semibold text-[#7a839e]">
                    No blogs found.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-[#f0f2fa] text-[12.5px] font-semibold text-[#303b5d] last:border-b-0 hover:bg-[#fbfcff]">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(blog._id)}
                        onChange={() => toggleSelectOne(blog._id)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      {blog.featuredImage ? (
                        <img
                          src={resolveImageUrl(blog.featuredImage)}
                          alt={blog.title}
                          className="h-[42px] w-[60px] rounded-[6px] object-cover"
                        />
                      ) : (
                        <div className="flex h-[42px] w-[60px] items-center justify-center rounded-[6px] bg-[#f0edff] text-[#563BFF]">
                          <ImageOff size={16} />
                        </div>
                      )}
                    </td>
                    <td className="max-w-[260px] px-4 py-3">
                      <p className="line-clamp-2 text-[#071044]">{blog.title}</p>
                    </td>
                    <td className="px-4 py-3 text-[#7a839e]">{blog.slug}</td>
                    <td className="px-4 py-3">{blog.category}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={blog.status} />
                    </td>
                    <td className="px-4 py-3 text-[#7a839e]">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/admin/blogs/view/${blog._id}`}
                          title="Preview"
                          className="rounded-[6px] border border-[#e1e5f2] p-2 transition hover:border-[#321cff] hover:text-[#321cff]"
                        >
                          <Eye size={14} />
                        </Link>
                        <Link
                          to={`/admin/blogs/edit/${blog._id}`}
                          title="Edit"
                          className="rounded-[6px] border border-[#e1e5f2] p-2 transition hover:border-[#321cff] hover:text-[#321cff]"
                        >
                          <Pencil size={14} />
                        </Link>
                        <button
                          onClick={() => setDeleteTarget(blog)}
                          title="Delete"
                          className="rounded-[6px] border border-[#e1e5f2] p-2 text-red-500 transition hover:border-red-400 hover:bg-red-50"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#e8ebf7] px-4 py-3">
          <p className="text-[11px] font-semibold text-[#7a839e]">
            Page {pagination.page || page} of {pagination.pages || 1}
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#e1e5f2] disabled:opacity-40"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              disabled={page >= (pagination.pages || 1)}
              onClick={() => setPage((p) => Math.min(pagination.pages || 1, p + 1))}
              className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#e1e5f2] disabled:opacity-40"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[380px] rounded-[12px] bg-white p-6 shadow-xl">
            <h3 className="text-[16px] font-bold text-[#071044]">Confirm Deletion</h3>
            <p className="mt-2 text-[13px] font-semibold text-[#7a839e]">
              {deleteTarget === "bulk"
                ? `Are you sure you want to delete ${selected.length} selected blog(s)? This cannot be undone.`
                : `Are you sure you want to delete "${deleteTarget.title}"? This cannot be undone.`}
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="h-[38px] rounded-[6px] border border-[#e1e5f2] px-4 text-[12px] font-bold text-[#303b5d]"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="h-[38px] rounded-[6px] bg-red-500 px-4 text-[12px] font-bold text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminBlogDashboard;
