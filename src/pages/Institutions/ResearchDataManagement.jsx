import React from "react";
import { Link } from "react-router-dom";
import {
  Database,
  UploadCloud,
  ShieldCheck,
  Settings,
  Share2,
  Archive,
 
 
 
  Box,
  CheckCircle,
  Quote,
  ArrowRight,
  User,
  Server,
  Briefcase,
  Building2,
  Globe2,
 
  Wrench,
  GraduationCap,
   Search,
  FileText,
 
  Monitor,
 
  
  Image,
  Video,
  Cpu,
  Code
} from "lucide-react";

import heroBg from "../../assets/research-data-management-banner.webp";
import dataImg from "../../assets/institutional-research-development.webp";
import securityImg from "../../assets/university-research-support.webp";
import ctaImg from "../../assets/infrastructure-support-consultation.webp";

const blue = "#4424e9";

export default function ResearchDataManagement() {
  const services = [
    [
      Database,
      "Data Planning",
      "Develop Data Management Plans (DMPs) aligned with funding and institutional requirements.",
    ],
    [
      UploadCloud,
      "Data Collection",
      "Streamline data capture using standardized formats and best practices.",
    ],
    [
      ShieldCheck,
      "Data Storage",
      "Secure, reliable, and scalable storage with access control.",
    ],
    [
      Settings,
      "Data Processing",
      "Clean, curate, and transform data for accuracy and usability.",
    ],
    [
      Share2,
      "Data Sharing",
      "Facilitate data sharing with controlled access and proper attribution.",
    ],
    [
      Archive,
      "Data Preservation",
      "Long-term preservation and archiving to ensure data accessibility.",
    ],
  ];

  const approach = [
    [Search, "1. Assess", "Understand your data landscape and needs"],
    [FileText, "2. Plan", "Create a tailored data management plan"],
    [Settings, "3. Implement", "Deploy tools and workflows"],
    [Monitor, "4. Monitor", "Track usage, quality and compliance"],
    [Box, "5. Preserve", "Archive and preserve for the long term"],
  ];

  return (
    <div className="bg-[#f8fbff] text-[#07113b] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[390px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16 mt-12">
          <div className="max-w-[610px]">
            <div className="flex flex-wrap items-center gap-3 text-[12px] sm:text-[12px] font-semibold sm:mb-6 mb-5">
              <Link
                to="/"
                className="text-[#6366F1] hover:text-[#4F46E5] transition"
              >
                Home
              </Link>

              <span className="text-gray-400">›</span>

              <Link
                to="/institutions"
                className="text-[#6366F1] hover:text-[#4F46E5] transition"
              >
                Institutions
              </Link>

              <span className="text-gray-400">›</span>

              <span className="text-gray-500">Research Consulting</span>
            </div>

            <h1 className="text-[34px] sm:text-[38px] lg:text-[46px] leading-[1.08] font-bold text-[#07113F]">
              Research Data <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Management
              </span>
            </h1>

            <h2 className="text-[#4424e9] text-[15px] sm:text-[18px] font-bold mt-4 leading-6">
              Organize. Protect. Share. Drive Impact.
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] mt-4 max-w-[455px]">
              RCII helps institutions manage research data across its lifecycle
              with secure, efficient, and compliant solutions that enhance
              reproducibility and visibility.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                <Database size={18} /> Request Data Management Support
              </Link>

              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Explore Our Solutions <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] overflow-hidden">
          <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
            End-to-End Data Management Services
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {services.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className="group relative text-center px-4 py-8 hover:bg-[#fbfbff] hover:-translate-y-1 transition-all duration-300"
              >
                {index !== 5 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[118px] w-px bg-[#dfe3f5]" />
                )}

                <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#eef3ff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="mt-4 text-[14px] font-bold">{title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#1f2937]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + NUMBERS + SECURITY */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.85fr_1.05fr] gap-4">
          {/* WHY */}
          <div
            className="bg-white border border-[#e8ebfb] rounded-[16px] p-4 bg-no-repeat bg-right-bottom overflow-hidden"
            style={{
              backgroundImage: `url(${dataImg})`,
              backgroundSize: "200px auto",
              backgroundPosition: "right 10px bottom 0px",
            }}
          >
            <div className="relative z-10 max-w-full sm:max-w-[58%] lg:max-w-[100%] xl:max-w-[58%]">
              <h2 className="text-[18px] sm:text-[18px] font-bold mb-5">
                Why Effective Data Management Matters
              </h2>

              {[
                "Enhances research quality and reproducibility",
                "Increases visibility and citations",
                "Supports data-driven collaboration",
                "Ensures compliance with policies and funder mandates",
                "Safeguards valuable research assets",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-[12px] font-medium mb-3"
                >
                  <CheckCircle
                    size={15}
                    className="text-[#4424e9] shrink-0 mt-[2px]"
                  />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* BY NUMBERS */}
          <div className="bg-white border border-[#e8ebfb] rounded-[16px] p-5 min-h-[230px]">
            <h2 className="text-center text-[16px] sm:text-[18px] font-bold mb-5">
              By the Numbers
            </h2>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5">
              {[
                [Database, "5M+", "Datasets Managed"],
                [Settings, "98%", "Compliance Rate"],
                [Briefcase, "200+", "Projects Supported"],
                [Building2, "30+", "Institutions Served"],
                [Server, "50+ TB", "Data Stored Securely"],
                [ShieldCheck, "99.9%", "Data Availability"],
              ].map(([Icon, num, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={24} className="text-[#4424e9] shrink-0" />
                  <div>
                    <h3 className="text-[14px] sm:text-[15px] leading-none font-bold text-[#4424e9]">
                      {num}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold mt-1 leading-4">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECURITY */}
          <div
            className="bg-white border border-[#e8ebfb] rounded-[16px] p-6 bg-no-repeat bg-left-bottom overflow-hidden"
            style={{
              backgroundImage: `url(${securityImg})`,
              backgroundSize: "200px auto",
              backgroundPosition: "left 10px bottom 0px",
            }}
          >
            <h2 className="text-center text-[16px] sm:text-[18px] font-bold mb-5">
              Data Security & Compliance
            </h2>

            <div className="relative z-10 ml-auto max-w-full sm:max-w-[58%] lg:max-w-[100%] xl:max-w-[58%]">
              {[
                "Role-based Access Control",
                "Encryption in Transit and at Rest",
                "Audit Trails & Monitoring",
                "GDPR, HIPAA, ISO 27001 Compliant",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-[12px] font-medium mb-4"
                >
                  <ShieldCheck
                    size={17}
                    className="text-[#4424e9] shrink-0 mt-[2px]"
                  />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH + SUPPORTED TYPES */}
     <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

    {/* LEFT CARD */}
    <div className="lg:col-span-3 bg-white border border-[#e8ebfb] rounded-[18px] p-6 sm:p-8 shadow-sm">

      {/* TITLE */}
      <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-10 text-[#0B1B3F]">
        Our Data Management Approach
      </h2>

      {/* STEPS */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-2 relative">

        {[
          {
            icon: Search,
            title: "1. Assess",
            desc: "Understand your data landscape and needs",
            color: "#4F46E5",
            bg: "#EEF2FF",
          },
          {
            icon: FileText,
            title: "2. Plan",
            desc: "Create a tailored data management plan",
            color: "#16A34A",
            bg: "#ECFDF5",
          },
          {
            icon: Settings,
            title: "3. Implement",
            desc: "Deploy tools and workflows",
            color: "#F97316",
            bg: "#FFF7ED",
          },
          {
            icon: Monitor,
            title: "4. Monitor",
            desc: "Track usage, quality and compliance",
            color: "#2563EB",
            bg: "#EFF6FF",
          },
          {
            icon: Archive,
            title: "5. Preserve",
            desc: "Archive and preserve for long term",
            color: "#10B981",
            bg: "#ECFDF5",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative text-center group"
            >
              {/* ICON */}
              <div
                className="mx-auto w-[60px] h-[60px] rounded-full flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                <Icon size={26} />
              </div>

              {/* TITLE */}
              <h3 className="mt-3 font-semibold text-[13px] text-[#0B1B3F]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-1 text-[11px] text-gray-500 leading-[1.4]">
                {item.desc}
              </p>

              {/* CONNECTOR LINE (desktop only) */}
              {index !== 4 && (
                <div className="hidden sm:block absolute top-[30px] left-[80%] w-[60px] border-t border-dashed border-[#CBD5E1]" />
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* RIGHT CARD */}
    <div className="lg:col-span-2 relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#3230d3] via-[#3B5BFF] to-[#06B6D4] text-white shadow-lg">

      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 p-6 sm:p-8">

        <h2 className="text-[20px] sm:text-[24px] font-bold mb-6">
          Supported Data Types
        </h2>

        <div className="space-y-4">

          {[
            { icon: Database, text: "Structured Data" },
            { icon: FileText, text: "Unstructured Data" },
            { icon: Image, text: "Research Documents" },
            { icon: Video, text: "Multimedia & Imaging" },
            { icon: Cpu, text: "Sensor & Instrument Data" },
            { icon: Code, text: "Software & Code" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-3 text-[13px] font-medium
                transition-all duration-300 hover:translate-x-1 hover:text-white/90"
              >
                <Icon size={18} className="text-white/90" />
                {item.text}
              </div>
            );
          })}

        </div>
      </div>
    </div>

  </div>
</section>

      {/* RESOURCE CENTER */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-[18px] text-center sm:text-[22px] font-bold mb-5">
          Resource Center
        </h2>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            [FileText, "DMP Templates", "Kickstart your data planning."],
            [
              GraduationCap,
              "Best Practices",
              "Guidelines for effective data management.",
            ],
            [
              ShieldCheck,
              "Policy Library",
              "Access institutional and funder policies.",
            ],
            [
              Monitor,
              "Training Modules",
              "Improve skills for you and your team.",
            ],
            [
              Wrench,
              "Tools & Platforms",
              "Explore recommended tools and platforms.",
            ],
            [ArrowRight, "Visit Resource Center", ""],
          ].map(([Icon, title, desc]) => (
            <div
              key={title}
              className="bg-white rounded-[10px] border border-[#d7ddff] px-4 py-4 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#eef3ff] flex items-center justify-center text-[#4424e9] shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-[11px] font-bold">{title}</h3>
                {desc && <p className="text-[10px] leading-5 mt-1">{desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-center text-[18px] lg:text-[22px] font-bold mb-7">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            [
              "RCII’s data management solutions have transformed the way we handle research data—improving collaboration, compliance, and global visibility.",
              "Dr. Kavita Rao",
              "Professor & Dean (Research), University of Hyderabad",
            ],
            [
              "Their team helped us develop robust data workflows and storage infrastructure that ensure data security and long-term accessibility.",
              "Dr. Arvind Menon",
              "Head – Research Operations, IISc Bangalore",
            ],
            [
              "With RCII’s support, we now have a structured data repository that meets funder requirements and promotes open science.",
              "Dr. Neha Sharma",
              "Director – Research and Innovation",
            ],
          ].map(([text, name, role]) => (
            <div
              key={name}
              className="bg-white border border-[#e2e7fb] rounded-[12px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Quote size={22} color={blue} />
              <p className="text-[14px] leading-6 mt-4">{text}</p>
              <h4 className="font-bold text-[14px] mt-5">{name}</h4>
              <p className="text-[13px] text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      {/* <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-center text-[18px] lg:text-[22px] font-bold mb-5">
          Technology & Platform Partners
        </h2>

        <div className="bg-white border border-[#e2e7fb] rounded-[14px] px-6 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-center text-[20px] font-bold text-gray-500">
          {["figshare", "dataverse", "DSPACE", "zenodo", "aws", "Azure", "NEXTCLOUD"].map((p) => (
            <div key={p} className="hover:text-[#4424e9] transition">{p}</div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[14px] text-white px-5 sm:px-6 py-4 grid grid-cols-1 lg:grid-cols-[180px_1fr_auto_auto] gap-5 lg:gap-6 items-center">
          <img src={ctaImg} alt="" className="w-full hidden lg:block" />

          <div>
            <h2 className="text-[15px] sm:text-[20px] font-semibold">
              Unlock the Power of Your Research Data
            </h2>
            <p className="mt-2 text-[13px] leading-6">
              Partner with RCII to manage your research data effectively and
              accelerate your research impact.
            </p>
          </div>

          {/* <Link className="w-auto inline-flex justify-center items-center gap-3 bg-white text-[#4424e9] px-6 py-4 rounded-[6px] text-[12px] font-semibold hover:-translate-y-1 transition">
            Request Data Management Support <ArrowRight size={17} />
          </Link> */}

          <Link to="/contact" className="w-auto inline-flex justify-center items-center gap-3 border border-white/60 text-white px-6 py-3 rounded-[6px] text-[12px] font-semibold hover:bg-white hover:text-[#4424e9] transition">
            <User size={17} /> Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
