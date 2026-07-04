import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/research-consulting-innovation-platform-hero.webp";
import {
  ShieldCheck,
  ScanSearch,
  BadgeCheck,
  Target,
  CheckCircle2,
  UserRound,
  Landmark,
  BookOpen,
  Lightbulb,
  Check,
  BarChart3,
  Users,
  ArrowRight,
  Globe2,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import dashboardPreview from "../assets/research-management-dashboard-preview.webp";

export default function Home() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Ethical",
      sub: "By Commitment",
    },
    {
      icon: ScanSearch,
      title: "Transparent",
      sub: "By Process",
    },
    {
      icon: BadgeCheck,
      title: "Reliable",
      sub: "By Expertise",
    },
    {
      icon: Target,
      title: "Impactful",
      sub: "By Purpose",
    },
  ];

  const solutions = [
    {
      icon: UserRound,
      title: "For Researchers",
      desc: "Empowering you at every step of your research journey.",
      color: "indigo",
      bullets: [
        "Author & Publication Services",
        "Research Profiling & Visibility",
        "Patent Drafting & Filing Support",
        "Grant & Proposal Support",
        "Postdoc & Career Guidance",
      ],
    },
    {
      icon: Landmark,
      title: "For Institutions",
      desc: "Strengthening research excellence and institutional performance.",
      color: "cyan",
      bullets: [
        "Research Analytics & RAMS",
        "SDG, NIRF, NAAC & NBA Support",
        "Faculty & Research Tracking",
        "Institutional Repository",
        "Research Policy & Consulting",
      ],
    },
    {
      icon: BookOpen,
      title: "For Publishers",
      desc: "Technology and services for modern publishing.",
      color: "blue",
      bullets: [
        "Journal Hosting & Management",
        "Editorial & Peer Review Systems",
        "DOI Registration Solutions",
        "Indexing & Metadata Services",
        "Publishing Consultancy",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation & IP",
      desc: "From ideas to protection and commercialization.",
      color: "orange",
      bullets: [
        "Patent Drafting & Filing",
        "Technology Transfer Support",
        "IP Analytics & Landscape",
        "Commercialization Support",
        "Design & Trademark Support",
      ],
    },
  ];

  return (
    <div className="bg-white text-slate-900 mt-4">
      {/* HERO */}
      <section
        className="
    relative
    min-h-[650px]
    sm:min-h-[700px]
    md:min-h-[800px]
    lg:min-h-screen
    bg-cover
    bg-center
    bg-no-repeat
    flex
    items-center
  "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}

        {/* HERO content */}
        <div className="w-full max-w-[465px] mx-6 sm:mx-10 lg:mx-16 mt-14">
          <div className="">
            {/* HERO title */}
            <h1 className="text-[34px] sm:text-[42px] lg:text-[52px] text-white font-bold leading-[1.1]">
              Research.
              <br />
              <span className="text-cyan-400">Innovation.</span>
              <br />
              Impact.
              <span className="text-secondary"> Delivered.</span>
            </h1>

            <p className="mt-6 font-medium text-[16px] text-gray-200 leading-relaxed max-w-xl">
              Ethical. Transparent. Technology-driven solutions empowering
              researchers, strengthening institutions, enabling publishers, and
              protecting innovations.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
               <Link to="/contact">
              <button className="px-5 py-3 rounded-lg text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Explore Our Services →
              </button>
</Link>
              <button className="flex items-center gap-2 text-sm text-white font-medium">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-[14px]">
                  ▶
                </div>
                Watch Our Story
              </button>
            </div>

            {/* Bottom Features */}
            <div className="mt-10">
              {/* HERO features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-2">
                      {/* Left Icons Column */}
                      <div className="flex flex-col gap-2 pt-[2px]">
                        <Icon
                          size={16}
                          className="text-cyan-400 stroke-[2.3]"
                        />

                        <CheckCircle2
                          size={13}
                          className="text-violet-500 stroke-[2.5]"
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-white text-[12px] font-semibold leading-none mt-[7.2px]">
                          {item.title}
                        </h4>

                        <p className="text-[9.8px] text-slate-400 mt-[8px] leading-none">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-10 bg-white">
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-16">
          <p className="text-center text-[#4F46E5] font-bold text-[12px] uppercase tracking-wide">
            Our Core Solutions
          </p>

          <h2 className="text-center text-[28px] md:text-[25px] font-bold mt-2 text-[#111827]">
            Comprehensive Solutions. Measurable Impact.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
            {solutions.map((item) => {
              const Icon = item.icon;

              const styles = {
                indigo: {
                  card: "border-indigo-100 bg-indigo-50/20",
                  iconBg: "bg-indigo-100",
                  icon: "text-indigo-600",
                  title: "text-indigo-700",
                  check: "text-indigo-600",
                  link: "text-indigo-600",
                },
                cyan: {
                  card: "border-cyan-100 bg-cyan-50/25",
                  iconBg: "bg-cyan-100",
                  icon: "text-cyan-600",
                  title: "text-cyan-700",
                  check: "text-cyan-600",
                  link: "text-cyan-600",
                },
                blue: {
                  card: "border-blue-100 bg-blue-50/20",
                  iconBg: "bg-blue-100",
                  icon: "text-blue-600",
                  title: "text-blue-700",
                  check: "text-blue-600",
                  link: "text-blue-600",
                },
                orange: {
                  card: "border-orange-100 bg-orange-50/25",
                  iconBg: "bg-orange-100",
                  icon: "text-orange-600",
                  title: "text-orange-600",
                  check: "text-orange-500",
                  link: "text-orange-500",
                },
              }[item.color];

              return (
                <div
                  key={item.title}
                  className={`rounded-[14px] border ${styles.card} px-6 py-6 min-h-[340px] flex flex-col shadow-[0_8px_25px_rgba(15,23,42,0.04)]`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full ${styles.iconBg} flex items-center justify-center`}
                    >
                      <Icon
                        size={30}
                        className={`${styles.icon} stroke-[2.2]`}
                      />
                    </div>

                    <h3 className={`text-[16px] font-semibold ${styles.title}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-7 text-[12px] text-[#111827] font-medium leading-[1.8] max-w-[190px]">
                    {item.desc}
                  </p>

                  {/* List */}
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((x) => (
                      <li
                        key={x}
                        className="flex items-start gap-2 text-[12px] text-[#111827] font-medium"
                      >
                        <Check
                          size={14}
                          className={`${styles.check} mt-[2px] stroke-[3] shrink-0`}
                        />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button - Always Bottom */}
                  {/* <Link
                    to="/services"
                    className={`mt-auto pt-6 inline-flex items-center gap-2 text-[12px] font-bold ${styles.link} hover:gap-3 transition-all`}
                  >
                    Explore Services
                    <span>➜</span>
                  </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-16 py-2">
        {/* TECHNOLOGY card */}
        <div className="rounded-[14px] bg-[linear-gradient(110deg,#020817_0%,#03122F_48%,#130B45_100%)] text-white px-5 sm:px-8 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-9 items-center shadow-[0_14px_40px_rgba(2,8,23,0.28)] overflow-hidden">
          {/* Left */}
          <div>
            <p className="text-[#00D5E8] font-semibold text-[11px] uppercase tracking-[1.5px]">
              Technology & Platforms
            </p>

            <h2 className="text-[28px] leading-[1.25] font-semibold mt-4 max-w-[430px]">
              Smart Solutions Built for <br />
              Research Excellence
            </h2>

            {/* TECHNOLOGY icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
              {[
                {
                  icon: BarChart3,
                  title: "RAMS",
                  sub: "Research Analytics & Management System",
                },
                {
                  icon: Landmark,
                  title: "Journal Hosting",
                  sub: "Secure, Scalable & Reliable Hosting",
                },
                {
                  icon: BadgeCheck,
                  title: "DOI Solutions",
                  sub: "Custom DOI for Publishers",
                },
                {
                  icon: Users,
                  title: "Conference System",
                  sub: "Manage Events & Conferences",
                },
                {
                  icon: UserRound,
                  title: "Research Profiles",
                  sub: "Track, Showcase & Enhance Impact",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="text-center px-2 border-r border-white/10 last:border-r-0"
                  >
                    <Icon
                      size={30}
                      className={`mx-auto stroke-[1.7] ${
                        item.title === "DOI Solutions" ||
                        item.title === "Conference System"
                          ? "text-[#6D5DFB]"
                          : "text-[#00D5E8]"
                      }`}
                    />

                    <h4 className="mt-4 text-[12px] font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-[11px] leading-[1.5] text-white/70">
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* <Link
              to="/technology"
              className="mt-8 inline-flex items-center gap-2 bg-[#05C8DA] text-white px-5 py-3 rounded-[4px] font-bold text-[12px] shadow-[0_10px_25px_rgba(5,200,218,0.28)] hover:bg-[#04B9C9] transition"
            >
              Explore Our Technology
              <ArrowRight size={14} />
            </Link> */}
          </div>

      
          {/* Right Dashboard Image */}
          <div className="relative flex justify-end">
            {/* TECHNOLOGY dashboard image */}
            <img
              src={dashboardPreview}
              alt="Research dashboard"
              className="w-full max-w-[530px] h-auto lg:h-[330px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/20 object-cover bg-white"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-16  pt-8 pb-6">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 rounded-[14px] border border-indigo-100 bg-white shadow-[0_8px_25px_rgba(79,70,229,0.08)] px-5 sm:px-8 py-5">
          {[
            [Users, "10K+", "Researchers", "Empowered", "purple"],
            [Landmark, "500+", "Institutions", "Served", "cyan"],
            [BookOpen, "300+", "Journals", "Managed", "blue"],
            [Lightbulb, "2K+", "Patents", "Assisted", "orange"],
            [Globe2, "25+", "Countries", "Worldwide", "purple"],
          ].map(([Icon, num, line1, line2, color]) => {
            const c =
              color === "cyan"
                ? "bg-cyan-100 text-cyan-600"
                : color === "orange"
                  ? "bg-orange-100 text-orange-500"
                  : color === "blue"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-violet-100 text-violet-600";

            return (
              <div key={num} className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${c}`}
                >
                  <Icon size={30} strokeWidth={2.4} />
                </div>

                <div>
                  <h3 className="text-[22px] leading-none font-semibold text-[#3F3CFF]">
                    {num}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.35] font-semibold text-[#111827]">
                    {line1}
                    <br />
                    {line2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="pt-4 pb-12 px-4">
        <p className="text-center text-[#4F46E5] font-semibold text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[1px] sm:tracking-wide">
          How We Work
        </p>

        <h2 className="text-center text-[22px] sm:text-[26px] md:text-[28px] lg:text-[28px] font-bold mt-2 sm:mt-3 text-[#111827] leading-tight">
          From Research to Real-World Impact
        </h2>

        {/* HOW WE WORK */}
        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-start">
          {[
            [
              Search,
              "Discover",
              "Identify opportunities and research gaps.",
              "purple",
            ],
            [
              Settings,
              "Develop",
              "Create high-quality research and data.",
              "cyan",
            ],
            [
              BookOpen,
              "Publish",
              "Enhance, prepare and disseminate research.",
              "blue",
            ],
            [
              ShieldCheck,
              "Protect",
              "Secure your ideas and innovations.",
              "purple",
            ],
            [
              BarChart3,
              "Measure",
              "Track performance & maximize impact.",
              "cyan",
            ],
          ].map(([Icon, title, desc, color], index) => {
            const c =
              color === "cyan"
                ? "bg-cyan-500 shadow-cyan-200"
                : color === "blue"
                  ? "bg-blue-600 shadow-blue-200"
                  : "bg-violet-600 shadow-violet-200";

            return (
              <React.Fragment key={title}>
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-[2px] w-[56px] h-[56px] shrink-0 rounded-full ${c}
  text-white flex items-center justify-center
  ring-4 ring-white
  shadow-lg`}
                  >
                    <Icon size={26} strokeWidth={2.3} />
                  </div>

                  <div className="pt-[2px]">
                    <h3 className="text-[16px] font-semibold text-[#4F46E5]">
                      {title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.6] font-medium text-[#111827]">
                      {desc}
                    </p>
                  </div>
                </div>

                {index !== 4 && (
                  <div className="hidden lg:flex pt-7 text-slate-400">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-[#020B24] text-white py-6 overflow-hidden">
        {/* Background wave lines */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_40%,rgba(6,182,212,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.2),transparent_28%)]" />

        <p className="relative z-10 text-center text-[#00D5E8] font-semibold text-[11px] uppercase tracking-[1.5px]">
          Trusted by the Research Community
        </p>

        <h2 className="relative z-10 text-center text-[28px] font-bold mt-2">
          Voices That Inspire
        </h2>

        {/* TESTIMONIAL wrapper */}
        <div className="relative z-10 max-w-[1180px] mx-auto px-6 lg:px-14 mt-8">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#1E293B] flex items-center justify-center shadow-lg">
            <ChevronLeft size={22} strokeWidth={3} />
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#1E293B] flex items-center justify-center shadow-lg">
            <ChevronRight size={22} strokeWidth={3} />
          </button>

          <div className="grid md:grid-cols-3 gap-9">
            {[
              {
                text: "RCII's publication support and guidance helped me publish in top-tier journals. Their professionalism is unmatched.",
                name: "Dr. Neha Sharma",
                role: "Researcher, IIT Delhi",
                img: "https://i.pravatar.cc/80?img=47",
              },
              {
                text: "The RAMS platform has transformed how we track and manage research productivity across our university.",
                name: "Prof. Arvind Rao",
                role: "Pro Vice Chancellor, State University",
                img: "https://i.pravatar.cc/80?img=12",
              },
              {
                text: "Their DOI solution is reliable, easy to implement and backed by excellent technical support.",
                name: "Editorial Head",
                role: "International Journal Publisher",
                img: "https://i.pravatar.cc/80?img=32",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white text-[#111827] rounded-[9px] px-7 py-6 min-h-[165px] shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
              >
                <div className="flex gap-5 h-full">
                  <Quote
                    size={28}
                    className="text-[#4F46E5] fill-[#4F46E5] shrink-0"
                  />

                  <div className="flex flex-col flex-1">
                    <p className="text-[12px] leading-[1.8] font-medium text-[#111827]">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-3 mt-auto pt-6">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <h4 className="text-[13px] font-semibold text-[#111827]">
                          {item.name}
                        </h4>
                        <p className="text-[10px] font-medium text-[#334155] mt-1">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-7">
            <span className="w-6 h-2 rounded-full bg-[#6D5DFB]" />
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-8 bg-white">
        <p className="text-center text-[#4F46E5] font-semibold text-[12px] uppercase tracking-[1.5px]">
          Resources & Insights
        </p>

        <h2 className="text-center text-[28px] font-bold mt-2 text-[#111827]">
          Stay Informed. Stay Ahead.
        </h2>

        <div className="max-w-[1280px] mx-6 sm:mx-10 lg:mx-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              tag: "Blog",
              img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
              date: "May 10, 2024",
              title: "How to Choose the Right Journal for Your Research",
              color: "bg-[#5B39F5]",
            },
            {
              tag: "Guide",
              img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
              date: "May 03, 2024",
              title: "A Complete Guide to Patent Filing Process",
              color: "bg-[#08B8D5]",
            },
            {
              tag: "Webinar",
              img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600",
              date: "Apr 25, 2024",
              title: "Research Metrics That Matter for Institutions",
              color: "bg-[#5B39F5]",
            },
            {
              tag: "News",
              img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
              date: "Apr 15, 2024",
              title: "RCII Partners with Leading Universities Globally",
              color: "bg-[#08B8D5]",
            },
          ].map((item) => (
            <div
              key={item.tag}
              className="group h-[250px] bg-white rounded-[12px] overflow-hidden border border-indigo-50 shadow-[0_8px_25px_rgba(79,70,229,0.08)] hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(79,70,229,0.16)] transition-all duration-300"
            >
              <div className="relative h-[118px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <span
                  className={`absolute top-4 left-4 ${item.color} text-white text-[12px] font-semibold px-4 py-1.5 rounded-full shadow-lg`}
                >
                  {item.tag}
                </span>
              </div>

              <div className="px-4 py-3">
                <p className="text-[11px] text-slate-400 font-medium">
                  {item.date}
                </p>

                <h3 className="mt-2 text-[13px] leading-[1.45] font-semibold text-[#111827]">
                  {item.title}
                </h3>

                {/* <Link className="inline-flex items-center gap-2 mt-3 text-[#4F46E5] text-[13px] font-semibold group-hover:gap-3 transition-all">
                  Read More <span>➜</span>
                </Link> */}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          {/* <div className="bg-[#F8FAFF] rounded-[12px] h-[250px] border border-indigo-50 px-6 py-2 shadow-[0_8px_25px_rgba(79,70,229,0.08)] hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(79,70,229,0.16)] transition-all duration-300">
            <div className="text-[#08B8D5] text-[34px]">✉</div>

            <h3 className="mt-2 text-[14px] leading-[1.25] font-bold text-[#111827]">
              Subscribe to our <br />
              Newsletter
            </h3>

            <p className="mt-2 text-[11px] leading-[1.7] font-semibold text-slate-500">
              Get the latest updates, resources, and events.
            </p>

            <input
              className="w-full mt-2 bg-white rounded-[9px] px-2 py-2 text-[12px] outline-none border border-transparent focus:border-[#4F46E5] focus:ring-4 focus:ring-indigo-100 transition"
              placeholder="Enter your email"
            />

            <button className="w-full mt-2 bg-[#4F46E5] text-white rounded-[8px] py-2 text-[12px] font-semibold hover:bg-[#3F3CFF] hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
