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
import heroImg from "../../assets/bgresearch.png";

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
             RCI helps researchers build a strong digital identity, increase
              discoverability, and showcase their research to the global
              academic community.
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


    

      {/* BUILD IDENTITY */}
      <section className="px-3 sm:px-5 lg:px-8 py-6">
        <div className="mx-auto max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <SectionTitle title="Build Your Research Identity" />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {identitySteps.map(([title, desc, Icon], i) => (
              <div
                key={title}
                className="group relative flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="mt-4 text-[13px] font-extrabold text-[#111832]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[150px] text-[11px] font-semibold leading-[19px] text-[#334155]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <SectionTitle title="Our Research Profiling & Visibility Services" />

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map(([title, list, Icon], i) => (
              <div
                key={title}
                className="group rounded-[10px] border border-[#e8ebf7] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 min-h-[40px] text-[12px] font-extrabold leading-[17px]">
                  {title}
                </h3>
                <ul className="mt-3 space-y-2 text-left">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[10px] font-semibold text-[#334155]"
                    >
                      <CheckCircle size={12} className="text-[#5138ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <SectionTitle title="Platforms We Optimize Your Presence On" />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {platforms.map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#e8ebf7] bg-white py-4 text-center text-[16px] font-extrabold text-[#334155] transition-all duration-300 hover:-translate-y-1 hover:border-[#8b7cff] hover:text-[#5138ff] hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <SectionTitle title="Why Research Visibility Matters" />

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {visibility.map(([title, desc, Icon]) => (
              <div
                key={title}
                className="group rounded-[10px] border border-[#e8ebf7] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition group-hover:scale-110">
                  <Icon size={23} />
                </div>
                <h3 className="mt-4 text-[12px] font-extrabold text-[#5138ff]">
                  {title}
                </h3>
                <p className="mt-2 text-[10px] font-semibold leading-[18px] text-[#334155]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto max-w-[1420px] rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-5 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {impact.map(([num, label, Icon]) => (
              <div
                key={label}
                className="group flex items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/20 transition group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-[20px] font-extrabold">{num}</div>
                  <div className="text-[11px] font-semibold text-white/85">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <h2 className="text-[18px] font-extrabold">
                Our Commitment
              </h2>
              <p className="mt-3 text-[12px] font-semibold leading-[22px] text-[#334155]">
                We follow ethical practices and platform guidelines to ensure
                genuine, sustainable visibility for every researcher.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {commitment.map(([title, Icon]) => (
                <div
                  key={title}
                  className="group text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition group-hover:scale-110">
                    <Icon size={21} />
                  </div>
                  <p className="mt-2 text-[10px] font-extrabold text-[#334155]">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 sm:px-5 lg:px-8 pb-10">
        <div className="mx-auto flex max-w-[1420px] flex-col items-center justify-between gap-5 rounded-[14px] bg-[#f0edff] px-6 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#5138ff] text-white">
              <Mail size={30} />
            </div>
            <div>
              <h2 className="text-[20px] sm:text-[24px] font-extrabold">
                Strengthen Your Research Presence Today
              </h2>
              <p className="mt-2 text-[12px] font-semibold text-[#334155]">
                Let our experts optimize your profile and increase your global visibility.
              </p>
            </div>
          </div>

          <button className="rounded-[6px] bg-[#5138ff] px-7 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#402bd8] hover:shadow-lg">
            Request Consultation <ArrowRight size={15} className="inline ml-2" />
          </button>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-[17px] sm:text-[18px] font-extrabold text-[#10162f]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5138ff]" />
    </div>
  );
}

export default ResearchProfileVisibility;