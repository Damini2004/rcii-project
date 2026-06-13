import React from "react";
import {
  ArrowRight,
  Lightbulb,
  Check,
  UserCheck,
  ShieldCheck,
  Target,
  BarChart3,
  FileCheck,
  Rocket,
  Handshake,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Globe2,
  Scale,
  Settings,
  BookOpen,
  Leaf,
  HeartPulse,
  Building2,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bgsup.png"
import checklistImg from "../../assets/ipsup.png"
import computer from "../../assets/ipsup2.png"
import computer1 from "../../assets/ipsup3.png"



function IpinnoSupport() {
  const lifecycle = [
    ["Ideate", "Identify and evaluate innovative ideas.", Lightbulb],
    ["Protect", "Secure your IP with the right protection strategy.", UserCheck],
    ["Validate", "Assess novelty, freedom to operate, and market potential.", ShieldCheck],
    ["Commercialize", "Develop strategies to bring your innovation to market.", Target],
    ["Impact", "Create value and drive societal and economic impact.", BarChart3],
  ];

  const services = [
    ["IP Strategy &\nConsultation", ["Landscape Analysis", "IP Strategy Development", "Technology Assessment", "Roadmapping"], Lightbulb],
    ["Patent Support\nServices", ["Prior Art Search", "Patent Drafting Support", "Patent Filing Guidance", "Office Action Support"], ShieldCheck],
    ["IP Portfolio\nManagement", ["Portfolio Development", "IP Valuation Support", "Docketing & Monitoring", "Portfolio Optimization"], FileCheck],
    ["Technology Transfer\n& Licensing", ["Technology Evaluation", "Licensing Strategy", "Partner Identification", "Deal Support"], Handshake],
    ["Innovation\nCommercialization", ["Go-to-Market Strategy", "Business Model Support", "Market Analysis", "Commercial Viability"], Rocket],
    ["IP Training &\nAwareness", ["Workshops & Webinars", "IP for Researchers", "Innovation Management", "Institutional Training"], GraduationCap],
  ];

  const areas = [
    ["Life Sciences &\nBiotechnology", Lightbulb],
    ["Engineering &\nTechnology", Settings],
    ["Information &\nCommunication", BookOpen],
    ["Materials &\nNanotechnology", Building2],
    ["Social Sciences &\nHumanities", Users],
    ["Environment &\nSustainability", Leaf],
    ["Healthcare &\nPharma", HeartPulse],
  ];

  const resources = [
    "IP Guides & Toolkits",
    "Patent Search Resources",
    "Innovation Case Studies",
    "Webinars & Training",
    "Templates & Checklists",
  ];

  return (
    <div className="bg-white min-h-screen pt-[70px] text-[#07113F]">
      {/* HERO */}
    

      <section className="py-6 relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
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
      
              <span className="text-gray-500">IP & Innovation Support</span>
            </div>
      
            <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-none font-bold text-[#07113F]">
              IP & Innovation <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Support
              </span>
            </h1>
      
            <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-7">
              Protect. Commercialize. Create Impact.
            </p>
      
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
             RCII helps researchers protect their intellectual property, navigate
              the innovation ecosystem, and turn ideas into real-world impact
              through expert IP and commercialization support.
            </p>
      
            <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
              <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
                Talk to an Expert
                <ArrowRight size={18} />
              </button>
      
              <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
    <section className=" bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] px-5 sm:px-8 lg:px-12 py-7 sm:py-8">
      
      <h2 className="text-center text-[22px] sm:text-[26px] font-bold text-[#07113F] mb-10">
        Our IP & Innovation Support Lifecycle
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 lg:gap-y-0">
        {lifecycle.map(([title, text, Icon], index) => {
          const isCyan = index === 3;
          const isGreen = index === 4;

          return (
            <div
              key={title}
              className="group relative text-center px-4 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {index !== lifecycle.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-[34px] left-[70%] w-[85px] xl:w-[118px] border-t-2 border-dotted ${
                    index === 3 ? "border-[#0E9F9A]" : "border-[#4F46E5]"
                  }`}
                >
                  <span
                    className={`absolute -right-1 -top-[5px] w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent ${
                      index === 3 ? "border-l-[#0E9F9A]" : "border-l-[#4F46E5]"
                    }`}
                  />
                </div>
              )}

              <div
                className={`mx-auto w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_12px_28px_rgba(79,70,229,0.18)]
                  ${
                    isGreen
                      ? "bg-[#EAF7F2] text-[#25A976]"
                      : isCyan
                      ? "bg-[#EAF7FC] text-[#119ED3]"
                      : "bg-[#F1EDFF] text-[#573BFF]"
                  }`}
              >
                <Icon size={28} strokeWidth={2.2} />
              </div>

              <h3
                className={`mt-5 text-[14px] sm:text-[16px] font-bold leading-tight ${
                  isGreen
                    ? "text-[#0F9F75]"
                    : isCyan
                    ? "text-[#0797A8]"
                    : "text-[#573BFF]"
                }`}
              >
                {title}
              </h3>

              <p className="mt-3 text-[13px] sm:text-[14px] font-semibold leading-[1.5] text-[#1F2A44] max-w-[230px] mx-auto">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="py-6">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <h2 className="text-center text-[22px] sm:text-[26px] font-bold mb-10">
            Our IP & Innovation Support Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map(([title, items, Icon]) => (
              <div
                key={title}
                className="group bg-white rounded-xl border border-[#E8ECF7] p-4 min-h-[285px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#C7D2FE] hover:shadow-[0_18px_38px_rgba(79,70,229,0.15)]"
              >
                <div className="mx-auto w-[52px] h-[52px] rounded-full bg-[#F1EDFF] text-[#573BFF] flex items-center justify-center transition-all duration-500 group-hover:bg-[#3e28bb] group-hover:text-white group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-3 text-center text-[13px] font-bold leading-[18px] whitespace-pre-line">
                  {title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[10.5px] font-semibold text-[#253150]">
                      <CheckCircle2 size={12} className="text-[#573BFF] mt-[2px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto pt-5 text-[11px] font-black text-[#573BFF] inline-flex items-center gap-2 transition-all duration-500 group-hover:gap-3">
                  Learn More <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-4">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="rounded-[16px] overflow-hidden bg-gradient-to-r from-[#3520E2] to-[#008FBE] shadow-[0_18px_45px_rgba(79,70,229,0.22)]">
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4">
              {[
                ["2,000+", "IP Consultations", ShieldCheck],
                ["1,000+", "Patents Supported", FileCheck],
                ["300+", "Licensing & Technology Transfer", Handshake],
                ["25+", "Countries Served", Globe2],
              ].map(([num, label, Icon]) => (
                <div key={label} className="group flex items-center justify-center gap-4 px-5 py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-white/15 transition-all duration-500 hover:bg-white/10">
                  <div className="w-[50px] h-[50px] rounded-full bg-white/15 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-white leading-none">{num}</h3>
                    <p className="mt-2 text-[11px] sm:text-[12px] font-semibold text-white/90 leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
     <section className="py-2 sm:py-2 bg-white mx-auto px-4 sm:px-6 lg:px-14">
  <div className="max-w-[1420px] ">
    <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] overflow-hidden">
      <div className="grid lg:grid-cols-[46%_54%] items-center gap-6 lg:gap-10 px-5 sm:px-8 lg:px-10 py-1">
        
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
            Why Choose RCII ?
          </h2>

          <div className="mt-3 space-y-1">
            {[
                "Experienced IP professionals with research background",
                "End-to-end support from idea to commercialization",
                "Strong network of IP experts, attorneys & industry partners",
                "Confidential, ethical, and researcher-centric approach",
                "Proven track record in protecting and commercializing innovations",
              ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl px-3 py-2 transition-all duration-500 hover:bg-[#F8F7FF] hover:translate-x-2"
              >
                <div className="w-5 h-5 rounded-full bg-[#0097A7] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(91,77,255,0.35)]">
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

      {/* AREAS */}
     <section className="py-4 sm:py-5 bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
      
      <h2 className="text-center text-[22px] sm:text-[26px] font-bold text-[#07113F] mb-7">
        Areas of Innovation We Support
      </h2>

      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {areas.map(([title, Icon], index) => {
          const styles = [
            "bg-[#EAF9FC] text-[#1498B8]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF9FC] text-[#1498B8]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#F1EDFF] text-[#573BFF]",
            "bg-[#EAF7F2] text-[#63A84B]",
            "bg-[#F1EDFF] text-[#573BFF]",
          ];

          return (
            <div
              key={title}
              className={`
                group relative text-center px-4 py-3
                transition-all duration-500 hover:-translate-y-2 cursor-pointer
                ${index !== areas.length - 1 ? "lg:border-r lg:border-[#E8ECF7]" : ""}
              `}
            >
              <div
                className={`mx-auto w-[62px] h-[62px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_12px_28px_rgba(79,70,229,0.18)] ${styles[index]}`}
              >
                <Icon size={30} strokeWidth={2.1} />
              </div>

              <p className="mt-4 text-[12px] sm:text-[13px] font-bold leading-[19px] text-[#07113F] whitespace-pre-line">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* RESOURCES + CTA */}
    <section className="py-2 pb-6 bg-white">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      
      {/* LEFT BOX */}
      <div className="group relative overflow-hidden bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] min-h-[270px] px-6 sm:px-8 py-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(79,70,229,0.12)]">
        <img
          src={computer}
          alt="IP Resources"
          className="absolute right-4 bottom-2 w-[48%] max-w-[360px] object-contain transition-all duration-700 group-hover:scale-105"
        />

        <div className="relative z-10 ">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-[#07113F] mb-7">
            Resources for Innovators
          </h2>

          <ul className="space-y-3 max-w-[310px]">
            {resources.map((item) => (
              <li
                key={item}
                className="group/item flex items-center gap-3 text-[14px] sm:text-[15px] font-semibold text-[#1F2A44] transition-all duration-500 hover:translate-x-2"
              >
                <ArrowRight
                  size={17}
                  strokeWidth={3}
                  className="text-[#573BFF] shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT CTA */}
  {/* RIGHT CTA */}
<div className="relative overflow-hidden rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_25px_rgba(26,32,80,0.06)] " >
  
  <img
    src={computer1}
    alt=""
    className="absolute inset-0 w-full min-h-[270px] object-cover"
  />

  <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-7">
    
    <h2 className="text-[22px] sm:text-[26px] font-bold leading-[1.2] text-white max-w-[480px]">
      Have an Innovation to Protect
      <br />
      or Commercialize?
    </h2>

    <p className="mt-4 text-[13px] sm:text-[15px] font-semibold leading-[1.8] text-white/95 max-w-[500px]">
      Our experts are here to help you navigate the IP landscape
      and turn your ideas into impact.
    </p>

    <div className="mt-7 flex flex-wrap gap-4">
      <button className="bg-white text-[#573BFF] text-[13px] sm:text-[14px] font-bold px-6 sm:px-8 py-3 rounded-lg inline-flex items-center gap-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        Talk to an Expert
        <ArrowRight size={16} />
      </button>

      <button className="bg-transparent border border-white/40 text-white text-[13px] sm:text-[14px] font-bold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/10">
        Request Consultation
      </button>
    </div>

  </div>
</div>

    </div>
  </div>
</section>
    </div>
  );
}

export default IpinnoSupport;