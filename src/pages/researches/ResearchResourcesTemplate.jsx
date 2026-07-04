import {
  PenLine,BookOpen,Lightbulb,
  BadgeDollarSign,BarChart3,ShieldCheck,Briefcase,
  FileText,Download,CheckCircle, Folder,
  MessageCircle,Sparkles,Database,RefreshCcw,ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/research-development-and-support-banner.webp";
import bg from "../../assets/research2.webp"
import rct from "../../assets/researcher-connect-team.webp"
import auth2 from "../../assets/academic-author-services.webp"

const categories = [
  ["Writing Resources", "Guides, templates, and tools for effective academic writing.", PenLine],
  ["Publishing Resources", "Support for journal submission and publication.", BookOpen],
  ["Research Planning", "Frameworks and templates to plan your research effectively.", Lightbulb],
  ["Grants & Funding", "Find opportunities and manage grant applications.", BadgeDollarSign],
  ["Data & Analysis", "Tools to organize and analyze research data.", BarChart3],
  ["IP & Innovation", "Resources for patents and commercialization.", ShieldCheck],
  ["Career Development", "Build your research profile and skills.", Briefcase],
  ["Templates & Checklists", "Ready-to-use templates for every stage.", FileText],
];

const resources = [
  ["Research Proposal Template", "DOCX"],
  ["Literature Review Guide", "PDF"],
  ["Journal Selection Checklist", "XLS"],
  ["Manuscript Template", "DOCX"],
  ["Cover Letter Template", "DOCX"],
  ["Response to Reviewers Template", "DOCX"],
];

const tools = [
  ["Plagiarism Checker", "Check originality and ethical writing.", CheckCircle],
  ["Reference Manager Guides", "Manage references efficiently.", BookOpen],
  ["AI Writing Assistant Guides", "Use AI responsibly in writing.", Sparkles],
  ["Grammar & Style Checklists", "Improve clarity and style.", FileText],
  ["Research Workflow Templates", "Streamline research projects.", Folder],
  ["Data Management Templates", "Organize and manage research data.", Database],
];

export default function ResearchResourcesPage() {
  return (
    <main className="bg-[#FBFCFF] text-[#07113F] pt-[70px]">
      {/* HERO */}
       <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
       {/* Background image only after 768px */}
       <div
         className=" absolute inset-0 bg-cover  bg-no-repeat"
         style={{
           backgroundImage: `url(${heroBg})`,
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
     
             <span className="text-gray-500">Research Resources & Templates</span>
           </div>
     
           <h1 className="text-[34px] sm:text-[38px] lg:text-[42px] leading-none font-bold text-[#07113F]">
                   Research Resources &{" "}
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Templates
             </span>
           </h1>
     
           <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-3 leading-6 sm:mt-6 max-w-[350px]">
             Tools and Resources to Support Every Step of Your Research Journey
           </p>
     
           <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
            Access a comprehensive collection of guides, templates, checklists,
              and tools designed to help researchers write better, publish faster,
              and stay organized.
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

  <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 py-2 ">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#edf0fb] bg-white px-4 sm:px-6 lg:px-8 py-8 shadow-[0_8px_28px_rgba(79,70,229,0.07)]">
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[26px] font-bold text-[#111832]">
        Explore Our Resource Categories
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5b35ff]" />
    </div>

    <div className="mt-8 grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
      {categories.map(([title, desc, Icon], index) => {
        const styles = [
          ["bg-[#EEF3FF]", "text-[#2F6BFF]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF8F0]", "text-[#1F9A45]"],
          ["bg-[#FFF1E8]", "text-[#F47A20]"],
          ["bg-[#EEF4FF]", "text-[#2979FF]"],
          ["bg-[#F3EDFF]", "text-[#6B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#FFF5E8]", "text-[#FF9700]"],
        ];

        return (
          <div
            key={title}
            className={`group relative flex min-h-[205px] flex-col items-center px-4 py-2 text-center transition-all duration-300 hover:-translate-y-2 ${
              index !== categories.length - 1
                ? "xl:border-r xl:border-[#edf0fb]"
                : ""
            }`}
          >
            <div
              className={`flex h-[66px] w-[66px] items-center justify-center rounded-full ${styles[index][0]} ${styles[index][1]} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(91,53,255,0.16)]`}
            >
              <Icon size={34} strokeWidth={2.2} />
            </div>

            <h3 className="mt-5 min-h-[38px] text-[13px] sm:text-[13.5px] font-bold leading-[18px] text-[#111832]">
              {title}
            </h3>

            <p className="mt-3 max-w-[132px] text-[11px] sm:text-[11.5px] font-semibold leading-[21px] text-[#2f3650]">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* POPULAR */}
      <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 py-2 sm:pb-3">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[26px] font-bold text-[#10162f]">
        Most Popular Resources
      </h2>
    </div>

    <div className="mt-6 grid grid-cols-1 min-[460px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
      {resources.map(([title, type], index) => {
        const fileColors = [
          "bg-[#2F7BFF]",
          "bg-[#F03333]",
          "bg-[#16A267]",
          "bg-[#6755F6]",
          "bg-[#FF9638]",
          "bg-[#2F7BFF]",
        ];

        const descriptions = [
          "Structured template to develop strong research proposals.",
          "Step-by-step guide to conducting a high-quality literature review.",
          "Checklist to evaluate and select the right journal for your research.",
          "Format your manuscript as per journal requirements.",
          "Professional cover letter template for journal submissions.",
          "Template to draft clear and effective responses to reviewers.",
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[272px] flex-col items-center rounded-[10px] border border-[#e8ebf7] bg-white px-5 py-7 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_18px_38px_rgba(91,53,255,0.14)]"
          >
            <div className="relative mb-6">
              <div
                className={`relative flex h-[64px] w-[50px] items-center justify-center rounded-[5px] ${fileColors[index]} text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition-all duration-300 group-hover:scale-110`}
              >
                <FileText size={25} strokeWidth={2.4} />
                <span className="absolute bottom-2 text-[10px] font-bold">
                  {type}
                </span>
                <span className="absolute right-0 top-0 h-0 w-0 border-l-[14px] border-t-[14px] border-l-white/80 border-t-white/40" />
              </div>
            </div>

            <h3 className="min-h-[48px] text-[14px] font-bold leading-[21px] text-[#111832]">
              {title}
            </h3>

            <p className="mt-4 min-h-[72px] text-[12px] font-semibold leading-[23px] text-[#2f3650]">
              {descriptions[index]}
            </p>

            {/* <button className="mt-auto inline-flex items-center gap-2 text-[12px] font-bold text-[#5b35ff] transition-all duration-300 hover:gap-3 hover:text-[#4325d8]">
              <Download size={14} strokeWidth={3} />
              Download
            </button> */}
          </div>
        );
      })}
    </div>

    <div className="mt-6 flex justify-center">
      <Link to="/resources">
      <button className="rounded-[6px] border-2 border-[#8b7cff] px-8 py-3 text-[14px] font-bold text-[#5b35ff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5b35ff] hover:text-white hover:shadow-[0_12px_28px_rgba(91,53,255,0.25)]">
        View All Resources <span className="ml-3">→</span>
      </button>
      </Link>
    </div>
  </div>
</section>
      {/* TOOLS */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 pb-3">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[26px] font-bold text-[#10162f]">
        Tools We Offer
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5b35ff]" />
    </div>

    <div className="mt-7 grid grid-cols-1 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {tools.map(([title, desc, Icon], i) => {
        const styles = [
          ["bg-[#EEF8F0]", "text-[#18A449]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF4FF]", "text-[#1E7BFF]"],
          ["bg-[#EEF8F0]", "text-[#28A745]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#FFF3E6]", "text-[#FF8A00]"],
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[172px] flex-col items-center rounded-[10px] border border-[#e8ebf7] bg-white px-4 py-5 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
          >
            <div
              className={`mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full ${styles[i][0]} ${styles[i][1]} transition-all duration-300 group-hover:scale-110`}
            >
              <Icon size={31} strokeWidth={2.2} />
            </div>

            <h3 className="min-h-[34px] text-[13px] font-bold leading-[17px] text-[#111832]">
              {title}
            </h3>

            <p className="mt-3 max-w-[150px] text-[11px] font-semibold leading-[20px] text-[#2f3650]">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* WHY */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 pb-3">
  <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-6 rounded-[14px] border border-[#eceeff] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(79,70,229,0.06)] lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
    <div className="lg:pl-8">
      <h2 className="text-[20px] -mt-12 sm:text-[26px] font-bold text-[#111832]">
        Why Use Our Resources?
      </h2>

      <ul className="mt-5 space-y-3">
        {[
          "Created by domain experts and research professionals",
          "Save time and improve the quality of your research output",
          "Stay aligned with global standards and best practices",
          "Free and premium resources for every research need",
          "Regularly updated to reflect the latest guidelines",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[11px] sm:text-[13px] font-semibold leading-[18px] text-[#1f2744]"
          >
            <CheckCircle
              size={15}
              className="mt-[1px] shrink-0 text-[#5b35ff]"
              fill="#5b35ff"
              stroke="white"
              strokeWidth={3}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="overflow-hidden transition-all duration-300 hover:-translate-y-1 ">
      <img
        src={bg}
        alt="Research resources"
        className="h-auto w-full object-cover"
      />
    </div>
  </div>
</section>

      {/* STATS */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 pb-5">
  <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-7 shadow-[0_12px_30px_rgba(37,102,232,0.18)]">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {[
        ["500+", "Resources Available", FileText],
        ["50+", "Templates & Checklists", Folder],
        ["10,000+", "Researchers Benefited", MessageCircle],
        ["Regularly", "Updated Content", RefreshCcw],
      ].map(([num, label, Icon], index) => (
        <div
          key={label}
          className={`group flex items-center justify-center gap-4 px-4 transition-all duration-300 hover:-translate-y-1 ${
            index !== 3 ? "lg:border-r lg:border-white/15" : ""
          }`}
        >
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-white/90 text-[#563BFF] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:scale-110">
            <Icon size={28} strokeWidth={2.2} />
          </div>

          <div>
            <div className="text-[19px] font-bold leading-none text-white">
              {num}
            </div>
            <div className="mt-1 text-[11px] font-semibold text-white/85">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-14 pb-8">
  <div
    className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-5 rounded-[14px] border border-[#eceeff] bg-[#f0edff] bg-cover bg-center bg-no-repeat px-5 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)] md:flex-row md:justify-between lg:px-12"
    style={{ backgroundImage: `url(${auth2})` }}
  >
    <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
      <img
        src={rct}
        alt="Resource folder"
        className="h-[99px] w-[130px] object-contain transition-all duration-300 hover:scale-105"
      />

      <div>
        <h2 className="text-[22px] sm:text-[24px] font-bold leading-tight text-[#111832]">
          Need a Specific Resource?
        </h2>

        <p className="mt-3 max-w-[470px] text-[12px] sm:text-[13px] font-semibold leading-[22px] text-[#2f3650]">
          Can’t find what you’re looking for? Our experts can help you
          find or create the right resource for your needs.
        </p>
      </div>
    </div>

    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Link to="/contact">
      <button className="inline-flex items-center justify-center gap-3 rounded-[6px] bg-[#4A28F5] px-8 py-3 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(74,40,245,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3f21dc]">
        Talk to an Expert
        <span>→</span>
      </button>
      </Link>
<Link to="/contact">
      <button className="rounded-[6px] border-2 border-[#8b7cff] bg-white/70 px-8 py-2.5 text-[14px] font-bold text-[#5b35ff] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(91,53,255,0.16)]">
        Request a Resource
      </button>
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}

function Title({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#5b35ff]" />
    </div>
  );
}