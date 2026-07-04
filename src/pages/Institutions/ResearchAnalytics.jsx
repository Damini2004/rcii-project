import { useState } from "react";
import {
  ChevronDown,
  BarChart2,
  Target,
  Zap,
  Users,
  DollarSign,
  BookOpen,
  TrendingUp,
  Globe,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Building2,
  FileText,
  Network,
  BookMarked,
  PieChart,
  Trophy,
  Menu,
  X,
} from "lucide-react";
import heroBg from "../../assets/research-analytics-services-banner.webp";
import ctaImage from "../../assets/research-support-call-to-action.webp";
import { Link } from "react-router-dom";

/* keep your same DATA and chart components */
// // ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Home" },
  { label: "Researchers", dropdown: true },
  { label: "Institutions", dropdown: true, active: true },
  { label: "Publishers", dropdown: true },
  { label: "Innovation & IP", dropdown: true },
  { label: "Technology", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "About Us" },
];
const cardColors = [
  {
    bg: "bg-[#F3EEFF]",
    icon: "text-[#6C4CF1]",
  },
  {
    bg: "bg-[#E8F8FC]",
    icon: "text-[#00A8C8]",
  },
  {
    bg: "bg-[#FFF1E8]",
    icon: "text-[#F97316]",
  },
  {
    bg: "bg-[#F3EEFF]",
    icon: "text-[#6C4CF1]",
  },
  {
    bg: "bg-[#EDF8EF]",
    icon: "text-[#22A447]",
  },
  {
    bg: "bg-[#EAF3FF]",
    icon: "text-[#3B82F6]",
  },
];

const WHY_CARDS = [
  {
    icon: BarChart2,
    title: "Measure Performance",
    desc: "Evaluate research output and impact across departments, faculties and researchers.",
  },
  {
    icon: Target,
    title: "Benchmark Globally",
    desc: "Compare institutional performance with global universities and peers.",
  },
  {
    icon: Zap,
    title: "Identify Strengths",
    desc: "Discover key research areas and emerging opportunities for growth.",
  },
  {
    icon: Users,
    title: "Boost Collaborations",
    desc: "Identify collaboration networks and strategic partnership opportunities.",
  },
  {
    icon: DollarSign,
    title: "Support Funding Strategies",
    desc: "Use data insights to build strong grant proposals and attract funding.",
  },
  {
    icon: BookOpen,
    title: "Enable Data-Driven Decisions",
    desc: "Empower leadership with accurate data for strategic planning and policy making.",
  },
];

const SOLUTIONS = [
  {
    icon: BarChart2,
    title: "Research Performance Analytics",
    bullets: [
      "Publication Trends",
      "Citation Analysis",
      "h-index & Impact Metrics",
      "Departmental Reports",
    ],
  },
  {
    icon: Users,
    title: "Researcher Profile Analytics",
    bullets: [
      "Individual Performance",
      "Research Impact Score",
      "Collaboration Networks",
      "Profile Benchmarking",
    ],
  },
  {
    icon: Network,
    title: "Collaboration Analytics",
    bullets: [
      "Internal Collaboration",
      "External Partnerships",
      "Co-authorship Networks",
      "Geographical Mapping",
    ],
  },
  {
    icon: BookMarked,
    title: "Journal & Subject Area Analytics",
    bullets: [
      "Journal Performance",
      "Subject Area Trends",
      "Quartile Analysis",
      "Top Publishers Insights",
    ],
  },
  {
    icon: DollarSign,
    title: "Funding & Grant Analytics",
    bullets: [
      "Grant Success Rate",
      "Funding Trends",
      "Donor Analysis",
      "ROI & Impact Measurement",
    ],
  },
  {
    icon: Trophy,
    title: "Benchmarking & Rankings Support",
    bullets: [
      "Global Benchmarking",
      "Ranking Performance",
      "Gap Analysis",
      "Improvement Roadmap",
    ],
  },
];

const STATS = [
  { value: "300+", label: "Institutions Served", icon: Building2 },
  { value: "10M+", label: "Publications Analyzed", icon: FileText },
  { value: "50+", label: "Countries Covered", icon: Globe },
  { value: "95%", label: "Client Satisfaction", icon: Award },
  { value: "24/7", label: "Dedicated Support", icon: Clock },
];

const INSIGHTS = [
  {
    title: "Publication Growth",
    desc: "Track and forecast publication growth over time.",
    chart: "line",
  },
  {
    title: "Citation Impact",
    desc: "Analyze citation trends and research impact.",
    chart: "bar",
  },
  {
    title: "Top Performers",
    desc: "Identify top researchers, departments and research areas.",
    chart: "hbar",
  },
  {
    title: "Collaboration Map",
    desc: "Visualize collaboration networks across the globe.",
    chart: "map",
  },
  {
    title: "Subject Expertise",
    desc: "Understand expertise distribution across subject areas.",
    chart: "donut",
  },
  {
    title: "Funding Landscape",
    desc: "Explore funding opportunities and success trends.",
    chart: "barsmall",
  },
];

const FOOTER_COLS = [
  {
    heading: "For Researchers",
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
    heading: "For Institutions",
    links: [
      "Research Analytics",
      "RAMS Platform",
      "Benchmarking Support",
      "Institutional Repository",
      "Research Consulting",
      "Policy & Strategy",
    ],
    highlight: "Research Analytics",
  },
  {
    heading: "For Publishers",
    links: [
      "Journal Hosting",
      "Editorial Systems",
      "DOI Solutions",
      "Indexing Services",
      "Publishing Consultancy",
    ],
  },
  {
    heading: "Innovation & IP",
    links: [
      "IP Services",
      "Patent Support",
      "Technology Transfer",
      "Commercialization",
    ],
  },
  {
    heading: "Company",
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

// ─── MINI CHART COMPONENTS ───────────────────────────────────────────────────

const LineChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    <defs>
      <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0 50 C20 45 40 35 60 25 C80 15 100 10 120 5"
      fill="none"
      stroke="#4F46E5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M0 50 C20 45 40 35 60 25 C80 15 100 10 120 5 L120 60 L0 60Z"
      fill="url(#lg1)"
    />
  </svg>
);

const BarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[10, 20, 35, 25, 45, 30, 50].map((h, i) => (
      <rect
        key={i}
        x={i * 17 + 2}
        y={60 - h}
        width="12"
        height={h}
        rx="2"
        fill={i === 6 ? "#4F46E5" : "#A5B4FC"}
      />
    ))}
  </svg>
);

const HBarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[80, 65, 55, 40].map((w, i) => (
      <g key={i}>
        <rect
          x="0"
          y={i * 14 + 2}
          width={w}
          height="10"
          rx="2"
          fill={i === 0 ? "#4F46E5" : "#A5B4FC"}
        />
      </g>
    ))}
  </svg>
);

const MapChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    <ellipse
      cx="60"
      cy="30"
      rx="58"
      ry="28"
      fill="#EEF2FF"
      stroke="#C7D2FE"
      strokeWidth="1"
    />
    {[
      [30, 20],
      [55, 15],
      [80, 22],
      [45, 35],
      [70, 38],
      [25, 42],
      [90, 30],
      [60, 45],
    ].map(([cx, cy], i) => (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={i % 3 === 0 ? 4 : 2.5}
        fill="#4F46E5"
        opacity={0.7}
      />
    ))}
  </svg>
);

const DonutChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    <circle
      cx="45"
      cy="30"
      r="25"
      fill="none"
      stroke="#EEF2FF"
      strokeWidth="12"
    />
    <circle
      cx="45"
      cy="30"
      r="25"
      fill="none"
      stroke="#4F46E5"
      strokeWidth="12"
      strokeDasharray="70 87"
      strokeDashoffset="22"
    />
    <circle
      cx="45"
      cy="30"
      r="25"
      fill="none"
      stroke="#818CF8"
      strokeWidth="12"
      strokeDasharray="40 117"
      strokeDashoffset="-48"
    />
    <circle
      cx="45"
      cy="30"
      r="25"
      fill="none"
      stroke="#06B6D4"
      strokeWidth="12"
      strokeDasharray="30 127"
      strokeDashoffset="-88"
    />
    <rect x="78" y="10" width="8" height="8" rx="1" fill="#4F46E5" />
    <rect x="78" y="24" width="8" height="8" rx="1" fill="#818CF8" />
    <rect x="78" y="38" width="8" height="8" rx="1" fill="#06B6D4" />
    <text x="90" y="18" fontSize="7" fill="#64748B">
      Engg
    </text>
    <text x="90" y="32" fontSize="7" fill="#64748B">
      CS
    </text>
    <text x="90" y="46" fontSize="7" fill="#64748B">
      Med
    </text>
  </svg>
);

const SmallBarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[20, 35, 28, 42, 38, 50, 44].map((h, i) => (
      <rect
        key={i}
        x={i * 17 + 2}
        y={60 - h}
        width="12"
        height={h}
        rx="2"
        fill={i % 2 === 0 ? "#4F46E5" : "#818CF8"}
      />
    ))}
  </svg>
);

const CHART_MAP = {
  line: LineChart,
  bar: BarChart,
  hbar: HBarChart,
  map: MapChart,
  donut: DonutChart,
  barsmall: SmallBarChart,
};

// ─── DASHBOARD MOCKUP ────────────────────────────────────────────────────────

const DashboardMockup = () => (
  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-lg">
    {/* Top bar */}
    <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="text-xs text-gray-400 font-medium ml-2">
        Research Overview
      </div>
      <div className="ml-auto text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5">
        2024 ▾
      </div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="w-32 bg-gray-50 border-r border-gray-100 py-3 flex flex-col gap-0.5 shrink-0">
        {[
          "Overview",
          "Performance",
          "Researchers",
          "Publications",
          "Collaborations",
          "Funding",
          "Impact",
          "Benchmarking",
        ].map((item, i) => (
          <div
            key={item}
            className={`px-3 py-1.5 text-xs flex items-center gap-2 cursor-pointer ${i === 0 ? "bg-indigo-600 text-white rounded-sm mx-1" : "text-gray-500 hover:bg-gray-100"}`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-indigo-300" : "bg-gray-300"}`}
            />
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-3 bg-white">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            {
              label: "Total Publications",
              val: "4,782",
              delta: "+12.5%",
              color: "text-indigo-600",
            },
            {
              label: "Citations",
              val: "23,654",
              delta: "+18.3%",
              color: "text-cyan-600",
            },
            {
              label: "h-index",
              val: "142",
              delta: "+8",
              color: "text-purple-600",
            },
            {
              label: "Research Output Score",
              val: "85.6",
              delta: "+7.2%",
              color: "text-green-600",
            },
          ].map(({ label, val, delta, color }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-2">
              <div className="text-[9px] text-gray-400 leading-tight mb-1">
                {label}
              </div>
              <div className={`text-sm font-bold ${color}`}>{val}</div>
              <div className="text-[9px] text-green-500 font-medium">
                {delta} vs last year
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[9px] font-semibold text-gray-600 mb-2">
              Publications Over Time
            </div>
            <svg viewBox="0 0 140 60" className="w-full h-12">
              <defs>
                <linearGradient id="dblg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 20, 40, 60, 80, 100, 120, 140].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="60"
                  stroke="#E5E7EB"
                  strokeWidth="0.5"
                />
              ))}
              <path
                d="M0 50 C20 48 40 40 60 30 C80 20 100 15 120 8 L140 5"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="2"
              />
              <path
                d="M0 50 C20 48 40 40 60 30 C80 20 100 15 120 8 L140 5 L140 60 L0 60Z"
                fill="url(#dblg)"
              />
              {["2019", "2020", "2021", "2022", "2023", "2024"].map((y, i) => (
                <text key={y} x={i * 28} y="68" fontSize="6" fill="#9CA3AF">
                  {y}
                </text>
              ))}
            </svg>
          </div>

          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[9px] font-semibold text-gray-600 mb-1">
              Top Subject Areas
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 60 60" className="w-16 h-16 shrink-0">
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="10"
                  strokeDasharray="88 50"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  fill="none"
                  stroke="#818CF8"
                  strokeWidth="10"
                  strokeDasharray="55 83"
                  strokeDashoffset="-88"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="10"
                  strokeDasharray="40 98"
                  strokeDashoffset="-143"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="22"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="10"
                  strokeDasharray="35 103"
                  strokeDashoffset="-183"
                />
              </svg>
              <div className="flex flex-col gap-0.5 text-[8px]">
                {[
                  ["#4F46E5", "Engineering", "28%"],
                  ["#818CF8", "Computer Science", "22%"],
                  ["#06B6D4", "Medicine", "16%"],
                  ["#34D399", "Materials Science", "14%"],
                  ["#E5E7EB", "Others", "18%"],
                ].map(([c, l, p]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-sm shrink-0"
                      style={{ background: c }}
                    />
                    <span className="text-gray-500">{l}</span>
                    <span className="font-semibold text-gray-700 ml-auto">
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
);

export default function InstitutionsResearchAnalytics() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] mt-[70px] overflow-x-hidden">
     {/* HERO */}
<section
  className="relative min-h-[520px] sm:min-h-[390px] lg:min-h-[420px] bg-cover bg-no-repeat flex items-center"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center right",
  }}
>
  <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14 sm:py-14 lg:py-16">
    <div className="max-w-[620px] ">
      <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#3d25e6] mb-6">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/institutions">Institutions</Link>
        <span>›</span>
        <span className="text-[#07113F]">Research Analytics</span>
      </div>

      <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F]">
        Research
        <br />
        <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
          Analytics
        </span>
      </h1>

      <p className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
        Data-Driven Insights. Strategic Decisions. Greater Impact.
      </p>

      <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
        RCII delivers comprehensive research analytics solutions that
        empower institutions to evaluate performance, benchmark progress,
        and make informed research decisions.
      </p>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-7">
 <Link to="/contact">
        <button className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
          <BarChart2 size={18} />
          Request a Demo
        </button></Link>
 <Link to="/contact">
        <button className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
          Explore All Services
          <ArrowRight size={18} />
        </button></Link>
      </div>
    </div>
  </div>
</section>

      {/* WHY SECTION */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-30">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-10">
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-gray-100 px-4 sm:px-8 py-6">
            <div className="text-center mb-5">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#07113F]">
                Why Research Analytics Matters
              </h2>
              <div className="w-8 h-[3px] bg-[#4F46E5] mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-0">
              {WHY_CARDS.map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  className={`group flex flex-col items-center text-center px-4 py-4 rounded-xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${index !== WHY_CARDS.length - 1 ? "xl:border-r border-gray-200" : ""}`}
                >
                  <div
                    className={`w-[62px] h-[62px] rounded-full flex items-center justify-center mb-3 ${cardColors[index]?.bg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${cardColors[index]?.icon}`} />
                  </div>

                  <h3 className="text-[13px] font-extrabold text-[#07113F] mb-2">
                    {title}
                  </h3>

                  <p className="text-[11px] sm:text-[12px] text-[#1f2937] leading-[1.7] max-w-[180px] xl:max-w-[145px]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-10">
          <div className="text-center mb-5">
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#07113F]">
              Our Research Analytics Solutions
            </h2>
            <div className="w-8 h-[3px] bg-[#4F46E5] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {SOLUTIONS.map(({ icon: Icon, title, bullets }, index) => {
              const colors = cardColors[index];

              return (
                <div
                  key={title}
                  className="group bg-white rounded-xl border border-[#E7EAF3] px-5 py-5 shadow-sm hover:shadow-xl hover:border-[#C7D2FE] hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[270px]"
                >
                  <div
                    className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-4 ${colors.bg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  <h3 className="text-center text-[13.2px] font-semibold text-[#07113F] leading-snug mb-4 min-h-[40px]">
                    {title}
                  </h3>

                  <ul className="flex flex-col gap-3 flex-1">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[11px] text-[#1f2937] font-medium leading-snug"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 mt-[1px]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* <button className="mt-5 flex items-center gap-2 text-[#4F46E5] text-[12px] font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-10">
          <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] rounded-xl shadow-lg px-5 sm:px-10 py-6 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-4 lg:gap-y-0">
              {STATS.map(({ value, label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`group flex items-center justify-center gap-4 py-3 hover:-translate-y-1 transition-all duration-300 ${
                    index !== STATS.length - 1
                      ? "lg:border-r border-white/20"
                      : ""
                  }`}
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#563BFF]" />
                  </div>

                  <div>
                    <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-none">
                      {value}
                    </h3>
                    <p className="text-white text-[13px] font-medium mt-1 leading-snug">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-10">
          <div className="text-center mb-5">
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#07113F]">
              Key Insights You Can Unlock
            </h2>
            <div className="w-8 h-[3px] bg-[#4F46E5] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {INSIGHTS.map(({ title, desc, chart }) => {
              const ChartComp = CHART_MAP[chart];

              return (
                <div
                  key={title}
                  className="group bg-white rounded-xl border border-[#E7EAF3] px-4 py-5 shadow-sm hover:shadow-xl hover:border-[#C7D2FE] hover:-translate-y-2 transition-all duration-300 text-center min-h-[205px]"
                >
                  <h3 className="text-[13px] font-extrabold text-[#07113F] mb-4">
                    {title}
                  </h3>

                  <div className="h-[82px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <ChartComp />
                  </div>

                  <p className="text-[11px] text-[#07113F] leading-[1.8] font-medium">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-10">
          <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[14px] overflow-hidden px-5 sm:px-6 lg:px-10 py-6 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
              <div className="hidden md:flex shrink-0">
                <img
                  src={ctaImage}
                  alt="Research Analytics"
                  className="w-[160px] lg:w-[230px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-white text-[16px] lg:text-[18px] font-medium mb-2">
                  Transform Your Research with Actionable Insights
                </h2>

                <p className="text-white/90 text-[13px] sm:text-[14px] lg:text-[13px] leading-relaxed max-w-[650px] mx-auto lg:mx-0">
                  Empower your institution with robust analytics and make
                  smarter, faster, and data-driven decisions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 shrink-0 w-full lg:w-auto">
                 <Link to="/contact"><button className="bg-white text-[#4F46E5] text-[13px] font-bold px-6 py-3 rounded-md hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Talk to an Expert →
                </button></Link>

                 <Link to="/contact"><button className="border border-white text-white text-[13px] font-bold px-6 py-2.5 rounded-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Schedule a Demo
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


