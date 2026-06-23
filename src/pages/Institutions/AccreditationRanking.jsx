import { Link } from "react-router-dom";
import React from "react";
import {
  ChevronDown,
  Building2,
  BarChart3,
  Database,
  TrendingUp,
  Award,
  Globe2,
  Target,
  CheckCircle2,
  Search,
  ClipboardList,
  PenLine,
  Send,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  X,
  Star,
  Users,
  PieChart,
  ArrowRight,
  Quote,
} from "lucide-react";

import heroBg from "../../assets/rankBg.png";
import meetingImg from "../../assets/agrs4.png";
import qsBg from "../../assets/agrs1.png";
import nirfBg from "../../assets/agrs2.png";
import otherBg from "../../assets/agrs3.png";
import cardBg from "../../assets/agrs4.png";
import siareLogo from "../../assets/img.png";
import partnerLogo from "../../assets/logo.png";
import trophyImg from "../../assets/rankingCTa.png";

const navItems = [
  "Home",
  "Researchers",
  "Institutions",
  "Publishers",
  "Innovation & IP",
  "Technology",
  "Resources",
  "About Us",
];

const features = [
  {
    icon: Target,
    title: "Strategic Guidance",
    desc: "Customized strategies aligned with global ranking and accreditation criteria.",
    color: "text-[#4B22FF]",
    bg: "bg-[#F0EAFF]",
  },
  {
    icon: Database,
    title: "Data Excellence",
    desc: "Robust data systems for accurate, consistent and credible reporting.",
    color: "text-[#16A34A]",
    bg: "bg-[#EAFBF0]",
  },
  {
    icon: TrendingUp,
    title: "Performance Improvement",
    desc: "Identify gaps, set benchmarks and improve performance across key indicators.",
    color: "text-[#FF6A00]",
    bg: "bg-[#FFF1E8]",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Strengthen quality frameworks and documentation for accreditation success.",
    color: "text-[#5B21FF]",
    bg: "bg-[#F0EAFF]",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    desc: "Enhance institutional reputation and visibility on global platforms.",
    color: "text-[#1478FF]",
    bg: "bg-[#EAF4FF]",
  },
];

const rankingCards = [
  {
    title: "QS World University Rankings",
    logo: siareLogo,
    bg: qsBg,
    border: "border-[#FFD8A8]",
    accent: "#FF8A00",
    btn: "Explore QS Support",
    bullets: [
      "Strategy development and gap analysis",
      "Support for 9 key indicators and sub-indicators",
      "Data collection, validation and submission",
      "Narrative writing and evidence curation",
      "Performance monitoring and improvement",
    ],
  },
  {
    title: "National Institutional Ranking Framework",
    logo: siareLogo,
    bg: nirfBg,
    border: "border-[#BCD3FF]",
    accent: "#2563EB",
    btn: "Explore NIRF Support",
    bullets: [
      "Complete support for NIRF parameters",
      "Data template preparation and audit",
      "Metric-wise analysis and benchmarking",
      "Documentation and proof validation",
      "Annual submission support and review",
    ],
  },
  {
    title: "Other Global Rankings",
    logo: siareLogo,
    bg: otherBg,
    border: "border-[#D5CBFF]",
    accent: "#5B21FF",
    btn: "Explore Other Rankings",
    bullets: [
      "THE (Times Higher Education) Rankings",
      "ARWU (Shanghai Ranking)",
      "US News Best Global Universities",
      "Impact Rankings (SDGs)",
      "Subject-specific and regional rankings",
    ],
  },
];

const approach = [
  [Search, "Assess", "Assess current performance and identify gaps"],
  [ClipboardList, "Plan", "Develop customized strategy and action plan"],
  [Database, "Collect", "Collect, validate and organize data"],
  [PenLine, "Develop", "Prepare reports, narratives and evidence"],
  [Send, "Submit", "Support submission and quality assurance"],
  [BarChart3, "Improve", "Monitor results and drive continuous improvement"],
];

const impacts = [
  [TrendingUp, "Higher Scores", "Improved ranking and accreditation outcomes"],
  [Star, "Better Reputation", "Stronger global visibility and recognition"],
  [
    Users,
    "Stakeholder Confidence",
    "Increased trust from students, faculty, partners & funders",
  ],
  [
    PieChart,
    "Sustainable Growth",
    "Data-driven decisions for long-term excellence",
  ],
];

export default function AccreditationRankingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#070B3F] font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        {/* Mobile readable overlay */}
        <div className="absolute inset-0 bg-white/80 sm:bg-white/45 lg:bg-transparent" />

        <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14 h-full mt-16">
          <div className="max-w-[520px] pt-6 sm:pt-8 lg:pt-10 pb-8">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] font-semibold sm:mb-8 mb-5">
              <Link
                to="/"
                className="text-[#6366F1] hover:text-[#4F46E5] transition"
              >
                Home
              </Link>

              <span className="text-gray-400">›</span>

              <span className="text-[#6366F1]">Institutions</span>

              <span className="text-gray-400">›</span>

              <span className="text-gray-500">
                Accreditation & Global Ranking Support
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F]">
              Accreditation &
              <p className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Global{" "}
                <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                  Ranking Support
                </span>
              </p>
            </h1>

            <p className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
              Enhance Reputation. Improve Performance. Achieve Global
              Recognition.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              RCII provides end-to-end support for QS, NIRF and other global
              rankings and accreditation frameworks. We help institutions build
              data-driven strategies, strengthen quality benchmarks, and
              showcase impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
               <Link to="/contact">
              <button className="w-full sm:w-auto bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                <Building2 size={17} />
                Request a Consultation
              </button></Link>
 <Link to="/contact">
              <button className="w-full sm:w-auto bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                Explore Our Services
                <ArrowRight size={17} />
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-20 max-w-[1420px] mx-auto px-6 lg:px-16 -mt-0 lg:-mt-[22px]">
        <div className="bg-white rounded-[16px] shadow-[0_10px_35px_rgba(20,40,90,0.08)] px-5 sm:px-8 py-4 sm:py-4">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold text-[#07113F] mb-7">
            Rank Higher. Stand Out. Lead Globally.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6">
            {features.map(({ icon: Icon, title, desc, color, bg }, index) => (
              <div
                key={title}
                className={`text-center px-5 py-4 ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-[#DDE6FA]"
                    : ""
                } hover:-translate-y-2 hover:shadow-xl rounded-xl transition-all duration-300`}
              >
                <div
                  className={`mx-auto w-[64px] h-[64px] ${bg} ${color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon size={34} />
                </div>
                <h3 className="font-bold text-[14px] mb-2">{title}</h3>
                <p className="text-[12px] leading-6 font-medium text-[#1B1D45]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANKING SUPPORT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold text-[#07113F] mb-5">
          Our Support for Key Rankings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rankingCards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-[14px] border ${card.border}
bg-white min-h-[265px] sm:min-h-[275px] p-5 sm:p-6
shadow-[0_4px_20px_rgba(0,0,0,0.04)]
hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
transition-all duration-300`}
            >
              <img
                src={card.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              <div className="relative z-10 max-w-full sm:max-w-[78%] flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="h-[42px] sm:h-[52px] w-auto object-contain"
                  />
                </div>

                <ul className="space-y-2 flex-1">
                  {card.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] leading-[16px] font-medium text-[#1B2559]"
                    >
                      <CheckCircle2
                        size={14}
                        style={{ color: card.accent }}
                        className="mt-[2px] shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-auto pt-5">
                  <button
                    style={{
                      borderColor: card.accent,
                      color: card.accent,
                    }}
                    className="h-[40px] px-5 rounded-[6px] border bg-white text-[12px] font-semibold hover:text-white transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = card.accent;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = card.accent;
                    }}
                  >
                    {card.btn} →
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4">
        <div className="bg-white rounded-[16px] shadow-[0_10px_35px_rgba(20,40,90,0.08)] px-5 sm:px-7 py-5">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold text-[#07113F] mb-5">
            Our End-to-End Approach
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-8 lg:gap-x-4">
            {approach.map(([Icon, title, desc], i) => (
              <div key={title} className="relative text-center group px-2">
                {i !== approach.length - 1 && (
                  <div className="hidden lg:block absolute top-[36px] left-[70%] w-[72%] border-t-2 border-dashed border-[#9DAEEA]" />
                )}

                <div
                  className={`mx-auto w-[64px] h-[64px] rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_12px_25px_rgba(75,34,255,0.18)]
            ${
              i === 0
                ? "bg-[#F0EAFF] text-[#4B22FF]"
                : i === 1
                  ? "bg-[#EAFBF0] text-[#16A34A]"
                  : i === 2
                    ? "bg-[#FFF1E8] text-[#FF6A00]"
                    : i === 3
                      ? "bg-[#EAF4FF] text-[#1478FF]"
                      : i === 4
                        ? "bg-[#F0EAFF] text-[#5B21FF]"
                        : "bg-[#EAFBF0] text-[#16A34A]"
            }`}
                >
                  <Icon size={31} strokeWidth={2.2} />
                </div>

                <h3 className="font-bold text-[14px] text-[#07113F]">
                  {i + 1}. {title}
                </h3>

                <p className="text-[12px] leading-[18px] mt-2 font-medium text-[#07113F] max-w-[180px] mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + IMPACT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr] gap-6">
          {/* LEFT */}
          <div className="bg-white rounded-[16px] px-5 sm:px-6 py-6 shadow-[0_10px_35px_rgba(20,40,90,0.08)]">
            <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F] mb-5">
              Why Partner with RCII?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-6 items-start">
              <ul className="space-y-3">
                {[
                  "Expert team with ranking & accreditation expertise",
                  "Proven track record with leading institutions",
                  "Data-driven insights and actionable strategies",
                  "End-to-end support with timely delivery",
                  "Confidentiality, integrity and quality assurance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[12px] leading-[18px] font-semibold text-[#07113F]"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#4B22FF] mt-[2px] shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="w-full h-[180px] sm:h-[210px] md:h-[230px] overflow-hidden rounded-[8px] shadow-[0_8px_22px_rgba(20,40,90,0.12)]">
                <img
                  src={meetingImg}
                  alt="Performance meeting"
                  className="w-full h-full object-cover object-center hover:scale-[1.03] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[16px] px-4 py-4 shadow-[0_10px_35px_rgba(20,40,90,0.08)]">
            <h2 className="ttext-[18px] sm:text-[22px] font-bold text-[#07113F] mb-5">
              Impact We Deliver
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {impacts.map(([Icon, title, desc], index) => (
                <div
                  key={title}
                  className="min-h-[180px] text-center px-2 py-2 rounded-[14px] border border-[#E8EEFC] bg-white shadow-[0_8px_22px_rgba(20,40,90,0.04)] hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(20,40,90,0.10)] transition-all duration-300"
                >
                  <Icon
                    size={38}
                    strokeWidth={2.2}
                    className={`mx-auto mb-4 ${
                      index === 0
                        ? "text-[#16A34A]"
                        : index === 1
                          ? "text-[#FF6A00]"
                          : index === 2
                            ? "text-[#4B22FF]"
                            : "text-[#1478FF]"
                    }`}
                  />

                  <h3 className="font-semibold text-[12px] text-[#07113F] mb-3">
                    {title}
                  </h3>

                  <p className="text-[12px] leading-[19px] font-medium text-[#07113F]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4 pb-4">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold text-[#07113F] mb-[8px] relative z-10">
          What Our Partners Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            [
              "RCII's support for QS ranking helped us streamline our data processes and significantly improve our overall score.",
              "Prof. S. Mahadevan",
              "Pro Vice Chancellor",
              "SRM Institute of Science and Technology",
            ],
            [
              "Their expertise in NIRF methodology and data validation was instrumental in our consistent improvement in rankings.",
              "Dr. Pankaj Mittal",
              "Registrar",
              "Thapar Institute of Engineering & Technology",
            ],
            [
              "RCII guided us through complex global ranking criteria and helped us gain international visibility.",
              "Dr. R. Subakrishna Rao",
              "Director",
              "International Institute of Information Technology",
            ],
          ].map(([text, name, role, org]) => (
            <div
              key={name}
              className="relative bg-white rounded-[12px] min-h-[190px] px-6 py-5 shadow-[0_8px_28px_rgba(20,40,90,0.08)] border border-[#EEF2FF] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(20,40,90,0.12)] transition-all duration-300"
            >
              <div className="mb-2">
                <Quote
                  size={20}
                  strokeWidth={2}
                  className="text-[#4B22FF] fill-[#4B22FF]"
                />
              </div>

              <p className="text-[12px] leading-[22px] font-medium text-[#07113F] max-w-[82%] mb-5">
                {text}
              </p>

              <h4 className="font-bold text-[12px] text-[#07113F]">{name}</h4>

              <p className="text-[12px] font-medium text-[#07113F]">{role}</p>

              <p className="text-[12px] font-medium text-[#07113F] max-w-[78%]">
                {org}
              </p>

              <img
                src={partnerLogo}
                alt="Partner logo"
                className="absolute right-6 bottom-5 w-[74px] h-[74px] object-contain opacity-95"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-3">
          <span className="w-[11px] h-[11px] rounded-full bg-[#C8C9F8]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#4B22FF]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#C8C9F8]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#C8C9F8]" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4 pb-8">
        <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-r from-[#4421F3] via-[#1B47D8] to-[#0087A8] shadow-[0_15px_40px_rgba(25,55,180,0.25)]">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 py-5 lg:py-3">
            {/* LEFT */}
            <div className="flex items-center gap-5 w-full lg:w-auto">
              <div className="hidden sm:flex shrink-0">
                <img
                  src={trophyImg}
                  alt="Achievement Trophy"
                  className="w-[150px] h-[120px] object-contain"
                />
              </div>

              <div>
                <h2 className="text-[18px] sm:text-[19px] font-bold text-white mb-2">
                  Let's Achieve Global Excellence Together
                </h2>

                <p className="mt-2 text-white/95 text-[13px] font-medium">
                  Partner with RCII to reach higher in rankings and
                  accreditations.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
               <Link to="/contact">
              <button className="h-[48px] w-full sm:w-[260px] bg-white text-[#4B22FF] rounded-[6px] font-semibold text-[14px] flex items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300">
                Request a Consultation
                <ArrowRight size={18} />
              </button>
</Link> <Link to="/contact">
              <button className="h-[48px] w-full sm:w-[260px] border border-white/70 text-white rounded-[6px] font-semibold text-[14px] flex items-center justify-center gap-3 hover:bg-white hover:text-[#123AD8] transition-all duration-300">
                <Phone size={18} />
                Talk to an Expert
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
