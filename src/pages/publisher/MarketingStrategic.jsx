import React from "react";
import {
  ArrowRight,
  Globe,
  Users,
  BarChart3,
  ShieldCheck,
  Target,
  DollarSign,
  Search,
  Mail,
  PenTool,
  PieChart,
  ClipboardCheck,
  Rocket,
  Trophy,
  Star,
  Quote,
  Monitor,
  Linkedin,
  Facebook,
  Send,
  Megaphone,
  LineChart,
  BookOpen,
  Award,
  Headphones,
  FileText,
  Presentation,
} from "lucide-react";
import heroimg from "../../assets/journal-marketing-strategy-banner.webp";
import bar from "../../assets/academic-journal-marketing-services.webp";
import { Link } from "react-router-dom";
import bar2 from "../../assets/scholarly-publishing-blog-2.webp";

function MarketingStrategic() {
  const benefits = [
    { icon: Globe, title: "Increase Visibility", text: "Improve discoverability across search engines and platforms.", color: "#563BFF", bg: "#F0EDFF" },
    { icon: Users, title: "Attract Quality Submissions", text: "Reach the right authors and encourage high-quality manuscript submissions.", color: "#7C3AED", bg: "#F4EDFF" },
    { icon: BarChart3, title: "Grow Readership", text: "Expand your readership and engagement across the globe.", color: "#2563EB", bg: "#EAF4FF" },
    { icon: ShieldCheck, title: "Strengthen Reputation", text: "Build your journal’s brand as a credible and trusted publication.", color: "#16A34A", bg: "#EAF8EF" },
    { icon: Target, title: "Target the Right Audience", text: "Data-driven targeting to connect with researchers, institutions & libraries.", color: "#6D28D9", bg: "#F1EDFF" },
    { icon: DollarSign, title: "Maximize Impact", text: "Drive more citations, downloads and long-term impact for your journal.", color: "#2563EB", bg: "#EAF4FF" },
  ];

  const services = [
    { icon: Search, title: "Market Research & Analysis", list: ["Audience & competitor analysis", "Keyword & trend analysis", "SWOT & positioning"], color: "#563BFF", bg: "#F0EDFF" },
    { icon: Target, title: "Brand Positioning", list: ["Value proposition development", "Brand messaging & tone", "Journal identity enhancement"], color: "#16A34A", bg: "#EAF8EF" },
    { icon: Megaphone, title: "Digital Marketing", list: ["SEO & content marketing", "Social media marketing", "Paid campaigns (PPC)"], color: "#7C3AED", bg: "#F4EDFF" },
    { icon: Mail, title: "Email Marketing", list: ["Newsletter strategy & design", "Targeted email campaigns", "Automation & analytics"], color: "#16A34A", bg: "#EAF8EF" },
    { icon: Users, title: "Author & Reviewer Outreach", list: ["Global outreach campaigns", "Ambassador & advocacy programs", "Reviewer recognition programs"], color: "#16A34A", bg: "#EAF8EF" },
    { icon: Globe, title: "Conference & Event Promotion", list: ["Event participation strategy", "Webinars & virtual events", "Conference marketing support"], color: "#563BFF", bg: "#F0EDFF" },
    { icon: PenTool, title: "Content Creation", list: ["Blog, article & infographics", "Video abstracts & podcasts", "Press releases & announcements"], color: "#16A34A", bg: "#EAF8EF" },
    { icon: PieChart, title: "Performance Analytics", list: ["Campaign performance tracking", "ROI & conversion analysis", "Actionable insights & reports"], color: "#563BFF", bg: "#F0EDFF" },
  ];

 const process = [
  { icon: ClipboardCheck, title: "1. Discover", text: "Understand your goals, audience and market.", color: "#563BFF", bg: "#F0EDFF" },
  { icon: ClipboardCheck, title: "2. Strategize", text: "Build a customized marketing strategy and plan.", color: "#16A34A", bg: "#EAF8EF" },
  { icon: Rocket, title: "3. Execute", text: "Implement multi-channel campaigns and initiatives.", color: "#2563EB", bg: "#EAF4FF" },
  { icon: LineChart, title: "4. Optimize", text: "Monitor performance and optimize for better results.", color: "#F97316", bg: "#FFF1E8" },
  { icon: Trophy, title: "5. Achieve", text: "Measure impact and achieve sustainable growth.", color: "#EC4899", bg: "#FFEAF3" },
];

const channels = [
  { icon: Globe, title: "Website & SEO" },
  { icon: Linkedin, title: "Social Media" },
  { icon: Mail, title: "Email Campaigns" },
  { icon: Megaphone, title: "Paid Advertising" },
  { icon: FileText, title: "Content Marketing" },
  { icon: Presentation, title: "Webinars & Events" },
  { icon: Users, title: "Communities & Forums" },
  { icon: Star, title: "Influencer Outreach" },
];

  const impact = [
    { icon: BookOpen, value: "850+", label: "Journals Supported" },
    { icon: Globe, value: "120M+", label: "Researchers Reached" },
    { icon: BarChart3, value: "35%", label: "Increase in Website Traffic" },
    { icon: Mail, value: "50%", label: "Growth in Submissions" },
    { icon: Trophy, value: "60%", label: "Increase in Social Engagement" },
    { icon: LineChart, value: "25%", label: "Higher Readership" },
  ];

  const testimonials = [
  {
    name: "Dr. Emily Carter",
    role: "Editor-in-Chief",
    journal: "International Journal of Nanoscience",
    text: "RCI’s marketing strategies have significantly increased our journal’s visibility and submission rates.",
    img: "/images/user1.jpg",
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Publisher",
    journal: "Global Health Research Journal",
    text: "Their team is proactive, creative, and truly understands the needs of academic publishers.",
    img: "/images/user2.jpg",
  },
  {
    name: "Dr. Maria Lopez",
    role: "Managing Editor",
    journal: "Journal of Environmental Studies",
    text: "Excellent support in digital marketing and outreach. Highly professional and results-driven team.",
    img: "/images/user3.jpg",
  },
];

  return (
    <main className="bg-[#F6F8FF]  text-[#071044] pt-[70px] ">
     
        {/* HERO */}
          <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[450px] bg-white">
               {/* Background image only after 768px */}
               <div
                 className=" absolute inset-0 bg-cover  bg-no-repeat"
                 style={{
                   backgroundImage: `url(${heroimg})`,
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
             
                     <Link to="/publishers" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                      Publishers
                     </Link>
             
                     <span className="text-gray-400">›</span>
             
                     <span className="text-gray-500">Marketing Strategy</span>
                   </div>
             
                   <h1 className="text-[34px] sm:text-[38px] lg:text-[38px] leading-none font-bold text-[#07113F]">
                   Strategic Marketing. <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                        Stronger Reach. Greater Impact.
                     </span>
                   </h1>
             
                
             
                   <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
                     RCI designs and executes data-driven marketing strategies that boost
                your journal’s visibility, attract quality submissions, and grow your
                global audience.
                   </p>
             
                   <div className="flex flex-wrap gap-3 mt-5 sm:mt-9">
                     <Link to="/contact">
                     <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
                        Explore Our Services
                       <ArrowRight size={18} />
                     </button></Link>
              <Link to="/contact">
                     <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                       Request a Consultation
                       
                       <ArrowRight size={18} />
                     </button></Link>
                   </div>
                 </div>
               </div>
             </section>
      

   {/* BENEFITS */}
<SectionCard title="Key Benefits of a Strong Marketing Strategy">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {benefits.map((item) => (
      <IconInfoCard key={item.title} {...item} />
    ))}
  </div>
</SectionCard>

{/* SERVICES */}
<SectionCard title="Our Marketing Strategy Services">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((item) => (
      <ServiceCard key={item.title} {...item} />
    ))}
  </div>
</SectionCard>

        {/* PROCESS */}
       <SectionCard title="Our Proven Marketing Process">
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
    {process.map((item, index) => (
      <ProcessCard key={item.title} {...item} index={index} total={process.length} />
    ))}
  </div>
</SectionCard>

        {/* CHANNELS */}
      <SectionCard title="Our Marketing Channels">
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 overflow-hidden rounded-[12px] border border-[#edf0fa]">
    {channels.map(({ icon: Icon, title }, index) => (
      <div
        key={title}
        className={`group flex flex-col items-center justify-center bg-white px-3 py-5 text-center transition-all duration-500 hover:bg-[#fbfcff] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(30,40,90,0.12)]
        ${index !== channels.length - 1 ? "border-r border-[#edf0fa]" : ""}
        border-b lg:border-b-0 border-[#edf0fa]`}
      >
        <div className="flex h-[42px] w-[42px] items-center justify-center">
          <Icon
            size={28}
            strokeWidth={1.9}
            className="text-[#321CFF] transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <p className="mt-3 text-[10px] sm:text-[11px] font-bold leading-tight text-[#071044]">
          {title}
        </p>
      </div>
    ))}
  </div>
</SectionCard>

        {/* IMPACT */}
        <section className="rounded-[14px] max-w-[1180px] mt-6 mx-auto px-4 sm:px-6 lg:px-14 bg-[linear-gradient(90deg,#0036B8,#321CFF)] p-4 text-white shadow-[0_14px_34px_rgba(30,40,120,0.24)] ">
          <h2 className="mb-4 text-center sm:text-[22px] text-[20px] font-bold">Our Impact in Numbers</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {impact.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-[10px] p-2 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                <Icon size={26} className="text-white/90" />
                <div>
                  <h3 className="text-[18px] font-bold">{value}</h3>
                  <p className="text-[11px] font-semibold text-white/80">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
       <SectionCard title="What Our Partners Say">
  <div className="grid gap-4 md:grid-cols-3">
    {testimonials.map((item) => (
      <TestimonialCard key={item.name} {...item} />
    ))}
  </div>

  {/* <div className="mt-3 flex justify-center gap-1.5">
    <span className="h-2 w-2 rounded-full bg-[#321CFF]" />
    <span className="h-2 w-2 rounded-full bg-[#D9DDF5]" />
    <span className="h-2 w-2 rounded-full bg-[#D9DDF5]" />
  </div> */}
</SectionCard>

        {/* CTA */}
 <div className="max-w-[1180px] mx-auto mt-4 pb-6">
  <section className="overflow-hidden rounded-[14px] bg-[linear-gradient(90deg,#143CCB_0%,#3D1CFF_100%)] px-4 py-5 shadow-[0_16px_38px_rgba(10,20,90,0.25)]">
    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
      
      {/* Left Side */}
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <img
          src={bar}
          alt="Marketing Growth"
          className="h-[72px] w-[130px] shrink-0 object-contain transition-all duration-500 hover:scale-[1.05]"
        />

        <div>
          <h2 className="text-[18px] sm:text-[20px] font-bold leading-tight text-white">
            Let's Build Your Journal's Global Presence
          </h2>

          <p className="mt-1 max-w-[430px] text-[11px] font-medium leading-[1.55] text-white/85">
            Partner with RCII to create and execute a winning
            marketing strategy tailored to your goals.
          </p>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"> <Link to="/contact">
        <button className="group flex h-[40px] min-w-[190px] items-center justify-center whitespace-nowrap rounded-[5px] bg-white px-5 text-[12px] font-bold text-[#321CFF] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,255,255,0.22)]">
          Request a Consultation
          <ArrowRight
            size={14}
            className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
          />
        </button>
</Link> <Link to="/contact">
        <button className="group flex h-[40px] min-w-[170px] items-center justify-center whitespace-nowrap rounded-[5px] border border-white/30 bg-white/5 px-5 text-[12px] font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
          <Headphones
            size={14}
            className="mr-2 transition-transform duration-500 group-hover:scale-110"
          />
          Talk to Our Expert
        </button></Link>
      </div>

    </div>
  </section>
</div>
      
    </main>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="mt-4 max-w-[1180px] mx-auto overflow-hidden rounded-[14px] border border-[#e8ebf7] bg-white shadow-[0_10px_32px_rgba(30,40,90,0.06)]">
      <h2 className="relative pt-4 pb-5 text-center text-[20px] sm:text-[24px] font-bold text-[#071044]">
        {title}
        <span className="absolute left-1/2 bottom-3 h-[3px] w-[36px] -translate-x-1/2 rounded-full bg-[#321CFF]" />
      </h2>

      {children}
    </section>
  );
}

function IconInfoCard({ icon: Icon, title, text, color, bg }) {
  return (
    <div className="group border-t border-[#edf0fa] sm:border-r  bg-white px-4 py-5 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbfcff] hover:shadow-[0_14px_30px_rgba(30,40,90,0.12)]">
      <div
        className="mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={22} strokeWidth={2.3} style={{ color }} />
      </div>

      <h3 className="mt-4 text-[11px] sm:text-[12px] font-bold leading-tight text-[#071044]">
        {title}
      </h3>

      <p className="mt-2 text-[10px] sm:text-[11px] font-semibold leading-[1.65] text-[#303B5D]">
        {text}
      </p>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, list, color, bg }) {
  return (
    <div className="group border-t border-r border-[#edf0fa] bg-white px-4 py-4 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbfcff] hover:shadow-[0_14px_30px_rgba(30,40,90,0.12)]">
      <div className="flex gap-3">
        <div
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
          style={{ backgroundColor: bg }}
        >
          <Icon size={19} strokeWidth={2.3} style={{ color }} />
        </div>

        <div>
          <h3 className="text-[14px] font-bold leading-tight text-[#071044]">
            {title}
          </h3>

          <ul className="mt-2 space-y-1">
            {list.map((item) => (
              <li
                key={item}
                className="text-[10px] sm:text-[11px] font-semibold leading-[1.45] text-[#303B5D]"
              >
                ✓ {item}
              </li>
            ))}
          </ul>

          {/* <button className="mt-2 text-[11px] font-bold text-[#321CFF] transition-all duration-300 group-hover:translate-x-1">
            Learn More →
          </button> */}
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ icon: Icon, title, text, color, bg, index, total }) {
  return (
    <div className="group relative px-3 py-3 text-center transition-all duration-500 hover:-translate-y-1">
      {index !== total - 1 && (
        <div className="absolute left-[62%] top-[38px] hidden w-[72%] border-t-2 border-dashed border-[#9aa7da] lg:block" />
      )}

      <div
        className="relative z-10 mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={30} strokeWidth={2.3} style={{ color }} />
      </div>

      <h3 className="mt-3 text-[13px] font-bold text-[#071044]">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-[155px] text-[11px] font-semibold leading-[1.55] text-[#303B5D]">
        {text}
      </p>
    </div>
  );
}

function TestimonialCard({ text, name, role, journal, img }) {
  return (
    <div className="group rounded-[12px] border border-[#e8ebf7] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(30,40,90,0.12)]">
      <div className="flex items-start justify-between">
        <Quote size={22} className="text-[#321CFF]" fill="#321CFF" />

        <div className="flex gap-0.5 text-[#FBBF24]">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={13} fill="#FBBF24" strokeWidth={1.8} />
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-[10.5px] font-semibold leading-[1.65] text-[#303B5D]">
        {text}
      </p>

      <div className="mt-4 flex items-center justify-center gap-3">
        <img
          src={bar2}
          alt={name}
          className="h-[42px] w-[42px] rounded-full object-cover"
        />

        <div className="text-left">
          <h4 className="text-[12px] font-bold leading-tight text-[#071044]">
            {name}
          </h4>
          <p className="mt-0.5 text-[10px] font-bold text-[#321CFF]">
            {role}
          </p>
          <p className="text-[9.5px] font-semibold text-[#5A6482]">
            {journal}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketingStrategic;