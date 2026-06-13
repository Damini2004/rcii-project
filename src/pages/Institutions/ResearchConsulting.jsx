import { useState } from "react";
import {
  ChevronDown, BarChart2, Target, Zap, Users, DollarSign, BookOpen,
  TrendingUp, Globe, Award, Clock, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Facebook,
  Building2, FileText, Network, BookMarked, PieChart, Trophy,
  Menu, X
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

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

const WHY_CARDS = [
  { icon: BarChart2, title: "Measure Performance", desc: "Evaluate research output and impact across departments, faculties and researchers." },
  { icon: Target, title: "Benchmark Globally", desc: "Compare institutional performance with global universities and peers." },
  { icon: Zap, title: "Identify Strengths", desc: "Discover key research areas and emerging opportunities for growth." },
  { icon: Users, title: "Boost Collaborations", desc: "Identify collaboration networks and strategic partnership opportunities." },
  { icon: DollarSign, title: "Support Funding Strategies", desc: "Use data insights to build strong grant proposals and attract funding." },
  { icon: BookOpen, title: "Enable Data-Driven Decisions", desc: "Empower leadership with accurate data for strategic planning and policy making." },
];

const SOLUTIONS = [
  {
    icon: BarChart2,
    title: "Research Performance Analytics",
    bullets: ["Publication Trends", "Citation Analysis", "h-index & Impact Metrics", "Departmental Reports"],
  },
  {
    icon: Users,
    title: "Researcher Profile Analytics",
    bullets: ["Individual Performance", "Research Impact Score", "Collaboration Networks", "Profile Benchmarking"],
  },
  {
    icon: Network,
    title: "Collaboration Analytics",
    bullets: ["Internal Collaboration", "External Partnerships", "Co-authorship Networks", "Geographical Mapping"],
  },
  {
    icon: BookMarked,
    title: "Journal & Subject Area Analytics",
    bullets: ["Journal Performance", "Subject Area Trends", "Quartile Analysis", "Top Publishers Insights"],
  },
  {
    icon: DollarSign,
    title: "Funding & Grant Analytics",
    bullets: ["Grant Success Rate", "Funding Trends", "Donor Analysis", "ROI & Impact Measurement"],
  },
  {
    icon: Trophy,
    title: "Benchmarking & Rankings Support",
    bullets: ["Global Benchmarking", "Ranking Performance", "Gap Analysis", "Improvement Roadmap"],
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
  { title: "Publication Growth", desc: "Track and forecast publication growth over time.", chart: "line" },
  { title: "Citation Impact", desc: "Analyze citation trends and research impact.", chart: "bar" },
  { title: "Top Performers", desc: "Identify top researchers, departments and research areas.", chart: "hbar" },
  { title: "Collaboration Map", desc: "Visualize collaboration networks across the globe.", chart: "map" },
  { title: "Subject Expertise", desc: "Understand expertise distribution across subject areas.", chart: "donut" },
  { title: "Funding Landscape", desc: "Explore funding opportunities and success trends.", chart: "barsmall" },
];

const FOOTER_COLS = [
  {
    heading: "For Researchers",
    links: ["Author Services", "Publication Support", "Research Profiling", "Grants & Funding", "Career Resources", "Research Resources"],
  },
  {
    heading: "For Institutions",
    links: ["Research Analytics", "RAMS Platform", "Benchmarking Support", "Institutional Repository", "Research Consulting", "Policy & Strategy"],
    highlight: "Research Analytics",
  },
  {
    heading: "For Publishers",
    links: ["Journal Hosting", "Editorial Systems", "DOI Solutions", "Indexing Services", "Publishing Consultancy"],
  },
  {
    heading: "Innovation & IP",
    links: ["IP Services", "Patent Support", "Technology Transfer", "Commercialization"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers", "Contact Us", "Privacy Policy", "Terms & Conditions"],
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
    <path d="M0 50 C20 45 40 35 60 25 C80 15 100 10 120 5" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M0 50 C20 45 40 35 60 25 C80 15 100 10 120 5 L120 60 L0 60Z" fill="url(#lg1)" />
  </svg>
);

const BarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[10, 20, 35, 25, 45, 30, 50].map((h, i) => (
      <rect key={i} x={i * 17 + 2} y={60 - h} width="12" height={h} rx="2" fill={i === 6 ? "#4F46E5" : "#A5B4FC"} />
    ))}
  </svg>
);

const HBarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[80, 65, 55, 40].map((w, i) => (
      <g key={i}>
        <rect x="0" y={i * 14 + 2} width={w} height="10" rx="2" fill={i === 0 ? "#4F46E5" : "#A5B4FC"} />
      </g>
    ))}
  </svg>
);

const MapChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    <ellipse cx="60" cy="30" rx="58" ry="28" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
    {[[30,20],[55,15],[80,22],[45,35],[70,38],[25,42],[90,30],[60,45]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r={i%3===0?4:2.5} fill="#4F46E5" opacity={0.7} />
    ))}
  </svg>
);

const DonutChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    <circle cx="45" cy="30" r="25" fill="none" stroke="#EEF2FF" strokeWidth="12" />
    <circle cx="45" cy="30" r="25" fill="none" stroke="#4F46E5" strokeWidth="12" strokeDasharray="70 87" strokeDashoffset="22" />
    <circle cx="45" cy="30" r="25" fill="none" stroke="#818CF8" strokeWidth="12" strokeDasharray="40 117" strokeDashoffset="-48" />
    <circle cx="45" cy="30" r="25" fill="none" stroke="#06B6D4" strokeWidth="12" strokeDasharray="30 127" strokeDashoffset="-88" />
    <rect x="78" y="10" width="8" height="8" rx="1" fill="#4F46E5" />
    <rect x="78" y="24" width="8" height="8" rx="1" fill="#818CF8" />
    <rect x="78" y="38" width="8" height="8" rx="1" fill="#06B6D4" />
    <text x="90" y="18" fontSize="7" fill="#64748B">Engg</text>
    <text x="90" y="32" fontSize="7" fill="#64748B">CS</text>
    <text x="90" y="46" fontSize="7" fill="#64748B">Med</text>
  </svg>
);

const SmallBarChart = () => (
  <svg viewBox="0 0 120 60" className="w-full h-14">
    {[20, 35, 28, 42, 38, 50, 44].map((h, i) => (
      <rect key={i} x={i * 17 + 2} y={60 - h} width="12" height={h} rx="2" fill={i % 2 === 0 ? "#4F46E5" : "#818CF8"} />
    ))}
  </svg>
);

const CHART_MAP = { line: LineChart, bar: BarChart, hbar: HBarChart, map: MapChart, donut: DonutChart, barsmall: SmallBarChart };

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
      <div className="text-xs text-gray-400 font-medium ml-2">Research Overview</div>
      <div className="ml-auto text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5">2024 ▾</div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className="w-32 bg-gray-50 border-r border-gray-100 py-3 flex flex-col gap-0.5 shrink-0">
        {["Overview","Performance","Researchers","Publications","Collaborations","Funding","Impact","Benchmarking"].map((item, i) => (
          <div key={item} className={`px-3 py-1.5 text-xs flex items-center gap-2 cursor-pointer ${i === 0 ? "bg-indigo-600 text-white rounded-sm mx-1" : "text-gray-500 hover:bg-gray-100"}`}>
            <div className={`w-2.5 h-2.5 rounded-sm ${i === 0 ? "bg-indigo-300" : "bg-gray-300"}`} />
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-3 bg-white">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: "Total Publications", val: "4,782", delta: "+12.5%", color: "text-indigo-600" },
            { label: "Citations", val: "23,654", delta: "+18.3%", color: "text-cyan-600" },
            { label: "h-index", val: "142", delta: "+8", color: "text-purple-600" },
            { label: "Research Output Score", val: "85.6", delta: "+7.2%", color: "text-green-600" },
          ].map(({ label, val, delta, color }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-2">
              <div className="text-[9px] text-gray-400 leading-tight mb-1">{label}</div>
              <div className={`text-sm font-bold ${color}`}>{val}</div>
              <div className="text-[9px] text-green-500 font-medium">{delta} vs last year</div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[9px] font-semibold text-gray-600 mb-2">Publications Over Time</div>
            <svg viewBox="0 0 140 60" className="w-full h-12">
              <defs>
                <linearGradient id="dblg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0,20,40,60,80,100,120,140].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="60" stroke="#E5E7EB" strokeWidth="0.5" />
              ))}
              <path d="M0 50 C20 48 40 40 60 30 C80 20 100 15 120 8 L140 5" fill="none" stroke="#4F46E5" strokeWidth="2" />
              <path d="M0 50 C20 48 40 40 60 30 C80 20 100 15 120 8 L140 5 L140 60 L0 60Z" fill="url(#dblg)" />
              {["2019","2020","2021","2022","2023","2024"].map((y,i) => (
                <text key={y} x={i*28} y="68" fontSize="6" fill="#9CA3AF">{y}</text>
              ))}
            </svg>
          </div>

          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[9px] font-semibold text-gray-600 mb-1">Top Subject Areas</div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 60 60" className="w-16 h-16 shrink-0">
                <circle cx="30" cy="30" r="22" fill="none" stroke="#4F46E5" strokeWidth="10" strokeDasharray="88 50" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#818CF8" strokeWidth="10" strokeDasharray="55 83" strokeDashoffset="-88" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#06B6D4" strokeWidth="10" strokeDasharray="40 98" strokeDashoffset="-143" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#34D399" strokeWidth="10" strokeDasharray="35 103" strokeDashoffset="-183" />
              </svg>
              <div className="flex flex-col gap-0.5 text-[8px]">
                {[["#4F46E5","Engineering","28%"],["#818CF8","Computer Science","22%"],["#06B6D4","Medicine","16%"],["#34D399","Materials Science","14%"],["#E5E7EB","Others","18%"]].map(([c,l,p]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-sm shrink-0" style={{background:c}} />
                    <span className="text-gray-500">{l}</span>
                    <span className="font-semibold text-gray-700 ml-auto">{p}</span>
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ResearchConsulting() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A]">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-black text-sm">RC</div>
            <div className="leading-tight hidden sm:block">
              <div className="text-xs font-bold text-[#07122f] uppercase tracking-wide">Researcher Connect</div>
              <div className="text-[9px] text-gray-400 uppercase tracking-wider">Innovation and Impact Private Limited</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-4 flex-1">
            {NAV_ITEMS.map(({ label, dropdown, active }) => (
              <button key={label}
                className={`flex items-center gap-0.5 px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 rounded-none"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}>
                {label}
                {dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button className="hidden lg:block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
              Get in Touch
            </button>
            <button className="lg:hidden p-2 rounded-md text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map(({ label, active }) => (
              <button key={label} className={`text-left px-3 py-2 rounded-md text-sm ${active ? "text-indigo-600 font-semibold bg-indigo-50" : "text-gray-600"}`}>
                {label}
              </button>
            ))}
            <button className="mt-2 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">Get in Touch</button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF] to-[#F0F9FF] pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <span className="hover:text-indigo-600 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-indigo-600 cursor-pointer">Institutions</span>
            <span>›</span>
            <span className="text-gray-600 font-medium">Research Analytics</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#07122f] leading-tight mb-3">
                Research Analytics
              </h1>
              <p className="text-indigo-600 font-bold text-lg mb-5">
                Data-Driven Insights. Strategic Decisions. Greater Impact.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                RCII delivers comprehensive research analytics solutions that empower institutions to evaluate performance, benchmark progress, and make informed research decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md shadow-indigo-200">
                  <BarChart2 className="w-4 h-4" />
                  Request a Demo
                </button>
                <button className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-colors">
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right – Dashboard Mockup */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none flex justify-center">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#07122f] mb-3">Why Research Analytics Matters</h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-[#07122f] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#07122f] mb-3">Our Research Analytics Solutions</h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map(({ icon: Icon, title, bullets }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-[#07122f] mb-4 text-sm leading-snug">{title}</h3>
                <ul className="flex flex-col gap-2 flex-1">
                  {bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button className="mt-5 flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#07122f] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">{value}</div>
                <div className="text-indigo-300 text-xs font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INSIGHTS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#07122f] mb-3">Key Insights You Can Unlock</h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map(({ title, desc, chart }) => {
              const ChartComp = CHART_MAP[chart];
              return (
                <div key={title} className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all">
                  <h3 className="font-bold text-[#07122f] mb-1 text-sm">{title}</h3>
                  <div className="my-3 bg-white rounded-xl p-2 border border-gray-100">
                    <ChartComp />
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Illustration placeholder */}
          <div className="hidden lg:flex shrink-0 w-48 h-32 items-center justify-center">
            <svg viewBox="0 0 180 120" className="w-full h-full opacity-80">
              <rect x="10" y="20" width="110" height="80" rx="8" fill="white" fillOpacity="0.15" />
              <rect x="20" y="30" width="90" height="12" rx="3" fill="white" fillOpacity="0.4" />
              <rect x="20" y="48" width="60" height="8" rx="2" fill="white" fillOpacity="0.3" />
              <rect x="20" y="62" width="75" height="8" rx="2" fill="white" fillOpacity="0.3" />
              <rect x="20" y="76" width="50" height="8" rx="2" fill="white" fillOpacity="0.3" />
              <circle cx="148" cy="60" r="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
              <path d="M135 60 C140 50 155 50 160 60" stroke="white" strokeOpacity="0.6" strokeWidth="2" fill="none" />
              <circle cx="148" cy="55" r="5" fill="white" fillOpacity="0.5" />
            </svg>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Transform Your Research with Actionable Insights
            </h2>
            <p className="text-indigo-100 text-base">
              Empower your institution with robust analytics and make smarter, faster, and data-driven decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start shrink-0">
            <button className="flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-6 py-3 rounded-lg transition-colors shadow-lg">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#07122f] text-gray-300 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 mb-10">
            {/* Brand col */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-black text-sm">RC</div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Researcher Connect</div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-wider">Innovation and Impact Private Limited</div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Empowering researchers, institutions and publishers with ethical solutions and advanced technology for a better research future.
              </p>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center cursor-pointer transition-colors">
                    <Icon className="w-3.5 h-3.5 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {FOOTER_COLS.map(({ heading, links, highlight }) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className={`text-xs transition-colors ${link === highlight ? "text-indigo-400 font-semibold" : "text-gray-400 hover:text-indigo-400"}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact col */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+911234567890" className="flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  +91 123 456 7890
                </a>
                <a href="mailto:info@rcii.in" className="flex items-center gap-2 text-xs text-gray-400 hover:text-indigo-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  info@rcii.in
                </a>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  India | Global
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>© 2024 Researcher Connect Innovation and Impact Private Limited. All Rights Reserved.</span>
            <span className="flex items-center gap-1">
              Made with <span className="text-red-400">♥</span> for the Global Research Community
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
