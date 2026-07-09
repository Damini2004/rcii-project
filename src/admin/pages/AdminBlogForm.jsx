import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { ArrowLeft, UploadCloud, X } from "lucide-react";
import AdminLayout from "../layout/AdminLayout";
import { adminBlogAPI, resolveImageUrl } from "../../services/api";

const CATEGORIES = [
  "Research & Publishing",
  "Innovation & IP",
  "Technology in Research",
  "Open Science",
  "Academic Excellence",
  "Impact & Society",
];

const slugPreview = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const emptyForm = {
  title: "",
  shortDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  content: "",
  category: CATEGORIES[0],
  tags: "",
  author: "",
  authorRole: "",
  metaTitle: "",
  metaDescription: "",
  status: "draft",
};

function AdminBlogForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        const res = await adminBlogAPI.getById(id);
        const blog = res.data.data;
        setForm({
          title: blog.title || "",
          shortDescription: blog.shortDescription || "",
          metaKeywords: blog.metaKeywords || "",
          canonicalUrl: blog.canonicalUrl || "",
          content: blog.content || "",
          category: blog.category || CATEGORIES[0],
          tags: (blog.tags || []).join(", "),
          author: blog.author || "",
          authorRole: blog.authorRole || "",
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
          status: blog.status || "draft",
        });
        if (blog.featuredImage) {
          setImagePreview(resolveImageUrl(blog.featuredImage));
        }
      } catch (error) {
        toast.error("Failed to load blog");
        navigate("/admin/blogs");
      } finally {
        setLoading(false);
      }
    })();
  }, [id, isEdit, navigate]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const isContentEmpty = (html) => {
    const text = html.replace(/<(.|\n)*?>/g, "").trim();
    return !text;
  };

const handleSubmit = async (e, statusOverride) => {
  e.preventDefault();

  console.log("Button clicked");
  console.log("FORM DATA:", form);

if (
  !form.title.trim() ||
  !form.shortDescription.trim() ||
  !form.content.replace(/<[^>]+>/g, "").trim() ||
  !form.author.trim()
) {
  toast.error("Please fill Title, Short Description, Content and Author");
  return;
}

  try {
    setSaving(true);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("shortDescription", form.shortDescription);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("tags", form.tags);
    formData.append("author", form.author);
    formData.append("authorRole", form.authorRole);
    formData.append("metaTitle", form.metaTitle);
    formData.append("metaDescription", form.metaDescription);
    formData.append("metaKeywords", form.metaKeywords);
    formData.append("canonicalUrl", form.canonicalUrl);
    formData.append("status", statusOverride || form.status);

    if (imageFile) {
      formData.append("featuredImage", imageFile);
    }

    console.log("Sending request...");

    if (isEdit) {
      await adminBlogAPI.update(id, formData);
    } else {
      await adminBlogAPI.create(formData);
    }

    toast.success("Blog saved successfully");
    navigate("/admin/blogs");
  } catch (error) {
    console.error("Save error:", error);
    toast.error(error.response?.data?.message || "Failed to save blog");
  } finally {
    setSaving(false);
  }
};

  if (loading) {
    return (
      <AdminLayout>
        <p className="text-[13px] font-semibold text-[#7a839e]">
          Loading blog...
        </p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6 flex items-center gap-3">
        <Link
          to="/admin/blogs"
          className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#e1e5f2] hover:border-[#321cff] hover:text-[#321cff]"
        >
          <ArrowLeft size={16} />
        </Link>
        <h1 className="text-[18px] font-[600] text-[#071044]">
          {isEdit ? "Edit Blog" : "Add New Blog"}
        </h1>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid gap-6 lg:grid-cols-[1fr_320px]"
      >
        {/* MAIN COLUMN */}
        <div className="space-y-5">
          <Field label="Title *">
            <input
              value={form.title}
              onChange={handleChange("title")}
              placeholder="Blog title"
              className="input"
            />
            {form.title && (
              <p className="mt-1.5 text-[11px] font-semibold text-[#7a839e]">
                Slug:{" "}
                <span className="text-[#321cff]">
                  {slugPreview(form.title)}
                </span>
              </p>
            )}
          </Field>

          <Field label="Short Description *">
            <textarea
              value={form.shortDescription}
              onChange={handleChange("shortDescription")}
              rows={3}
              placeholder="A brief summary shown on blog cards"
              className="input resize-none"
            />
          </Field>

          <Field label="Full Content *">
            <div className="rounded-[6px] border border-[#dce1f1] bg-white">
              <ReactQuill
                theme="snow"
                value={form.content}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, content: value }))
                }
                className="[&_.ql-container]:min-h-[260px]"
              />
            </div>
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Meta Title (SEO)">
              <input
                value={form.metaTitle}
                onChange={handleChange("metaTitle")}
                className="input"
              />
            </Field>
            <Field label="Meta Description (SEO)">
              <input
                value={form.metaDescription}
                onChange={handleChange("metaDescription")}
                className="input"
              />
            </Field>
            <Field label="Meta Keywords (SEO)">
              <input
                value={form.metaKeywords}
                onChange={handleChange("metaKeywords")}
                placeholder="clone journals, fake journal, verify ISSN"
                className="input"
              />
            </Field>

            <Field label="Canonical URL (SEO)">
              <input
                value={form.canonicalUrl}
                onChange={handleChange("canonicalUrl")}
                placeholder="https://researcherconnect.com/blog/blog-title"
                className="input"
              />
            </Field>
          </div>
        </div>

        {/* SIDEBAR COLUMN */}
        <div className="space-y-5">
          <div className="rounded-[12px] border border-[#e8ebf7] bg-white p-5">
            <h3 className="mb-4 text-[13px] font-bold text-[#071044]">
              Publish
            </h3>

            <Field label="Status">
              <select
                value={form.status}
                onChange={handleChange("status")}
                className="input"
              >
                <option value="draft">Draft</option>
                <option value="published">Publish</option>
              </select>
            </Field>

            <div className="mt-4 flex gap-2">
              <button
  type="button"
  disabled={saving}
  onClick={(e) => handleSubmit(e, form.status)}
  className="h-[40px] flex-1 rounded-[6px] bg-[#321cff] text-[12px] font-bold text-white transition hover:bg-[#230fbf] disabled:opacity-60"
>
  {saving ? "Saving..." : "Save"}
</button>

              <button
                type="button"
                disabled={saving}
                onClick={(e) => handleSubmit(e, "draft")}
                className="h-[40px] flex-1 rounded-[6px] border border-[#563BFF] text-[12px] font-bold text-[#321cff] transition hover:bg-[#f0edff] disabled:opacity-60"
              >
                Save Draft
              </button>

              <button
                type="button"
                disabled={saving}
                onClick={(e) => handleSubmit(e, "published")}
                className="h-[40px] flex-1 rounded-[6px] bg-[#321cff] text-[12px] font-bold text-white transition hover:bg-[#230fbf] disabled:opacity-60"
              >
                Publish
              </button>
            </div>
          </div>

          <div className="rounded-[12px] border border-[#e8ebf7] bg-white p-5">
            <h3 className="mb-4 text-[13px] font-bold text-[#071044]">
              Featured Image
            </h3>
            {imagePreview ? (
              <div className="relative mb-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-[140px] w-full rounded-[8px] object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setImageFile(null);
                  }}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <label className="mb-3 flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-[8px] border-2 border-dashed border-[#dce1f1] text-[#8a92aa] transition hover:border-[#563BFF]">
                <UploadCloud size={22} />
                <span className="mt-2 text-[11px] font-semibold">
                  Click to upload image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
            {imagePreview && (
              <label className="block cursor-pointer text-center text-[11px] font-bold text-[#321cff]">
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <div className="rounded-[12px] border border-[#e8ebf7] bg-white p-5">
            <h3 className="mb-4 text-[13px] font-bold text-[#071044]">
              Details
            </h3>

            <Field label="Category">
              <select
                value={form.category}
                onChange={handleChange("category")}
                className="input"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Tags (comma separated)">
              <input
                value={form.tags}
                onChange={handleChange("tags")}
                placeholder="Publication, Journals"
                className="input"
              />
            </Field>

            <Field label="Author *">
              <input
                value={form.author}
                onChange={handleChange("author")}
                className="input"
              />
            </Field>

            <Field label="Author Role">
              <input
                value={form.authorRole}
                onChange={handleChange("authorRole")}
                className="input"
              />
            </Field>
          </div>
        </div>
      </form>

      <style>{`
        .input {
          width: 100%;
          height: 42px;
          border-radius: 6px;
          border: 1px solid #dce1f1;
          padding: 0 12px;
          font-size: 12.5px;
          font-weight: 600;
          outline: none;
          background: white;
        }
        textarea.input { height: auto; padding: 10px 12px; }
      `}</style>
    </AdminLayout>
  );
}

function Field({ label, children }) {
  return (
    <div className="mb-4 last:mb-0">
      <label className="mb-1.5 block text-[12px] font-bold text-[#303b5d]">
        {label}
      </label>
      {children}
    </div>
  );
}

export default AdminBlogForm;
