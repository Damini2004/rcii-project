import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  FileText,
  BadgeDollarSign,
  Users,
  Clock,
  Handshake,
  TrendingUp,
  Landmark,
  Building2,
  Globe2,
  Trophy,
  Lightbulb,
  Target,
  Send,
  ShieldCheck,
  CheckCircle,
  Quote,
  ArrowRight,
  User,
  LibraryBig,
  ClipboardList,
} from "lucide-react";

import heroBg from "../../assets/institution2.png";
import fundingImg from "../../assets/inst3.png";
import whyImg from "../../assets/inst4.png";
import ctaImg from "../../assets/intCTA.png";
// import logo from "../assets/logo.png";

const blue = "#4424e9";

export default function ResearchFundingGrantsSupport() {
  const services = [
    [
      Search,
      "Opportunity Identification",
      "Find the right grants, calls and fellowships.",
    ],
    [
      FileText,
      "Proposal Development",
      "Craft compelling, high-quality proposals.",
    ],
    [
      BadgeDollarSign,
      "Budgeting & Justification",
      "Detailed budgets and cost justifications.",
    ],
    [
      Users,
      "Review & Editing",
      "Peer review, technical editing and compliance check.",
    ],
    [
      Clock,
      "Submission & Coordination",
      "Timely submission and funder communication.",
    ],
    [
      Handshake,
      "Grant Management",
      "Monitoring milestones, reporting and deliverables.",
    ],
    [
      TrendingUp,
      "Renewals & Sustainability",
      "Support for renewals and long-term funding.",
    ],
  ];

  const process = [
    [Lightbulb, "1. Discover", "Understand your research and goals"],
    [Target, "2. Identify", "Match with best funding opportunities"],
    [FileText, "3. Develop", "Prepare strong proposals"],
    [Send, "4. Submit", "Coordinate and submit with precision"],
    [Trophy, "5. Secure", "Win grants and maximize impact"],
  ];

  return (
    <div className="bg-[#f8fbff] text-[#07113b] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[380px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
          <div className="max-w-[620px] mt-12">
            <div className="flex flex-wrap items-center gap-3 text-[12px] sm:text-[12px] font-semibold sm:mb-6 mb-5">
              <Link
                to="/"
                className="text-[#6366F1] hover:text-[#4F46E5] transition"
              >
                Home
              </Link>

              <span className="text-gray-400">›</span>

              <Link
                to="/institutions"
                className="text-[#6366F1] hover:text-[#4F46E5] transition"
              >
                Institutions
              </Link>

              <span className="text-gray-400">›</span>

              <span className="text-gray-500">
                Research Funding Grant Support
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
              Research Funding & <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Grants Support
              </span>
            </h1>

            <h2 className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
              From Idea to Impact. We Help You Secure Funding.
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              RCII partners with institutions to identify funding opportunities,
              craft compelling proposals, and manage grants for successful
              research outcomes.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
              <Link className="inline-flex w-auto items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                <Landmark size={18} /> Request Funding Support
              </Link>

              <Link className="inline-flex w-auto items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] overflow-hidden">
          <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
            Our Funding Support Services
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {services.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className="group relative text-center px-4 py-8 hover:bg-[#fbfbff] hover:-translate-y-1 transition-all duration-300"
              >
                {index !== 6 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[118px] w-px bg-[#dfe3f5]" />
                )}

                <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#eef3ff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={31} />
                </div>

                <h3 className="mt-4 text-[14px] font-bold">{title}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-[#1f2937]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING TYPES + PROCESS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-4">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* FUNDING TYPES */}
            <div
              className="relative bg-[#fafbff] border border-[#e8ebfb] rounded-[16px] p-6 overflow-hidden min-h-[245px]"
              style={{
                backgroundImage: `linear-gradient(
            90deg,
            rgba(255,255,255,0.98) 0%,
            rgba(255,255,255,0.92) 45%,
            rgba(255,255,255,0.55) 100%
          ),
          url(${whyImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              {/* Right image */}
              {/* <img
    src={whyImg}
    alt=""
    className="hidden sm:block absolute right-5 bottom-0 w-[230px] lg:w-[260px] object-contain pointer-events-none"
  /> */}

              {/* Left content */}
              <div className="relative z-10 max-w-full sm:max-w-[62%]">
                <h2 className="text-[18px] sm:text-[22px] font-bold mb-5">
                  Funding Types We Support
                </h2>

                {[
                  ["#4B34FF", "Government Grants (National & International)"],
                  ["#C252FF", "Industry Sponsored Projects"],
                  ["#23B5D3", "Foundation & NGO Grants"],
                  ["#2FC86D", "Collaborative & Consortium Grants"],
                  ["#FF9A32", "Fellowships & Scholarships"],
                  ["#FF4376", "Seed Funding & Institutional Schemes"],
                ].map(([color, item]) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[13px] font-medium mb-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#4424e9] shrink-0"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* WHY CHOOSE */}
            <div
              className="bg-[#fafbff] border border-[#e8ebfb] rounded-[16px] p-6"
              style={{
                backgroundImage: `linear-gradient(
            90deg,
            rgba(255,255,255,0.98) 0%,
            rgba(255,255,255,0.92) 45%,
            rgba(255,255,255,0.55) 100%
          ),
          url(${whyImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <h2 className="text-[18px] sm:text-[22px] font-bold mb-5">
                Why Choose RCII?
              </h2>

              {[
                "Deep knowledge of funding landscape",
                "Experienced proposal writers & grant strategists",
                "High success rate across diverse domains",
                "End-to-end support until grant closure",
                "Compliance, ethics & reporting expertise",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] font-medium mb-3"
                >
                  <CheckCircle size={18} className="text-[#4424e9] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {/* PROCESS */}
            <div className="bg-[#fafbff] border border-[#e8ebfb] rounded-[16px] p-6">
              <h2 className="text-[18px] sm:text-[22px] font-bold mb-5">
                Our Process
              </h2>

              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-5 gap-5 sm:gap-2">
                {process.map(([Icon, title, desc], index) => (
                  <div key={title} className="relative text-center">
                    <div
                      className={`mx-auto w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110
                  ${
                    index === 0
                      ? "bg-[#f0eaff] text-[#5e2dff]"
                      : index === 1
                        ? "bg-[#eef3ff] text-[#2764ff]"
                        : index === 2
                          ? "bg-[#e9fff0] text-[#18a845]"
                          : index === 3
                            ? "bg-[#fff1e5] text-[#ff7d1f]"
                            : "bg-[#f4e9ff] text-[#7f3dff]"
                  }
                `}
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-4 font-semibold text-[14px]">{title}</h3>

                    <p className="mt-2 text-[11px] leading-5">{desc}</p>

                    {index !== 4 && (
                      <div className="hidden lg:block absolute top-[36px] -right-5 w-10 border-t-2 border-dashed border-[#8c8abf]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* IMPACT */}
            <div className="bg-[#fafbff] border border-[#e8ebfb] rounded-[16px] px-6 py-7">
              <h2 className="text-[18px] sm:text-[22px] font-bold mb-5">
                Impact We Create
              </h2>

              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  [Landmark, "500+", "Grants Secured", "#2764ff"],
                  [BadgeDollarSign, "$8.7M+", "Funding Mobilized", "#21b45a"],
                  [Users, "32%", "Average Success Rate", "#ff7d1f"],
                  [Globe2, "25+", "Countries Supported", "#5e2dff"],
                ].map(([Icon, num, label, color]) => (
                  <div
                    key={label}
                    className="bg-white border border-[#e8ebfb] rounded-[14px] p-5 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="w-[60px] h-[60px] mx-auto rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${color}12`,
                        color,
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="text-[16px] leading-none font-semibold text-[#16163d] mt-4">
                      {num}
                    </h3>

                    <p className="text-[11px] font-medium mt-2 text-[#444]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <h2 className="text-center text-18 lg:text-[22px] font-bold mb-7">
          What Our Partners Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            [
              "RCII's grant writing team transformed our ideas into successful proposals and helped us secure prestigious international funding.",
              "Prof. Ravi Deshpande",
              "Dean (Research), IISc Bengaluru",
            ],
            [
              "Their strategic guidance and attention to detail made the entire grant process seamless and highly successful.",
              "Dr. Neha Malhotra",
              "Chief Scientist, CSIR-NCL",
            ],
            [
              "RCII understands funders' expectations and delivers proposals that truly stand out.",
              "Dr. Arvind Sethi",
              "Director, Research & Innovation",
            ],
          ].map(([text, name, role]) => (
            <div
              key={name}
              className="bg-white border border-[#e2e7fb] rounded-[12px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Quote size={22} color={blue} />
              <p className="text-[14px] leading-5 mt-4">{text}</p>
              <h4 className="font-bold text-[14px] mt-5">{name}</h4>
              <p className="text-[13px] text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-center text-[18px] lg:text-[22px] font-bold mb-7">
          Resources for Institutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            [FileText, "Grant Search Toolkit"],
            [ClipboardList, "Proposal Writing Guide"],
            [LibraryBig, "Budget Template Library"],
            [FileText, "Funder Directory"],
            [ClipboardList, "Reporting & Compliance Templates"],
            [TrendingUp, "Grant Success Stories"],
          ].map(([Icon, title]) => (
            <div
              key={title}
              className="bg-white rounded-[10px] border border-[#d7ddff] px-5 py-2 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#eef3ff] flex items-center justify-center text-[#4424e9] shrink-0">
                <Icon size={26} />
              </div>
              <h3 className="text-[11px] font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[14px] text-white px-5 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-[180px_1fr_auto_auto] gap-5 lg:gap-6 items-center">
          <img src={ctaImg} alt="" className="w-full hidden lg:block" />

          <div>
            <h2 className="text-[15px] font-semibold">
              Let's Secure the Right Funding for Your Research
            </h2>
            <p className="mt-2 text-[13px] text-medium leading-6">
              Partner with RCII to turn your proposals into funded projects that
              create impact.
            </p>
          </div>

          <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-[#4424e9] px-6 py-4 rounded-[6px] text-[12px] font-semibold hover:-translate-y-1 transition">
            Request Funding Support <ArrowRight size={17} />
          </Link>

          <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-3 border border-white/60 text-white px-6 py-4 rounded-[6px] text-[12px] font-semibold hover:bg-white hover:text-[#4424e9] transition">
            <User size={17} /> Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
