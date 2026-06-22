import { useState } from "react";
import {
  Target,
  Users,
  TrendingUp,
  Handshake,
  Lightbulb,
  Shield,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  BarChart2,
  BookOpen,
  FileText,
  Award,
  Globe,
  Star,
  CheckCircle,
  Search,
  Layers,
  Zap,
  Clock,
  MessageSquare,
  Building2,
  FlaskConical,
  DollarSign,
  Network,
  ScrollText,
  Activity,
  BarChart3,
  ClipboardList,
  GraduationCap,
  Landmark,
  Settings,
  ShieldCheck,
  Monitor,
  ClipboardCheck,
  Rocket,
  ThumbsUp,
  Calendar,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/bgconst.png";
import impact1 from "../../assets/resercher1.png";
import impact2 from "../../assets/researcher2.png";
import impact3 from "../../assets/resercher3.png";
import impact4 from "../../assets/resercher4.png";
import ctaConsulting from "../../assets/ctaConsult.png";
// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Researchers", href: "#", hasDropdown: true },
  { label: "Institutions", href: "#", hasDropdown: true, active: true },
  { label: "Publishers", href: "#", hasDropdown: true },
  { label: "Innovation & IP", href: "#", hasDropdown: true },
  { label: "Technology", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "About Us", href: "#" },
];

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Strategic Planning",
    color: "text-[#5B3DF5]",
    bg: "bg-[#F3EEFF]",
    items: [
      "Vision & Mission Alignment",
      "Research Prioritization",
      "Roadmap Development",
    ],
  },
  {
    icon: Search,
    title: "Institutional Analysis",
    color: "text-[#0EA5E9]",
    bg: "bg-[#E8F8FC]",
    items: [
      "SWOT & Gap Analysis",
      "Benchmarking Studies",
      "Strengths Assessment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Research Capacity Building",
    color: "text-[#12A150]",
    bg: "bg-[#EAF8F0]",
    items: [
      "Faculty Development",
      "Workshops & Training",
      "Mentorship Programs",
    ],
  },
  {
    icon: Landmark,
    title: "Grant & Funding Strategy",
    color: "text-[#FF7A00]",
    bg: "bg-[#FFF3E8]",
    items: [
      "Funding Landscape Analysis",
      "Grant Opportunity Mapping",
      "Proposal Readiness Support",
    ],
  },
  {
    icon: Handshake,
    title: "Collaboration & Partnerships",
    color: "text-[#5B3DF5]",
    bg: "bg-[#F3EEFF]",
    items: [
      "Partner Identification",
      "MoUs & Agreements",
      "Network Development",
    ],
  },
  {
    icon: Settings,
    title: "Research Process Optimization",
    color: "text-[#FF5C5C]",
    bg: "bg-[#FFECEC]",
    items: [
      "Workflow Improvement",
      "Best Practices Adoption",
      "Quality Assurance",
    ],
  },
  {
    icon: BarChart3,
    title: "Research Impact & Metrics",
    color: "text-[#22C55E]",
    bg: "bg-[#ECFDF3]",
    items: ["Impact Measurement", "KPI Development", "Reporting & Dashboards"],
  },
  {
    icon: ShieldCheck,
    title: "Policy & Compliance",
    color: "text-[#7C3AED]",
    bg: "bg-[#F5F0FF]",
    items: [
      "Research Policies",
      "Ethics & Compliance",
      "Open Science Guidance",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Transformation",
    color: "text-[#3B82F6]",
    bg: "bg-[#EEF6FF]",
    items: [
      "Research Systems Advisory",
      "Data Management Strategy",
      "Technology Integration",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Change Management",
    color: "text-[#4F46E5]",
    bg: "bg-[#EEF2FF]",
    items: [
      "Stakeholder Engagement",
      "Communication Plans",
      "Adoption & Sustainability",
    ],
  },
];

const EXPERTISE = [
  {
    icon: Search,
    label: "Research Strategy",
    desc: "Develop aligned research strategies and priorities.",
  },
  {
    icon: BarChart3,
    label: "Capacity Building",
    desc: "Strengthen research capabilities and skills.",
  },
  {
    icon: Lightbulb,
    label: "Policy & Governance",
    desc: "Design policies, frameworks and governance models.",
  },
  {
    icon: Users,
    label: "Performance Improvement",
    desc: "Optimize processes and improve research outcomes.",
  },
  {
    icon: Handshake,
    label: "Collaboration Advisory",
    desc: "Facilitate partnerships and consortia development.",
  },
  {
    icon: Target,
    label: "Impact & Outcomes",
    desc: "Measure impact and communicate value.",
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    label: "Understand",
    desc: "Discover your needs and challenges",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BarChart2,
    label: "Analyze",
    desc: "Assess data and identify opportunities",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Layers,
    label: "Strategize",
    desc: "Design actionable solutions",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Zap,
    label: "Implement",
    desc: "Execute with expert guidance",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Activity,
    label: "Impact",
    desc: "Measure outcomes and optimize",
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
];

const STATS = [
  { icon: Building2, value: "250+", label: "Institutions Served" },
  { icon: FileText, value: "500+", label: "Consulting Projects" },
  { icon: Users, value: "30+", label: "Expert Consultants" },
  { icon: Globe, value: "25+", label: "Countries" },
  { icon: Star, value: "95%", label: "Client Satisfaction" },
];

const IMPACT = [
  {
    icon: CheckCircle,
    stat: "62%",
    label: "Increase in Grant Success Rate",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    stat: "3x",
    label: "Research Output Growth",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Globe,
    stat: "40+",
    label: "International Collaborations",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Award,
    stat: "95%",
    label: "Client Satisfaction Rate",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const RESOURCES = [
  {
    icon: FileText,
    label: "Research Strategy Template",
    color: "text-blue-600",
  },
  {
    icon: BarChart2,
    label: "Institutional Benchmark Report",
    color: "text-green-600",
  },
  { icon: BookOpen, label: "Grant Writing Guide", color: "text-orange-500" },
  {
    icon: Shield,
    label: "Policy Framework Templates",
    color: "text-indigo-600",
  },
  { icon: Users, label: "Capacity Building Toolkit", color: "text-purple-600" },
  {
    icon: Activity,
    label: "Impact Assessment Toolkit",
    color: "text-pink-600",
  },
];

const FOOTER_COLS = [
  {
    title: "For Researchers",
    links: [
      "Author Services",
      "Publication Support",
      "Research Profiling",
      "Grants & Funding",
      "Career Resources",
      "Research Resources",
    ],
  },
  {
    title: "For Institutions",
    links: [
      "Research Analytics",
      "RAMS Platform",
      "Institutional Repository",
      "Research Consulting",
      "Policy & Strategy",
    ],
  },
  {
    title: "For Publishers",
    links: [
      "Journal Hosting",
      "Editorial Systems",
      "DOI Solutions",
      "Indexing Services",
      "Publishing Consultancy",
    ],
  },
  {
    title: "Innovation & IP",
    links: [
      "IP Services",
      "Patent Support",
      "Technology Transfer",
      "Commercialization",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact Us",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

const expertiseColors = [
  {
    bg: "bg-[#F3EEFF]",
    icon: "text-[#5B3DF5]", // Research Strategy
  },
  {
    bg: "bg-[#EAF8F0]",
    icon: "text-[#12A150]", // Capacity Building
  },
  {
    bg: "bg-[#FFF3E8]",
    icon: "text-[#FF7A00]", // Policy & Governance
  },
  {
    bg: "bg-[#EEF4FF]",
    icon: "text-[#2563EB]", // Performance Improvement
  },
  {
    bg: "bg-[#F3EEFF]",
    icon: "text-[#6D28D9]", // Collaboration Advisory
  },
  {
    bg: "bg-[#EAF8F0]",
    icon: "text-[#0F9F6E]", // Impact & Outcomes
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ResearchConsulting() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      {/* ── MAIN CONTENT ── */}
      <main className="w-full overflow-hidden -mt-2">
        <section
          className="relative min-h-[520px] sm:min-h-[380px] lg:min-h-[440px] bg-cover bg-no-repeat flex items-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
            <div className="max-w-[620px] mt-16">
              <nav className="flex items-center gap-2 text-[12px] font-medium text-[#3d25e6] mb-6">
                <Link to="/">Home</Link>
                <ChevronRight size={12} />
                <Link to="/institutions">Institutions</Link>
                <ChevronRight size={12} />
                <span className="text-[#07113F]">Research Consulting</span>
              </nav>

              <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F]">
                Research
                <br />
                <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>

              <h2 className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
                Strategic Guidance. Smarter Research. Greater Impact.
              </h2>

              <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
                Partner with our experts to design research strategies, build
                institutional capacity, and achieve excellence.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
                <Link className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                  <MessageSquare size={18} />
                  Talk to a Consultant
                </Link>

                <Link className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                  Explore All Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR CONSULTING EXPERTISE ── */}
        <section className="bg-[#F7F8FF] relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8">
          <div className=" bg-white rounded-[14px] shadow-[0_8px_28px_rgba(15,23,42,0.08)] border border-[#EEF0FF] px-6 sm:px-4 lg:px-4 py-6">
            <div className="text-center mb-4">
              <h2 className="text-center pt-4 text-[18px] sm:text-[22px] font-bold">
                Our Consulting Expertise
              </h2>
              <div className="w-10 h-[3px] bg-[#4F46E5] rounded-full mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {EXPERTISE.map(({ icon: Icon, label, desc }, index) => {
                const colors = expertiseColors[index];

                return (
                  <div
                    key={label}
                    className={`group flex flex-col items-center text-center px-2 py-2 transition-all duration-300 hover:-translate-y-2
      ${index !== EXPERTISE.length - 1 ? "lg:border-r border-[#E7EAF5]" : ""}`}
                  >
                    <div
                      className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4
        ${colors.bg}
        group-hover:scale-110 group-hover:shadow-[0_12px_24px_rgba(79,70,229,0.12)]
        transition-all duration-300`}
                    >
                      <Icon
                        size={28}
                        className={`${colors.icon} transition-all duration-300`}
                      />
                    </div>

                    <h3 className="text-[13px] font-semibold text-[#07113F] mb-3">
                      {label}
                    </h3>

                    <p className="text-[12px] leading-[1.6] text-[#1E293B] font-medium max-w-[160px]">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── END-TO-END RESEARCH CONSULTING SERVICES ── */}

        <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
          <div className="max-w-[1420px] mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
                End-to-End Research Consulting Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {SERVICES.map(({ icon: Icon, title, color, bg, items }) => (
                <div
                  key={title}
                  className="group bg-white/80 rounded-[10px] px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] border border-[#EEF0FF] hover:-translate-y-2 hover:shadow-xl hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-[38px] h-[38px] rounded-full ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={20} className={color} />
                    </div>

                    <h3 className="text-[13px] font-bold text-[#07113F] leading-snug">
                      {title}
                    </h3>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[11px] text-[#07113F] font-semibold leading-snug"
                      >
                        <CheckCircle
                          size={13}
                          className="text-[#2563EB] mt-[1px] shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#4F46E5] hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSULTING PROCESS + STATS ── */}
        <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
          <div className="max-w-[1420px] mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold mb-8">
                Our Consulting Process
              </h2>
            </div>

            {/* Process */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 items-start mb-8">
              {[
                {
                  no: "01",
                  icon: Users,
                  label: "Understand",
                  desc: "Understand goals, challenges & needs",
                  color: "text-[#5B3DF5]",
                },
                {
                  no: "02",
                  icon: Search,
                  label: "Analyze",
                  desc: "Analyze data, context & opportunities",
                  color: "text-[#FF7A00]",
                },
                {
                  no: "03",
                  icon: ClipboardList,
                  label: "Design",
                  desc: "Co-create strategies and action plans",
                  color: "text-[#FF7A00]",
                },
                {
                  no: "04",
                  icon: Rocket,
                  label: "Implement",
                  desc: "Support execution & capacity building",
                  color: "text-[#0EA5E9]",
                },
                {
                  no: "05",
                  icon: BarChart3,
                  label: "Evaluate",
                  desc: "Monitor progress & measure outcomes",
                  color: "text-[#5B3DF5]",
                },
                {
                  no: "06",
                  icon: Target,
                  label: "Improve",
                  desc: "Refine strategies for sustainable impact",
                  color: "text-[#0EA5E9]",
                },
              ].map(({ no, icon: Icon, label, desc, color }, index, arr) => (
                <div
                  key={label}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative w-[68px] h-[68px] rounded-full border-2 border-[#C8C3FF] bg-[#F4F7FF] flex items-center justify-center mb-4 group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                    <span className="absolute -top-4 w-7 h-7 rounded-full bg-[#4F46E5] text-white text-[12px] font-extrabold flex items-center justify-center">
                      {no}
                    </span>
                    <Icon size={28} className={color} />
                  </div>

                  {index !== arr.length - 1 && (
                    <div className="hidden lg:block absolute top-[44px] left-[68%] w-[64%] border-t-2 border-dotted border-[#4F46E5]">
                      <ArrowRight
                        size={18}
                        className="absolute -right-2 -top-[10px] text-[#4F46E5]"
                      />
                    </div>
                  )}
                  <h3 className="text-[14px] font-bold text-[#07113F] mb-2">
                    {label}
                  </h3>

                  <p className="text-[11px] text-[#07113F] font-semibold leading-[1.6] max-w-[130px]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Strip */}
            <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[14px] shadow-lg px-6 py-5">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 lg:gap-y-0">
                {[
                  {
                    icon: Building2,
                    value: "500+",
                    label: "Institutions Served",
                  },
                  {
                    icon: FileText,
                    value: "1000+",
                    label: "Consulting Projects",
                  },
                  { icon: Globe, value: "25+", label: "Countries Impacted" },
                  {
                    icon: ThumbsUp,
                    value: "98%",
                    label: "Client Satisfaction",
                  },
                  { icon: Users, value: "50+", label: "Expert Consultants" },
                ].map(({ icon: Icon, value, label }, index, arr) => (
                  <div
                    key={label}
                    className={`group flex items-center justify-center gap-4 py-3 text-white hover:-translate-y-1 transition-all duration-300 ${
                      index !== arr.length - 1
                        ? "lg:border-r border-white/20"
                        : ""
                    }`}
                  >
                    <div className="w-[56px] h-[56px] rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="text-[16px] sm:text-[18px] font-semibold leading-none">
                        {value}
                      </h3>
                      <p className="text-[13px] font-medium text-white/95 mt-1">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPACT WE CREATE + CTA ── */}
        <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
          <div className="max-w-[1420px] mx-auto">
            <div className="text-center mb-5">
              <h2 className="text-[20px] font-bold text-[#07113F]">
                Impact We Create
              </h2>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {[
                {
                  badge: "✓",
                  title: "Research Capacity Enhanced",
                  stat: "+65%",
                  desc: "Increase in research output",
                  img: impact1,
                  bg: "bg-[#10B981]",
                },
                {
                  badge: "✓",
                  title: "Grant Success Rate Improved",
                  stat: "+48%",
                  desc: "More grants secured",
                  img: impact2,
                  bg: "bg-[#F97316]",
                },
                {
                  badge: "✓",
                  title: "Collaborations Strengthened",
                  stat: "+120%",
                  desc: "Increase in active MoUs",
                  img: impact3,
                  bg: "bg-[#4F46E5]",
                },
                {
                  badge: "✓",
                  title: "Global Rankings Advanced",
                  stat: "Top 100",
                  desc: "Improvement in rankings",
                  img: impact4,
                  bg: "bg-[#2563EB]",
                },
              ].map(({ badge, title, stat, desc, img, bg }) => (
                <div
                  key={title}
                  className="group bg-white rounded-[12px] border border-[#EEF0FF] shadow-[0_8px_24px_rgba(15,23,42,0.08)] p-4 flex items-center justify-between gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-4">
                      <span
                        className={`w-6 h-6 rounded-full ${bg} text-white text-[12px] flex items-center justify-center shrink-0`}
                      >
                        {badge}
                      </span>

                      <h3 className="text-[12px] font-semibold text-[#07113F] leading-snug">
                        {title}
                      </h3>
                    </div>

                    <h4 className="text-[20px] font-semibold text-[#1D2BFF] leading-none mb-3">
                      {stat}
                    </h4>

                    <p className="text-[10px] text-[#07113F] font-medium">
                      {desc}
                    </p>
                  </div>

                  <img
                    src={img}
                    alt={title}
                    className="w-[120px] h-[120px] object-cover rounded-[10px] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="bg-[#F0EFFF] rounded-[14px] border border-[#EEF0FF] shadow-[0_8px_24px_rgba(15,23,42,0.05)] overflow-hidden px-5 sm:px-7 lg:px-10 py-2">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 h-[150px]">
                <div className="hidden md:block shrink-0">
                  <img
                    src={ctaConsulting}
                    alt="Research Excellence"
                    className="w-[250px] lg:w-[320px] object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[14px] sm:text-[16px] font-bold text-[#07113F] mb-4">
                    Let's Build Research Excellence Together
                  </h2>

                  <p className="text-[12px] sm:text-[12px] text-[#07113F] font-medium leading-[1.8] max-w-[560px] mx-auto lg:mx-0">
                    Book a free consultation with our experts and take the first
                    step towards transformational growth.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] text-white text-[13px] font-semibold px-8 py-3.5 rounded-md hover:-translate-y-1 hover:shadow-xl hover:bg-[#4338CA] transition-all duration-300"
                  >
                    <Calendar size={16} />
                    Book a Free Consultation
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#4F46E5] text-[#4F46E5] text-[13px] font-semibold px-8 py-3.5 rounded-md hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <Download size={16} />
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
