import React from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  ShieldCheck,
  Users,
  BarChart3,
  Globe2,
  TrendingUp,
  ClipboardCheck,
  FileText,
  Search,
  GraduationCap,
  Send,
  Award,
  CheckCircle,
  ArrowRight,
  Quote,
  Headphones,
} from "lucide-react";

import heroBg from "../../assets/indexingSupportBG.png";
import ctaImg from "../../assets/IndexCta.png";

const blue = "#4424e9";

export default function IndexingSupport() {
  const benefits = [
    [
      Eye,
      "Enhanced Visibility",
      "Get discovered by researchers worldwide through leading databases.",
    ],
    [
      ShieldCheck,
      "Increased Credibility",
      "Indexing validates the quality and authenticity of your journal.",
    ],
    [
      Users,
      "Wider Reach",
      "Reach a broader audience including researchers, librarians, and institutions.",
    ],
    [
      BarChart3,
      "Higher Citations",
      "Improved visibility leads to higher citations and impact factor.",
    ],
    [
      Globe2,
      "Global Recognition",
      "Strengthen your journal’s presence in the global scholarly community.",
    ],
    [
      TrendingUp,
      "Sustainable Growth",
      "Attract more submissions and build a strong editorial reputation.",
    ],
  ];

  const services = [
    [
      "Indexing Assessment",
      ClipboardCheck,
      [
        "Evaluate journal suitability",
        "Gap analysis with indexing criteria",
        "Personalized indexing roadmap",
      ],
    ],
    [
      "Documentation Support",
      FileText,
      [
        "Prepare and organize required documents",
        "Policy and best practices alignment",
        "Format and metadata preparation",
      ],
    ],
    [
      "Application & Submission",
      ClipboardCheck,
      [
        "Complete application support",
        "Accurate data submission",
        "Timely follow-up with index providers",
      ],
    ],
    [
      "Indexing Status Tracking",
      Search,
      [
        "Track application progress",
        "Address reviewer queries",
        "Regular status updates",
      ],
    ],
    [
      "Metadata & Technical Support",
      BarChart3,
      [
        "Metadata creation and validation",
        "DOI registration (Crossref support)",
        "Website and technical compliance check",
      ],
    ],
    [
      "Post-indexing Support",
      GraduationCap,
      [
        "Update indexing information",
        "Maintain compliance & standards",
        "Re-indexing and additional indexing support",
      ],
    ],
  ];

  const process = [
    [
      ClipboardCheck,
      "1. Assess",
      "Assess journal readiness and indexing goals",
    ],
    [FileText, "2. Plan", "Create a customized indexing plan"],
    [ClipboardCheck, "3. Prepare", "Prepare documents and meet requirements"],
    [Send, "4. Submit", "Submit applications and follow up"],
    [Award, "5. Achieve", "Get indexed and increase visibility"],
    [TrendingUp, "6. Grow", "Sustain compliance and expand indexing"],
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
              className="text-[12px] text-[#3d25e6] mb-6 font-medium inline-block"
            >
              Home &nbsp;›&nbsp; Publishers &nbsp;›&nbsp; Indexing Support
            </Link>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
              Indexing Support.
              <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Increase Visibility. Maximize Impact.
              </span>
            </h1>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              RCII helps publishers get their journals indexed in leading
              national and international databases, improving discoverability,
              credibility, and global reach.
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
            Key Benefits of Indexing
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
          Our Indexing Support Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(([title, Icon, points]) => (
            <div
              key={title}
              className="bg-white border border-[#e2e7fb] rounded-[14px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-[64px] h-[64px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] shrink-0">
                  <Icon size={30} />
                </div>

                <div>
                  <h3 className="font-bold text-[16px] mb-4">{title}</h3>

                  {points.map((p) => (
                    <p
                      key={p}
                      className="flex items-start gap-2 text-[13px] mb-2"
                    >
                      <CheckCircle
                        size={14}
                        className="text-[#4424e9] mt-[2px] shrink-0"
                      />
                      {p}
                    </p>
                  ))}

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
            Our Proven Indexing Process
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {process.map(([Icon, title, desc], index) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto w-[66px] h-[66px] rounded-full bg-[#eeeaff] flex items-center justify-center text-[#4424e9] hover:bg-[#4424e9] hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="mt-4 font-bold text-[13px]">{title}</h3>
                <p className="mt-2 text-[11px] leading-5">{desc}</p>

                {index !== 5 && (
                  <div className="hidden lg:block absolute top-[33px] -right-6 w-12 border-t-2 border-dashed border-[#8c8abf]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEXES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-white border border-[#e2e7fb] rounded-[16px] p-6 shadow-sm">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
            Indexes We Support
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {[
              {
                name: "DOAJ",
                sub: "DIRECTORY OF OPEN ACCESS JOURNALS",
                color: "#f58220",
              },
              { name: "Scopus", sub: "", color: "#1a7898" },
              { name: "WEB OF SCIENCE", sub: "", color: "#ff6b00" },
              { name: "PubMed", sub: "", color: "#0f5f9f" },
              {
                name: "ERIHPLUS",
                sub: "EUROPEAN REFERENCE INDEX",
                color: "#2f65a7",
              },
              { name: "EBSCO", sub: "", color: "#1b5fae" },
              { name: "ProQuest", sub: "", color: "#a13d4d" },
              { name: "Google Scholar", sub: "", color: "#4285F4" },
              { name: "View All", sub: "Indexes →", color: "#4424e9" },
            ].map((item) => (
              <div
                key={item.name}
                className="h-[74px] bg-white border border-[#dfe4ff] rounded-[10px] flex flex-col items-center justify-center text-center px-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <span
                  className="font-bold leading-none text-[20px]"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>

                {item.sub && (
                  <span
                    className="mt-1 text-[8px] leading-[10px] font-bold"
                    style={{ color: item.color }}
                  >
                    {item.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* IMPACT */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <div className="bg-gradient-to-r from-[#4421F3] via-[#1B47D8] to-[#0087A8] shadow-[0_15px_40px_rgba(25,55,180,0.25)] rounded-[14px] text-white px-6 sm:px-8 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            [ClipboardCheck, "850+", "Journals Supported"],
            [Globe2, "120+", "Indexes Covered"],
            [Award, "90%+", "Success Rate"],
            [Users, "3X", "Increase in Visibility"],
            [TrendingUp, "50%+", "Increase in Submissions"],
          ].map(([Icon, num, label]) => (
            <div
              key={label}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <Icon size={36} className="text-white/80" />
              <div>
                <h3 className="text-[20px] font-bold">{num}</h3>
                <p className="text-[12px] font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-8">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
          What Our Partners Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            [
              "RCII’s indexing support was exceptional. Their team guided us at every step and helped our journal get indexed in Scopus. Highly recommended!",
              "Dr. Anil Kumar",
              "Editor-in-Chief",
            ],
            [
              "Thanks to RCII, our journal is now indexed in multiple databases including DOAJ and EBSCO. Their professional approach and attention to detail are commendable.",
              "Prof. Linda Matthews",
              "Managing Editor",
            ],
            [
              "RCII provided end-to-end support and made the indexing process seamless. Our visibility and submissions have significantly improved.",
              "Dr. Rajesh Singh",
              "Publisher",
            ],
          ].map(([text, name, role]) => (
            <div
              key={name}
              className="bg-white border border-[#e2e7fb] rounded-[12px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Quote size={24} color={blue} />
              <p className="text-[13px] leading-6 mt-4">{text}</p>
              <h4 className="font-bold text-[14px] mt-5">{name}</h4>
              <p className="text-[12px] text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
