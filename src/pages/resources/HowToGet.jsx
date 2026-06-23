import React from "react";
import {
  Linkedin,
  Twitter,
  Facebook,
  Link as LinkIcon,
  CalendarDays,
  Clock,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

import articleImg from "../../assets/blog8.png";
import { Link } from "react-router-dom";
import related1 from "../../assets/blog6.png";
import related2 from "../../assets/blog4.png";
import related3 from "../../assets/blog2.png";
import updateImg from "../../assets/blog7.png";

function HowToGet() {
  return (
    <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-8 lg:px-14">
        {/* Breadcrumb */}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
                     <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                       Home
                     </Link>
             
                     <span className="text-gray-400">›</span>
             
                     <Link to="/resources" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                       Resources
                     </Link>
             
                     <span className="text-gray-400">›</span>
                 <Link to="/blogs" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                       Blogs
                     </Link>
                    
                     <span className="text-gray-400">›</span>
                     <span className="text-gray-400">How to Get Your Research Published in High-Impact Journals</span>
                   </div>


        <div className="grid gap-7  lg:grid-cols-[1fr_330px]">
          {/* LEFT ARTICLE */}
          <article className=" mt-2 ">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-[4px] bg-white border border-blue-500 px-3 py-1.5 text-[10px] font-bold uppercase text-[#321cff]">
                Research & Publishing
              </span>

              <div className="flex items-center gap-3 text-[11px] font-bold text-[#071044]">
                <span>Share:</span>
                <SocialSmall icon={Linkedin} bg="#0a66c2" />
                <SocialSmall icon={Twitter} bg="#1da1f2" />
                <SocialSmall icon={Facebook} bg="#1877f2" />
                <SocialSmall icon={LinkIcon} bg="#f0edff" color="#321cff" />
              </div>
            </div>

            <h1 className="max-w-[850px] text-[30px] font-bold leading-[1.15] tracking-[-0.8px] sm:text-[36px]">
              How to Get Your Research
              <br />
              Published in High-Impact Journals
            </h1>

            <p className="mt-3 max-w-[540px] text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
              Publishing in high-impact journals can significantly increase the
              visibility, credibility, and impact of your research. Here’s a
              step-by-step guide to help you navigate the journey successfully.
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={related1}
                  alt="Dr. Emily Carter"
                  className="h-[48px] w-[48px] rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[12px] font-bold">
                    Dr. Emily Carter
                  </h4>
                  <p className="text-[11px] font-bold text-[#64708f]">
                    Editorial Director, RCI
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold text-[#303b5d]">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-[#321cff]" />
                  May 10, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-[#321cff]" />8 min read
                </span>
              </div>
            </div>

            <img
              src={articleImg}
              alt="Research publishing"
              className="mt-6 h-[260px] w-full rounded-[8px] object-cover sm:h-[280px]"
            />

          <div className="mt-4 space-y-3">
  <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
    Publishing in a high-impact journal is a goal for many researchers—and
    for good reason. It enhances your academic reputation, increases
    citations, and ensures your work reaches the right audience. However,
    the process can be competitive and challenging.
  </p>

  <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
    Here are practical steps to improve your chances of publication
    success.
  </p>

  {/* SECTION 1 */}
  <div className="pt-1">
    <h2 className="mb-2 text-[18px] font-bold text-[#071044]">
      1. Choose the Right Journal
    </h2>

    <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
      Selecting the right journal is the first and most crucial step.
    </p>

    <ul className="mt-1 ml-5 list-disc space-y-1 text-[12.5px] font-semibold leading-[1.7] text-[#303b5d]">
      <li>Align the journal scope with your research topic.</li>
      <li>
        Consider the journal’s impact factor, audience, and indexing.
      </li>
      <li>
        Read the journal’s aims, scope, and recent articles.
      </li>
    </ul>
  </div>

  {/* SECTION 2 */}
  <div className="pt-1">
    <h2 className="mb-1 text-[18px] font-bold text-[#071044]">
      2. Prepare a Strong Manuscript
    </h2>

    <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
      A well-structured, clear, and impactful manuscript is key.
    </p>

    <ul className="mt-2 ml-5 list-disc space-y-1 text-[12.5px] font-semibold leading-[1.7] text-[#303b5d]">
      <li>
        Follow the journal’s author guidelines meticulously.
      </li>
      <li>
        Ensure your research question, methodology, and results are
        presented clearly.
      </li>
      <li>
        Use high-quality figures and tables to support your findings.
      </li>
    </ul>
  </div>

  {/* SECTION 3 */}
  <div className="pt-1">
    <h2 className="mb-1 text-[18px] font-bold text-[#071044]">
      3. Write a Compelling Cover Letter
    </h2>

    <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
      Your cover letter should be concise and persuasive.
    </p>

    <ul className="mt-2 ml-5 list-disc space-y-1 text-[12.5px] font-semibold leading-[1.7] text-[#303b5d]">
      <li>
        Highlight the significance and originality of your research.
      </li>
      <li>
        Explain why your manuscript is a good fit for the journal.
      </li>
      <li>Be professional and to the point.</li>
    </ul>
  </div>

  {/* SECTION 4 */}
  <div className="pt-1">
    <h2 className="mb-1 text-[18px] font-bold text-[#071044]">
      4. Address Reviewer Comments Professionally
    </h2>

    <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
      Peer review is a critical part of the process.
    </p>

    <ul className="mt-2 ml-5 list-disc space-y-1 text-[12.5px] font-semibold leading-[1.7] text-[#303b5d]">
      <li>
        Respond to each comment respectfully and thoroughly.
      </li>
      <li>
        Make necessary revisions and highlight changes in your manuscript.
      </li>
      <li>
        If you disagree with a comment, provide a clear and
        evidence-based explanation.
      </li>
    </ul>
  </div>

  {/* SECTION 5 */}
  <div className="pt-1">
    <h2 className="mb-1 text-[18px] font-bold text-[#071044]">
      5. Stay Persistent and Keep Improving
    </h2>

    <p className="text-[13px] font-semibold leading-[1.8] text-[#303b5d]">
      Rejection is part of the journey—don’t be discouraged.
    </p>

    <ul className="mt-2 ml-5 list-disc space-y-1 text-[12.5px] font-semibold leading-[1.7] text-[#303b5d]">
      <li>
        Learn from feedback and improve your manuscript.
      </li>
      <li>
        Consider alternative journals if needed.
      </li>
      <li>
        Keep refining your research and writing skills.
      </li>
    </ul>
  </div>
</div>

            {/* <div className="mt-4 rounded-[8px] bg-[#f2efff] p-5">
              <p className="text-[14px] font-bold leading-[1.8] text-[#071044]">
                “Great research deserves to be seen. With the right approach,
                persistence, and continuous improvement, you can successfully
                publish in high-impact journals and make a lasting impact in your
                field.”
              </p>
            </div> */}

            {/* <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-y border-[#edf0fa] py-4">
              <div className="flex items-center gap-3 text-[12px] font-bold">
                <span>Was this article helpful?</span>
                <button className="rounded-[6px] border border-[#e1e5f2] px-3 py-2 hover:border-[#321cff] hover:text-[#321cff]">
                  <ThumbsUp size={14} className="mr-1 inline" /> Yes (24)
                </button>
                <button className="rounded-[6px] border border-[#e1e5f2] px-3 py-2 hover:border-[#321cff] hover:text-[#321cff]">
                  <MessageCircle size={14} className="mr-1 inline" /> No (3)
                </button>
              </div>

              <div className="flex items-center gap-3 text-[12px] font-bold">
                <span>Share this article:</span>
                <SocialSmall icon={Linkedin} bg="#0a66c2" />
                <SocialSmall icon={Twitter} bg="#1da1f2" />
                <SocialSmall icon={Facebook} bg="#1877f2" />
                <SocialSmall icon={LinkIcon} bg="#f0edff" color="#321cff" />
              </div>
            </div> */}

            <div className="mt-1 flex gap-4 rounded-[10px] bg-[#fbfcff] p-3">
              <img
                src={related1}
                alt=""
                className="h-[70px] w-[70px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[14px] font-bold">Dr. Emily Carter</h3>
                <p className="text-[12px] font-bold text-[#64708f]">
                  Editorial Director, RCI
                </p>
                <p className="mt-2 max-w-[680px] text-[12px] font-semibold leading-[1.7] text-[#303b5d]">
                  Dr. Emily Carter has over 15 years of experience in academic
                  publishing and research communication. She helps researchers
                  and institutions enhance the quality and impact of their
                  scholarly work.
                </p>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            <SideBox title="About the Author">
              <div className="flex gap-3">
                <img
                  src={related1}
                  alt=""
                  className="h-[58px] w-[58px] rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[13px] font-bold">Dr. Emily Carter</h4>
                  <p className="text-[11px] font-bold text-[#64708f]">
                    Editorial Director, RCI
                  </p>
                  <p className="mt-2 text-[12px] font-bold leading-[1.6] text-[#303b5d]">
                    Expert in academic publishing and research communication
                    with 15+ years of experience.
                  </p>
                </div>
              </div>

              {/* <button className="group mt-5 h-[38px] rounded-[6px] border border-[#563BFF] px-5 text-[12px] font-bold text-[#321cff] transition-all hover:bg-[#33279c] hover:text-white">
                View All Posts
                <ArrowRight size={14} className="ml-2 inline" />
              </button> */}
            </SideBox>

            <SideBox title="Table of Contents">
              {[
                "Choose the Right Journal",
                "Prepare a Strong Manuscript",
                "Write a Compelling Cover Letter",
                "Address Reviewer Comments Professionally",
                "Stay Persistent and Keep Improving",
              ].map((t, i) => (
                <p
                  key={t}
                  className="mb-3 text-[13px] font-bold text-[#303b5d]"
                >
                  <span className="text-[#321cff]">{i + 1}.</span> {t}
                </p>
              ))}
            </SideBox>

            <SideBox title="Related Articles">
              {[related1, related2, related3].map((img, i) => (
                <div
                  key={i}
                  className="mb-5 flex gap-3 border-b border-[#edf0fa] pb-4 last:mb-0 last:border-b-0"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-[69px] w-[88px] rounded-[6px] object-cover"
                  />
                  <div>
                    <h4 className="text-[12px] font-bold leading-[1.45]">
                      {
                        [
                          "Choosing the Right Journal: A Researcher’s Checklist",
                          "Understanding Journal Impact Factors",
                          "Common Reasons for Manuscript Rejection",
                        ][i]
                      }
                    </h4>
                    <p className="mt-1 text-[12px] font-bold text-[#7a839e]">
                      Apr {28 - i}, 2024 • {6 + i} min read
                    </p>
                  </div>
                </div>
              ))}

              {/* <button className="mt-2 text-[12px] font-bold text-[#321cff]">
                View All Articles <ArrowRight size={13} className="inline" />
              </button> */}
            </SideBox>

            <SideBox title="Popular Topics">
              <div className="flex flex-wrap gap-2">
                {[
                  "Research Publishing",
                  "Academic Writing",
                  "Peer Review",
                  "Open Access",
                  "Research Impact",
                  "Journal Selection",
                  "Manuscript Preparation",
                  "Publication Ethics",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-[4px] border border-[#563BFF] px-3 py-2 text-[11px] font-bold text-[#321cff] transition hover:bg-[#3024a2] hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* <button className="mt-6 text-[12px] font-bold text-[#302f3e]">
                Explore All Topics <ArrowRight size={13} className="inline" />
              </button> */}
            </SideBox>

            <div className="rounded-[12px] bg-[#07135f] p-7 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)]">
              <img src={updateImg} alt="" className="mb-4 w-[92px] h-[70px]" />
              <h3 className="text-[22px] font-bold">Stay Updated</h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-white/85">
                Subscribe to get the latest insights, tips, and resources
                delivered to your inbox.
              </p>

              <input
                placeholder="Enter your email address"
                className="mt-6 h-[46px] w-full rounded-[6px] border border-white/20 bg-white px-4 text-[12px] font-semibold text-[#071044] outline-none"
              />

              <button className="mt-4 h-[46px] w-full rounded-[6px] bg-[#321cff] text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#230fbf]">
                Subscribe
              </button>

              <p className="mt-4 text-[11px] font-medium leading-[1.6] text-white/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function SideBox({ title, children }) {
  return (
    <div className="rounded-[12px] border border-[#e8ebf7] bg-white p-5 shadow-[0_10px_32px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(30,40,90,0.1)]">
      <h3 className="mb-5 text-[18px] font-bold text-[#071044]">
        {title}
      </h3>
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

export default HowToGet;