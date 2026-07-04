import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Pencil, CalendarDays, Clock } from "lucide-react";
import toast from "react-hot-toast";
import AdminLayout from "../layout/AdminLayout";
import { adminBlogAPI, resolveImageUrl } from "../../services/api";

function AdminBlogPreview() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await adminBlogAPI.getById(id);
        setBlog(res.data.data);
      } catch (error) {
        toast.error("Failed to load blog");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/blogs"
            className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#e1e5f2] hover:border-[#321cff] hover:text-[#321cff]"
          >
            <ArrowLeft size={16} />
          </Link>
          <h1 className="text-[20px] font-bold text-[#071044]">Preview Blog</h1>
        </div>
        {blog && (
          <Link
            to={`/admin/blogs/edit/${blog._id}`}
            className="flex h-9 items-center gap-2 rounded-[6px] bg-[#321cff] px-4 text-[12px] font-bold text-white hover:bg-[#230fbf]"
          >
            <Pencil size={14} /> Edit
          </Link>
        )}
      </div>

      {loading ? (
        <p className="text-[13px] font-semibold text-[#7a839e]">Loading preview...</p>
      ) : !blog ? (
        <p className="text-[13px] font-semibold text-[#7a839e]">Blog not found.</p>
      ) : (
        <article className="mx-auto max-w-[820px] rounded-[14px] border border-[#e8ebf7] bg-white p-6 sm:p-10">
          <span className="rounded-[4px] bg-white border border-blue-500 px-3 py-1.5 text-[10px] font-bold uppercase text-[#321cff]">
            {blog.category}
          </span>

          <h1 className="mt-4 text-[26px] font-bold leading-[1.2] text-[#071044] sm:text-[32px]">
            {blog.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-5 text-[11px] font-bold text-[#303b5d]">
            <span className="flex items-center gap-2">
              <CalendarDays size={14} className="text-[#321cff]" />
              {blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Not published yet"}
            </span>
            {blog.readTime && (
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-[#321cff]" />
                {blog.readTime}
              </span>
            )}
            <span>By {blog.author}</span>
          </div>

          {blog.featuredImage && (
            <img
              src={resolveImageUrl(blog.featuredImage)}
              alt={blog.title}
              className="mt-6 h-[280px] w-full rounded-[10px] object-cover"
            />
          )}

          <div
            className="prose prose-sm mt-6 max-w-none text-[13.5px] leading-[1.9] text-[#303b5d]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[#edf0fa] pt-5">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] border border-[#563BFF] px-3 py-1 text-[11px] font-bold text-[#321cff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      )}
    </AdminLayout>
  );
}

export default AdminBlogPreview;
