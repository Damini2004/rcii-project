import React from "react";
import {
  Search,
  FileText,
  CalendarDays,
  PenLine,
  UploadCloud,
  MessageCircle,
  BadgeCheck,
  CheckCircle,
  Building2,
  Globe,
  Handshake,
  Users,
  GraduationCap,
  HeartHandshake,
  FlaskConical,
  Leaf,
  BookOpen,
  Settings,
  IndianRupee,
  FileBadge,
  Smile,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bggrant.png";
import whyImg from "../../assets/grant2.png";
import auth from "../../assets/auth2.png"

const GrantFunding = () => {
  const lifecycle = [
    ["Identify", "Discover suitable funding opportunities.", Search],
    ["Assess", "Evaluate eligibility and alignment.", FileText],
    ["Plan", "Develop timeline and documents.", CalendarDays],
    ["Develop", "Prepare compelling proposals.", PenLine],
    ["Submit", "Submit before due dates.", UploadCloud],
    ["Follow-up", "Track progress and respond to queries.", MessageCircle],
    ["Manage", "Post-award support and reporting guidance.", BadgeCheck],
  ];

  const services = [
    ["Funding Opportunity Search", ["Global Funding Database", "Customized Opportunity Matching", "Deadline Alerts", "Funding Trend Analysis"], Search],
    ["Proposal Development", ["Proposal Writing", "Research Plan", "Budget Preparation", "Supporting Documents"], FileText],
    ["Budgeting & Financial Planning", ["Budget Structuring", "Cost Justification", "Resource Planning", "Financial Compliance"], IndianRupee],
    ["Review & Refinement", ["Expert Review", "Feedback & Improvement", "Compliance Check", "Proposal Polishing"], PenLine],
    ["Submission Support", ["Portal Guidance", "Document Formatting", "Submission Verification", "Online Submission"], UploadCloud],
    ["Post-Award Support", ["Award Management", "Reporting Assistance", "Milestone Tracking", "Compliance Support"], Award],
  ];

  const fundingSources = [
    ["Government Grants", Building2],
    ["International Funding Agencies", Globe],
    ["Private Foundations & Trusts", Handshake],
    ["Industry Collaborations", Users],
    ["University Seed Grants", GraduationCap],
    ["CSR & Philanthropic Grants", HeartHandshake],
  ];

  const researchAreas = [
    ["Engineering & Technology", Settings],
    ["Life Sciences & Medicine", HeartHandshake],
    ["Physical & Earth Sciences", FlaskConical],
    ["Social Sciences & Humanities", Users],
    ["Environment & Sustainability", Leaf],
    ["Education & Development", GraduationCap],
    ["Interdisciplinary Research", BookOpen],
  ];

  const whyPoints = [
    "Experienced grant experts with domain knowledge",
    "Access to a wide range of global funding opportunities",
    "High-quality, compliant, and impact-driven proposals",
    "End-to-end support from ideation to award management",
    "Ethical practices with complete transparency",
    "Proven track record of successful funding outcomes",
  ];

  const impact = [
    ["₹250 Cr+", "Funding Secured", IndianRupee],
    ["1,200+", "Proposals Supported", FileBadge],
    ["35+", "Countries Covered", Globe],
    ["85%+", "Client Satisfaction Rate", Smile],
  ];

  return (
    <main className="bg-[#f8f9ff] text-[#10162f] pt-[70px]">
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
      
        <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12 h-full">
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
      
              <span className="text-gray-500">Grant & Funding Support</span>
            </div>
      
            <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
            Grant & Funding <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Support
              </span>
            </h1>
      
            <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-7">
              Empowering Your Research with the Right Funding
            </p>
      
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
            RCII empowers researchers to find, secure, and successfully manage
              research funding through expert guidance and end-to-end support.
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
              </button></Link>
            </div>
          </div>
        </div>
      </section>

 

     {/* LIFECYCLE */}
<section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 py-6">
  <Card>
    <SectionTitle title="Our Grant & Funding Support Lifecycle" />

    <div className="mt-8 grid grid-cols-1 gap-y-8 min-[430px]:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
      {lifecycle.map(([title, desc, Icon], index) => (
        <div
          key={title}
          className="group relative flex min-h-[150px] flex-col items-center px-3 text-center transition-all duration-300 hover:-translate-y-2"
        >
          {index !== lifecycle.length - 1 && (
            <div className="absolute left-[72%] top-[31px] hidden w-[55px] items-center xl:flex">
              <div className="h-[1px] flex-1 bg-[#cfd4ee]" />
              <span className="ml-1 text-[#3b25c7]">›</span>
            </div>
          )}

          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F2ECFF] text-[#5138ff] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(91,53,255,0.16)]">
            <Icon size={26} strokeWidth={2.3} />
          </div>

          <h3 className="mt-4 text-[12px] font-bold text-[#3b25c7]">
            {title}
          </h3>

          <p className="mt-2 max-w-[120px] text-[10px] font-semibold leading-[16px] text-[#1f2744]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </Card>
</section>

{/* SERVICES */}
<section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <Card>
    <SectionTitle title="Our Grant & Funding Services" />

    <div className="mt-7 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {services.map(([title, list, Icon], index) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#FFF1E8]", "text-[#F47A20]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF8F0]", "text-[#28A745]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[292px] flex-col rounded-[10px] border border-[#e8ebf7] bg-white px-5 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
          >
            <div
              className={`mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full ${styles[index][0]} ${styles[index][1]} transition-all duration-300 group-hover:scale-110`}
            >
              <Icon size={28} strokeWidth={2.2} />
            </div>

            <h3 className="mt-4 min-h-[42px] text-[13px] font-bold leading-[17px] text-[#111832]">
              {title}
            </h3>

            <ul className="mt-4 space-y-2.5 text-left">
              {list.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[11px] font-semibold leading-[15px] text-[#2f3650]"
                >
                  <CheckCircle
                    size={12}
                    className="mt-[1px] shrink-0 text-[#5138ff]"
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-auto pt-4 text-left text-[10px] font-bold text-[#5138ff] transition-all duration-300 hover:translate-x-1">
              Learn More →
            </button> */}
          </div>
        );
      })}
    </div>
  </Card>
</section>

    {/* SOURCES */}
<section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
    <SectionTitle title="Funding Sources We Assist With" />

    <div className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
      {fundingSources.map(([title, Icon]) => (
        <div
          key={title}
          className="group flex min-h-[128px] flex-col items-center justify-center rounded-[10px] border border-[#e8ebf7] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_14px_30px_rgba(91,53,255,0.12)]"
        >
          <div className="flex h-[48px] w-[48px] items-center justify-center text-[#2F5BFF] transition-all duration-300 group-hover:scale-110">
            <Icon size={32} strokeWidth={2.2} />
          </div>

          <h3 className="mt-3 max-w-[130px] text-[12px] font-bold leading-[18px] text-[#111832]">
            {title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

{/* RESEARCH AREAS */}
<section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <SectionTitle title="Research Areas We Support" />

    <div className="mt-6 grid grid-cols-1 gap-0 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {researchAreas.map(([title, Icon], index) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF8F0]", "text-[#4CAF50]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
        ];

        return (
          <div
            key={title}
            className={`group flex min-h-[120px] flex-col items-center justify-center px-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#fbfaff] ${
              index !== researchAreas.length - 1
                ? "xl:border-r xl:border-[#edf0fb]"
                : ""
            }`}
          >
            <div
              className={`flex h-[54px] w-[54px] items-center justify-center rounded-full ${styles[index][0]} ${styles[index][1]} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(91,53,255,0.12)]`}
            >
              <Icon size={25} strokeWidth={2.2} />
            </div>

            <h3 className="mt-3 max-w-[120px] text-[11px] font-bold leading-[15px] text-[#111832]">
              {title}
            </h3>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* WHY */}
      <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-6 rounded-[14px] border border-[#eceeff] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] lg:grid-cols-[1fr_1fr] lg:px-10">
    
    <div className="flex justify-center">
      <img
        src={whyImg}
        alt="Why researchers choose RCI"
        className="w-full max-w-[560px] rounded-[12px] object-contain transition-all duration-300 hover:scale-[1.03]"
      />
    </div>

    <div className="lg:pl-4">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111832]">
        Why Researchers Choose RCII
      </h2>

      <div className="mt-2 h-[3px] w-11 rounded-full bg-[#00a6c8]" />

      <ul className="mt-3 space-y-3">
        {whyPoints.map((item) => (
          <li
            key={item}
            className="group flex items-start gap-3 rounded-[6px] px-2 py-1 text-[14px] font-semibold leading-[19px] text-[#1f2744] transition-all duration-300 hover:translate-x-1 "
          >
            <CheckCircle
              size={20}
              className="mt-[1px] shrink-0 text-[#00a6c8] transition-all duration-300 group-hover:scale-125"
              fill="#00a6c8"
              stroke="white"
              strokeWidth={3}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>

      {/* IMPACT */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-5 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)] sm:px-7">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {impact.map(([num, label, Icon], index) => (
        <div
          key={label}
          className={`group flex items-center justify-center gap-4 px-4 py-2 transition-all duration-300 hover:-translate-y-1 ${
            index !== impact.length - 1 ? "lg:border-r lg:border-white/15" : ""
          }`}
        >
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-white text-[#563BFF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(255,255,255,0.25)]">
            <Icon size={32} strokeWidth={2.2} />
          </div>

          <div className="min-w-[110px]">
            <div className="text-[20px] font-bold leading-none text-white">
              {num}
            </div>
            <div className="mt-1 max-w-[120px] text-[11px] font-semibold leading-[15px] text-white/90">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-10">
  <div
    className="mx-auto w-full max-w-[1420px] overflow-hidden rounded-[10px] border border-[#eceeff] bg-[#f0edff] bg-cover bg-center bg-no-repeat px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-7 lg:px-10"
    style={{ backgroundImage: `url(${auth})` }}
  >
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#5138ff] text-white shadow-[0_10px_26px_rgba(81,56,255,0.25)] transition-all duration-300 hover:scale-110">
          <Award size={32} strokeWidth={2.1} />
        </div>

        <div>
          <h2 className="text-[20px] font-bold leading-tight text-[#111832] sm:text-[22px]">
            Ready to Secure Your Next Grant?
          </h2>

          <p className="mt-2 text-[11px] font-semibold leading-[18px] text-[#1f2744] sm:text-[12px]">
            Our experts are here to guide you at every step of your funding journey.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
         <Link to="/contact">
        <button className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[5px] bg-[#5138ff] px-7 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(81,56,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#402bd8] hover:shadow-[0_14px_30px_rgba(81,56,255,0.35)]">
          Talk to an Expert
          <span>→</span>
        </button>
</Link>
 <Link to="/contact">
        <button className="inline-flex h-[44px] items-center justify-center rounded-[5px] border border-[#8b7cff] bg-white/80 px-7 text-[12px] font-bold text-[#5138ff] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_24px_rgba(91,53,255,0.16)]">
          Request Consultation
        </button>
        </Link>
      </div>

    </div>
  </div>
</section>
    
    
        </main>
  );
};

function Card({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
      {children}
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#10162f]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5138ff]" />
    </div>
  );
}

function SmallBox({ title, Icon }) {
  return (
    <div className="group rounded-[10px] border border-[#e8ebf7] bg-white px-3 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]">
      <div className="mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110">
        <Icon size={22} />
      </div>
      <h3 className="mt-3 text-[11px] font-bold leading-[16px] text-[#111832]">
        {title}
      </h3>
    </div>
  );
}

export default GrantFunding;