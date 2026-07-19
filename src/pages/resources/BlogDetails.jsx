import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,
  CalendarDays,
  Clock,
  UserRound,
} from "lucide-react";
import { blogAPI, newsletterAPI, resolveImageUrl } from "../../services/api";
import updateImg from "../../assets/academic-career-blog-7.webp";
import toast from "react-hot-toast";

function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [email, setEmail] = useState("");
const [subscribing, setSubscribing] = useState(false);
  


  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    blogAPI
      .getBySlug(slug)
      .then((res) => {
        if (!isMounted) return;
        setBlog(res.data.data);
        setRelated(res.data.related || []);
      })
      .catch(() => {
        if (isMounted) setNotFound(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#fbfcff] pt-[70px] text-[#071044]">
        <p className="text-[14px] font-bold text-[#7a839e]">
          Loading article...
        </p>
      </main>
    );
  }

  if (notFound || !blog) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#fbfcff] pt-[70px] text-[#071044]">
        <p className="text-[16px] font-bold">Blog post not found.</p>
        <button
          onClick={() => navigate("/blogs")}
          className="h-[42px] rounded-[6px] bg-[#321cff] px-6 text-[12px] font-bold text-white hover:bg-[#230fbf]"
        >
          Back to Blogs
        </button>
      </main>
    );
  }

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const pageUrl =
    blog.canonicalUrl || `${window.location.origin}/blog/${blog.slug}`;
  const imageUrl = blog.featuredImage
    ? resolveImageUrl(blog.featuredImage)
    : "";
  const seoTitle = blog.metaTitle || blog.title;
  const seoDescription = blog.metaDescription || blog.shortDescription;
  const seoKeywords = blog.metaKeywords || blog.tags?.join(", ");

  const handleSubscribe = async () => {
      if (!email.trim()) {
        toast.error("Please enter your email address");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
  
      try {
        setSubscribing(true);
  
        await newsletterAPI.subscribe(email);
  
        toast.success("Subscribed successfully!");
        setEmail("");
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong.");
      } finally {
        setSubscribing(false);
      }
    };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      </Helmet>

      <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-8 lg:px-14">
          {/* Breadcrumb */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
            <Link
              to="/"
              className="text-[#6366F1] hover:text-[#4F46E5] transition"
            >
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <Link
              to="/resources"
              className="text-[#6366F1] hover:text-[#4F46E5] transition"
            >
              Resources
            </Link>
            <span className="text-gray-400">›</span>
            <Link
              to="/blogs"
              className="text-[#6366F1] hover:text-[#4F46E5] transition"
            >
              Blogs
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-400">{blog.title}</span>
          </div>

          <div className="grid gap-7 lg:grid-cols-[1fr_330px]">
            {/* LEFT ARTICLE */}
            <article className="mt-2">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-[4px] bg-white border border-blue-500 px-3 py-1.5 text-[10px] font-bold uppercase text-[#321cff]">
                  {blog.category}
                </span>

                <div className="flex items-center gap-3 text-[11px] font-bold text-[#071044]">
                  <span>Share:</span>
                  <SocialSmall icon={Linkedin} bg="#0a66c2" />
                  <SocialSmall icon={Twitter} bg="#1da1f2" />
                  <SocialSmall icon={Facebook} bg="#1877f2" />
                  <SocialSmall icon={LinkIcon} bg="#f0edff" color="#321cff" />
                </div>
              </div>

              <h1 className="max-w-[850px] text-[22px] font-[600] leading-[1.15] tracking-[-0.8px] sm:text-[26px]">
                {blog.title}
              </h1>

              <p className="mt-3 max-w-[640px] text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
                {blog.shortDescription}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#f0edff]">
                    <UserRound size={22} className="text-[#321cff]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold">{blog.author}</h4>
                    {blog.authorRole && (
                      <p className="text-[11px] font-bold text-[#64708f]">
                        {blog.authorRole}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold text-[#303b5d]">
                  {formattedDate && (
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#321cff]" />
                      {formattedDate}
                    </span>
                  )}
                  {blog.readTime && (
                    <span className="flex items-center gap-2">
                      <Clock size={14} className="text-[#321cff]" />
                      {blog.readTime}
                    </span>
                  )}
                </div>
              </div>

              {blog.featuredImage && (
                <img
                  src={resolveImageUrl(blog.featuredImage)}
                  alt={blog.title}
                  className="mt-6 h-[260px] w-full rounded-[8px] object-cover sm:h-[280px]"
                />
              )}

              <div
                className="prose prose-sm mt-4 max-w-none space-y-3 text-[13px] font-semibold leading-[1.8] text-[#303b5d] [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:text-[#071044] [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <div className="mt-6 flex gap-4 rounded-[10px] bg-[#fbfcff] p-3">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f0edff]">
                  <UserRound size={30} className="text-[#321cff]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold">{blog.author}</h3>
                  {blog.authorRole && (
                    <p className="text-[12px] font-bold text-[#64708f]">
                      {blog.authorRole}
                    </p>
                  )}
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <SideBox title="About the Author">
                <div className="flex items-center gap-4">
                  <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f0edff] border border-[#d9d4ff]">
                    <UserRound
                      size={26}
                      className="text-[#321cff]"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-[13px] font-bold text-[#071044]">
                      {blog.author}
                    </h4>

                    {blog.authorRole && (
                      <p className="mt-1 text-[11px] font-medium leading-5 text-[#64708f]">
                        {blog.authorRole}
                      </p>
                    )}
                  </div>
                </div>
              </SideBox>

              {related.length > 0 && (
                <SideBox title="Related Articles">
                  {related.map((r) => (
                    <Link
                      to={`/blog/${r.slug}`}
                      key={r.slug}
                      className="mb-5 flex gap-3 border-b border-[#edf0fa] pb-4 last:mb-0 last:border-b-0"
                    >
                      {r.featuredImage ? (
                        <img
                          src={resolveImageUrl(r.featuredImage)}
                          alt=""
                          className="h-[69px] w-[88px] rounded-[6px] object-cover"
                        />
                      ) : (
                        <div className="flex h-[69px] w-[88px] items-center justify-center rounded-[6px] bg-[#f0edff] text-[#563BFF]">
                          <UserRound size={20} />
                        </div>
                      )}
                      <div>
                        <h4 className="text-[12px] font-bold leading-[1.45]">
                          {r.title}
                        </h4>
                        <p className="mt-1 text-[12px] font-bold text-[#7a839e]">
                          {r.publishedAt &&
                            new Date(r.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          {r.readTime ? ` • ${r.readTime}` : ""}
                        </p>
                      </div>
                    </Link>
                  ))}
                </SideBox>
              )}

              {blog.tags?.length > 0 && (
                <SideBox title="Popular Topics">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-[4px] border border-[#563BFF] px-3 py-2 text-[11px] font-bold text-[#321cff] transition hover:bg-[#3024a2] hover:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SideBox>
              )}

              <div className="rounded-[12px] bg-[#07135f] p-7 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)]">
                <img
                  src={updateImg}
                  alt=""
                  className="mb-4 w-[92px] h-[70px]"
                />
                <h3 className="text-[22px] font-bold">Stay Updated</h3>
                <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-white/85">
                  Subscribe to get the latest insights, tips, and resources
                  delivered to your inbox.
                </p>

               <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubscribe();
                    }
                  }}
                  placeholder="Enter your email address"
                  className="h-[38px] min-w-0 flex-1 rounded-[5px] border border-[#dce1f1] px-3 text-[11px] font-semibold outline-none focus:border-[#4436c0]"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={subscribing}
                  className="h-[38px] rounded-[5px] bg-[#4436c0] px-4 text-[11px] font-bold text-white transition hover:bg-[#230fbf] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {subscribing ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>

                <p className="mt-4 text-[11px] font-medium leading-[1.6] text-white/70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

function SideBox({ title, children }) {
  return (
    <div className="rounded-[12px] border border-[#e8ebf7] bg-white p-5 shadow-[0_10px_32px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(30,40,90,0.1)]">
      <h3 className="mb-5 text-[18px] font-bold text-[#071044]">{title}</h3>
      {children}
    </div>
  );
}

function SocialSmall({ icon: Icon, bg, color = "#ffffff" }) {
  return (
    <button
      className="flex h-[28px] w-[28px] items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
      style={{ backgroundColor: bg }}
    >
      <Icon size={14} strokeWidth={2.3} style={{ color }} />
    </button>
  );
}

export default BlogDetails;
