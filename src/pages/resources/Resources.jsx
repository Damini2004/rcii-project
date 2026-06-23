import React from "react";
import {
  Search,
  BookOpen,
  FileText,
  MonitorPlay,
  PenTool,
  PieChart,
  Users,
  ArrowRight,
  Download,
  PlayCircle,
  BarChart3,
  CheckCircle,
  Calculator,
  ClipboardCheck,
  Mail,
  Bell,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bgresources.png";
import bookImg from "../../assets/resource1.png";
import checklistImg from "../../assets/resource2.png";
import webinarImg from "../../assets/resource3.png";
import articleImg from "../../assets/resource4.png";
import infographicImg from "../../assets/resource5.png";
import envelopeImg from "../../assets/resource6.png";
import ctaImg from "../../assets/resource7.png";

const Resources = () => {
  return (
    <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
      {/* HERO */}
 <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[420px] bg-white">
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
         <div className="max-w-[600px] pt-6 sm:pt-8 lg:pt-10 pb-8">
           <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
             <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
               Home
             </Link>
     
            
     
             <span className="text-gray-400">›</span>
     
             <span className="text-gray-500">Resources</span>
           </div>
     
           <h1 className="text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.3] font-bold text-[#07113F]">
              Knowledge.Tools.Insights. <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
              All in One Place.
             </span>
           </h1>
     
          
     
           <p className="text-[13px] sm:text-[14px] font-semibold text-[#1c1f25] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
             Explore our curated resources to stay informed, improve your
              research and publishing journey, and drive greater impact.
           </p>
            <div className="mt-7 flex h-[46px] max-w-[450px] items-center rounded-[6px] border border-[#dce1f1] bg-white px-4 shadow-[0_8px_22px_rgba(30,40,90,0.06)]">
              <input
                placeholder="Search resources, guides, templates, webinars..."
                className="w-full bg-transparent text-[12px] font-semibold outline-none placeholder:text-[#8a92aa]"
              />
              <Search size={18} className="text-[#64636c]" />
            </div>
     
         
         </div>
       </div>
     </section>

      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-8 lg:px-14">
        <SectionTitle title="Browse by Category" />

        {/* CATEGORY */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Category icon={BookOpen} bg="#eeeaff" color="#563BFF" title="Guides & E-books" />
          <Category icon={FileText} bg="#eaf8ef" color="#31aa63" title="Templates" />
          <Category icon={MonitorPlay} bg="#eaf2ff" color="#2478e8" title="Webinars & Videos" />
          <Category icon={PenTool} bg="#fff0e7" color="#ff7a22" title="Articles & Blog" />
          <Category icon={PieChart} bg="#f0eaff" color="#6b36ff" title="Infographics" />
          <Category icon={Users} bg="#e8fbf8" color="#14a997" title="Case Studies" />
        </div>

        <SectionTitle title="Featured Resources" className="mt-8" />

        {/* FEATURED */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <ResourceCard tag="GUIDE" img={bookImg} title="A Comprehensive Guide to Publishing in Scopus Indexed Journals" action="Read More" />
          <ResourceCard tag="TEMPLATE" img={checklistImg} title="Journal Selection Checklist for Researchers" action="Download" download />
          <ResourceCard tag="WEBINAR" img={webinarImg} title="Maximize Research Impact with the Right Publishing Strategy" action="Watch Now" play />
          <ResourceCard tag="ARTICLE" img={articleImg} title="Understanding Intellectual Property: A Researcher’s Perspective" action="Watch Now" />
          <ResourceCard tag="INFOGRAPHIC" img={infographicImg} title="Global Research Trends 2024: Key Insights" action="View Now" />
        </div>

        <SectionTitle title="Tools & Calculators" className="mt-8" />

        {/* TOOLS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Tool icon={BarChart3} bg="#eeeaff" color="#563BFF" title="Journal Metrics Finder" />
          <Tool icon={Search} bg="#eaf8ef" color="#31aa63" title="Indexing Check Tool" />
          <Tool icon={Calculator} bg="#eaf2ff" color="#2478e8" title="Plagiarism Estimator" />
          <Tool icon={ClipboardCheck} bg="#fff0e7" color="#ff7a22" title="Publication Timeline Calculator" />
        </div>

        {/* NEWSLETTER */}
        <section className="mt-8 rounded-[12px] bg-[#f2efff] px-5 py-6 shadow-[0_10px_30px_rgba(30,40,90,0.06)] sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-5">
              <img src={envelopeImg} alt="" className="w-[90px] sm:w-[120px]" />
              <div>
                <h3 className="text-[18px] font-bold">Stay Updated with the Latest Resources</h3>
                <p className="mt-2 max-w-[520px] text-[12px] font-bold leading-[1.8] text-[#354060]">
                  Subscribe to our newsletter and receive the latest guides,
                  webinars, articles, and updates directly in your inbox.
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[470px] flex-col gap-3 sm:flex-row">
              <input
                placeholder="Enter your email address"
                className="h-[44px] flex-1 rounded-[6px] border border-[#dce1f1] bg-white px-4 text-[12px] font-semibold outline-none"
              />
              <button className="h-[44px] rounded-[6px] bg-[#4a3ada] px-7 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#230fbf]">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>

       <section>
  <SectionTitle title="Popular Topics" className="mt-8" />

  <div className="grid grid-cols-5 lg:grid-cols-10 gap-2">
    {[
      "Scopus Indexing",
      "Web of Science",
      "Impact Publishing",
      "IPR & Patents",
      "Q1 & NIRF Rankings",
      "Research Impact",
      "Plagiarism & Ethics",
      "Open Access",
      " Publishing",
      "Startup & Innovation",
    ].map((t) => (
      <button
        key={t}
        className="
          h-[34px]
          rounded-[6px]
          border
          border-[#563BFF]
          bg-white
          px-2
          text-[10px]
          lg:text-[10px]
          font-bold
          text-[#5a49ed]
          whitespace-nowrap
          transition-all
          duration-300
          hover:bg-[#4a3ada]
          hover:text-white
          hover:-translate-y-[2px]
        "
      >
        {t}
      </button>
    ))}
  </div>
</section>
        {/* CTA */}
        <section className="mt-8 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,#07135f_0%,#0f1f9b_55%,#032cb7_100%)] px-5 py-6 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)] sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-5">
              <img src={ctaImg} alt="" className="w-[120px]" />
              <div>
                <h3 className="text-[21px] font-bold">
                  Can’t find what you’re looking for?
                </h3>
                <p className="mt-2 text-[12px] font-semibold text-white/85">
                  Our experts are here to help you find the right resource.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
               <Link to="/contact">
              <button className="group h-[48px] rounded-[6px] bg-white px-6 text-[13px] font-bold text-[#321cff] transition-all duration-300 hover:-translate-y-1">
                Request a Resource
                <ArrowRight size={16} className="ml-2 inline transition group-hover:translate-x-1" />
              </button>
</Link> <Link to="/contact">
              <button className="h-[48px] rounded-[6px] border border-white/40 px-6 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Headphones size={16} className="mr-2 inline" />
                Talk to Our Expert
              </button></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

function SectionTitle({ title, className = "" }) {
  return (
    <div className={`mb-5 text-center ${className}`}>
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071044]">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#3e2beb]" />
    </div>
  );
}

function Category({ icon: Icon, bg, color, title }) {
  return (
    <div className="group min-h-[205px] rounded-[10px] border border-[#e8ebf7] bg-white p-5 text-center shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.12)]">
      <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: bg }}>
        <Icon size={30} style={{ color }} strokeWidth={2.2} />
      </div>
      <h3 className="mt-4 text-[13px] font-bold">{title}</h3>
      <p className="mt-3 text-[11px] font-bold leading-[1.7] text-[#3d4665]">
        Access curated resources designed for researchers and institutions.
      </p>
      {/* <button className="mt-4 text-[11px] font-bold text-[#321cff]">
        Explore <ArrowRight size={13} className="inline" />
      </button> */}
    </div>
  );
}

function ResourceCard({ img, tag, title, action, download, play }) {
  return (
    <div className="group overflow-hidden rounded-[8px] border border-[#e8ebf7] bg-white shadow-[0_8px_24px_rgba(30,40,90,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.13)]">
      <div className="relative h-[145px] overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-[4px] bg-white px-2 py-1 text-[9px] font-bold text-[#321cff]">
          {tag}
        </span>
        {play && <PlayCircle size={48} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />}
      </div>
      <div className="p-4">
        <h3 className="min-h-[54px] text-[12px] font-bold leading-[1.55]">{title}</h3>
        {/* <button className="mt-3 text-[11px] font-bold text-[#321cff]">
          {action} {download ? <Download size={13} className="inline" /> : <ArrowRight size={13} className="inline" />}
        </button> */}
      </div>
    </div>
  );
}

function Tool({ icon: Icon, bg, color, title }) {
  return (
    <div className="group flex min-h-[120px] items-center gap-5 rounded-[10px] border border-[#e8ebf7] bg-white p-5 shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.12)]">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: bg }}>
        <Icon size={28} style={{ color }} />
      </div>
      <div>
        <h3 className="text-[12px] font-bold">{title}</h3>
        <p className="mt-2 text-[11px] font-bold leading-[1.6] text-[#3d4665]">
          Quick access tool for researchers.
        </p>
        {/* <button className="mt-3 text-[11px] font-bold text-[#321cff]">
          Use Tool <ArrowRight size={13} className="inline" />
        </button> */}
      </div>
    </div>
  );
}

export default Resources;