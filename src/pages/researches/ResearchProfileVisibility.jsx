import React from "react";
import {
  User,
  FileText,
  Globe,
  BarChart3,
  Users,
  Eye,
  Target,
  TrendingUp,
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Award,
  Edit3,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bgprofile.png";
import auth1 from "../../assets/auth2.png"

function ResearchProfileVisibility() {
  const identitySteps = [
    ["Create", "Develop a comprehensive researcher profile.", User],
    ["Showcase", "Highlight your research, publications & expertise.", FileText],
    ["Connect", "Get discovered by collaborators & peers.", Globe],
    ["Measure", "Track impact and visibility across platforms.", BarChart3],
    ["Grow", "Strengthen your academic presence globally.", Users],
  ];

  const services = [
    ["Researcher Profile Creation", ["Profile Setup", "Academic Bio Writing", "Affiliation & Expertise", "Profile Optimization"], User],
    ["ORCID & Researcher ID Integration", ["ORCID Registration", "Profile Synchronization", "ResearcherID / Scopus ID", "Cross-Platform Linking"], Award],
    ["Google Scholar Optimization", ["Profile Setup & Claiming", "Citation Tracking", "h-index Monitoring", "Profile Enhancement"], Globe],
    ["Research Impact Tracking", ["Citation Analysis", "h-index & i10-index", "Impact Dashboards", "Trend Analysis"], BarChart3],
    ["Academic Network Visibility", ["Networking Strategy", "Platform Presence", "Collaboration Boost", "Visibility Improvement"], Users],
    ["Profile & Content Enhancement", ["Profile Content Review", "Keyword Optimization", "Research Highlights", "Ongoing Updates"], Edit3],
  ];

  const platforms = ["Google Scholar", "ORCID", "Scopus", "Web of Science", "Publons", "LinkedIn"];

  const visibility = [
    ["Increase Discoverability", "Get easily found by peers, collaborators & institutions.", Eye],
    ["Expand Collaborations", "Connect with researchers worldwide.", Users],
    ["Enhance Impact", "Improve citations and research influence.", Target],
    ["Career Advancement", "Stronger profile, better opportunities.", TrendingUp],
    ["Global Recognition", "Build a credible academic identity globally.", Globe],
  ];

  const impact = [
    ["10,000+", "Profiles Optimized", User],
    ["300+", "Institutions Served", BookOpen],
    ["25+", "Countries", Globe],
    ["95%", "Client Satisfaction", ShieldCheck],
    ["4.5M+", "Profile Views Generated", Eye],
  ];

  const commitment = [
    ["Ethical Practices", ShieldCheck],
    ["Transparency", Eye],
    ["Platform Compliance", CheckCircle],
    ["Data Security", Lock],
    ["Researcher First", Users],
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
      
        <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-10 h-full">
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
      
              <span className="text-gray-500">Research Profiling & Visibility</span>
            </div>
      
            <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
              Research Profiling &  <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
               Visibility
              </span>
            </h1>
      
            <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-7">
             Enhance Your Research Presence. Expand Your Impact.
            </p>
      
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
             RCII helps researchers build a strong digital identity, increase
              discoverability, and showcase their research to the global
              academic community.
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


    

      {/* BUILD IDENTITY */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 py-4">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <SectionTitle title="Build Your Research Identity" />

    <div className="mt-8 grid grid-cols-1 gap-y-6 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {identitySteps.map(([title, desc, Icon], i) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
        ];

        return (
          <div
            key={title}
            className="group relative flex min-h-[160px] flex-col items-center px-4 text-center transition-all duration-300 hover:-translate-y-2"
          >
            {i !== identitySteps.length - 1 && (
              <div className="absolute left-[72%] top-[38px] hidden w-[90px] items-center xl:flex">
                <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#cfd4ee]" />
                <span className="ml-1 text-[#5B35FF]">›</span>
              </div>
            )}

            <div
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-full ${styles[i][0]} ${styles[i][1]} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(91,53,255,0.16)]`}
            >
              <Icon size={32} strokeWidth={2.2} />
            </div>

            <h3
              className={`mt-5 text-[18px] font-bold leading-none ${
                i % 2 === 0 ? "text-[#5B35FF]" : "text-[#0099B8]"
              }`}
            >
              {title}
            </h3>

            <p className="mt-3 max-w-[175px] text-[13px] font-semibold leading-[22px] text-[#2f3650]">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* SERVICES */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-5">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <SectionTitle title="Our Research Profiling & Visibility Services" />

    <div className="mt-5 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {services.map(([title, list, Icon], i) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF8F0]", "text-[#8CC63F]"],
          ["bg-[#F2ECFF]", "text-[#4285F4]"],
          ["bg-[#EEF4FF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[300px] flex-col rounded-[10px] border border-[#e8ebf7] bg-white px-5 py-3 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
          >
            <div
              className={`mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full ${styles[i][0]} ${styles[i][1]} transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(91,53,255,0.12)]`}
            >
              <Icon size={30} strokeWidth={2.2} />
            </div>

            <h3 className="mt-3 min-h-[42px] text-[13px] font-bold leading-[22px] text-[#111832]">
              {title}
            </h3>

            <ul className="mt-3 space-y-1 text-left">
              {list.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[11px] font-semibold leading-[18px] text-[#2f3650]"
                >
                  <CheckCircle
                    size={12}
                    className="mt-[2px] shrink-0 text-[#5B35FF]"
                    strokeWidth={3}
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
</section>

      {/* PLATFORMS */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-4 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <SectionTitle title="Platforms We Optimize Your Presence On" />

    <div className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
      {[
        { name: "Google", sub: "Scholar", color: "text-[#4285F4]", multi: true },
        { name: "ORCID", sub: "", color: "text-[#8CC63F]" },
        { name: "Scopus", sub: "", color: "text-[#F36C21]" },
        { name: "WEB OF", sub: "SCIENCE", color: "text-[#4A4A4A]", small: true },
        { name: "Publons", sub: "", color: "text-[#1B6DB3]" },
        { name: "LinkedIn", sub: "", color: "text-[#0077B5]" },
      ].map((item) => (
        <div
          key={item.name}
          className="group flex h-[92px] items-center justify-center rounded-[10px] border border-[#e8ebf7] bg-white px-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#bdb4ff] hover:shadow-[0_14px_30px_rgba(91,53,255,0.12)]"
        >
          {item.multi ? (
            <div className="leading-none">
              <div className="text-[25px] font-bold tracking-[-1px]">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
              </div>
              <div className="mt-1 text-[21px] font-semibold text-[#4285F4]">
                Scholar
              </div>
            </div>
          ) : item.small ? (
            <div className="text-[20px] font-bold leading-[22px] text-[#4A4A4A]">
              WEB OF
              <br />
              SCIENCE
            </div>
          ) : (
            <div className={`text-[26px] font-bold ${item.color}`}>
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY */}
   <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 sm:px-6 lg:px-8 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
    <SectionTitle title="Why Research Visibility Matters" />

    <div className="mt-7 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {visibility.map(([title, desc, Icon]) => (
        <div
          key={title}
          className="group flex min-h-[132px] flex-col items-center rounded-[10px] border border-[#e8ebf7] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_14px_30px_rgba(91,53,255,0.13)]"
        >
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F2ECFF] text-[#5B35FF] transition-all duration-300 group-hover:scale-110">
            <Icon size={23} strokeWidth={2.3} />
          </div>

          <h3 className="mt-4 text-[12px] font-bold leading-[16px] text-[#5B35FF]">
            {title}
          </h3>

          <p className="mt-2 max-w-[155px] text-[10.5px] font-semibold leading-[17px] text-[#1f2744]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* IMPACT */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-6">
  <div className="mx-auto w-full max-w-[1420px]">
    <h2 className="mb-3 text-center text-[20px] sm:text-[24px] font-bold text-[#10162f]">
      Our Impact
    </h2>

    <div className="rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-9 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {impact.map(([num, label, Icon], index) => (
          <div
            key={label}
            className={`group flex items-center justify-center gap-4 px-4 transition-all duration-300 hover:-translate-y-1 ${
              index !== impact.length - 1 ? "lg:border-r lg:border-white/15" : ""
            }`}
          >
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
              <Icon size={23} strokeWidth={2.2} />
            </div>

            <div>
              <div className="text-[22px] font-bold leading-none">
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
  </div>
</section>

      {/* COMMITMENT */}
      <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.7fr] lg:items-center">
      
      <div>
        <h2 className="text-[20px] sm:text-[24px] font-bold text-[#10162f]">
          Our Commitment
        </h2>

        <p className="mt-3 max-w-[520px] text-[11px] font-semibold leading-[20px] text-[#1f2744]">
          We follow ethical practices and platform guidelines to ensure genuine,
          sustainable visibility for every researcher.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
        {commitment.map(([title, Icon], index) => (
          <div
            key={title}
            className={`group flex min-h-[88px] flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 ${
              index !== commitment.length - 1
                ? "lg:border-r lg:border-[#edf0fb]"
                : ""
            }`}
          >
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F2ECFF] text-[#5B35FF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(91,53,255,0.14)]">
              <Icon size={22} strokeWidth={2.2} />
            </div>

            <p className="mt-2 text-[10px] font-bold leading-[14px] text-[#111832]">
              {title}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
   <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-10 pb-10">
  <div
    className="mx-auto w-full max-w-[1420px] overflow-hidden rounded-[10px] border border-[#eceeff] bg-[#f0edff] bg-cover bg-center bg-no-repeat px-5 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-7 lg:px-10"
    style={{ backgroundImage: `url(${auth1})` }}
  >
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#5138ff] text-white shadow-[0_10px_26px_rgba(81,56,255,0.28)] transition-all duration-300 hover:scale-110">
          <Mail size={31} strokeWidth={2.2} />
        </div>

        <div>
          <h2 className="text-[20px] font-bold leading-tight text-[#10162f] sm:text-[22px]">
            Strengthen Your Research Presence Today
          </h2>

          <p className="mt-2 text-[11px] font-semibold leading-[18px] text-[#1f2744] sm:text-[12px]">
            Let our experts optimize your profile and increase your global visibility.
          </p>
        </div>
      </div>
 <Link to="/contact">
      <button className="inline-flex h-[44px] items-center justify-center gap-3 rounded-[5px] bg-[#5138ff] px-7 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(81,56,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#402bd8] hover:shadow-[0_14px_30px_rgba(81,56,255,0.35)]">
        Request Consultation
        <ArrowRight size={14} />
      </button>
</Link>
    </div>
  </div>
</section>
    </main>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#10162f]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-[#5138ff]" />
    </div>
  );
}

export default ResearchProfileVisibility;