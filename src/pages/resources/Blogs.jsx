import React, { useEffect, useState, useCallback } from "react";
import {
  Search,
  Bell,
  Grid2X2,
  FileSearch,
  GraduationCap,
  Lightbulb,
  MonitorPlay,
  LockKeyhole,
  Users,
  ArrowRight,
  Send,
  UserRound,
  Globe2,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import blogHero from "../../assets/research-insights-blog-banner.webp";
import b1 from "../../assets/research-funding-blog-3.webp";
import b2 from "../../assets/research-funding-blog-3.webp";
import b3 from "../../assets/research-funding-blog-3.webp";
import b4 from "../../assets/research-funding-blog-3.webp";
import b5 from "../../assets/research-funding-blog-3.webp";
import b6 from "../../assets/research-funding-blog-3.webp";
import blogCta from "../../assets/research-blog-featured-image.webp";
import { blogAPI, resolveImageUrl } from "../../services/api";

// Local fallback images cycle through while a blog has no featuredImage yet,
// or while the API request is still in flight.
const fallbackImages = [b1, b2, b3, b4, b5, b6];

// Demo posts shown as a graceful fallback while the API request is in
// flight, or if the backend has no published blogs yet.
const demoPosts = [
  {
    img: b1,
    tag: "Research & Publishing",
    title: "How to Get Your Research Published in High-Impact Journals",
    date: "May 10, 2024",
    author: "Dr. Emily Carter",
    role: "Editorial Director",
    slug: null,
  },
  {
    img: b2,
    tag: "Innovation & IP",
    title: "From Idea to Impact: Protecting Your Innovation with Patents",
    date: "May 07, 2024",
    author: "Mr. Arvind Nair",
    role: "IP Consultant",
    slug: null,
  },
  {
    img: b3,
    tag: "Technology in Research",
    title: "AI Tools Transforming Research and Publishing",
    date: "May 03, 2024",
    author: "Prof. David Lee",
    role: "Research Strategist",
    slug: null,
  },
  {
    img: b4,
    tag: "Open Science",
    title: "The Future of Open Access: Trends and Opportunities",
    date: "Apr 29, 2024",
    author: "Dr. Priya Menon",
    role: "Open Science Advocate",
    slug: null,
  },
  {
    img: b5,
    tag: "Academic Excellence",
    title: "Building a Strong Research Culture in Academic Institutions",
    date: "Apr 25, 2024",
    author: "Prof. Laura Mitchell",
    role: "Higher Education Expert",
    slug: null,
  },
  {
    img: b6,
    tag: "Impact & Society",
    title: "Measuring Research Impact Beyond Citations",
    date: "Apr 22, 2024",
    author: "Dr. Rahul Verma",
    role: "Research Impact Analyst",
    slug: null,
  },
];

function Blogs() {
  const [posts, setPosts] = useState(demoPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const mapBlogToCard = (blog, index) => ({
    img: blog.featuredImage
      ? resolveImageUrl(blog.featuredImage)
      : fallbackImages[index % fallbackImages.length],
    tag: blog.category,
    title: blog.title,
    excerpt: blog.shortDescription,
    date: blog.publishedAt
      ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "",
    author: blog.author,
    role: blog.authorRole,
    slug: blog.slug,
  });

  const fetchPosts = useCallback(
    async (pageNum, search, append = false) => {
      setLoading(true);
      try {
        const res = await blogAPI.getAll({ page: pageNum, limit: 6, search: search || undefined });
        const mapped = res.data.data.map(mapBlogToCard);
        setHasMore(res.data.pagination.page < res.data.pagination.pages);
        if (mapped.length === 0 && !append) {
          setPosts(demoPosts);
        } else {
          setPosts((prev) => (append ? [...prev, ...mapped] : mapped));
        }
      } catch (error) {
        if (!append) setPosts(demoPosts);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchPosts(1, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      fetchPosts(1, searchTerm);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, searchTerm, true);
  };

  return (
    <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
      {/* HERO */}

   <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
       {/* Background image only after 768px */}
       <div
         className=" absolute inset-0 bg-cover  bg-no-repeat"
         style={{
           backgroundImage: `url(${blogHero})`,
         }}
       />
     
       {/* Mobile soft background */}
       <div className=" absolute" />
     
       {/* Optional left readable overlay */}
       <div className="" />
     
       <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14 h-full">
         <div className=" pt-6 sm:pt-8 lg:pt-10 pb-8">
           <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
             <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
               Home
             </Link>
     
             <span className="text-gray-400">›</span>
     
             <Link to="/resources" className="text-[#6366F1] hover:text-[#4F46E5] transition">
               Resources
             </Link>
     
             <span className="text-gray-400">›</span>
     
             <span className="text-gray-500">Blogs</span>
           </div>
       <p className="text-[20px] font-bold text-[#071044]">
              RCII Blogs
            </p>
         <h1 className="mt-2 text-[30px] sm:text-[34px] lg:text-[38px] leading-[1.2] font-bold text-[#07113F]">
  <span className="block">
    Insights That{" "}
    <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
      Inspire.
    </span>
  </span>

  <span className="block mt-1">
    Knowledge That{" "}
    <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
      Drives Impact.
    </span>
  </span>
</h1>
     
           <p className="text-[13px] sm:text-[14px] font-semibold text-[#2f3745] leading-[1.9] sm:mt-6 mt-3 max-w-[420px]">
               Stay informed with expert perspectives, industry trends, and
              practical tips on research, publishing, innovation, and impact.
           </p>
        <div className="mt-6 flex max-w-[450px] flex-col gap-3 sm:flex-row">
              <div className="flex h-[44px] flex-1 items-center rounded-[6px] border border-[#dce1f1] bg-white px-4 shadow-[0_8px_22px_rgba(30,40,90,0.06)]">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search blogs by topic, keyword or author..."
                  className="w-full bg-transparent text-[12px] font-semibold outline-none placeholder:text-[#8a92aa]"
                />
                <Search size={17} className="text-[#444251]" />
              </div>

            
            </div>

              <button className="group h-[44px] mt-5 rounded-[6px] border border-[#563BFF] bg-white px-5 text-[12px] font-bold text-[#321cff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4637c5] hover:text-white">
                Subscribe to Blog Updates
                <Bell size={14} className="ml-2 inline" />
              </button>
          
         </div>
       </div>
     </section>

    

      <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-8 lg:px-14">
      <SectionTitle title="Explore Blogs by Category" />

<div className="rounded-[16px] bg-white px-4 py-3 shadow-[0_10px_35px_rgba(30,40,90,0.07)]">
  <div className="grid grid-cols-7 gap-4 max-lg:flex max-lg:overflow-x-auto max-lg:pb-2">
    <Category icon={Grid2X2} title="All Blogs" active />
    <Category icon={FileSearch} title="Research & Publishing" bg="#f1edff" color="#563BFF" />
    <Category icon={GraduationCap} title="Academic Excellence" bg="#eaf8ef" color="#25a85c" />
    <Category icon={Lightbulb} title="Innovation & IP" bg="#fff0e7" color="#ff6b19" />
    <Category icon={MonitorPlay} title="Technology in Research" bg="#eaf4ff" color="#0f83d8" />
    <Category icon={LockKeyhole} title="Open Science" bg="#f1edff" color="#563BFF" />
    <Category icon={Users} title="Impact & Society" bg="#eaf8ef" color="#25a85c" />
  </div>
</div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_310px]">
          {/* LEFT */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[20px] font-bold">Latest Blog Posts</h2>
              <Link to="/how-to-get-blog" className="group text-[12px] font-bold text-[#321cff]">
                View All Blogs
                <ArrowRight
                  size={14}
                  className="ml-2 inline transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {posts.map((p, i) => (
                <BlogCard key={p.slug || p.title || i} {...p} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="group h-[38px] rounded-[6px] border border-[#563BFF] px-8 text-[12px] font-bold text-[#321cff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4436c0] hover:text-white disabled:opacity-60"
                >
                  {loading ? "Loading..." : "Load More Blogs"}
                  <ArrowRight
                    size={14}
                    className="ml-2 inline transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            )}
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-1">
            <SideBox title="Popular Posts">
              {[
                "Choosing the Right Journal: A Researcher’s Checklist",
                "ORCID ID: Why Every Researcher Needs One",
                "Data Management Best Practices for Researchers",
                "Predatory Journals: How to Identify and Avoid Them",
                "Grant Writing Tips to Secure Research Funding",
              ].map((item, i) => (
                <div key={item} className="flex gap-3 border-b border-[#edf0fa] py-3 last:border-b-0">
                  <img
                    src={[b1, b2, b3, b4, b5][i]}
                    alt=""
                    className="h-[58px] w-[70px] rounded-[6px] object-cover"
                  />
                  <div>
                    <h4 className="text-[11px] font-bold leading-[1.45]">
                      {item}
                    </h4>
                    <p className="mt-1 text-[10px] font-bold text-[#7a839e]">
                      Apr {30 - i}, 2024
                    </p>
                  </div>
                </div>
              ))}
            </SideBox>

            <SideBox title="Topics You’ll Love">
              <div className="flex flex-wrap gap-2">
                {[
                  "Scopus Indexing",
                  "Research Metrics",
                  "Peer Review",
                  "Research Integrity",
                  "Q1 & NIRF Ranking",
                  "AI in Research",
                  "Patent Filing",
                  "Open Access",
                  "Research Funding",
                  "Altmetrics",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-[4px] border border-[#563BFF] px-2 py-1 text-[9.5px] font-bold text-[#321cff] transition hover:bg-[#4436c0] hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* <button className="mt-4 text-[11px] font-bold text-[#321cff]">
                Explore All Topics <ArrowRight size={13} className="inline" />
              </button> */}
            </SideBox>

            <SideBox title="Subscribe to Updates">
              <p className="text-[12px] font-bold leading-[1.7] text-[#3d4665]">
                Get the latest blog posts and insights delivered to your inbox.
              </p>

              <div className="mt-4 flex gap-2">
                <input
                  placeholder="Enter your email address"
                  className="h-[38px] min-w-0 flex-1 rounded-[5px] border border-[#dce1f1] px-3 text-[11px] font-semibold outline-none"
                />
                <button className="h-[38px] rounded-[5px] bg-[#4436c0] px-4 text-[11px] font-bold text-white transition hover:bg-[#230fbf]">
                  Subscribe Now
                </button>
              </div>
            </SideBox>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-8 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,#07135f_0%,#0f1f9b_55%,#032cb7_100%)] px-5 py-6 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)] sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-5">
              <img src={blogCta} alt="" className="w-[120px]" />
              <div>
                <h3 className="text-[22px] font-bold">
                  Never Miss an Insight
                </h3>
                <p className="mt-2 max-w-[560px] text-[13px] font-semibold text-white/85">
                  Subscribe to our blog and get expert insights, trends, and
                  tips straight to your inbox.
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
              <input
                placeholder="Enter your email address"
                className="h-[46px] flex-1 rounded-[6px] border border-white/20 bg-white px-4 text-[12px] font-semibold text-[#071044] outline-none"
              />
              <button className="group h-[46px] rounded-[6px] bg-[#321cff] px-7 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#230fbf]">
                Subscribe to Blog
                <Send size={14} className="ml-2 inline transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* BOTTOM FEATURES */}
      <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-[10px] border border-[#edf0fa] bg-white shadow-[0_8px_24px_rgba(30,40,90,0.05)] sm:grid-cols-2 lg:grid-cols-4">
  <Feature
    icon={Users}
    bg="#f0edff"
    color="#563BFF"
    title="Expert Insights"
    text="Written by domain experts and researchers"
  />
  <Feature
    icon={Lightbulb}
    bg="#eaf8ef"
    color="#25a85c"
    title="Actionable Tips"
    text="Practical advice you can apply in your journey"
  />
  <Feature
    icon={Sparkles}
    bg="#eaf4ff"
    color="#2478e8"
    title="Latest Trends"
    text="Stay updated with emerging trends and innovations"
  />
  <Feature
    icon={Globe2}
    bg="#fff0e7"
    color="#ff6b19"
    title="Global Perspectives"
    text="Diverse viewpoints from around the world"
  />
</div>
      </div>
    </main>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="mb-5 text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071044]">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#321cff]" />
    </div>
  );
}

function Category({
  icon: Icon,
  title,
  active = false,
  bg = "#f1edff",
  color = "#563BFF",
}) {
  return (
    <button
      className={`
        group
        min-h-[80px]
        min-w-[130px]
        rounded-[10px]
        border
        bg-white
        px-2
        py-3
        text-center
        shadow-[0_8px_24px_rgba(30,40,90,0.06)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_18px_42px_rgba(30,40,90,0.12)]
        ${
          active
            ? "border-[#7b61ff] shadow-[0_10px_28px_rgba(86,59,255,0.12)]"
            : "border-[#e8ebf7]"
        }
      `}
    >
      <div
        className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: active ? "#ffffff" : bg }}
      >
        <Icon
          size={30}
          strokeWidth={2.2}
          style={{ color }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-3 text-[13px] font-bold leading-tight text-[#071044]">
        {title}
      </p>
    </button>
  );
}

function BlogCard({ img, tag, title, excerpt, date, author, role, slug }) {
  const CardWrapper = ({ children }) =>
    slug ? (
      <Link to={`/blog/${slug}`} className="block h-full">
        {children}
      </Link>
    ) : (
      <div className="h-full">{children}</div>
    );

  return (
    <article className="group overflow-hidden rounded-[9px] border border-[#e8ebf7] bg-white shadow-[0_8px_24px_rgba(30,40,90,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.13)]">
      <CardWrapper>
        <div className="relative h-[165px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-3 top-3 rounded-[4px] bg-white px-2 py-1 text-[9px] font-bold text-[#321cff]">
            {tag}
          </span>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold text-[#7a839e]">{date}</p>

          <h3 className="mt-2 min-h-[48px] text-[13px] font-bold leading-[1.45]">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-[11px] font-bold leading-[1.6] text-[#3d4665]">
            {excerpt ||
              "Practical steps to improve your manuscript and increase acceptance rates."}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f0edff]">
              <UserRound size={17} className="text-[#321cff]" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold">{author}</h4>
              <p className="text-[10px] font-bold text-[#7a839e]">{role}</p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </article>
  );
}

function SideBox({ title, children }) {
  return (
    <div className="rounded-[10px] border border-[#e8ebf7] bg-white p-5 shadow-[0_8px_24px_rgba(30,40,90,0.06)]">
      <h3 className="mb-3 text-[15px] font-bold">{title}</h3>
      {children}
    </div>
  );
}

function Feature({ icon: Icon, bg, color, title, text }) {
  return (
    <div className="group flex items-center gap-4 border-b border-[#e5e8f4] px-5 py-5 transition-all duration-300 hover:bg-[#fbfaff] sm:border-r lg:border-b-0 last:border-r-0">
      <div
        className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={22} strokeWidth={2.2} style={{ color }} />
      </div>

      <div>
        <h4 className="text-[12px] font-extrabold text-[#071044]">
          {title}
        </h4>
        <p className="mt-1 max-w-[190px] text-[11px] font-bold leading-[1.55] text-[#303b5d]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Blogs;