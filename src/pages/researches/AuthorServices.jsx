import React from "react";
import {
  ArrowRight,
  FileCheck,
  Search,
  Pencil,
  Target,
  UploadCloud,
  MessageCircle,
  BarChart3,
  BookOpen,
  ShieldCheck,
  Globe2,
  Award,
  CheckCircle2,
  Users,
  FileText,
  Scale,
  Trophy,
  Cloud,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bgauth.png";

function AuthorServices() {
  const lifecycle = [
    ["Research\nManuscript", FileCheck],
    ["Technical\nReview", Search],
    ["Language\nEditing", Pencil],
    ["Journal Suitability\nAssessment", Target],
    ["Submission\nGuidance", UploadCloud],
    ["Peer Review\nSupport", MessageCircle],
    ["Publication", BookOpen],
    ["Research\nVisibility", BarChart3],
  ];

  const services = [
    ["Manuscript\nReview", ["Technical Assessment", "Quality Check", "Structural Review", "Readiness Evaluation"], FileCheck],
    ["Language &\nCopy Editing", ["Grammar Improvement", "Academic Language", "Enhancement", "Clarity Improvement", "Formatting Corrections"], Pencil],
    ["Journal Suitability\nAssessment", ["Scope Matching", "Indexing Verification", "Journal Evaluation", "Publication Strategy"], Target],
    ["Submission\nAssistance", ["Submission Guidance", "Metadata Preparation", "Cover Letter Support", "Author Documentation"], UploadCloud],
    ["Peer Review\nSupport", ["Response Preparation", "Revision Support", "Reviewer Comment Analysis", "Revision Strategy"], MessageCircle],
    ["Research\nVisibility", ["DOI Registration", "ORCID Integration", "Research Profile Enhancement", "Impact Tracking"], BarChart3],
  ];

  const supportAreas = [
    ["Journals", ["Scopus Indexed", "Web of Science", "ESCI", "SCI/SCIE", "PubMed"], FileText],
    ["Books", ["Edited Books", "Monographs", "Book Chapters"], BookOpen],
    ["Conferences", ["IEEE", "Springer Proceedings", "AIP", "ACM", "Elsevier Proceedings"], Trophy],
  ];

  const requests = [
    ["Research Paper\nSupport", FileText],
    ["Review Article\nSupport", Pencil],
    ["Conference Paper\nSupport", UploadCloud],
    ["Book Chapter\nSupport", BookOpen],
    ["Case Study\nSupport", FileCheck],
    ["Systematic Review\nSupport", Search],
  ];

  const ethics = [
    ["Research\nIntegrity", ShieldCheck],
    ["Transparency", Cloud],
    ["Authorship\nEthics", Users],
    ["Data\nResponsibility", Database],
    ["Peer Review\nEthics", MessageCircle],
  ];

  return (
    <div className="bg-[#FBFCFF] text-[#07113F] pt-[70px]">
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
     
             <span className="text-gray-500">Author Services</span>
           </div>
     
           <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-none font-bold text-[#07113F]">
              Author <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Services
             </span>
           </h1>
     
           <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-3 leading-6 sm:mt-6">
             Supporting Researchers Throughout <br />
              Their Publication Journey
           </p>
     
           <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
              Researcher Connect provides ethical, transparent, and professional
              publication support services designed to enhance the quality,
              visibility, and impact of scholarly research.
           </p>
     
           <div className="flex flex-wrap gap-3 mt-5 sm:mt-9">
             <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
               Talk to an Expert
               <ArrowRight size={18} />
             </button>
     
             <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
               Explore All Services
             </button>
           </div>
         </div>
       </div>
     </section>

      {/* LIFECYCLE */}
    <section className="py-1 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-4 sm:px-6 py-5">
      
      <div className="flex items-center gap-3 mb-7">
        <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
          1
        </span>

        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#07113F]">
          Publication Lifecycle Support
        </h2>
      </div>

      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-y-8 xl:gap-y-0">
        {lifecycle.map(([title, Icon], index) => {
          const styles = [
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF7FC] text-[#1598CC]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF7FC] text-[#1598CC]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF7F2] text-[#2FAE73]",
          ];

          return (
            <div
              key={title}
              className="group relative text-center px-3 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {index !== lifecycle.length - 1 && (
                <div className="hidden xl:block absolute top-[27px] left-[70%] w-[48px] 2xl:w-[72px] border-t-2 border-[#D7D5FF]">
                  <span className="absolute -right-1 -top-[4px] w-2 h-2 rounded-full bg-[#573BFF]" />
                </div>
              )}

              <div
                className={`mx-auto w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_25px_rgba(87,59,255,0.18)] ${styles[index]}`}
              >
                <Icon size={25} strokeWidth={2.2} />
              </div>

              <p className="mt-4 text-[13px] sm:text-[14px] font-bold leading-[18px] text-[#07113F] whitespace-pre-line">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* AUTHOR SERVICES */}
     <section className="py-3 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-4 sm:px-6 py-5">
      
      <div className="flex items-center gap-3 mb-6">
        <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
          2
        </span>

        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#07113F]">
          Our Author Services
        </h2>
      </div>

      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {services.map(([title, items, Icon], index) => {
          const iconStyles = [
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF9FC] text-[#1498B8]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#FFF0E7] text-[#FF8A2A]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF7F2] text-[#27A86D]",
          ];

          return (
            <div
              key={title}
              className="group bg-white rounded-[13px] border border-[#E8ECF7] px-4 py-5 min-h-[300px] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_18px_38px_rgba(79,70,229,0.14)]"
            >
              <div
                className={`mx-auto w-[66px] h-[66px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_12px_28px_rgba(79,70,229,0.18)] ${iconStyles[index]}`}
              >
                <Icon size={34} strokeWidth={2.1} />
              </div>

              <h3 className="mt-4 text-center text-[14px] sm:text-[15px] font-bold leading-[21px] text-[#07113F] whitespace-pre-line">
                {title}
              </h3>

              <ul className="mt-6 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[11px] sm:text-[12px] font-semibold leading-[17px] text-[#253150]"
                  >
                    <CheckCircle2
                      size={13}
                      strokeWidth={3}
                      className="text-[#573BFF] mt-[1px] shrink-0"
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

      {/* WHY + AREAS */}
      <section className="py-3">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h2 className="text-[16px] font-extrabold">Why Choose RCII</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 items-center">
                <div className="rounded-xl bg-[#F3F6FF] min-h-[180px] flex items-center justify-center">
                  <Scale size={90} className="text-[#573BFF]" />
                </div>

                <ul className="space-y-3">
                  {[
                    "Ethical First Approach",
                    "No acceptance guarantees",
                    "No artificial influence",
                    "No peer-review manipulation",
                    "No predatory journal recommendations",
                    "Full transparency",
                    "Researcher-centered services",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[11.5px] font-semibold text-[#253150]">
                      <CheckCircle2 size={13} className="text-[#0097A7]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h2 className="text-[16px] font-extrabold">Publication Support Areas</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {supportAreas.map(([title, items, Icon]) => (
                  <div key={title} className="rounded-xl border border-[#E8ECF7] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-md">
                    <Icon size={28} className="text-[#573BFF] mb-3" />
                    <h3 className="text-[13px] font-black">{title}</h3>
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2 text-[10.5px] font-semibold text-[#253150]">
                          <CheckCircle2 size={11} className="text-[#573BFF] mt-[2px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUESTED SERVICES */}
      <section className="py-3">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-sm px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                5
              </span>
              <h2 className="text-[16px] font-extrabold">Frequently Requested Services</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {requests.map(([title, Icon]) => (
                <div key={title} className="group text-center rounded-xl border border-[#E8ECF7] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-md">
                  <Icon size={28} className="mx-auto text-[#573BFF]" />
                  <p className="mt-3 text-[11px] font-black leading-[15px] whitespace-pre-line">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="py-3">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-sm px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                6
              </span>
              <h2 className="text-[16px] font-extrabold">Success Metrics</h2>
            </div>

            <div className="rounded-[14px] overflow-hidden bg-gradient-to-r from-[#573BFF] to-[#0097A7]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["10,000+", "Manuscripts Supported", Users],
                  ["300+", "Journals Covered", BookOpen],
                  ["25+", "Countries", Globe2],
                  ["2,000+", "Publication Projects", Award],
                ].map(([num, label, Icon]) => (
                  <div key={label} className="group flex items-center justify-center gap-4 px-5 py-5 border-white/15 border-b lg:border-b-0 lg:border-r last:border-r-0 transition-all duration-500 hover:bg-white/10">
                    <div className="w-[50px] h-[50px] rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-black text-white">{num}</h3>
                      <p className="text-[11px] font-semibold text-white/90">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ETHICS */}
      <section className="py-3">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-sm px-4 sm:px-6 py-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                7
              </span>
              <h2 className="text-[16px] font-extrabold">Publication Ethics</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {ethics.map(([title, Icon]) => (
                <div key={title} className="group text-center p-4 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#F8F7FF]">
                  <Icon size={30} className="mx-auto text-[#573BFF]" />
                  <p className="mt-3 text-[11px] font-black leading-[15px] whitespace-pre-line">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-3 pb-8">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-r from-[#F7F5FF] to-[#EAF9FC] border border-[#EEF0FF] px-5 sm:px-8 py-6">
            <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#573BFF] text-white text-xs font-bold flex items-center justify-center">
                    8
                  </span>
                  <h2 className="text-[20px] sm:text-[24px] font-black">
                    Ready to Strengthen Your <br className="hidden sm:block" />
                    Research Publication Journey?
                  </h2>
                </div>
                <p className="text-[12px] font-semibold text-[#253150] max-w-[560px]">
                  Our experts are here to support you at every step of the way with ethical,
                  transparent, and professional guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#573BFF] text-white text-[13px] font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1">
                  Talk to an Expert <ArrowRight size={15} />
                </button>
                <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[13px] font-bold px-6 py-3 rounded-lg transition-all duration-500 hover:-translate-y-1">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthorServices;