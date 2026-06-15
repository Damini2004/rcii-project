import React from "react";
import {
  Compass,
  Bookmark,
  Edit3,
  ShieldCheck,
  BarChart3,
  Users,
  BookOpen,
  Lightbulb,
  Globe2,
  FileText,
  Search,
  Handshake,
  Mail,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/researcher.png";
import guideImg from "../../assets/resercher1.png";
import templateImg from "../../assets/researcher2.png";
import webinarImg from "../../assets/resercher3.png";
import blogImg from "../../assets/resercher4.png";

const supportCards = [
  {
    icon: FileText,
    title: "Author & Publication Services",
    items: [
      "Journal Recommendations",
      "Manuscript Editing",
      "Plagiarism Check",
      "Journal Formatting",
      "Publication Support",
    ],
  },
  {
    icon: Search,
    title: "Research Profiling & Visibility",
    items: [
      "Profile Creation",
      "LinkedIn Integration",
      "Google Scholar Optimization",
      "Research Impact",
      "Visibility Enhancement",
    ],
  },
  {
    icon: Handshake,
    title: "Grant & Funding Support",
    items: [
      "Grant Opportunity Search",
      "Proposal Writing",
      "Budgeting Support",
      "Submission Assistance",
      "Review & Feedback",
    ],
  },
  {
    icon: Lightbulb,
    title: "IP & Innovation Support",
    items: [
      "Patent Drafting & Filing",
      "Prior Art Search",
      "IP Strategy",
      "Technology Licensing",
      "Commercialization Support",
    ],
  },
  {
    icon: Users,
    title: "Career & Growth Resources",
    items: [
      "Workshops & Webinars",
      "Researcher Training",
      "Mentorship Programs",
      "Career Guidance",
      "Networking Opportunities",
    ],
  },
];
const featureCards = [
  {
    icon: Compass,
    title: "Discover",
    text: "Identify opportunities, grants and collaborations.",
    bg: "bg-[#F1EDFF]",
    iconColor: "text-[#5B3BFF]",
    titleColor: "text-[#5B3BFF]",
  },
  {
    icon: Bookmark,
    title: "Develop",
    text: "Access resources and expert guidance.",
    bg: "bg-[#EAF9FC]",
    iconColor: "text-[#0EA5C6]",
    titleColor: "text-[#0EA5C6]",
  },
  {
    icon: Edit3,
    title: "Publish",
    text: "Get support for quality publications.",
    bg: "bg-[#F1EDFF]",
    iconColor: "text-[#5B3BFF]",
    titleColor: "text-[#5B3BFF]",
  },
  {
    icon: ShieldCheck,
    title: "Protect",
    text: "Safeguard your ideas and intellectual property.",
    bg: "bg-[#EAF9FC]",
    iconColor: "text-[#0EA5C6]",
    titleColor: "text-[#0EA5C6]",
  },
  {
    icon: BarChart3,
    title: "Measure",
    text: "Track impact and advance your research career.",
    bg: "bg-[#F1EDFF]",
    iconColor: "text-[#5B3BFF]",
    titleColor: "text-[#5B3BFF]",
  },
];
const resourceCards = [
  {
    tag: "Guides",
    img: guideImg,
    title: "Research Guides",
    text: "Step-by-step guides on writing, publishing, funding and IP.",
    link: "View Guides",
  },
  {
    tag: "Templates",
    img: templateImg,
    title: "Templates & Tools",
    text: "Access templates, checklists and tools to streamline your work.",
    link: "Explore Tools",
  },
  {
    tag: "Webinars",
    img: webinarImg,
    title: "Webinars & Events",
    text: "Join expert-led sessions to learn and stay updated.",
    link: "View Calendar",
  },
  {
    tag: "Blog",
    img: blogImg,
    title: "Research Insights",
    text: "Read articles, tips and insights from research experts.",
    link: "Read Blog",
  },
];

export default function ResearchersPage() {
  return (
    <main className="bg-white min-h-screen pt-[70px] text-[#0B123F]">
      <section className="">
       
       {/* HERO */}
<section className="relative overflow-hidden bg-white ">
  {/* Full Hero Background Image */}
  <img
    src={heroImg}
    alt="Researchers"
    className="absolute w-full h-[400px] object-cover object-center"
  />

  {/* White Overlay for Left Content Area */}
  <div className="" />

  {/* Content */}
  <div className="relative z-20 max-w-[1500px] mx-auto px-8 lg:px-16 py-10">
    {/* Breadcrumb */}
   <div className="flex items-center gap-3 text-[14px] font-semibold sm:mb-8 mb-5">
  <Link
    to="/"
    className="text-[#6366F1] hover:text-[#4F46E5] transition"
  >
    Home
  </Link>

  <span className="text-gray-400">›</span>

  <span className="text-gray-500">
    Researchers
  </span>
</div>

    <div className="max-w-[470px]">
      <h1 className="lg:text-[46px] text-[34px] sm:text-[40px] leading-none font-bold text-[#07113F]">
        For{" "}
        <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
          Researchers
        </span>
      </h1>

      <p className="text-[#665fe8] text-[16px] font-extrabold mt-5">
        Empowering you at every step of your research journey
      </p>

      <p className="text-[14px] text-[#242a34] leading-[2] sm:mt-5 mt-3">
        RCI provides the tools, resources and expert support you need
        to discover opportunities, secure funding, publish with impact
        and protect your innovations.
      </p>

      <button className="sm:mt-6 mt-3 bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
        Explore Services
        <ArrowRight size={18} />
      </button>
    </div>
  </div>


</section>

      {/* Feature Row */}
<div className="relative z-20 -mt-1 max-w-[1420px] mx-auto px-6 lg:px-16">
 <div className="bg-white rounded-2xl border border-[#E8E7FF] shadow-[0_10px_35px_rgba(79,70,229,0.10)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 overflow-hidden">
  {featureCards.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
      className={`group relative p-7 text-center cursor-pointer
transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
hover:-translate-y-2 hover:bg-[#FAFAFF]
hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]
${
  index !== featureCards.length - 1
    ? "lg:border-r border-[#E5E7F4]"
    : ""
}`}
      >
        <div
          className={`mx-auto w-[58px] h-[58px] rounded-full ${item.bg} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110`}
        >
          <Icon
            size={26}
            strokeWidth={2.2}
            className={item.iconColor}
          />
        </div>

        <h3
          className={`text-[18px] font-bold ${item.titleColor}`}
        >
          {item.title}
        </h3>

        <p className="text-[13px] text-[#1E293B] leading-6 mt-3 max-w-[170px] mx-auto font-medium">
          {item.text}
        </p>
      </div>
    );
  })}
</div>
</div>

{/* Stats */}
<div className="relative z-20 mt-8 max-w-[1420px] mx-auto px-6 lg:px-16">
  <div className="rounded-2xl bg-gradient-to-r from-[#F6F3FF] via-white to-[#F6F3FF] border border-[#EEEAFE] shadow-[0_8px_28px_rgba(79,70,229,0.08)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
    {[
      [Users, "10K+", ["Researchers", "Empowered"]],
      [BookOpen, "300+", ["Journals", "Supported"]],
      [Lightbulb, "2K+", ["Patents", "Assisted"]],
      [Globe2, "25+", ["Countries", "Worldwide"]],
    ].map(([Icon, number, label], index) => (
      <div
        key={number}
        className={`group flex items-center justify-center gap-7 px-8 py-9 transition-all duration-500 ease-out hover:bg-white hover:-translate-y-1 ${
          index !== 3 ? "lg:border-r border-[#DEDDF2]" : ""
        }`}
      >
        <Icon
          size={46}
          strokeWidth={2.2}
          className="text-[#5B3BFF] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
        />

        <div>
          <h3 className="text-[24px] leading-none font-bold text-[#07113F]">
            {number}
          </h3>

          <p className="text-[13px] font-bold text-[#07113F] leading-5 mt-2">
            {label[0]} <br />
            {label[1]}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Support */}
        <section className="py-8 bg-white">
  <div className="mx-auto px-6 lg:px-16">
    <div className="text-center">
      <h2 className="sm:text-[28px] text-[22px] font-bold text-[#07113F] tracking-tight">
        How We Support You
      </h2>
      <div className="w-14 h-[3px] bg-[#06B6D4] mx-auto mt-3 rounded-full" />
    </div>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {supportCards.map((card, index) => {
        const Icon = card.icon;
        const isCyan = index === 1 || index === 3;

        return (
          <div
            key={card.title}
            className="group bg-white rounded-lg border border-[#E4E8F5] p-4 min-h-[220px]
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-3 hover:border-[#C7D2FE]
            hover:shadow-[0_25px_55px_rgba(79,70,229,0.14)]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shrink-0
                shadow-[0_10px_22px_rgba(79,70,229,0.22)]
                transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6
                ${isCyan ? "bg-[#0797A8]" : "bg-[#573BFF]"}`}
              >
                <Icon size={25} strokeWidth={2.4} />
              </div>

              <h3 className="text-[14px] font-bold text-[#07113F] leading-[1.25] pt-1">
                {card.title}
              </h3>
            </div>

            <ul className="mt-6 space-y-2">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-semibold text-[#1F2A44]"
                >
                  <Check
                    size={16}
                    strokeWidth={3}
                    className={isCyan ? "text-[#0797A8]" : "text-[#573BFF]"}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-4 inline-flex items-center gap-4 text-[14px] font-bold text-[#573BFF]
              transition-all duration-500 group-hover:gap-5 group-hover:text-[#4338CA]"
            >
              Learn More
              <ArrowRight size={17} strokeWidth={2.8} />
            </button>
          </div>
        );
      })}
    </div>
  </div>
</section>

        {/* Resources */}
      <section className="py-4 bg-white">
  <div className="max-w-[1420px] mx-auto px-6 lg:px-16">
    {/* Heading */}
    <div className="text-center mb-4">
      <h2 className="sm:text-[28px] text-[22px] font-bold text-[#07113F]">
        Resources for Your Success
      </h2>

      <div className="w-12 h-[3px] bg-[#06B6D4] mx-auto mt-3 rounded-full" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {resourceCards.map((card) => (
        <div
          key={card.title}
          className="
          group
          bg-white
          rounded-xl
          border border-[#E6EAF5]
          overflow-hidden
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-2
          hover:shadow-[0_25px_50px_rgba(79,70,229,0.14)]
          hover:border-[#C7D2FE]
        "
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={card.img}
              alt={card.title}
              className="
              w-full
              h-[135px]
              object-cover
              transition-all duration-700
              group-hover:scale-110
            "
            />

            <span
              className="
              absolute top-4 left-4
              bg-[#573BFF]
              text-white
              text-[12px]
              font-bold
              px-4 py-1.5
              rounded-lg
              shadow-lg
            "
            >
              {card.tag}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-[18px] font-bold text-[#07113F]">
              {card.title}
            </h3>

            <p className="mt-3 text-[14px] leading-7 text-[#475569]">
              {card.text}
            </p>

            <button
              className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-[14px]
              font-bold
              text-[#573BFF]
              transition-all duration-500
              group-hover:gap-3
            "
            >
              {card.link}

              <ArrowRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* CTA */}
    <section className="relative bg-white py-8 sm:py-10 lg:py-12 overflow-hidden">
  {/* Dots */}
  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[110px] h-[110px] bg-[radial-gradient(#8B5CF6_1.3px,transparent_1.3px)] [background-size:10px_10px] opacity-25" />
  <div className="hidden sm:block absolute right-0 bottom-2 w-[110px] h-[110px] bg-[radial-gradient(#8B5CF6_1.3px,transparent_1.3px)] [background-size:10px_10px] opacity-25" />

  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16">
    <div
      className="
      rounded-xl bg-gradient-to-r from-[#F3F1FF] via-white to-[#F3F1FF]
      border border-[#E8E7FF]
      px-5 py-6 sm:px-7 sm:py-7 lg:px-20
      flex flex-col md:flex-row
      items-center md:items-center justify-between
      gap-6 md:gap-8
      shadow-[0_10px_30px_rgba(79,70,229,0.08)]
      transition-all duration-700 ease-out
      hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(79,70,229,0.14)]
      "
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left">
        <div
          className="
          w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] lg:w-[70px] lg:h-[70px]
          rounded-full bg-[#573BFF] text-white
          flex items-center justify-center
          shadow-[0_12px_25px_rgba(79,70,229,0.35)]
          shrink-0
          transition-all duration-500 hover:scale-105
          "
        >
          <Mail size={30} className="sm:w-9 sm:h-9" strokeWidth={2.1} />
        </div>

        <div>
          <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-bold text-[#07113F] leading-tight">
            Let’s Accelerate Your Research Impact
          </h2>

          <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold text-[#1F2A44] mt-2 max-w-[680px] leading-6">
            Partner with RCII for expert support at every stage of your research journey.
          </p>
        </div>
      </div>

      <button
        className="
        w-full sm:w-auto justify-center
        bg-[#573BFF] text-white
        text-[13px] sm:text-[14px] lg:text-[15px]
        font-bold px-6 sm:px-8 py-3 rounded-lg
        shadow-[0_10px_22px_rgba(79,70,229,0.30)]
        inline-flex items-center gap-3 sm:gap-4
        transition-all duration-500
        hover:bg-[#4338CA] hover:gap-5 hover:-translate-y-1
        "
      >
        Connect With Us
        <ArrowRight size={17} />
      </button>
    </div>
  </div>
</section>

      </section>
    </main>
  );
}