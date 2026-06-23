import React from "react";
import {
  Eye,
  Target,
  Gem,
  Users,
  Landmark,
  BookOpen,
  Lightbulb,
  Globe2,
  ShieldCheck,
  Award,
  Network,
  Mail,
  ArrowRight,
  CheckCircle,
  UserRound,
  BarChart3,
  FileText,
  HandHeart,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/bgabout.png";
const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Researchers\nEmpowered",
    color: "text-[#5A38FF]",
  },
  {
    icon: Landmark,
    value: "500+",
    label: "Institutions\nServed",
    color: "text-[#08A7C2]",
  },
  {
    icon: BookOpen,
    value: "300+",
    label: "Journals\nSupported",
    color: "text-[#553BFF]",
  },
  {
    icon: Lightbulb,
    value: "2K+",
    label: "Patents\nAssisted",
    color: "text-[#FF9B1A]",
  },
  {
    icon: Globe2,
    value: "25+",
    label: "Countries\nWorldwide",
    color: "text-[#553BFF]",
  },
];

const purpose = [
  {
    icon: Eye,
    title: "Our Mission",
    iconBg: "from-[#6B49FF] to-[#3518E8]",
    titleColor: "text-[#563BFF]",
    text: "To empower researchers and organizations through ethical services, innovative technology, and data-driven solutions that enhance research quality, visibility, and impact.",
  },
  {
    icon: Target,
    title: "Our Vision",
    iconBg: "from-[#17BBD1] to-[#0789A8]",
    titleColor: "text-[#08A8C3]",
    text: "To be the most trusted global partner in research advancement, innovation, and impact—driving a future where research creates meaningful change.",
  },
  {
    icon: Gem,
    title: "Our Purpose",
    iconBg: "from-[#6B49FF] to-[#3518E8]",
    titleColor: "text-[#563BFF]",
    text: "To connect knowledge, technology, and people to accelerate research, foster innovation, and deliver measurable impact for a better world.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We uphold the highest ethical standards in everything we do.",
    color: "text-[#563BFF]",
    bg: "bg-[#F3F0FF]",
  },
  {
    icon: BadgeCheck,
    title: "Excellence",
    text: "We are committed to accuracy, continuous improvement.",
    color: "text-[#08A7C2]",
    bg: "bg-[#EAF8FB]",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We believe in the power of partnerships and shared success.",
    color: "text-[#563BFF]",
    bg: "bg-[#F3F0FF]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace technology and new ideas to solve real-world challenges.",
    color: "text-[#08A7C2]",
    bg: "bg-[#EAF8FB]",
  },
  {
    icon: HandHeart,
    title: "Impact",
    text: "We measure success by the positive change we create.",
    color: "text-[#563BFF]",
    bg: "bg-[#F3F0FF]",
  },
  {
    icon: Globe2,
    title: "Inclusivity",
    text: "We are committed to accessibility, diversity, and global reach.",
    color: "text-[#08A7C2]",
    bg: "bg-[#EAF8FB]",
  },
];

const leadership = [
  {
    icon: UserRound,
    label: "Experts &\nResearchers",
    color: "text-[#563BFF]",
    bg: "bg-[#F3F0FF]",
  },
  {
    icon: BadgeCheck,
    label: "Technologists &\nDevelopers",
    color: "text-[#08A7C2]",
    bg: "bg-[#EAF8FB]",
  },
  {
    icon: UserRound,
    label: "Publication &\nIP Specialists",
    color: "text-[#563BFF]",
    bg: "bg-[#F3F0FF]",
  },
  {
    icon: Users,
    label: "Data & Analytics\nProfessionals",
    color: "text-[#08A7C2]",
    bg: "bg-[#EAF8FB]",
  },
];

const why = [
  "Ethical, Transparent & Researcher-Centric Approach",
  "End-to-End Solutions Across the Research Lifecycle",
  "Advanced Technology Platforms for Research Management",
  "Global Standards, Local Understanding",
  "Proven Impact Across Institutions and Researchers",
  "Dedicated Support and Long-Term Partnership",
];

export default function About() {
  return (
    <main className="w-full bg-white pt-[70px] text-[#101936]">
      {/* HERO */}

  <section className="py-6 relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[470px] bg-white">
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
      <span className="text-gray-500">About Us</span>
            </div>
      
            <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
            About <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
              RCII
              </span>
            </h1>
      
            <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-5">
              Empowering the Global Research Ecosystem
            </p>
      
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
              Researcher Connect Innovation and Impact Private Limited (RCII)
              is a global research solutions and technology company committed
              to advancing research quality, ethics, visibility, and impact.
            </p>

            
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
            We partner with researchers, institutions, publishers, and
              innovators to build a stronger, more connected research world.
            </p>
      
          
          </div>
        </div>
      </section>

    

      {/* PURPOSE */}
     <section className="w-full bg-white px-4 py-4 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-5 text-center">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071435]">
            Our Purpose
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[44px] rounded-full bg-[#13BFD1]" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {purpose.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group min-h-[270px] rounded-[10px] border border-[#E5E8F5] bg-[#F7F8FF] px-7 py-9 shadow-[0_8px_24px_rgba(33,47,90,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#cfd5ff] hover:shadow-[0_20px_45px_rgba(86,59,255,0.14)]"
              >
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
                  <div
                    className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.iconBg} text-white shadow-[0_10px_24px_rgba(86,59,255,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  <h3 className={`text-[18px] font-bold ${item.titleColor}`}>
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-[14px] font-semibold leading-[1.9] text-[#182344]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

     <section className="w-full bg-white px-4 py-4 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-[10px] border border-[#E6E8F6] bg-[#F7F8FF] shadow-[0_8px_24px_rgba(33,47,90,0.05)] sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative flex min-h-[95px] bg-[#F7F8FF] items-center justify-center gap-4 px-6 py-7 transition-all duration-300 hover:bg-white ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-[#DDE1F0]"
                    : ""
                }`}
              >
                <Icon
                  size={43}
                  strokeWidth={1.8}
                  className={`${item.color} shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110`}
                />

                <div>
                  <h3 className="text-[20px] font-bold leading-none text-[#111936]">
                    {item.value}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-[12px] font-bold leading-[1.25] text-[#1B2342]">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* VALUES */}

    <section className="w-full bg-white px-4 pb-8 pt-2 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-7 text-center">
          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071435]">
            Our Core Values
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#13BFD1]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group flex min-h-[228px] flex-col items-center rounded-[10px] border border-[#E5E8F5] bg-white px-4 py-6 text-center shadow-[0_8px_22px_rgba(33,47,90,0.04)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#CDD4FF] hover:shadow-[0_18px_40px_rgba(86,59,255,0.14)]"
              >
                <div
                  className={`mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full ${item.bg} ${item.color} transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className={`mb-3 text-[15px] font-bold ${item.color}`}>
                  {item.title}
                </h3>

                <p className="max-w-[150px] text-[12px] font-bold leading-[1.75] text-[#1F2A48]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>


      {/* LEADERSHIP + WHY */}
       <section className="w-full bg-white px-4 pb-8 sm:px-6 lg:px-14">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[12px] border border-[#E5E8F5] bg-[#F7F8FF]  shadow-[0_8px_24px_rgba(33,47,90,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="px-6 py-7 sm:px-8 lg:border-r lg:border-[#E2E6F2]">
            <h3 className="text-[20px]  sm:text-[24px] font-bold text-[#071435]">
              Our Leadership
            </h3>
            <div className="mt-2 h-[3px] w-[44px] rounded-full bg-[#13BFD1]" />

            <p className="mt-4 max-w-[560px] text-[13px] font-bold leading-[1.9] text-[#25304E]">
              A team of experts, researchers, technologists, and innovators
              working together to transform the research ecosystem.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {leadership.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="group text-center transition-all duration-300 hover:-translate-y-2"
                  >
                    <div
                      className={`mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full ${item.bg} ${item.color} transition-all duration-300 `}
                    >
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    <p className="whitespace-pre-line text-[13px] font-semibold leading-[1.35] text-[#17213E]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* <button className="group mx-auto mt-6 flex h-[40px] items-center gap-3 rounded-[5px] border border-[#08A7C2] px-7 text-[13px] font-bold text-[#08A7C2] transition-all duration-300 hover:-translate-y-1 hover:bg-[#08A7C2] hover:text-white">
              Meet Our Team
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button> */}
          </div>

          {/* RIGHT */}
          <div className="px-6 py-7 sm:px-8">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#071435]">
              Why Choose RCII?
            </h3>
            <div className="mt-2 h-[3px] w-[44px] rounded-full bg-[#13BFD1]" />

            <div className="mt-7 space-y-4">
              {why.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle
                    size={20}
                    className="mt-[1px] shrink-0 text-[#08A7C2] transition-all duration-300 group-hover:scale-110"
                    fill="#08A7C2"
                    stroke="white"
                    strokeWidth={3}
                  />
                  <p className="text-[13px] font-semibold leading-[1.5] text-[#17213E] sm:text-[14px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA */}
       <section className="w-full bg-white px-4 pb-10 sm:px-6 lg:px-14">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 rounded-[12px] border border-[#E6E8F6] bg-gradient-to-r from-[#F5F2FF] via-[#F9FAFF] to-[#F3F6FF] px-6 py-6 shadow-[0_8px_24px_rgba(33,47,90,0.04)] sm:flex-row sm:px-10 lg:px-[120px]">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6B49FF] to-[#3518E8] text-white shadow-[0_12px_28px_rgba(86,59,255,0.28)] transition-all duration-300 ">
            <Mail size={34} strokeWidth={1.8} />
          </div>

          <div>
            <h3 className="text-[24px] font-bold leading-tight text-[#071435]">
              Let’s Build Impact Together
            </h3>
            <p className="mt-2 max-w-[520px] text-[13px] font-bold leading-[1.7] text-[#25304E]">
              Partner with RCII to accelerate research, drive innovation,
              and create global impact.
            </p>
          </div>
        </div>
 <Link to="/contact">
        <button className="group flex h-[48px] min-w-[170px] items-center justify-center gap-3 rounded-[6px] bg-[#563BFF] px-7 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(86,59,255,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#432BDE]">
          Get in Touch
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button></Link>
      </div>
    </section>
    </main>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111936]">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#11BFD2]" />
    </div>
  );
}