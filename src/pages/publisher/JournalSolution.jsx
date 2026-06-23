import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket, Settings, Users, Lock, BarChart3, ShieldCheck, Megaphone,
  CheckCircle, FileCheck, Database, Target, Monitor, Globe2, ClipboardCheck,
  TrendingUp, Quote, ArrowRight, Headphones
} from "lucide-react";

import heroBg from "../../assets/journalBG.png";
import ctaImg from "../../assets/jCta.png";
import launchImg from "../../assets/j0.png";
import workflowImg from "../../assets/j1.png";
import peerImg from "../../assets/j5.png";
import productionImg from "../../assets/j4.png";
import indexingImg from "../../assets/j3.png";
import analyticsImg from "../../assets/j2.png";
import profileImg from "../../assets/emly.jpg";

export default function JournalSolutions() {
  const capabilities = [
    [Rocket, "Journal Launch", "End-to-end support for launching new journals with strong foundations."],
    [Settings, "Journal Management", "Efficient workflows and systems for smooth journal operations."],
    [Users, "Peer Review Solutions", "Robust peer review management for quality and integrity."],
    [Lock, "Open Access Support", "Open access models and compliance with global mandates."],
    [BarChart3, "Indexing & Visibility", "Strategies to get indexed in leading databases and improve visibility."],
    [ShieldCheck, "Ethics & Compliance", "Upholding publication ethics, COPE guidelines and best practices."],
    [Megaphone, "Marketing & Growth", "Targeted promotion and outreach to grow your journal’s impact."],
  ];

  const solutions = [
    [launchImg, "Journal Setup & Launch Support", ["Journal scope & aims development", "Editorial board formation", "Author guidelines & policies", "Website & branding setup"]],
    [workflowImg, "Manuscript Submission & Workflow", ["Submission system setup", "Automated workflow management", "Communication & notifications", "Reviewer & author dashboards"]],
    [peerImg, "Peer Review Management", ["Reviewer database management", "Double-blind / single-blind review", "Review tracking & reminders", "Decision & recommendation support"]],
    [productionImg, "Production & Publication", ["Copyediting & typesetting", "XML/HTML/PDF conversion", "DOI assignment & metadata", "Online publication & archiving"]],
    [indexingImg, "Indexing & Abstracting Support", ["Indexing strategy & selection", "Application & documentation support", "Compliance with indexing guidelines", "Tracking & maintenance"]],
    [analyticsImg, "Journal Analytics & Reporting", ["Real-time dashboards & reports", "Submission, review & publication metrics", "Citation & usage analytics", "Data-driven insights for growth"]],
  ];

  const process = [
    [Target, "1. Assess", "Understand your goals and journal requirements"],
    [FileCheck, "2. Plan", "Develop customized solution and roadmap"],
    [Settings, "3. Implement", "Setup systems and implement workflows"],
    [Monitor, "4. Optimize", "Monitor performance and optimize continuously"],
    [TrendingUp, "5. Grow", "Enhance visibility and drive journal impact"],
  ];

  return (
    <div className="bg-[#f8fbff] text-[#07113b] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[390px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})`}}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14">
          <div className="max-w-[560px] mt-12">
            <Link to="/" className="text-[12px] text-[#3d25e6] mb-6 font-medium inline-block">
              Home &nbsp;›&nbsp; Publishers &nbsp;›&nbsp; Journal Solutions
            </Link>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.08] font-bold text-[#07113F]">
              Comprehensive <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Journal Solutions
              </span>
            </h1>

            <h2 className="text-[#4F46E5] text-[14px] sm:text-[16px] font-bold mt-3">
              From Launch to Legacy. We Support Every Step.
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] mt-4 max-w-[430px]">
              RCII delivers end-to-end solutions to help publishers launch,
              manage, and grow high-quality journals that meet global standards
              and make a lasting impact.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              <Link className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                Explore Our Services <ArrowRight size={18} />
              </Link>

              <Link className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] p-5 sm:p-6">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold">Key Capabilities</h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2 mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
            {capabilities.map(([Icon, title, desc]) => (
              <div key={title} className="group text-center px-4 py-5 border-r last:border-r-0 border-[#e2e7fb] hover:-translate-y-1 transition-all duration-300">
                <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="mt-4 text-[13px] font-bold">{title}</h3>
                <p className="mt-3 text-[11.5px] leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL SOLUTIONS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
          Our Journal Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map(([img, title, points]) => (
            <div key={title} className="bg-white border border-[#e2e7fb] rounded-[14px] px-6 py-4 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 grid grid-cols-[1fr_130px] gap-4 items-end">
              <div>
                <h3 className="text-[16px] leading-6 font-bold mb-4">{title}</h3>
                {points.map((p) => (
                  <p key={p} className="flex items-start gap-2 text-[12px] font-medium mb-2">
                    <CheckCircle size={14} className="text-[#4424e9] shrink-0 mt-[2px]" />
                    {p}
                  </p>
                ))}
                <Link className="inline-flex items-center gap-2 text-[#4424e9] text-[12px] font-bold mt-3 hover:translate-x-1 transition">
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>

              <img src={img} alt="" className="w-full max-h-[160px] object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-white rounded-[16px] border border-[#edf0ff] p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-8">
            Our Proven Process
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {process.map(([Icon, title, desc], index) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto w-[68px] h-[68px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] hover:bg-[#4424e9] hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>
                <h3 className="mt-5 text-[13px] font-bold">{title}</h3>
                <p className="mt-2 text-[11.5px] leading-5">{desc}</p>

                {index !== process.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-[34px] left-[calc(50%+42px)] w-[105px] border-t-2 border-dashed border-[#9aa0e8]" />
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
            Our Impact in Numbers
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              [FileCheck, "850+", "Journals Supported"],
              [Globe2, "120+", "Countries Reached"],
              [Users, "50,000+", "Editorial & Reviewer Network"],
              [ClipboardCheck, "1M+", "Manuscripts Processed"],
              [TrendingUp, "35%", "Average Increase in Journal Visibility"],
            ].map(([Icon, num, label], index) => (
              <div key={label} className={`flex items-center gap-4 px-2 py-3 ${index !== 4 ? "lg:border-r lg:border-white/25" : ""}`}>
                <Icon size={34} className="text-white/80 shrink-0" />
                <div>
                  <h3 className="text-[22px] font-bold leading-none">{num}</h3>
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
            ["RCII’s team helped us launch our journal seamlessly. Their expertise in setup, workflows and indexing made all the difference.", "Dr. Maria Thompson", "Editor-in-Chief", "International Journal of Public Health"],
            ["The peer review management and analytics tools provided by RCII have significantly improved our journal’s quality and efficiency.", "Prof. Arvind Kumar", "Managing Editor", "Journal of Materials Science"],
            ["RCII’s strategic support increased our visibility and helped us get indexed in top databases. Highly recommended!", "Dr. Sarah Lee", "Publisher", "Health Innovations Journal"],
          ].map(([text, name, role, org]) => (
            <div key={name} className="bg-white border border-[#e2e7fb] rounded-[14px] p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <Quote size={25} className="text-[#4F46E5] mb-3" strokeWidth={3} />
              <p className="text-[12.5px] sm:text-[13px] leading-6 text-[#334155] min-h-0 lg:min-h-[90px]">
                "{text}"
              </p>

              <div className="flex items-center gap-4 mt-5">
                <img src={profileImg} alt={name} className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full object-cover border-2 border-[#eef1ff] shrink-0" />
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
              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-tight">
                Let’s Build World-Class Journals Together
              </h2>
              <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-white/95 max-w-[720px] mx-auto md:mx-0">
                Partner with RCII for scalable, ethical and impactful journal publishing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-end">
              <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white text-[#4424e9] px-5 py-3 rounded-[6px] text-[12px] font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Schedule a Consultation <ArrowRight size={17} />
              </Link>
              <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/60 text-white px-5 py-3 rounded-[6px] text-[12px] font-bold hover:bg-white hover:text-[#4424e9] hover:-translate-y-1 transition-all duration-300">
                <Headphones size={17} /> Talk to Our Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}