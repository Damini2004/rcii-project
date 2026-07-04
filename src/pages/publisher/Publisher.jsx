import React from "react";
import {
  ArrowRight,
  Send,
  TrendingUp,
  Award,
  Network,
  FileText,
  Handshake,
  Globe2,
  BarChart3,
  Users,
  BookOpen,
  ClipboardCheck,
  Building2,
  Headphones,
  CheckCircle,
  Search,
  Globe,
  BookOpenCheck,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import publisherHero from "../../assets/publisher-support-services-banner.webp";
import mapImg from "../../assets/academic-publishing-solutions.webp";
import exposureImg from "../../assets/scholarly-publishing-support.webp";
import engagementImg from "../../assets/research-publishing-support.webp";
import insightsImg from "../../assets/publisher-workflow-management.webp";
import growthImg from "../../assets/journal-publication-services.webp";
import ctaImg from "../../assets/publisher-growth-solutions.webp";

function Publisher() {
  return (
    <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
      {/* HERO */}

  <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[440px] bg-white">
       {/* Background image only after 768px */}
       <div
         className=" absolute inset-0 bg-cover  bg-no-repeat"
         style={{
           backgroundImage: `url(${publisherHero})`,
         }}
       />
     
       {/* Mobile soft background */}
       <div className=" absolute" />
     
       {/* Optional left readable overlay */}
       <div className="" />
     
       <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14 h-full">
         <div className="max-w-[590px] pt-6 sm:pt-8 lg:pt-16 pb-8">
       
     
           <h1 className="text-[34px] sm:text-[38px] lg:text-[38px] leading-[1.24] font-bold text-[#07113F]">
               Empowering Publishers. <span className="bg-[#563BFF]  bg-clip-text text-transparent">
               Amplifying Research Impact.
             </span>
           </h1>

            <div className="mt-5 h-[3px] w-[68px] rounded-full bg-gradient-to-r from-[#563BFF] to-[#02AFC7]" />

     
           <p className="text-[13px] sm:text-[14px] font-semibold text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
              RCI partners with journals, publishing houses, and scholarly
              organizations to enhance visibility, reach, and impact of research
              worldwide.
           </p>
     
           <div className="flex flex-wrap gap-3 mt-5 sm:mt-9">
             <Link to="/contact">
             <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
               Partner with RCII
               <ArrowRight size={18} />
             </button></Link>
      <Link to="/contact">
             <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
               Explore Publisher Solutions
               <ArrowRight size={18} />
             </button></Link>
           </div>
         </div>
       </div>

     </section>

    

      <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-8 lg:px-14">
        <SectionTitle title="Key Benefits for Publishers" />

        <div className="grid grid-cols-1 overflow-hidden rounded-[12px] border border-[#edf0fa] bg-white shadow-[0_8px_28px_rgba(30,40,90,0.06)] sm:grid-cols-2 lg:grid-cols-6">
          <Benefit icon={Send} bg="#f0edff" color="#563BFF" title="Wider Visibility" text="Reach researchers, institutions & libraries globally." />
          <Benefit icon={TrendingUp} bg="#eaf8ef" color="#25a85c" title="Higher Impact" text="Improve citations, downloads & engagement." />
          <Benefit icon={Award} bg="#fff0e7" color="#ff6b19" title="Quality Assurance" text="Access robust peer review networks and ethical support." />
          <Benefit icon={Network} bg="#eaf4ff" color="#2478e8" title="Author Attraction" text="Attract quality submissions from top researchers worldwide." />
          <Benefit icon={FileText} bg="#ffeaf3" color="#f2387d" title="Data & Insights" text="Actionable analytics on performance, reach & reader engagement." />
          <Benefit icon={Handshake} bg="#f0edff" color="#563BFF" title="Strategic Partnership" text="Collaborate with RCI to innovate and grow publishing impact." />
        </div>

        {/* SOLUTIONS + GLOBAL */}
     <section
  className="mt-4 overflow-hidden rounded-[14px]  bg-contain bg-center bg-no-repeat p-5 sm:p-7 "
  style={{ backgroundImage: `url(${mapImg})` }}
>
  <div className="grid gap-5 lg:grid-cols-[1fr_.95fr]">
    {/* Left Card */}
    <div className="relative z-10 rounded-[14px]  p-4">
      <h2 className="mb-4 text-[18px] sm:text-[20px] font-bold text-[#071044]">
        Our Solutions for Publishers
      </h2>

      <div className="space-y-3">
        <Solution icon={BookOpenCheck} title="Journal Indexing & Registration" text="Support for indexing in global databases and directories." />
        <Solution icon={ClipboardCheck} title="Editorial & Peer Review Support" text="Access to expert reviewers and editorial best practices." />
        <Solution icon={FileText} title="Digital Publishing & Workflow" text="Streamlined submission, review and publication workflows." />
        <Solution icon={Megaphone} title="Marketing & Promotion" text="Increase reach through targeted promotion and campaigns." />
        <Solution icon={BarChart3} title="Metrics & Impact Analytics" text="Real-time analytics on citations, usage & altmetrics." />
      </div>
    </div>

    {/* Right Card */}
    <div className="relative z-10 rounded-[14px] p-6 ">
      <h2 className=" text-center text-[18px] sm:text-[20px] font-bold text-[#071044]">
        Global Reach
      </h2>

   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-44">
  <ReachCard icon={Globe2} value="1500+" label="Publishing Partners" bg="#F0EDFF" color="#563BFF" />
  <ReachCard icon={Building2} value="8500+" label="Journals Supported" bg="#EAF4FF" color="#2478E8" />
  <ReachCard icon={Users} value="120+" label="Countries Reached" bg="#EAF8EF" color="#25A85C" />
  <ReachCard icon={BarChart3} value="10M+" label="Research Papers Amplified" bg="#FFEAF3" color="#F2387D" />
</div>
    </div>
  </div>
</section>

       <section className="mt-8 rounded-[14px] border border-[#e8ebf7] bg-white p-4 sm:p-5 shadow-[0_10px_32px_rgba(30,40,90,0.06)]">
  <div className="grid gap-5 lg:grid-cols-[0.85fr_1.55fr] items-start">
    {/* Left Text */}
    <div>
      <h2 className="mb-5 text-[20px] sm:text-[24px] font-bold text-[#071044]">
        Why Publishers Choose RCI
      </h2>

      <div className="space-y-3">
        {[
          "Deep domain expertise in scholarly publishing",
          "End-to-end support from submission to publication",
          "Ethical publishing and compliance assurance",
          "Technology-driven solutions for growth",
          "Global network of researchers and institutions",
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-[11px] sm:text-[13px] font-semibold text-[#303b5d]"
          >
            <CheckCircle
              size={14}
              className="mt-[2px] shrink-0 text-[#321cff]"
             
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
      <ChooseCard img={exposureImg} title="Global Exposure" text="Maximize your journal’s visibility worldwide." />
      <ChooseCard img={engagementImg} title="Author Engagement" text="Build a community of trusted authors." />
      <ChooseCard img={insightsImg} title="Performance Insights" text="Track metrics that matter for your growth." />
      <ChooseCard img={growthImg} title="Sustainable Growth" text="Partner with RCI for long-term impact and success." />
    </div>
  </div>
</section>

      

      <section className="mt-8 rounded-[14px] border border-[#e8ebf7] bg-white px-4 py-3 sm:px-5 shadow-[0_10px_32px_rgba(30,40,90,0.06)]">
  <h2 className="mb-6 text-center text-[20px] sm:text-[24px] font-bold text-[#071044]">
    Trusted by Leading Publishers
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 items-center gap-0 rounded-[10px] border border-[#eef1fb] bg-white overflow-hidden">
    <PublisherLogo springer />
    <PublisherLogo logo="♜" text="ELSEVIER" color="#f26b21" />
    <PublisherLogo text="WILEY" color="#111827" size="20px" />
    <PublisherLogo text="Taylor & Francis&#10;Group" color="#1b2a6b" />
    <PublisherLogo text="SAGE&#10;Publishing" color="#4b2e83" />
    <PublisherLogo text="◆ IEEE" color="#1b3f91" size="17px" />
    <PublisherLogo text="emerald&#10;PUBLISHING" color="#1f9d8a" />
    <PublisherLogo text="AMA&#10;" color="#5b2b8a"  size="20px" />
  </div>
</section>
<section className="mt-8 overflow-hidden rounded-[14px] bg-[linear-gradient(90deg,#1A0082_0%,#2414B8_48%,#0036A8_100%)] px-3 py-3 text-white shadow-[0_16px_38px_rgba(10,20,90,0.25)] sm:px-5">
  <div className="flex flex-col items-center justify-between gap-1 lg:flex-row">
    <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
      <img
        src={ctaImg}
        alt="Publishing collaboration"
        className="h-[95px] w-[190px] shrink-0  object-cover transition-all duration-500 hover:scale-[1.03]"
      />

      <div>
        <h2 className="text-[18px] sm:text-[21px] font-bold leading-tight">
          Let’s Collaborate for Greater Impact
        </h2>
        <p className="mt-2 max-w-[560px] text-[11px] sm:text-[12px] font-semibold leading-[1.55] text-white/90">
          Join RCI and take your publishing to the next level with visibility,
          quality and global recognition.
        </p>
      </div>
    </div>

   <div className="flex shrink-0 flex-row items-center gap-3"> <Link to="/contact">
  <button className="group flex h-[42px] min-w-[165px] items-center justify-center whitespace-nowrap rounded-[6px] bg-white px-5 text-[12px] font-bold text-[#321CFF] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,255,255,0.22)]">
    Become a Partner
    <ArrowRight
      size={14}
      className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
    />
  </button>
</Link> <Link to="/contact">
  <button className="flex h-[42px] min-w-[165px] items-center justify-center whitespace-nowrap rounded-[6px] border border-white/40 bg-[#061B63]/15 px-5 text-[12px] font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
    <Headphones size={14} className="mr-2 shrink-0" />
    Talk to Our Team
  </button></Link>
</div>
  </div>
</section>
      </div>
    </main>
  );
}

function SectionTitle({ title, className = "" }) {
  return (
    <div className={`mb-5 text-center ${className}`}>
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071044]">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#321cff]" />
    </div>
  );
}

function Benefit({ icon: Icon, bg, color, title, text }) {
  return (
    <div className="group border-b border-[#edf0fa] px-5 py-6 text-center transition-all duration-300 hover:bg-[#fbfaff] sm:border-r lg:border-b-0 last:border-r-0">
      <div
        className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={28} strokeWidth={2.2} style={{ color }} />
      </div>

      <h3 className="mt-4 text-[13px] font-bold text-[#071044]">
        {title}
      </h3>

      <p className="mt-3 text-[11px] font-bold leading-[1.75] text-[#303b5d]">
        {text}
      </p>
    </div>
  );
}

function Solution({ icon: Icon, title, text }) {
  return (
    <div className="group flex gap-2.5 rounded-[10px] p-1.5 transition-all duration-500 hover:-translate-y-1 ">
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] transition-all  bg-[#eae9ee]">
        <Icon size={17} strokeWidth={2.3} className="text-[#563BFF] transition-colors " />
      </div>

      <div>
        <h4 className="text-[11px] sm:text-[12px] font-bold leading-tight text-[#071044]">
          {title}
        </h4>
        <p className="mt-0.5 text-[10px] sm:text-[10px] font-semibold leading-[1.45] text-[#5a6482]">
          {text}
        </p>
      </div>
    </div>
  );
}

function ReachCard({ icon: Icon, value, label, bg, color }) {
  return (
    <div className="group min-h-[72px] rounded-[13px] bg-white px-1 py-2 text-center shadow-[0_8px_24px_rgba(30,40,90,0.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(30,40,90,0.16)]">
      <div
        className="mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={18} strokeWidth={2.4} style={{ color }} />
      </div>

      <h3 className="mt-2 text-[16px] font-bold leading-none text-[#071044]">
        {value}
      </h3>

      <p className="mt-1 text-[9px] sm:text-[10px] font-semibold leading-tight text-[#5a6482]">
        {label}
      </p>
    </div>
  );
}

function ChooseCard({ img, title, text }) {
  return (
    <div className="group overflow-hidden rounded-[9px] border border-[#e8ebf7] bg-white text-center shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(30,40,90,0.14)]">
      <div className="h-[78px] sm:h-[88px] lg:h-[130px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="px-2.5 py-3">
        <h3 className="text-[11px] sm:text-[12px] font-bold text-[#12269a]">
          {title}
        </h3>
        <p className="mt-1.5 text-[9.5px] sm:text-[10px] font-bold leading-[1.5] text-[#303b5d]">
          {text}
        </p>
      </div>
    </div>
  );
}

function PublisherLogo({ text, logo, color = "#071044", size = "14px", springer }) {
  return (
    <div className="group flex h-[58px] mt-2 items-center justify-center border-r border-[#eef1fb] bg-white px-3 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbfcff] hover:shadow-[0_10px_24px_rgba(30,40,90,0.10)]">
      {springer ? (
        <div className="text-left leading-none">
          <div className="text-[13px] font-black text-[#e30613]">SPRINGER</div>
          <div className="text-[13px] font-black text-[#0033a0]">NATURE</div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {logo && <span className="text-[20px] text-[#555]">{logo}</span>}
          <span
            className="whitespace-pre-line font-bold leading-tight"
            style={{ color, fontSize: size }}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
}

export default Publisher;