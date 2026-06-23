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
import auth1 from "../../assets/auth1.png"
import auth2 from "../../assets/auth2.png"



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
    ["Conferences", ["IEEE",  "AIP", "ACM", "Springer Proceedings","Elsevier Proceedings"], Trophy],
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
     
           <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
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
             <Link to="/contact">
             <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
               Talk to an Expert
               <ArrowRight size={18} />
             </button>
             </Link>
     <Link to="/contact">
             <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
               Explore All Services
             </button>
             </Link>
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
    <section className="py-3 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* WHY CHOOSE */}
      <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] p-5">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
            3
          </span>
          <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F]">
            Why Choose RCII
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[52%_48%] gap-4 items-center">
          <div className="group rounded-xl overflow-hidden min-h-[280px] flex items-center justify-center transition-all duration-500 hover:-translate-y-1">
            <img
              src={auth1}
              alt="Ethical First"
              className="w-full max-h-[220px] object-contain transition-all duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold text-[#07113F] mb-4">
              Ethical First Approach
            </h3>

            <ul className="space-y-4">
              {[
                "No acceptance guarantees",
                "No editorial influence",
                "No peer-review manipulation",
                "No predatory journal recommendations",
                "Full transparency",
                "Researcher-centered services",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[11.5px] sm:text-[12px] font-semibold leading-[17px] text-[#253150] transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle2
                    size={14}
                    strokeWidth={3}
                    className="text-[#0EA5B7] mt-[1px] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* PUBLICATION SUPPORT AREAS */}
      <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] p-5">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
            4
          </span>
          <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F]">
            Publication Support Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {supportAreas.map(([title, items, Icon], index) => {
            const iconStyle =
              index === 1
                ? "bg-[#EAF9FC] text-[#1498B8]"
                : index === 2
                ? "bg-[#F1EDFF] text-[#573BFF]"
                : "bg-[#F1EDFF] text-[#573BFF]";

            return (
              <div
                key={title}
                className="group rounded-[14px] border border-[#E8ECF7] bg-white px-5 py-5 min-h-[230px] transition-all duration-500 hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_16px_34px_rgba(79,70,229,0.13)]"
              >
                <div
                  className={`mx-auto w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${iconStyle}`}
                >
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="mt-3 text-center text-[15px] font-bold text-[#07113F]">
                  {title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-semibold leading-[16px] text-[#253150]"
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
  </div>
</section>

      {/* REQUESTED SERVICES */}
     <section className="py-3 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-4 sm:px-6 py-5">
      
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
          5
        </span>

        <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F]">
          Frequently Requested Services
        </h2>
      </div>

      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {requests.map(([title, Icon], index) => {
          const iconStyles = [
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#FFF0E7] text-[#FF7A22]",
            "bg-[#EAF9FC] text-[#1498B8]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF9FC] text-[#1498B8]",
            "bg-[#F1EDFF] text-[#573BFF]",
          ];

          return (
            <div
              key={title}
              className="group text-center bg-white rounded-[14px] border border-[#E8ECF7] px-4 py-5 min-h-[130px] flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_16px_34px_rgba(79,70,229,0.13)]"
            >
              <div
                className={`w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_24px_rgba(79,70,229,0.15)] ${iconStyles[index]}`}
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

      {/* SUCCESS METRICS */}
     <section className="py-3 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-4 sm:px-6 py-5">
      
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
          6
        </span>

        <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F]">
          Success Metrics
        </h2>
      </div>

      <div className="rounded-[16px] overflow-hidden bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10,000+", "Researchers\nSupported", Users],
            ["300+", "Journals\nCovered", BookOpen],
            ["25+", "Countries", Globe2],
            ["2,000+", "Publication\nProjects", Award],
          ].map(([num, label, Icon], index) => (
            <div
              key={label}
              className={`
                group relative flex items-center justify-center gap-5 px-6 py-6
                transition-all duration-500 cursor-pointer hover:bg-white/10
                ${index !== 3 ? "lg:border-r lg:border-white/15" : ""}
                ${index < 2 ? "sm:border-b lg:border-b-0 border-white/15" : ""}
              `}
            >
              <div className="w-[56px] h-[56px] rounded-full bg-white text-[#573BFF] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)]">
                <Icon size={30} strokeWidth={2.1} />
              </div>

              <div>
                <h3 className="text-[18px] sm:text-[22px] font-bold leading-none text-white">
                  {num}
                </h3>

                <p className="mt-2 text-[12px] sm:text-[13px] font-semibold leading-[16px] text-white/95 whitespace-pre-line">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ETHICS */}
     <section className="py-3 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] px-4 sm:px-6 py-5">
      
      <div className="flex items-center gap-3 mb-5">
        <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)]">
          7
        </span>

        <h2 className="text-[18px] sm:text-[22px] font-bold text-[#07113F]">
          Publication Ethics
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[34%_66%] gap-6 items-center">
        
        <div>
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#573BFF] mb-3">
            Our Commitment
          </h3>

          <p className="text-[12px] sm:text-[13px] font-semibold leading-[1.9] text-[#253150] max-w-[460px]">
            Researcher Connect follows international publication ethics
            principles and promotes responsible research dissemination.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {ethics.map(([title, Icon], index) => (
            <div
              key={title}
              className={`group text-center px-4 py-2 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                index !== ethics.length - 1
                  ? "lg:border-r lg:border-[#E8ECF7]"
                  : ""
              }`}
            >
              <div className="mx-auto w-[50px] h-[50px] rounded-full bg-[#F1EDFF] text-[#573BFF] flex items-center justify-center transition-all duration-500 group-hover:bg-[#573BFF] group-hover:text-white group-hover:scale-110 ">
                <Icon size={26} strokeWidth={2.1} />
              </div>

              <p className="mt-2 text-[13px] sm:text-[14px] font-bold leading-[18px] text-[#07113F] whitespace-pre-line">
                {title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* CTA */}
     <section className="py-3 pb-8 bg-[#FBFCFF]">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="group relative overflow-hidden rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.05)] min-h-[170px] px-5 sm:px-7 lg:px-8 py-6">
      
      <img
        src={auth2}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-[16px] transition-all duration-700 group-hover:scale-105"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
        
        <div>
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-[#573BFF] text-white text-[13px] font-bold flex items-center justify-center shadow-[0_6px_14px_rgba(87,59,255,0.25)] shrink-0 mt-1">
              8
            </span>

            <div>
              <h2 className="text-[18px] sm:text-[25px]  font-bold leading-tight text-[#07113F]">
                Ready to Strengthen Your <br className="hidden sm:block" />
                Research Publication Journey?
              </h2>

              <p className="sm:mt-4 mt-2 text-[12px] sm:text-[13px] font-semibold leading-[1.6] text-[#253150] max-w-[410px]">
                Our experts are here to support you at every step of the way
                with ethical, transparent, and professional guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 lg:gap-8 lg:pr-12">
           <Link to="/contact">
          <button className="bg-[#573BFF] text-white text-[13px] sm:text-[14px] font-bold px-6 py-3 rounded-lg inline-flex items-center gap-3 shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-[#4338CA] hover:shadow-xl">
            Talk to an Expert
            <ArrowRight size={16} strokeWidth={3} />
          </button>
          </Link>
 <Link to="/contact">
          <button className="bg-white/80 text-[#2563EB] border-2 border-[#69A9E8] text-[13px] sm:text-[14px] font-bold px-6 py-3 rounded-lg transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
            Request Consultation
          </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default AuthorServices;