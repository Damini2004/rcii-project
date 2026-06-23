import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  Database,
  Search,
  Lock,
  BarChart2,
  FileText,
  Tag,
  Hash,
  Shuffle,
  Palette,
  BookOpen,
  FileStack,
  GraduationCap,
  Book,
  ClipboardList,
  Grid,
  File,
  Presentation,
  Award,
  ScrollText,
  Video,
  MoreHorizontal,
  Upload,
  Share2,
  Building,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import heroBg from "../../assets/insRepoBG.png";
import integrationImg from "../../assets/integration.png";
import ctaImg from "../../assets/ctabottum.png";

const NAV_LINKS = [
  { label: "Home" },
  { label: "Researchers", dropdown: true },
  { label: "Institutions", dropdown: true, active: true },
  { label: "Publishers", dropdown: true },
  { label: "Innovation & IP", dropdown: true },
  { label: "Technology", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "About Us" },
];

const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "Preserve Research",
    desc: "Ensure long-term preservation and accessibility of your institution's research.",
  },
  {
    icon: Globe,
    title: "Increase Visibility",
    desc: "Enhance global visibility and showcase your research excellence.",
  },
  {
    icon: BarChart3,
    title: "Drive Impact",
    desc: "Increase citations, downloads, and research impact.",
  },
  {
    icon: Users,
    title: "Facilitate Collaboration",
    desc: "Enable discovery and collaboration within and beyond your institution.",
  },
  {
    icon: Lock,
    title: "Ensure Compliance",
    desc: "Meet funder mandates and institutional open access policies.",
  },
  {
    icon: Database,
    title: "Reduce Costs",
    desc: "Cost-effective solution for managing and disseminating research output.",
  },
];

const FEATURES_LEFT = [
  {
    icon: Search,
    title: "Advanced Search",
    desc: "Powerful search and filters to quickly find relevant content.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Role-based permissions and access management.",
  },
  {
    icon: BarChart2,
    title: "Statistics & Analytics",
    desc: "Track usage, downloads and research impact metrics.",
  },
  {
    icon: FileText,
    title: "Multi-format Support",
    desc: "Support for diverse file types and formats.",
  },
];

const FEATURES_RIGHT = [
  {
    icon: Tag,
    title: "Metadata Management",
    desc: "Support for rich metadata and multiple standards.",
  },
  {
    icon: Hash,
    title: "Persistent Identifiers",
    desc: "DOI, Handle and other PIDs for long-term discovery.",
  },
  {
    icon: Shuffle,
    title: "Interoperability",
    desc: "OAI-PMH, API and SWORD support for easy integration.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    desc: "Customize the look and feel to reflect your identity.",
  },
];

const CONTENT_TYPES = [
  { icon: FileText, label: "Journal Articles", color: "text-indigo-600" },
  { icon: FileStack, label: "Conference Papers", color: "text-blue-600" },
  {
    icon: GraduationCap,
    label: "Theses & Dissertations",
    color: "text-cyan-600",
  },
  { icon: Book, label: "Books & Chapters", color: "text-indigo-500" },
  { icon: ClipboardList, label: "Research Reports", color: "text-blue-500" },
  { icon: Grid, label: "Data Sets", color: "text-indigo-600" },
  { icon: File, label: "Working Papers", color: "text-cyan-500" },
  { icon: Presentation, label: "Presentations", color: "text-blue-600" },
  { icon: Award, label: "Patents", color: "text-indigo-500" },
  { icon: ScrollText, label: "Policies & Guidelines", color: "text-blue-500" },
  { icon: Video, label: "Audio / Video", color: "text-cyan-600" },
  { icon: MoreHorizontal, label: "And More", color: "text-indigo-400" },
];

const INTEGRATIONS = [
  "Integration with CRIS, LMS & Library Systems",
  "OAI-PMH for global harvesting",
  "ORCID & Author Identifier Integration",
  "Crossref & DataCite Support",
];

const STATS = [
  { icon: Building, value: "500+", label: "Institutions Trust Us" },
  { icon: Database, value: "15M+", label: "Items Archived" },
  { icon: Upload, value: "80M+", label: "Downloads" },
  { icon: Globe, value: "200+", label: "Countries Reached" },
  { icon: Shield, value: "99.9%", label: "Uptime & Data Security" },
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
      "Benchmarking Support",
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

// Laptop Dashboard Illustration
function DashboardIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[340px]">
      {/* Plant */}
      <div className="absolute top-0 right-4 z-10">
        <div className="w-10 h-10 rounded-full bg-green-400 opacity-80 blur-sm" />
        <div className="w-6 h-16 bg-green-600 mx-auto rounded-b-full -mt-4" />
        <div className="w-12 h-4 bg-amber-700 rounded mx-auto" />
      </div>
      {/* Mug */}
      <div className="absolute bottom-10 right-8 z-10">
        <div className="w-12 h-10 bg-white border-2 border-gray-200 rounded-b-lg flex items-center justify-center shadow">
          <span className="text-indigo-700 font-bold text-xs">Rc</span>
        </div>
        <div className="w-4 h-5 border-2 border-gray-200 rounded-r-full absolute -right-3 top-1 bg-transparent" />
      </div>
      {/* Books */}
      <div className="absolute bottom-6 left-2 z-10 flex gap-1">
        {["bg-indigo-500", "bg-blue-400", "bg-cyan-400"].map((c, i) => (
          <div key={i} className={`w-5 h-14 ${c} rounded-sm opacity-80`} />
        ))}
      </div>
      {/* Labels */}
      <div className="absolute right-0 top-1/3 z-10 flex flex-col gap-1">
        <div className="bg-indigo-700 text-white text-[9px] font-bold px-2 py-1 rounded-l">
          RESEARCH EXCELLENCE
        </div>
        <div className="bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded-l">
          KNOWLEDGE SHARING
        </div>
      </div>
      {/* Laptop */}
      <div className="relative z-0 w-full max-w-md">
        {/* Screen */}
        <div
          className="bg-gray-100 rounded-t-xl border-4 border-gray-300 shadow-2xl overflow-hidden"
          style={{ aspectRatio: "16/10" }}
        >
          {/* Dashboard header */}
          <div className="bg-white px-3 py-2 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="text-[10px] text-gray-500 font-semibold mx-auto">
              Repository Overview
            </div>
          </div>
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-20 bg-indigo-900 text-white text-[8px] py-3 flex flex-col gap-2 flex-shrink-0">
              {[
                "Dashboard",
                "Communities",
                "Collections",
                "Items",
                "Authors",
                "Statistics",
                "Reports",
                "Settings",
              ].map((s) => (
                <div
                  key={s}
                  className={`px-2 py-1 rounded-sm mx-1 ${s === "Dashboard" ? "bg-indigo-600 font-bold" : ""}`}
                >
                  {s}
                </div>
              ))}
            </div>
            {/* Main */}
            <div className="flex-1 p-2 bg-gray-50 overflow-hidden">
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-1 mb-2">
                {[
                  ["Total Items", "25,680"],
                  ["Full Text Items", "18,742"],
                  ["Downloads", "125,430"],
                  ["Communities", "256"],
                ].map(([l, v]) => (
                  <div key={l} className="bg-white rounded p-1 shadow-sm">
                    <div className="text-[7px] text-gray-400">{l}</div>
                    <div className="text-[10px] font-bold text-gray-800">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              {/* Charts */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded p-1 shadow-sm">
                  <div className="text-[7px] text-gray-500 mb-1">
                    Growth Over Time
                  </div>
                  <svg viewBox="0 0 80 40" className="w-full">
                    <polyline
                      points="0,35 15,28 30,20 45,15 60,8 75,4"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,35 15,28 30,20 45,15 60,8 75,4 75,40 0,40"
                      fill="url(#grad)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="bg-white rounded p-1 shadow-sm flex flex-col items-center">
                  <div className="text-[7px] text-gray-500 mb-1">
                    Top Content Types
                  </div>
                  <svg viewBox="0 0 60 60" className="w-12 h-12">
                    <circle
                      cx="30"
                      cy="30"
                      r="22"
                      fill="none"
                      stroke="#e0e7ff"
                      strokeWidth="10"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="22"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="10"
                      strokeDasharray="60 78"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="22"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      strokeDasharray="30 108"
                      strokeDashoffset="-60"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="22"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="10"
                      strokeDasharray="20 118"
                      strokeDashoffset="-90"
                    />
                    <circle cx="30" cy="30" r="14" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="bg-gray-300 h-3 rounded-b-xl mx-4" />
        <div className="bg-gray-400 h-1.5 rounded-b-xl mx-8" />
      </div>
    </div>
  );
}

// Integration visual
function IntegrationVisual() {
  return (
    <div className="relative flex items-center justify-center h-full min-h-[220px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-2 border-dashed border-indigo-200 opacity-50" />
        <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-blue-200 opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-indigo-200 flex items-center justify-center">
            <Building className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 border border-blue-200 flex items-center justify-center">
            <Share2 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 border border-cyan-200 flex items-center justify-center">
            <Globe className="w-6 h-6 text-cyan-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InstitutionalRepository() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-[#F7F8FF] min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[380px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
          <div className="max-w-[620px] mt-12">
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
            
                            <span className="text-gray-500">
                              Institutions Repository
                            </span>
                          </div>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
              Institutional <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Repository
              </span>
            </h1>

            <h2 className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
              Preserve. Share. Showcase Your Research.
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              A secure and scalable repository to collect, preserve, manage, and
              showcase your institution&apos;s research output and intellectual
              assets.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                <Database size={18} />
                Request a Demo
              </Link>

              <Link to="/contact" className="inline-flex w-auto items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Explore All Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* WHY AN INSTITUTIONAL REPOSITORY */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-6 relative z-10">
        <div className="max-w-[1500px] mx-auto bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.06)] px-4 sm:px-8 lg:px-16 py-6">
          <div className="text-center mb-6">
            <h2 className="text-center text-[18px] sm:text-[22px] font-bold">
              Why an Institutional Repository?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {WHY_CARDS.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`group flex flex-col items-center text-center px-5 py-3 transition-all duration-300 hover:-translate-y-2
          ${
            index !== WHY_CARDS.length - 1 ? "xl:border-r border-[#E8EBF8]" : ""
          }`}
              >
                <div className="w-[62px] h-[62px] rounded-full bg-[#F3EEFF] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Icon size={28} className="text-[#5B3DF5]" />
                </div>

                <h3 className="text-[13px] font-semibold text-[#07113F] mb-3 leading-snug">
                  {title}
                </h3>

                <p className="text-[12px] text-[#1E293B] leading-[1.9] font-medium max-w-[170px]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES + CONTENT */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-2">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Powerful Features */}
            <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.06)] px-5 sm:px-8 py-7">
              <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-8">
                Powerful Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-5">
                {[...FEATURES_LEFT, ...FEATURES_RIGHT].map(
                  ({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="group flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-[58px] h-[58px] rounded-[18px] bg-[#F3EEFF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#5B3DF5]" />
                      </div>

                      <div>
                        <h3 className="text-[14px] font-bold text-[#07113F] mb-2">
                          {title}
                        </h3>
                        <p className="text-[12px] text-[#1E293B] leading-[1.8] font-medium">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2 text-[#4F46E5] text-[14px] font-semibold hover:gap-3 transition-all duration-300">
                  Explore All Features <ArrowRight className="w-4 h-4" />
                </button>
              </div> */}
            </div>

            {/* Content You Can Manage */}
            <div className="bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.06)] px-5 sm:px-8 py-7">
              <h2 className="text-[20px] sm:text-[20px] font-bold text-[#07113F] text-center mb-8">
                Content You Can Manage
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                {CONTENT_TYPES.map(({ icon: Icon, label, color }, index) => (
                  <div
                    key={label}
                    className={`group flex flex-col items-center text-center px-3 py-4 hover:-translate-y-1 transition-all duration-300
              ${index % 4 !== 3 ? "md:border-r border-[#EEF0FF]" : ""}
              ${index < 8 ? "md:border-b border-[#EEF0FF]" : ""}`}
                  >
                    <div className="w-[50px] h-[50px] rounded-full bg-[#F3EEFF] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Icon className={`w-7 h-7 ${color}`} />
                    </div>

                    <span className="text-[10px] font-bold text-[#07113F] leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2 text-[#4F46E5] text-[14px] font-semibold hover:gap-3 transition-all duration-300">
                  View Content Guidelines <ArrowRight className="w-4 h-4" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* SEAMLESS INTEGRATION */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
        <div className="max-w-[1500px] mx-auto">
          <div className="bg-[#F8F8FF] rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.05)] overflow-hidden">
            <div className="grid lg:grid-cols-[380px_1fr] items-center gap-12 px-6 sm:px-8 lg:px-12 py-4">
              {/* LEFT IMAGE */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={integrationImg}
                  alt="Seamless Integration"
                  className="w-full max-w-[380px] object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <h2 className="text-center pt-4 text-[18px] sm:text-[22px] font-bold mb-4">
                  Seamless Integration
                </h2>

                <p className="text-[14px] text-[#1E293B] leading-[2] font-medium max-w-[700px] mb-7">
                  Our repository integrates with your existing systems and
                  global networks to ensure maximum reach and interoperability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                  {[
                    "Integration with CRIS, LMS & Library Systems",
                    "ORCID & Author Identifier Integration",
                    "OAI-PMH for global harvesting",
                    "Crossref & DataCite Support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-[#5B3DF5] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle size={10} className="text-white" />
                      </div>

                      <span className="text-[13px] font-medium text-[#07113F]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + BOTTOM CTA */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-2">
        <div className="max-w-[1500px] mx-auto space-y-4">
          {/* STATS BAR */}
          <div className="bg-gradient-to-r from-[#4F23F7] via-[#245FEA] to-[#18229A] rounded-[12px] shadow-lg px-5 sm:px-8 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 lg:gap-y-0">
              {STATS.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`group flex items-center justify-start sm:justify-center gap-4 text-white hover:-translate-y-1 transition-all duration-300 ${
                    index !== STATS.length - 1
                      ? "lg:border-r border-white/20"
                      : ""
                  }`}
                >
                  <div className="w-[48px] h-[48px] rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-white leading-none">
                      {value}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-medium text-white mt-1">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="bg-gradient-to-r from-[#4F23F7] via-[#245FEA] to-[#0093A6] rounded-[12px] shadow-lg px-5 sm:px-8 lg:px-14 py-5 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 min-h-[100px]">
              <div className="flex justify-center shrink-0">
                <img
                  src={ctaImg}
                  alt="Digital Knowledge Hub"
                  className="w-[130px] sm:w-[150px] lg:w-[170px] h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-[18px] sm:text-[20px] font-semibold text-white mb-2">
                  Build Your Institution's Digital Knowledge Hub
                </h2>
                <p className="text-[13px] sm:text-[13px] text-white font-medium">
                  Empower research, drive impact and leave a lasting legacy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </button></Link>
 <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 border border-white/70 text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-sm">
                  Talk to Our Experts
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
