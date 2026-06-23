import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Database,
  BarChart2,
  Users,
  FolderOpen,
  BookOpen,
  Share2,
  Shield,
  FileText,
  Target,
  Briefcase,
  Handshake,
  PieChart,
  Award,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Monitor,
  TrendingUp,
  Globe,
  Lock,
  Search,
  BookMarked,
  Network,
  ShieldCheck,
  BarChart3,
  Trophy,
  Calendar,
} from "lucide-react";
import heroBg from "../../assets/ramsHeroBg.png";
import benefitsImg from "../../assets/rams-benefits.png";
import ctaImg from "../../assets/rams-cta.png";

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

const CAPABILITIES = [
  {
    icon: Database,
    title: "Centralized Data Repository",
    desc: "Store and manage all research information in one secure platform.",
    bg: "bg-[#F3EEFF]",
    color: "text-[#5B3DF5]",
  },
  {
    icon: Monitor,
    title: "Real-time Analytics",
    desc: "Access real-time dashboards and insights for informed decision making.",
    bg: "bg-[#F3EEFF]",
    color: "text-[#5B3DF5]",
  },
  {
    icon: Users,
    title: "Researcher Profiling",
    desc: "Comprehensive profiles with research output, metrics & collaboration network.",
    bg: "bg-[#EAF8F0]",
    color: "text-[#18A957]",
  },
  {
    icon: FileText,
    title: "Project & Grant Management",
    desc: "Track projects from proposal to completion with financial and milestone tracking.",
    bg: "bg-[#F3EEFF]",
    color: "text-[#5B3DF5]",
  },
  {
    icon: BookOpen,
    title: "Publication Tracking",
    desc: "Monitor publications, citations, h-index and journal impact.",
    bg: "bg-[#F8F3E8]",
    color: "text-[#5B3DF5]",
  },
  {
    icon: Network,
    title: "Collaboration Management",
    desc: "Map internal & external collaborations and partnership opportunities.",
    bg: "bg-[#EEF6FF]",
    color: "text-[#3B82F6]",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Reporting",
    desc: "Generate reports for accreditation, rankings and compliance.",
    bg: "bg-[#F3EEFF]",
    color: "text-[#5B3DF5]",
  },
];

const MODULES = [
  {
    icon: FileText,
    title: "Research Information Management",
    color: "text-[#12A150]",
    bg: "bg-[#EAF8F0]",
    border: "border-[#D8F1E2]",
    items: [
      "Researcher Directory",
      "Areas of Expertise",
      "Research Interests",
      "Facilities & Resources",
    ],
  },

  {
    icon: Target,
    title: "Output & Impact Management",
    color: "text-[#5B3DF5]",
    bg: "bg-[#F3EEFF]",
    border: "border-[#E7DEFF]",
    items: [
      "Publications Tracking",
      "Citation Analysis",
      "H-index Monitoring",
      "Altmetrics & Impact",
    ],
  },

  {
    icon: Briefcase,
    title: "Projects & Grants Management",
    color: "text-[#FF7A00]",
    bg: "bg-[#FFF3E8]",
    border: "border-[#FFE4C7]",
    items: [
      "Grant Tracking",
      "Budget Management",
      "Milestone Monitoring",
      "Project Reports",
    ],
  },

  {
    icon: Handshake,
    title: "Collaboration & Partnership",
    color: "text-[#2196F3]",
    bg: "bg-[#EEF6FF]",
    border: "border-[#DDEEFF]",
    items: [
      "Collaboration Mapping",
      "Partner Institutions",
      "MoUs & Agreements",
      "Network Analysis",
    ],
  },

  {
    icon: BarChart3,
    title: "Reports & Dashboards",
    color: "text-[#22A6F2]",
    bg: "bg-[#EEF8FF]",
    border: "border-[#DFF0FF]",
    items: [
      "Custom Dashboards",
      "Automated Reports",
      "Export & Sharing",
      "Data Visualization",
    ],
  },

  {
    icon: Trophy,
    title: "Accreditation & Ranking Support",
    color: "text-[#7C3AED]",
    bg: "bg-[#F3EEFF]",
    border: "border-[#E7DEFF]",
    items: [
      "NAAC / NBA Support",
      "NIRF Data Management",
      "QS / THE Support",
      "Custom Ranking Reports",
    ],
  },
];

const BENEFITS = [
  "Improve research visibility and global rankings",
  "Enhance strategic decision-making with accurate data",
  "Streamline research administration and reduce manual work",
  "Identify strengths, gaps and growth opportunities",
  "Support accreditation and compliance requirements",
  "Drive research excellence and institutional impact",
];

const STATS = [
  { icon: Users, value: "300+", label: "Institutions Using RAMS" },
  { icon: FileText, value: "50M+", label: "Research Records Managed" },
  { icon: TrendingUp, value: "10,000+", label: "Researchers Onboarded" },
  { icon: Globe, value: "25+", label: "Countries" },
  { icon: Lock, value: "99.9%", label: "Data Security" },
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
    highlight: "RAMS Platform",
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

// Laptop Dashboard illustration
function RAMSDashboard() {
  return (
    <div className="relative w-full flex items-end justify-center">
      {/* Plant */}
      <div className="absolute top-2 right-2 z-20 flex flex-col items-center">
        <div className="relative">
          <div className="w-14 h-20 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-10 bg-green-600 rounded" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-400 rounded-full opacity-90 blur-[1px]" />
            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 -translate-y-1 w-7 h-7 bg-green-500 rounded-full opacity-80" />
            <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-5 h-5 bg-green-600 rounded-full opacity-70" />
          </div>
          <div className="w-10 h-3 bg-amber-700 rounded-sm mx-auto" />
        </div>
      </div>
      {/* Mug */}
      <div className="absolute bottom-12 right-2 z-20">
        <div className="relative">
          <div className="w-11 h-9 bg-white border-2 border-gray-200 rounded-b-lg flex items-center justify-center shadow-md">
            <span className="text-indigo-700 font-black text-sm">Rc</span>
          </div>
          <div className="absolute w-3 h-5 border-2 border-gray-200 rounded-r-full -right-2 top-1 bg-transparent" />
        </div>
      </div>

      {/* Laptop */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Screen */}
        <div
          className="bg-gray-50 rounded-t-2xl border-[5px] border-gray-300 shadow-2xl overflow-hidden"
          style={{ aspectRatio: "16/9.5" }}
        >
          {/* Top bar */}
          <div className="bg-white flex items-center px-3 py-1.5 border-b border-gray-200">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-[8px] font-bold mr-2">
              Rc
            </div>
            <span className="text-[9px] text-gray-600 font-semibold flex-1">
              RAMS Platform
            </span>
            <span className="text-[8px] font-semibold text-gray-500 bg-indigo-50 rounded px-2 py-0.5">
              Dashboard Overview
            </span>
            <span className="text-[7px] text-gray-400 ml-2">This Year ▾</span>
          </div>
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-20 bg-white border-r border-gray-100 py-2 flex flex-col gap-0.5 flex-shrink-0">
              {[
                { icon: "📊", label: "Dashboard", active: true },
                { icon: "👥", label: "Researchers" },
                { icon: "📁", label: "Projects" },
                { icon: "📄", label: "Publications" },
                { icon: "💰", label: "Grants" },
                { icon: "📈", label: "Impact" },
                { icon: "📋", label: "Reports" },
                { icon: "⚙️", label: "Settings" },
              ].map(({ icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-1.5 px-2 py-1 mx-1 rounded text-[7px] ${active ? "bg-indigo-600 text-white font-semibold" : "text-gray-500"}`}
                >
                  <span className="text-[9px]">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="flex-1 p-2 bg-gray-50 overflow-hidden">
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-1 mb-2">
                {[
                  ["Total Researchers", "1,245", "+12.5%"],
                  ["Publications", "2,735", "+15.8%"],
                  ["Citations", "18,932", "+18.3%"],
                  ["Grants Received", "₹45.6 Cr", "+22.1%"],
                ].map(([l, v, g]) => (
                  <div
                    key={l}
                    className="bg-white rounded-md p-1 shadow-sm border border-gray-100"
                  >
                    <div className="text-[6px] text-gray-400 leading-tight">
                      {l}
                    </div>
                    <div className="text-[10px] font-bold text-gray-800 mt-0.5">
                      {v}
                    </div>
                    <div className="text-[6px] text-green-500 font-semibold">
                      {g}
                    </div>
                    <div className="text-[5px] text-gray-300">vs last year</div>
                  </div>
                ))}
              </div>
              {/* Charts */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white rounded-md p-1.5 shadow-sm border border-gray-100">
                  <div className="text-[6px] text-gray-400 font-semibold mb-1">
                    Publications Over Time
                  </div>
                  <svg viewBox="0 0 110 50" className="w-full">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#6366f1"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6366f1"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,42 10,38 20,34 30,30 40,25 50,22 60,18 70,14 80,10 90,7 100,4 110,2"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="0,42 10,38 20,34 30,30 40,25 50,22 60,18 70,14 80,10 90,7 100,4 110,2 110,50 0,50"
                      fill="url(#lineGrad)"
                    />
                    {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110].map(
                      (x, i) => (
                        <text
                          key={i}
                          x={x}
                          y="49"
                          fontSize="3.5"
                          fill="#bbb"
                          textAnchor="middle"
                        >
                          {
                            [
                              "J",
                              "F",
                              "M",
                              "A",
                              "M",
                              "J",
                              "J",
                              "A",
                              "S",
                              "O",
                              "N",
                              "D",
                            ][i]
                          }
                        </text>
                      ),
                    )}
                  </svg>
                </div>
                <div className="bg-white rounded-md p-1.5 shadow-sm border border-gray-100">
                  <div className="text-[6px] text-gray-400 font-semibold mb-0.5">
                    Top Subject Areas
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      viewBox="0 0 50 50"
                      className="w-12 h-12 flex-shrink-0"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="#e0e7ff"
                        strokeWidth="8"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="8"
                        strokeDasharray="40 73"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="8"
                        strokeDasharray="27 86"
                        strokeDashoffset="-40"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="8"
                        strokeDasharray="13 100"
                        strokeDashoffset="-67"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="#a5b4fc"
                        strokeWidth="8"
                        strokeDasharray="8 105"
                        strokeDashoffset="-80"
                      />
                      <circle cx="25" cy="25" r="12" fill="white" />
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      {[
                        ["#4f46e5", "Engineering", "32%"],
                        ["#3b82f6", "Computer Science", "28%"],
                        ["#06b6d4", "Medicine", "18%"],
                        ["#a5b4fc", "Materials Science", "12%"],
                        ["#e2e8f0", "Others", "10%"],
                      ].map(([c, l, p]) => (
                        <div key={l} className="flex items-center gap-0.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: c }}
                          />
                          <span className="text-[5px] text-gray-500">{l}</span>
                          <span className="text-[5px] text-gray-400 ml-auto">
                            {p}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="bg-gray-300 h-3 rounded-b-xl mx-6 shadow" />
        <div className="bg-gray-400 h-1.5 rounded-b-xl mx-10" />
      </div>
    </div>
  );
}

// Benefits illustration
function BenefitsIllustration() {
  return (
    <div className="relative flex items-center justify-center h-full min-h-[280px] select-none">
      {/* Background blobs */}
      <div className="absolute w-48 h-48 rounded-full bg-indigo-100 opacity-40 blur-2xl left-0 top-4" />
      <div className="absolute w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-xl right-4 bottom-4" />
      {/* Screen */}
      <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-indigo-100 p-4 w-56">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
            <Monitor className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-bold text-gray-700">
            Research Dashboard
          </span>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-16 mb-2">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background:
                  i === 5 ? "#4f46e5" : i === 3 ? "#3b82f6" : "#c7d2fe",
              }}
            />
          ))}
        </div>
        {/* Mini donut */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 40 40" className="w-10 h-10">
            <circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="#e0e7ff"
              strokeWidth="6"
            />
            <circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="6"
              strokeDasharray="53 35"
              strokeDashoffset="0"
            />
            <circle
              cx="20"
              cy="20"
              r="14"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="6"
              strokeDasharray="25 63"
              strokeDashoffset="-53"
            />
            <circle cx="20" cy="20" r="8" fill="white" />
          </svg>
          <div className="flex flex-col gap-0.5">
            <div className="text-[8px] text-gray-500">Research Output</div>
            <div className="text-xs font-bold text-indigo-700">+18.3%</div>
            <div className="text-[8px] text-gray-400">vs last year</div>
          </div>
        </div>
      </div>
      {/* Person 1 (left) */}
      <div className="absolute left-0 bottom-0 z-20">
        <svg viewBox="0 0 60 100" className="w-16 h-24" fill="none">
          <circle cx="30" cy="15" r="10" fill="#fbbf24" />
          <rect x="15" y="28" width="30" height="40" rx="6" fill="#4f46e5" />
          <rect x="5" y="30" width="12" height="6" rx="3" fill="#4f46e5" />
          <rect x="43" y="30" width="12" height="6" rx="3" fill="#4f46e5" />
          <rect x="18" y="68" width="10" height="20" rx="4" fill="#374151" />
          <rect x="32" y="68" width="10" height="20" rx="4" fill="#374151" />
          <rect
            x="10"
            y="48"
            width="18"
            height="14"
            rx="3"
            fill="white"
            opacity="0.7"
          />
        </svg>
      </div>
      {/* Person 2 (right) */}
      <div className="absolute right-0 bottom-0 z-20">
        <svg viewBox="0 0 60 100" className="w-14 h-20" fill="none">
          <circle cx="30" cy="15" r="10" fill="#c084fc" />
          <rect x="15" y="28" width="30" height="40" rx="6" fill="#7c3aed" />
          <rect x="5" y="30" width="12" height="6" rx="3" fill="#7c3aed" />
          <rect x="43" y="30" width="12" height="6" rx="3" fill="#7c3aed" />
          <rect x="18" y="68" width="10" height="20" rx="4" fill="#374151" />
          <rect x="32" y="68" width="10" height="20" rx="4" fill="#374151" />
          <rect
            x="30"
            y="40"
            width="16"
            height="22"
            rx="3"
            fill="white"
            opacity="0.7"
          />
        </svg>
      </div>
      {/* Plants */}
      <div className="absolute left-4 top-4 opacity-60">
        <svg viewBox="0 0 30 40" className="w-8 h-10" fill="none">
          <ellipse cx="15" cy="12" rx="10" ry="8" fill="#86efac" />
          <rect x="13" y="18" width="4" height="16" fill="#16a34a" />
          <ellipse cx="15" cy="36" rx="8" ry="3" fill="#854d0e" />
        </svg>
      </div>
      <div className="absolute right-4 top-6 opacity-50">
        <svg viewBox="0 0 24 36" className="w-6 h-9" fill="none">
          <ellipse cx="12" cy="10" rx="8" ry="7" fill="#4ade80" />
          <rect x="10" y="15" width="4" height="14" fill="#15803d" />
          <ellipse cx="12" cy="31" rx="6" ry="2.5" fill="#713f12" />
        </svg>
      </div>
      {/* Floating badges */}
      <div className="absolute top-2 right-8 bg-white rounded-xl shadow-md border border-indigo-100 px-2 py-1 flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
          <CheckCircle className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-[9px] font-semibold text-gray-700">
          NAAC Compliant
        </span>
      </div>
      <div className="absolute bottom-16 left-14 bg-indigo-600 rounded-xl shadow-md px-2 py-1">
        <span className="text-[9px] font-semibold text-white">
          📈 Rankings Boost
        </span>
      </div>
    </div>
  );
}

export default function RAMSPlatform() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[520px] sm:min-h-[390px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
          <div className="max-w-[620px] mt-12">
            <nav className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#3d25e6] mb-6">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/institutions">Institutions</Link>
              <span>›</span>
              <span className="text-[#07113F]">RAMS Platform</span>
            </nav>

            <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F]">
              RAMS
              <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
              Research Assessment &amp; Management System
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
              A comprehensive platform to manage, monitor, and maximize your
              institution's research ecosystem.
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              {[
                "Centralized research information",
                "Real-time monitoring & reporting",
                "Data-driven strategic planning",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[13px] sm:text-[14px] text-[#242a34] font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-[#4F46E5] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
              <button className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                <Monitor className="w-4 h-4" />
                Request a Demo
              </button>

              <button className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="max-w-[1500px] mx-auto bg-white rounded-[18px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.06)] px-5 sm:px-6 lg:px-8 py-6">
          {/* Heading */}
          <div className="text-center mb-7">
            <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
              Key Capabilities of RAMS Platform
            </h2>

            <div className="w-10 h-[3px] bg-[#5B3DF5] rounded-full mx-auto mt-2" />
          </div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
            {CAPABILITIES.map(
              ({ icon: Icon, title, desc, bg, color }, index) => (
                <div
                  key={title}
                  className={`mb-4 group flex flex-col items-center text-center px-4 py-3 transition-all duration-300 hover:-translate-y-2
          ${
            index !== CAPABILITIES.length - 1
              ? "xl:border-r xl:border-[#E9ECF8]"
              : ""
          }`}
                >
                  <div
                    className={`w-[58px] h-[58px] rounded-full ${
                      bg
                    } border border-[#F0F0F5] flex items-center justify-center mb-2
  group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(91,61,245,0.12)]
  transition-all duration-300`}
                  >
                    <Icon size={30} className={color || "text-[#5B3DF5]"} />
                  </div>

                  <h3 className="text-[13px] font-semibold text-[#07113F] leading-snug mb-3 min-h-[34px]">
                    {title}
                  </h3>

                  <p className="text-[11px] text-[#1E293B] leading-[1.8] font-medium max-w-[140px]">
                    {desc}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* RAMS PLATFORM MODULES */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
              RAMS Platform Modules
            </h2>
            <div className="w-10 h-[3px] bg-[#5B3DF5] rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {MODULES.map(({ icon: Icon, title, items, bg, border, color }) => (
              <div
                key={title}
                className="group bg-white rounded-[8px] border border-[#E9ECF8] shadow-[0_4px_12px_rgba(15,23,42,0.04)] px-4 py-5 flex flex-col hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(91,61,245,0.12)] transition-all duration-300"
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full ${bg} border ${border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>

                <h3 className="text-[12px] font-bold text-[#07113F] text-center leading-snug mb-4 min-h-[36px]">
                  {title}
                </h3>

                <ul className="space-y-2 flex-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[10px] text-[#1E293B] font-medium leading-snug"
                    >
                      <CheckCircle className="w-3 h-3 text-[#4F46E5] shrink-0 mt-[2px]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 inline-flex items-center gap-1 text-[#4F46E5] text-[10px] font-bold hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS FOR YOUR INSTITUTION */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
        <div className=" h-350 lg:h-[300px] max-w-[1500px] mx-auto bg-white rounded-[16px] border border-[#EEF0FF] shadow-[0_8px_28px_rgba(15,23,42,0.05)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_1fr] items-center gap-6 px-5 sm:px-4 lg:px-6 py-2">
            {/* LEFT IMAGE */}
            <div className="order-2 lg:order-1">
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src={benefitsImg} // use your image
                  alt="Benefits"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2 mb-4">
              <h2 className="text-center pt-4 text-[18px] sm:text-[22px] font-bold mb-6">
                Benefits for Your Institution
              </h2>

              <ul className="space-y-2">
                {[
                  "Improve research visibility and global rankings",
                  "Enhance strategic decision-making with accurate data",
                  "Streamline research administration and reduce manual work",
                  "Identify strengths, gaps and growth opportunities",
                  "Support accreditation and compliance requirements",
                  "Drive research excellence and institutional impact",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] font-medium text-[#1E293B]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#5B3DF5] flex items-center justify-center shrink-0 mt-[1px]">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>

                    <span className="leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-4">
        <div className="max-w-[1500px] mx-auto">
          <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] rounded-[12px] shadow-lg px-5 sm:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 lg:gap-y-0">
              {STATS.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`group flex items-center justify-start gap-2 px-4 lg:px-4 text-white hover:-translate-y-1 transition-all duration-300 ${
                    index !== STATS.length - 1
                      ? "lg:border-r border-white/20"
                      : ""
                  }`}
                >
                  <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-white leading-none">
                      {value}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-medium text-white mt-1">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RAMS CTA */}
<section className="bg-[#F7F8FF] px-4 sm:px-8 lg:px-16 py-6 mb-4">
  <div className="max-w-[1500px] mx-auto">
    
    <div className="bg-[#F0EFFF] rounded-[14px] border border-[#EEF0FF] shadow-[0_8px_24px_rgba(15,23,42,0.05)] overflow-hidden px-5 sm:px-8 lg:px-14 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

        {/* Left Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-[18px] sm:text-[22px] font-bold mb-3 leading-snug">
            Transform Your Research Management
          </h2>

          <p className="text-[14px] text-[#1E293B] font-medium leading-[1.8] max-w-[450px] mx-auto lg:mx-0">
            Experience the power of integrated research management with RAMS Platform.
          </p>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center">
          <img
            src={ctaImg}
            alt="Research Management"
            className="w-[160px] sm:w-[200px] lg:w-[260px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Buttons */}
      <div className="flex flex-col sm:flex-row lg:flex-row flex-nowrap justify-center lg:justify-end gap-3 sm:gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-[#4F46E5] text-white text-[12px] font-semibold px-4 py-3 rounded-md hover:-translate-y-1 hover:shadow-xl hover:bg-[#4338CA] transition-all duration-300">
            <Calendar className="w-4 h-4" />
            Request a Demo
          </button>

          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1 border-2 border-[#4F46E5] text-[#4F46E5] bg-white/40 text-[12px] font-semibold px-4 py-3 rounded-md hover:-translate-y-1 hover:bg-white hover:shadow-lg transition-all duration-300">
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}
