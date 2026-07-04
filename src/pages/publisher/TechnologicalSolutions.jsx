import React from "react";
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  Bot,
  Cloud,
  Lock,
  BarChart3,
  Network,
  Search,
  FileSearch,
  Briefcase,
  Monitor,
  Globe2,
  Users,
  Clock,
  Gauge,
  Target,
  TrendingUp,
  Puzzle,
  Settings,
  Rocket,
  Headphones,
  Quote,
  ArrowRight,
} from "lucide-react";

import heroBg from "../../assets/TechnoSolutionBg.webp";
import ctaImg from "../../assets/techCta.webp";
import sarahImg from "../../assets/emly.webp";

export default function TechnologicalSolutions() {
  const solutions = [
    [ClipboardCheck, "Editorial & Workflow Solutions", "Intuitive tools to manage submissions, peer review, and editorial workflows with ease."],
    [Bot, "AI-Powered Solutions", "Leverage AI for manuscript screening, reviewer recommendation, content enrichment, and more."],
    [Cloud, "Cloud-Based Platform", "Secure, scalable, and reliable cloud infrastructure ensures high availability and seamless access."],
    [Lock, "Security & Compliance", "Enterprise-grade security with GDPR compliance, data encryption, and role-based access control."],
    [BarChart3, "Analytics & Reporting", "Real-time dashboards and advanced analytics to measure performance and drive strategic decisions."],
    [Network, "Integration & API", "Seamless integration with third-party systems, databases, and discovery services via robust APIs."],
  ];

  const capabilities = [
    [FileSearch, "Manuscript Submission System", "Customizable submission portals with automated validation and author communication."],
    [Search, "Peer Review Management", "Advanced reviewer matching, double-blind review, and workflow automation."],
    [Briefcase, "Production Management", "Streamlined production workflow from copyediting to typesetting and publishing."],
    [Monitor, "Digital Publishing", "Multi-format publishing with responsive design and accessibility compliance."],
    [FileSearch, "Discovery & Distribution", "Metadata optimization and seamless integration with indexing and discovery platforms."],
    [Network, "User Experience", "Modern interfaces for authors, reviewers, editors, and readers."],
  ];

  const process = [
    [Puzzle, "01", "Assess", "Understand your needs, challenges, and goals."],
    [ClipboardCheck, "02", "Design", "Design a customized solution architecture."],
    [Settings, "03", "Develop", "Agile development with continuous collaboration."],
    [Rocket, "04", "Deploy", "Secure deployment with minimal disruption."],
    [Network, "05", "Support", "Ongoing support, updates, and optimization."],
  ];

  return (
    <div className="bg-[#f8fbff] text-[#07113b] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[380px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14">
          <div className="max-w-[620px] mt-12">
            <Link to="/" className="text-[12px] text-[#3d25e6] mb-6 font-medium inline-block">
              Home &nbsp;›&nbsp; Publishers &nbsp;›&nbsp; Technological Solutions
            </Link>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
              Smart Technology.
              <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Smarter Publishing.
              </span>
              <br />
              Stronger Impact.
            </h1>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] mt-4 max-w-[430px]">
              RCII leverages cutting-edge technology to help publishers streamline operations,
              enhance user experience, ensure security, and drive innovation at every stage of
              the publication lifecycle.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                Explore Our Solutions <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Schedule a Demo <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] p-5 sm:p-6">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold">
            Our Technological Solutions
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2 mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {solutions.map(([Icon, title, desc]) => (
              <div key={title} className="group text-center border border-[#e2e7fb] rounded-[12px] p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="mx-auto w-[62px] h-[62px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>
                <h3 className="mt-4 text-[13px] font-bold">{title}</h3>
                <p className="mt-3 text-[11.5px] leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <div className="bg-white rounded-[16px] border border-[#edf0ff] p-5 sm:p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold">
            Key Capabilities
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {capabilities.map(([Icon, title, desc], index) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto w-[66px] h-[66px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] hover:bg-[#4424e9] hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="mt-4 text-[13px] font-bold">{title}</h3>
                <p className="mt-2 text-[11px] leading-5">{desc}</p>

                {index !== capabilities.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-[33px] left-[calc(50%+38px)] w-[95px] border-t-2 border-dashed border-[#9aa0e8]" />
                    <ArrowRight size={14} className="hidden lg:block absolute top-[27px] left-[calc(50%+128px)] text-[#9aa0e8]" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-white rounded-[16px] border border-[#edf0ff] p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
            Our Technology Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {["aws", "Microsoft Azure", "Google Cloud", "kubernetes", "React", "mongodb", "elastic", "redis"].map((item) => (
              <div key={item} className="h-[70px] bg-white border border-[#dfe4ff] rounded-[10px] flex items-center justify-center text-center px-3 font-bold text-[#07113b] hover:-translate-y-1 hover:shadow-xl hover:text-[#4424e9] transition-all duration-300">
                {item}
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] mt-5">
            We use modern, reliable, and secure technologies to build scalable solutions tailored for the publishing industry.
          </p>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-white rounded-[16px] border border-[#edf0ff] p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-8">
            Our Implementation Process
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {process.map(([Icon, num, title, desc], index) => (
              <div key={title} className="relative text-center">
                <div className="relative mx-auto w-[68px] h-[68px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] hover:bg-[#4424e9] hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                  <span className="absolute -right-3 top-2 w-8 h-8 rounded-full bg-[#4424e9] text-white text-[12px] font-bold flex items-center justify-center">
                    {num}
                  </span>
                </div>

                <h3 className="mt-5 text-[13px] font-bold">{title}</h3>
                <p className="mt-2 text-[11.5px] leading-5">{desc}</p>

                {index !== process.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-[34px] left-[calc(50%+48px)] w-[100px] border-t-2 border-dashed border-[#9aa0e8]" />
                    <ArrowRight size={15} className="hidden lg:block absolute top-[27px] left-[calc(50%+140px)] text-[#9aa0e8]" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-gradient-to-r from-[#4421F3] via-[#1B47D8] to-[#0087A8] shadow-[0_15px_40px_rgba(25,55,180,0.25)] rounded-[14px] text-white px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
            Impact in Numbers
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              [ClipboardCheck, "200+", "Publishers Served"],
              [Users, "1000+", "Workflows Automated"],
              [Clock, "99.9%", "System Uptime"],
              [Gauge, "40%", "Increase in Efficiency"],
              [Target, "60%", "Faster Time-to-Publish"],
              [TrendingUp, "35%", "Cost Optimization"],
            ].map(([Icon, num, label], index) => (
              <div key={label} className={`flex items-center gap-4 px-2 py-3 ${index !== 5 ? "lg:border-r lg:border-white/25" : ""}`}>
                <Icon size={34} className="text-white/80 shrink-0" />
                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold leading-none">{num}</h3>
                  <p className="text-[12px] leading-5 font-medium mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
          What Our Partners Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["RCII’s technological solutions have transformed our publishing workflow. The platform is robust, secure, and incredibly user-friendly.", "Dr. Sarah Thompson", "Publishing Director", "Global Medical Press"],
            ["The automation and analytics tools provided by RCI have significantly improved our efficiency and helped us make data-driven decisions.", "Mr. David Lee", "CEO", "Science & Innovation Publishing"],
            ["RCI’s team is responsive and innovative. Their technology has been a key enabler of our digital transformation journey.", "Dr. Elena Garcia", "Editor-in-Chief", "International Journal of Engineering"],
          ].map(([text, name, role, org]) => (
            <div key={name} className="bg-white border border-[#e2e7fb] rounded-[14px] p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <Quote size={25} className="text-[#4F46E5] mb-3" strokeWidth={3} />
              <p className="text-[12.5px] sm:text-[13px] leading-6 text-[#334155] min-h-0 lg:min-h-[90px]">
                "{text}"
              </p>

              <div className="flex items-center gap-4 mt-5">
                <img src={sarahImg} alt={name} className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-2 border-[#eef1ff] shrink-0" />
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[15px]">{name}</h4>
                  <p className="text-[12px] text-[#475569] font-medium">{role}</p>
                  <p className="text-[11px] text-[#64748b] mt-1">{org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d9d6ff]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d9d6ff]" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-gradient-to-r from-[#4421F3] via-[#1B47D8] to-[#0087A8] shadow-[0_15px_40px_rgba(25,55,180,0.25)] rounded-[14px] text-white px-5 sm:px-6 lg:px-7 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] xl:grid-cols-[190px_1fr_auto] gap-5 items-center">
            <div className="flex justify-center md:justify-start">
              <img src={ctaImg} alt="" className="w-[130px] sm:w-[145px] lg:w-[170px] object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-[20px] sm:text-[20px] lg:text-[20px] font-bold leading-tight">
                Let’s Build the Future of Publishing Together
              </h2>

              <p className="mt-3 text-[13px] sm:text-[13px] leading-6 text-white/95 max-w-[720px] mx-auto md:mx-0">
                Partner with RCI to implement innovative technological solutions that drive efficiency, quality, and impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-5 xl:hidden justify-center md:justify-start">
                <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-[#4424e9] px-5 py-3 rounded-[6px] text-[12px] font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  Schedule a Demo <ArrowRight size={17} />
                </Link>

                <Link to="/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/60 text-white px-5 py-3 rounded-[6px] text-[12px] font-bold hover:bg-white hover:text-[#4424e9] hover:-translate-y-1 transition-all duration-300">
                  <Headphones size={17} /> Talk to Our Expert
                </Link>
              </div>
            </div>

            <div className="hidden xl:flex gap-3 justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#4424e9] px-5 py-3 rounded-[6px] text-[12px] font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Schedule a Demo <ArrowRight size={17} />
              </Link>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 border border-white/60 text-white px-5 py-3 rounded-[6px] text-[12px] font-bold hover:bg-white hover:text-[#4424e9] hover:-translate-y-1 transition-all duration-300">
                <Headphones size={17} /> Talk to Our Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}