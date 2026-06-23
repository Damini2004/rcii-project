import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Clock,
  ShieldCheck,
  Globe2,
  Award,
  Target,
  Lock,
  Users,
  Edit3,
  FileCheck,
  Search,
  BookOpen,
  Image,
  Quote,
  Languages,
  Upload,
  ClipboardCheck,
  Send,
  ThumbsUp,
  TrendingUp,
  ArrowRight,
  Headphones,
} from "lucide-react";

import heroBg from "../../assets/EditorialSuppurtBG.png";
import ctaImg from "../../assets/EditorialCta.png";
import emilyImg from "../../assets/emly.jpg";

const blue = "#4424e9";

export default function EditorialSupport() {
  const benefits = [
    [
      Award,
      "Experienced Team",
      "Subject-matter and language experts with extensive publishing experience.",
    ],
    [
      Target,
      "Quality Focused",
      "Rigorous quality checks to ensure clarity, accuracy, and consistency.",
    ],
    [
      Clock,
      "Timely & Reliable",
      "On-time delivery with adherence to your publication timelines.",
    ],
    [
      Globe2,
      "Global Standards",
      "Aligned with international publishing ethics and best practices.",
    ],
    [
      Lock,
      "Confidential & Secure",
      "Strict confidentiality and data security at every stage of the process.",
    ],
    [
      Users,
      "Scalable Support",
      "Flexible engagement models to match your journal’s unique needs.",
    ],
  ];

  const services = [
    [
      Edit3,
      "Language Editing",
      "Improve grammar, clarity, syntax, and readability while preserving the author’s intent.",
    ],
    [
      FileCheck,
      "Copyediting",
      "Ensure consistency, accuracy, style conformity, and adherence to journal guidelines.",
    ],
    [
      Search,
      "Proofreading",
      "Eliminate typographical and formatting errors for a polished final manuscript.",
    ],
    [
      BookOpen,
      "Structural Editing",
      "Enhance content flow, logical structure, and overall manuscript organization.",
    ],
    [
      Image,
      "Figure & Table Editing",
      "Check accuracy, clarity, formatting, and consistency of figures and tables.",
    ],
    [
      Quote,
      "Reference & Citation Check",
      "Ensure accurate references, proper citation style, and compliance with guidelines.",
    ],
    [
      FileCheck,
      "Plagiarism Check Support",
      "Screen manuscripts for similarity and ensure originality and integrity.",
    ],
    [
      Languages,
      "Translation Support",
      "High-quality translation services for non-native English manuscripts.",
    ],
  ];

  const process = [
    [Upload, "1. Receive", "We receive your manuscript or documents."],
    [
      ClipboardCheck,
      "2. Assess",
      "Assess requirements and assign the right editor.",
    ],
    [Edit3, "3. Edit", "Edit, review, and refine for clarity and quality."],
    [FileCheck, "4. Review", "Quality check and author queries if any."],
    [Send, "5. Deliver", "Deliver the polished manuscript on time."],
  ];

  return (
    <div className="bg-[#f8fbff] text-[#07113b] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[380px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
          <div className="max-w-[620px] mt-12">
            <Link
              to="/"
              className="text-[12px] text-[#3d25e6] mb-4 font-medium inline-block"
            >
              Home &nbsp;›&nbsp; Publishers &nbsp;›&nbsp; Editorial Support
            </Link>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
              Expert Editorial Support.
              <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Better Content. Stronger Impact.
              </span>
            </h1>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              RCII offers comprehensive editorial support to help publishers
              maintain the highest standards of quality, clarity, and integrity
              across every stage of the publication process.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                Explore Our Services <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Request a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] overflow-hidden">
          <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
            Why Choose RCII for Editorial Support?
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {benefits.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className="group relative text-center px-4 py-8 hover:bg-[#fbfbff] hover:-translate-y-1 transition-all duration-300"
              >
                {index !== 5 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[118px] w-px bg-[#dfe3f5]" />
                )}

                <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
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

      {/* SERVICES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
          Our Editorial Support Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(([Icon, title, desc]) => (
            <div
              key={title}
              className="bg-white border border-[#e2e7fb] rounded-[14px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-[54px] h-[54px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] shrink-0">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[16px] mb-3">{title}</h3>
                  <p className="text-[13px] leading-6">{desc}</p>

                  {/* <Link className="inline-flex items-center gap-2 text-[#4424e9] text-[12px] font-bold mt-4 hover:translate-x-1 transition">
                    Learn More <ArrowRight size={15} />
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-white border border-[#e2e7fb] rounded-[16px] p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-8">
            Our Editorial Process
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {process.map(([Icon, title, desc], index) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto w-[66px] h-[66px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] hover:bg-[#4424e9] hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="mt-4 font-bold text-[13px] text-[#07113b]">
                  {title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-[#334155]">
                  {desc}
                </p>

                {index !== process.length - 1 && (
                  <div className="hidden lg:block">
                    {/* Dashed Line */}
                    <div
                      className="
        absolute
        top-[33px]
        left-[calc(50%+55px)]
        w-[120px]
        border-t-2
        border-dashed
        border-[#9aa0e8]
      "
                    />

                    {/* Arrow */}
                    <ArrowRight
                      size={16}
                      className="
        absolute
        top-[26px]
        left-[calc(50%+165px)]
        text-[#9aa0e8]
      "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
    <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
  <div className="bg-gradient-to-r from-[#4421F3] via-[#1B47D8] to-[#0087A8] shadow-[0_15px_40px_rgba(25,55,180,0.25)] rounded-[14px] text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
    <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
      Our Editorial Impact
    </h2>

    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
      {[
        [FileCheck, "1M+", "Manuscripts Edited"],
        [Users, "500+", "Subject Experts"],
        [ThumbsUp, "99%", "Client Satisfaction"],
        [TrendingUp, "30%", "Improvement in Acceptance Rates"],
        [Clock, "24–48 hrs", "Average Turnaround Time"],
      ].map(([Icon, num, label], index) => (
        <div
          key={label}
          className={`flex items-center justify-start sm:justify-center lg:justify-start gap-4 px-2 py-3 ${
            index !== 4 ? "lg:border-r lg:border-white/25" : ""
          }`}
        >
          <Icon size={34} className="text-white/80 shrink-0" />
          <div>
            <h3 className="text-[20px] sm:text-[22px] font-bold leading-none">
              {num}
            </h3>
            <p className="text-[12px] sm:text-[12.5px] leading-5 font-medium mt-1">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* TESTIMONIALS */}
<section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
  <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6 text-[#07113b]">
    What Our Partners Say
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {[
      [
        emilyImg,
        "RCII’s editorial support has elevated the quality of our journal significantly. Their attention to detail and adherence to timelines is truly commendable.",
        "Dr. Emily Carter",
        "Editor-in-Chief",
        "International Journal of Clinical Research",
      ],
      [
        emilyImg,
        "The team is professional, responsive, and delivers exceptional quality every time. RCII is now an integral part of our publication process.",
        "Prof. Michael Johnson",
        "Managing Editor",
        "Journal of Materials Engineering",
      ],
      [
        emilyImg,
        "Their copyediting and proofreading services have helped us maintain consistency and clarity across all our publications.",
        "Dr. Priya Nair",
        "Publisher",
        "Health Science Reports",
      ],
    ].map(([img, text, name, role, org]) => (
      <div
        key={name}
        className="bg-white border border-[#e2e7fb] rounded-[14px] p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
      >
        <Quote
          size={25}
          className="text-[#4F46E5] mb-3 shrink-0"
          strokeWidth={3}
        />

        <p className="text-[12.5px] sm:text-[13px] leading-6 text-[#334155] min-h-0 lg:min-h-[90px]">
          "{text}"
        </p>

        <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <img
            src={img}
            alt={name}
            className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px] rounded-full object-cover border-2 border-[#eef1ff] shrink-0"
          />

          <div className="min-w-0">
            <h4 className="font-bold text-[14px] sm:text-[15px] text-[#07113b] leading-5">
              {name}
            </h4>

            <p className="text-[11.5px] sm:text-[12px] text-[#475569] font-medium leading-5">
              {role}
            </p>

            <p className="text-[10.5px] sm:text-[11px] text-[#64748b] mt-1 leading-4">
              {org}
            </p>
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
        <img
          src={ctaImg}
          alt=""
          className="w-[130px] sm:w-[145px] lg:w-[170px] object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-[20px] sm:text-[9px] lg:text-[18px] font-bold leading-tight">
          Elevate Every Word. Amplify Every Impact.
        </h2>

        <p className="mt-3 text-[13px] sm:text-[13px] leading-6 text-white/95 max-w-[720px] mx-auto md:mx-0">
          Partner with RCII for expert editorial support that brings out the
          best in every manuscript.
        </p>

    
      </div>

      <div className="hidden xl:flex gap-3 justify-end">
        <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#4424e9] px-5 py-3 rounded-[6px] text-[12px] font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          Request a Consultation <ArrowRight size={17} />
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
