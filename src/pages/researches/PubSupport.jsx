import React from "react";
import {
  ArrowRight,
  FileText,
  Search,
  UploadCloud,
  MessageCircle,
  ShieldCheck,
  BarChart3,
  Check,
  BookOpen,
  Globe2,
  Users,
  Award,
  ClipboardCheck,
  PenTool,
  Layers,
  GraduationCap,
  Briefcase,
  Lock,
  UserCheck,
  ChevronRight,
  Star,
  Upload,
  BadgeCheck,
  UserRound,
} from "lucide-react";

import heroImg from "../../assets/bgpub.png";
import checklistImg from "../../assets/researcher6.png";
import publishImg from "../../assets/researcher7.png";
import { Link } from "react-router-dom";

const journey = [
  [
    "Manuscript\nPreparation",
    "Structure, content & quality improvement",
    FileText,
  ],
  [
    "Journal\nIdentification",
    "Find the right journal for your research",
    Search,
  ],
  [
    "Submission\nSupport",
    "Guidance for smooth and accurate submission",
    Upload,
  ],
  [
    "Peer Review\nSupport",
    "Address reviewer comments and revision strategy",
    MessageCircle,
  ],
  [
    "Acceptance &\nPublication",
    "Navigate final steps for successful publication",
    BadgeCheck,
  ],
  [
    "Visibility &\nImpact",
    "Enhance reach and measure research impact",
    BarChart3,
  ],
];

const services = [
  ["Manuscript Preparation", ["Structure & Flow Review", "Technical Accuracy Check", "Content Enhancement", "Reference Improvement"], FileText],
  ["Language & Editing Support", ["Grammar & Syntax", "Academic Language", "Clarity Enhancement", "Journal Style Formatting"], PenTool],
  ["Journal Selection Support", ["Scope Matching", "Indexing Verification", "Impact Factor Analysis", "Publication Strategy"], Search],
  ["Submission Assistance", ["Cover Letter Support", "Metadata Preparation", "Author Guidelines Check", "Submission Guidance"], UploadCloud],
  ["Peer Review Support", ["Reviewer Comments Analysis", "Response Drafting Guidance", "Revision Strategy", "Resubmission Support"], MessageCircle],
  ["Post Publication Support", ["DOI & Indexing Support", "Research Visibility", "Profile Update Support", "Impact Tracking"], Globe2],
];

const types = [
  ["Journal Articles", ["Scopus Indexed", "Web of Science", "SCI / ESCI / SSCI", "PubMed / MEDLINE"], FileText],
  ["Review Articles", ["Systematic Reviews", "Meta-Analysis", "Narrative Reviews", "Integrative Reviews"], BookOpen],
  ["Conference Papers", ["IEEE Conferences", "Springer Proceedings", "Elsevier Proceedings", "ACM / AIP / Others"], Layers],
  ["Book Chapters", ["Edited Books", "Reference Chapters", "Handbook Chapters", "Monograph Chapters"], BookOpen],
  ["Monographs", ["Research Monographs", "Academic Books", "Text Books", "Specialized Books"], GraduationCap],
  ["Case Studies", ["Case Studies", "Technical Reports", "Short Communications", "Research Notes"], Briefcase],
];

const ethics = [
  ["No Fake Commitments", ShieldCheck],
  ["No Editorial Influence", Lock],
  ["No Peer Review", UserCheck],
  ["No Predatory Journal", Award],
  ["Full Transparency", ClipboardCheck],
  ["Researcher Centric Approach", Users],
];

function PubSupport() {
  return (
    <main className="bg-white min-h-screen pt-[70px] text-[#07113F]">
      {/* HERO */}
<section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
  {/* Background image only after 768px */}
  <div
    className=" absolute inset-0 bg-cover  bg-no-repeat"
    style={{
      backgroundImage: `url(${heroImg})`,
    }}
  />

  {/* Mobile soft background */}
  <div className=" absolute" />

  {/* Optional left readable overlay */}
  <div className="" />

  <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14 h-full">
    <div className="max-w-[520px] pt-6 sm:pt-8 lg:pt-10 pb-8">
      <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
        <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
          Home
        </Link>

        <span className="text-gray-400">›</span>

        <Link to="/researchers" className="text-[#6366F1] hover:text-[#4F46E5] transition">
          Researchers
        </Link>

        <span className="text-gray-400">›</span>

        <span className="text-gray-500">Publication Support</span>
      </div>

      <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
        Publication <br />
        <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
          Support
        </span>
      </h1>

      <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-7">
        Expert Guidance for Successful Publications
      </p>

      <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
        From manuscript preparation to publication and visibility,
        RCII provides end-to-end support to help researchers
        publish in the right journals and reach the right audience.
      </p>

      <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
       <Link to="/contact">
        <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
          Talk to an Expert
          <ArrowRight size={18} />
        </button>
</Link>
 <Link to="/contact">
        <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
          Explore All Services
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* JOURNEY */}
 <section className="">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white/95 rounded-[18px] border border-[#EEF0FF] shadow-[0_10px_30px_rgba(26,32,80,0.08)] px-5 sm:px-8 lg:px-14 py-7 sm:py-8 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-[22px] sm:text-[28px]  font-bold text-[#091334]">
          The Publication Journey We Support
        </h2>
        <div className="w-11 h-[3px] bg-[#4F46E5] mx-auto mt-3 rounded-full" />
      </div>

      {/* Journey Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 lg:gap-y-0">
        {journey.map(([title, text, Icon], index) => (
          <div
            key={title}
            className="group relative text-center px-3 sm:px-5 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-b group-hover:from-[#F8F7FF] group-hover:to-white -z-10" />

            {/* Connector */}
            {index !== journey.length - 1 && (
              <div className="hidden lg:block absolute top-[30px] left-[72%] w-[65px] xl:w-[90px] border-t-2 border-dotted border-[#5B55FF]">
                <span className="absolute -right-1 -top-[5px] w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-[#5B55FF]" />
              </div>
            )}

            {/* Icon */}
            <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#F1EDFF] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#4F46E5] group-hover:shadow-[0_12px_28px_rgba(79,70,229,0.35)] group-hover:scale-110">
              <Icon
                size={24}
                strokeWidth={2.2}
                className="text-[#473BFF] transition-all duration-500 group-hover:text-white"
              />
            </div>

            {/* Title */}
            <h3 className="text-[14px] sm:text-[15px] font-bold leading-[18px] text-[#473BFF] transition-colors duration-300 group-hover:text-[#2D23D3] whitespace-pre-line">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-[11px] sm:text-[12px] font-semibold leading-[18px] text-[#111A38] max-w-[160px] mx-auto transition-all duration-300 group-hover:text-[#374151]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
    <section className="py-2 sm:py-2 bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12">
    <div className="bg-white  px-3 sm:px-4 py-5 sm:py-4">
      
      <div className="text-center sm:mb-10 mb-6">
        <h2 className="text-[22px] sm:text-[28px] font-bold text-[#07113F]">
          Our Publication Support Services
        </h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {services.map(([title, items, Icon], index) => {
          const colors = [
            "text-[#17A979] bg-[#EEF9F5]",
            "text-[#5B4DFF] bg-[#F2EFFF]",
            "text-[#FF7A22] bg-[#FFF0E7]",
            "text-[#5B4DFF] bg-[#F2EFFF]",
            "text-[#22A9D8] bg-[#EDF9FC]",
            "text-[#24A878] bg-[#EEF9F5]",
          ];

          return (
            <div
              key={title}
              className="group bg-white rounded-[10px] border border-[#E8ECF7] px-4 py-4 min-h-[255px] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_18px_38px_rgba(79,70,229,0.16)]"
            >
              <div
                className={`mx-auto w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${colors[index]}`}
              >
                <Icon size={24} strokeWidth={2.2} />
              </div>

              <h3 className="mt-3 text-center text-[13px] font-bold leading-[17px] text-[#07113F] whitespace-pre-line">
                {title}
              </h3>

              <ul className="mt-5 space-y-[10px]">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[10.5px] xl:text-[11px] font-semibold leading-[15px] text-[#253150]"
                  >
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#5B4DFF] mt-[1px] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* <button className="mt-auto pt-5 text-[11px] font-bold text-[#5B4DFF] inline-flex items-center gap-2 transition-all duration-500 group-hover:gap-3 group-hover:text-[#2D23D3]">
                Learn More <ArrowRight size={13} strokeWidth={3} />
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* WHY CHOOSE */}
     <section className="py-2 sm:py-2 bg-white mx-auto px-4 sm:px-6 lg:px-14">
  <div className="max-w-[1420px] ">
    <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] overflow-hidden">
      <div className="grid lg:grid-cols-[46%_54%] items-center gap-6 lg:gap-10 px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={checklistImg}
            alt="Submission Checklist"
            className="w-full max-w-[520px] object-contain transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#09143D] leading-tight">
            Why Choose RCII for Publication Support?
          </h2>

          <div className="mt-3 space-y-1">
            {[
              "Experienced publication experts across all disciplines",
              "Up-to-date knowledge of journals, guidelines & best practices",
              "Personalized support tailored to your research needs",
              "Ethical, transparent and researcher-first approach",
              "No guarantees of acceptance – we ensure quality support",
              "Proven track record of successful publication assistance",
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl px-3 py-2 transition-all duration-500 hover:bg-[#F8F7FF] hover:translate-x-2"
              >
                <div className="w-5 h-5 rounded-full bg-[#5B4DFF] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(91,77,255,0.35)]">
                  <Check
                    size={12}
                    strokeWidth={3}
                    className="text-white"
                  />
                </div>

                <span className="text-[13px] sm:text-[14px] font-semibold text-[#253150] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* TYPES */}
    <section className="py-2 sm:py-2 bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] px-3 sm:px-4 py-5 sm:py-6">
      
      <div className="text-center sm:mb-8 mb-5">
        <h2 className="text-[22px] sm:text-[26px]  font-bold text-[#07113F]">
          Types of Publications We Support
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {types.map(([title, items, Icon], index) => {
          const colors = [
            "bg-[#F1EDFF] text-[#5B4DFF]",
            "bg-[#F1EDFF] text-[#5B4DFF]",
            "bg-[#EDF7FF] text-[#2D9CDB]",
            "bg-[#F1EDFF] text-[#5B4DFF]",
            "bg-[#EAF9FC] text-[#169DB5]",
            "bg-[#F1EDFF] text-[#5B4DFF]",
          ];

          return (
            <div
              key={title}
              className="group bg-white rounded-[10px] border border-[#E8ECF7] px-5 py-4 min-h-[215px] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_18px_38px_rgba(79,70,229,0.15)]"
            >
              <div
                className={`mx-auto w-[55px] h-[55px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_25px_rgba(79,70,229,0.20)] ${colors[index]}`}
              >
                <Icon size={26} strokeWidth={2.2} />
              </div>

              <h3 className="mt-3 text-center text-[13px] sm:text-[14px] font-bold leading-[18px] text-[#07113F]">
                {title}
              </h3>

              <ul className="mt-4 space-y-[9px]">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[10.5px] xl:text-[11px] font-semibold leading-[15px] text-[#253150]"
                  >
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-[#5B4DFF] mt-[1px] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* STATS */}
   <section className="py-2 sm:py-4">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="rounded-[16px] overflow-hidden bg-gradient-to-r from-[#3520E2] to-[#008FBE] shadow-[0_18px_45px_rgba(79,70,229,0.22)]">
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {[
          ["10,000+", "Manuscripts Supported", FileText],
          ["300+", "Journals Covered", BookOpen],
          ["25+", "Countries", Globe2],
          ["2,000+", "Researchers Assisted", UserRound],
          ["95%", "Client Satisfaction Rate", ClipboardCheck],
        ].map(([num, label, Icon], index) => (
          <div
            key={label}
            className="
              group relative flex items-center justify-center
              gap-3 sm:gap-4
              px-4 sm:px-5 lg:px-4 xl:px-6
              py-5 sm:py-6
              min-h-[96px]
              transition-all duration-500
              hover:bg-white/5 hover:scale-[1.02]
              cursor-pointer
              border-b border-white/10
              min-[480px]:border-r
              md:border-r
              xl:border-b-0
              xl:last:border-r-0
            "
          >
            <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] shrink-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-white/15 group-hover:scale-110">
              <Icon size={22} strokeWidth={2} className="text-white sm:w-6 sm:h-6" />
            </div>

            <div className="min-w-0">
              <h3 className="text-[17px] sm:text-[20px] font-bold leading-none text-white whitespace-nowrap">
                {num}
              </h3>

              <p className="mt-2 text-[11px] sm:text-[13px] font-medium text-white/90 leading-tight break-words">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ETHICS + RESOURCES */}
    <section className="py-4 sm:py-5 bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      
      {/* Publication Ethics */}
      <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-5 sm:px-8 py-7">
        <h2 className="text-center text-[20px] sm:text-[22px] font-bold text-[#07113F]">
          Publication Ethics
        </h2>

        <p className="text-center text-[11px] sm:text-[12px] font-semibold text-[#253150] mt-5">
          We are committed to responsible research publication practices.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ethics.map(([title, Icon]) => (
            <div
              key={title}
              className="group text-center cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mx-auto w-[48px] h-[48px] rounded-full bg-[#F1EDFF] text-[#573BFF] flex items-center justify-center transition-all duration-500 group-hover:bg-[#573BFF] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(87,59,255,0.25)]">
                <Icon size={22} strokeWidth={2.2} />
              </div>

              <p className="mt-3 text-[10.5px] sm:text-[11px] font-bold leading-[15px] text-[#07113F]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Helpful Resources */}
      <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-5 sm:px-8 py-7">
        <h2 className="text-center text-[20px] sm:text-[22px] font-bold text-[#07113F]">
          Helpful Resources
        </h2>

        <div className="mt-3 space-y-1">
          {[
            ["Journal Finder Tool", "Find the best journals for your research"],
            ["Author Guidelines Database", "Access thousands of journal guidelines"],
            ["Publication Checklists", "Step-by-step checklists for authors"],
            ["Templates & Samples", "Cover letters, responses & more"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="group flex items-center justify-between gap-4 rounded-xl px-4 py-1 transition-all duration-500 hover:bg-[#F8F7FF] hover:translate-x-2 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-[44px] h-[44px] rounded-full bg-[#F1EDFF] text-[#573BFF] flex items-center justify-center transition-all duration-500 group-hover:bg-[#573BFF] group-hover:text-white group-hover:scale-110">
                  <FileText size={21} strokeWidth={2.2} />
                </div>

                <div>
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-[#07113F] leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-semibold text-[#253150] leading-tight">
                    {desc}
                  </p>
                </div>
              </div>

              {/* <ArrowRight
                size={16}
                strokeWidth={3}
                className="text-[#573BFF] transition-all duration-500 group-hover:translate-x-1"
              /> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="relative bg-white py-4 overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="rounded-xl bg-gradient-to-r from-[#3520E2] to-[#008FBE] text-white px-6 lg:px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_18px_45px_rgba(79,70,229,0.22)]">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <img src={publishImg} alt="Publish" className="w-[120px] h-[85px] object-contain hidden sm:block" />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-bold">Ready to Publish Your Research?</h2>
                <p className="text-[12px] sm:text-[13px] font-medium mt-1 text-white/90 max-w-[380px]">
                  Connect with our experts and take the next step towards successful publication.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
               <Link to="/contact">
              <button className="w-full sm:w-auto justify-center bg-white text-[#573BFF] text-[13px] font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1">
                Talk to an Expert <ArrowRight size={15} />
              </button>
              </Link>
               <Link to="/contact">
              <button className="w-full sm:w-auto justify-center border border-blue-300 text-white text-[13px] font-semibold px-6 py-3 rounded-lg transition-all duration-500 hover:-translate-y-1">
                Request Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PubSupport;