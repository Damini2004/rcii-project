import {
  PenLine,BookOpen,Lightbulb,
  BadgeDollarSign,BarChart3,ShieldCheck,Briefcase,
  FileText,Download,CheckCircle, Folder,
  MessageCircle,Sparkles,Database,RefreshCcw,ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/bgresearch.png";
import bg from "../../assets/research2.png"

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

   <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-8 xl:px-10 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 sm:px-6 lg:px-8 xl:px-10 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
        <div className="text-center">
          <h2 className="text-[18px] sm:text-[21px] font-extrabold text-[#121832]">
            Explore Our Resource Categories
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5b35ff]" />
        </div>

        <div className="mt-8 grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {categories.map(({ title, desc, icon: Icon, color, bg }, index) => (
            <div
              key={title}
              className={`group relative flex min-h-[205px] flex-col items-center px-3 py-2 text-center transition-all duration-300 hover:-translate-y-2 ${
                index !== categories.length - 1
                  ? "xl:border-r xl:border-[#edf0fb]"
                  : ""
              }`}
            >
              <div
                className={`flex h-[74px] w-[74px] items-center justify-center rounded-full ${bg} ${color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_24px_rgba(91,53,255,0.16)]`}
              >
                <Icon size={34} strokeWidth={2.1} />
              </div>

              <h3 className="mt-5 min-h-[36px] text-[14px] font-extrabold leading-[18px] text-[#131936]">
                {title}
              </h3>

              <p className="mt-3 max-w-[135px] text-[12px] font-medium leading-[22px] text-[#374151]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* POPULAR */}
         <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-8 xl:px-10 pb-8">
      <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
        <div className="text-center">
          <h2 className="text-[18px] sm:text-[21px] font-extrabold text-[#121832]">
            Most Popular Resources
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {resources.map((item) => (
            <div
              key={item.title}
              className="group flex min-h-[292px] flex-col items-center rounded-[10px] border border-[#e9ecfb] bg-white px-5 py-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#bdb4ff] hover:shadow-[0_18px_40px_rgba(91,53,255,0.14)]"
            >
              <div className="relative mb-6">
                <div
                  className={`relative flex h-[64px] w-[50px] items-center justify-center rounded-[4px] ${item.color} text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition duration-300 group-hover:scale-110`}
                >
                  <FileText size={25} strokeWidth={2.4} />
                  <span className="absolute bottom-2 text-[10px] font-bold">
                    {item.type}
                  </span>
                  <span className="absolute right-0 top-0 h-0 w-0 border-l-[14px] border-t-[14px] border-l-white/75 border-t-white/35" />
                </div>
              </div>

              <h3 className="min-h-[48px] text-[15px] font-extrabold leading-[20px] text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-4 min-h-[72px] text-[13px] font-medium leading-[24px] text-[#334155]">
                {item.desc}
              </p>

              <button className="mt-auto inline-flex items-center gap-2 text-[13px] font-extrabold text-[#5b35ff] transition-all duration-300 hover:gap-3 hover:text-[#4325d8]">
                <Download size={15} strokeWidth={3} />
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="rounded-[6px] border-2 border-[#8b7cff] px-8 py-3 text-[15px] font-extrabold text-[#5b35ff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5b35ff] hover:text-white hover:shadow-[0_12px_28px_rgba(91,53,255,0.25)]">
            View All Resources <span className="ml-3">→</span>
          </button>
        </div>
      </div>
    </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-2xl bg-white p-5 sm:p-7 shadow-sm border border-indigo-50">
          <Title title="Tools We Offer" />

          <div className="mt-7 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {tools.map(([title, desc, Icon], i) => (
              <div
                key={title}
                className="rounded-xl border border-slate-100 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                    i % 4 === 0
                      ? "bg-green-50 text-green-600"
                      : i % 4 === 1
                      ? "bg-violet-50 text-violet-600"
                      : i % 4 === 2
                      ? "bg-blue-50 text-blue-600"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-xs font-bold">{title}</h3>
                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-6 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-indigo-50 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-lg font-extrabold">Why Use Our Resources?</h2>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {[
                "Created by domain experts and research professionals",
                "Save time and improve the quality of your research output",
                "Stay aligned with global standards and best practices",
                "Free and premium resources for every research need",
                "Regularly updated to reflect the latest guidelines",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-[#5b35ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[230px] rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
            <div className="mx-auto max-w-sm rounded-xl bg-white p-5 shadow-lg">
              <div className="mb-4 h-3 w-24 rounded bg-indigo-100" />
              <div className="space-y-3">
                <div className="h-8 rounded bg-slate-100" />
                <div className="h-8 rounded bg-slate-100" />
                <div className="h-8 rounded bg-slate-100" />
              </div>
            </div>
            <div className="absolute bottom-6 left-8 h-20 w-20 rounded-full bg-indigo-200/50" />
            <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4cff] text-white shadow-lg animate-bounce">
              <Download />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-4 rounded-2xl bg-gradient-to-r from-[#512bff] via-[#385cff] to-[#00a8b5] p-5 text-white sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["500+", "Resources Available", FileText],
            ["50+", "Templates & Checklists", Folder],
            ["10,000+", "Researchers Benefited", MessageCircle],
            ["Regularly", "Updated Content", RefreshCcw],
          ].map(([num, label, Icon]) => (
            <div key={label} className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Icon size={24} />
              </div>
              <div>
                <div className="text-xl font-extrabold">{num}</div>
                <div className="text-xs text-white/80">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col gap-5 rounded-2xl bg-[#f0edff] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Need a Specific Resource?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Can’t find what you’re looking for? Our experts can help you find
              or create the right resource for your research.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-md bg-[#5b35ff] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#4828df]">
              Talk to an Expert →
            </button>
            <button className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#5b35ff] transition hover:-translate-y-1 hover:shadow-md">
              Request a Resource
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Title({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#5b35ff]" />
    </div>
  );
}