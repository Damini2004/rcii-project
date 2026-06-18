import React from "react";
import {
  User,
  BookOpen,
  Target,
  Network,
  TrendingUp,
  Compass,
  GraduationCap,
  Share2,
  Handshake,
  FileText,
  BarChart3,
  Users,
  Globe,
  Smile,
  CheckCircle,
  PlayCircle,
  PenTool,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/bgcareer.png";
import whyImg from "../../assets/career.png";

function CareerGrowthResources() {
  const journey = [
    ["Assess", "Evaluate your skills, strengths, and goals.", User],
    ["Learn", "Build knowledge and develop new skills.", BookOpen],
    ["Grow", "Gain experience and expand your expertise.", Target],
    ["Connect", "Build meaningful professional networks.", Network],
    ["Advance", "Unlock new opportunities and take the next step.", TrendingUp],
    ["Lead", "Become a leader and create lasting impact.", Compass],
  ];

  const services = [
    ["Career Guidance", ["Career Path Planning", "Goal Setting", "Career Transition Support", "Academic Career Advice"], User],
    ["Skills Development", ["Research Skills Training", "Writing & Communication", "Data Analysis & Tools", "Leadership Skills"], GraduationCap],
    ["Mentorship Programs", ["Expert Mentorship", "Peer Mentoring", "Group Mentoring", "Long-term Guidance"], Share2],
    ["Networking Opportunities", ["Researcher Networking", "Industry Connect", "Collaborations", "Events & Webinars"], Handshake],
    ["Academic Profile Enhancement", ["CV & Resume Building", "LinkedIn Optimization", "Personal Branding", "Online Presence"], FileText],
    ["Leadership & Impact", ["Leadership Development", "Impact Measurement", "Grant Leadership", "Community Building"], BarChart3],
  ];

  const impact = [
    ["10,000+", "Researchers Guided", Users],
    ["500+", "Training Programs", BookOpen],
    ["25+", "Countries Reached", Globe],
    ["95%", "Satisfaction Rate", Smile],
  ];

  const whyPoints = [
    "Personalized career guidance from domain experts",
    "Practical resources to enhance your skills and profile",
    "Access to global networks and collaboration opportunities",
    "Programs designed for researchers at every career stage",
    "Commitment to your long-term professional growth",
  ];

  const resources = [
    ["Career Guides", "In-depth guides on career paths, roles, and growth strategies.", FileText],
    ["Webinars & Workshops", "Expert-led sessions on skills, trends, and career development.", PlayCircle],
    ["Templates & Tools", "Access templates for CVs, cover letters, research statements, and more.", PenTool],
    ["Blogs & Articles", "Read expert articles on career growth, research trends, and success tips.", BookOpen],
    ["Success Stories", "Inspiring stories from researchers who achieved their career goals.", MessageCircle],
  ];

  return (
    <main className="bg-[#f8f9ff] text-[#10162f] pt-[70px]">
      {/* HERO */}
<section className="py-6 relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[515px] bg-white">
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
      
        <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="max-w-[520px] pt-6 sm:pt-8 lg:pt-10 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
              <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                Home
              </Link>
      
              <span className="text-gray-400">›</span>
      
              <Link to="/researchers" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                Researchers
              </Link>
      
              <span className="text-gray-400">›</span>
      
              <span className="text-gray-500">Career & Growth Resources</span>
            </div>
      
            <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
              Career & Growth <br />
              <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
              Resources 
              </span>
            </h1>
      
            <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-5 sm:mt-7">
              Advance Your Career. Expand Your Impact.
            </p>
      
            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
            RCI empowers researchers at every stage of their career with
              expert guidance, skills development, and growth opportunities to
              achieve their professional goals.
            </p>
      
            <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
              <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
                Talk to an Expert
                <ArrowRight size={18} />
              </button>
      
              <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* JOURNEY */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 py-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
    <SectionTitle title="Your Career Growth Journey" />

    <div className="mt-8 grid grid-cols-1 gap-y-8 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {journey.map(([title, desc, Icon], index) => (
        <div
          key={title}
          className="group relative flex min-h-[165px] flex-col items-center px-3 text-center transition-all duration-300 hover:-translate-y-2"
        >
          {index !== journey.length - 1 && (
            <div className="absolute left-[73%] top-[32px] hidden w-[68px] items-center xl:flex">
              <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#cfd4ee]" />
              <span className="ml-1 text-[#5138ff]">›</span>
            </div>
          )}

          <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#F2ECFF] text-[#5138ff] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(91,53,255,0.16)]">
            <Icon size={31} strokeWidth={2.2} />
          </div>

          <h3 className="mt-4 text-[18px] font-bold leading-none text-[#5138ff]">
            {title}
          </h3>

          <p className="mt-4 max-w-[150px] text-[12px] font-semibold leading-[22px] text-[#1f2744]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
    <SectionTitle title="Our Career & Growth Resources" />

    <div className="mt-7 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {services.map(([title, list, Icon], index) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#FFF1E8]", "text-[#F47A20]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EEF8F0]", "text-[#28A745]"],
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[292px] flex-col rounded-[10px] border border-[#e8ebf7] bg-white px-5 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
          >
            <div
              className={`mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full ${styles[index][0]} ${styles[index][1]} transition-all duration-300 group-hover:scale-110`}
            >
              <Icon size={29} strokeWidth={2.2} />
            </div>

            <h3 className="mt-4 min-h-[42px] text-[12px] font-bold leading-[17px] text-[#111832]">
              {title}
            </h3>

            <ul className="mt-4 space-y-2.5 text-left">
              {list.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[10px] font-semibold leading-[15px] text-[#2f3650]"
                >
                  <CheckCircle
                    size={12}
                    className="mt-[1px] shrink-0 text-[#5138ff]"
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto pt-4 text-left text-[10px] font-bold text-[#5138ff] transition-all duration-300 hover:translate-x-1">
              Learn More →
            </button>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* IMPACT */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-[#f0edff] px-5 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-7">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {impact.map(([num, label, Icon], index) => (
        <div
          key={label}
          className={`group flex items-center justify-center gap-4 px-4 py-2 transition-all duration-300 hover:-translate-y-1 ${
            index !== impact.length - 1 ? "lg:border-r lg:border-[#d8d2ff]" : ""
          }`}
        >
          <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#F2ECFF] text-[#5138ff] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(81,56,255,0.16)]">
            <Icon size={27} strokeWidth={2.2} />
          </div>

          <div>
            <div className="text-[24px] font-bold leading-none text-[#5138ff]">
              {num}
            </div>
            <div className="mt-1 text-[11px] font-semibold leading-[15px] text-[#111832]">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-6 rounded-[14px] border border-[#eceeff] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] lg:grid-cols-2 lg:px-10">
    
    <div className="flex justify-center">
      <img
        src={whyImg}
        alt="Why choose RCI"
        className="w-full max-w-[520px] rounded-[12px] object-contain transition-all duration-300 hover:scale-[1.03]"
      />
    </div>

    <div className="lg:pl-4">
      <h2 className="text-[18px] font-bold text-[#111832]">
        Why Choose RCII?
      </h2>

      <div className="mt-2 h-[3px] w-11 rounded-full bg-[#00a6c8]" />

      <ul className="mt-5 space-y-3">
        {whyPoints.map((item) => (
          <li
            key={item}
            className="group flex items-start gap-3 rounded-[6px] px-2 py-1 text-[12px] font-semibold leading-[19px] text-[#1f2744] transition-all duration-300 hover:translate-x-1 hover:bg-[#eefaff]"
          >
            <CheckCircle
              size={16}
              className="mt-[1px] shrink-0 text-[#00a6c8] transition-all duration-300 group-hover:scale-125"
              fill="#00a6c8"
              stroke="white"
              strokeWidth={3}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>

      {/* RESOURCES */}
    <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-6">
  <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
    <SectionTitle title="Resources to Support Your Growth" />

    <div className="mt-7 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {resources.map(([title, desc, Icon], index) => {
        const styles = [
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#EAF8FA]", "text-[#0099B8]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
          ["bg-[#F2ECFF]", "text-[#5B35FF]"],
        ];

        return (
          <div
            key={title}
            className="group flex min-h-[220px] flex-col items-center rounded-[10px] border border-[#e8ebf7] bg-white px-5 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
          >
            <div
              className={`flex h-[62px] w-[62px] items-center justify-center rounded-full ${styles[index][0]} ${styles[index][1]} transition-all duration-300 group-hover:scale-110`}
            >
              <Icon size={31} strokeWidth={2.2} />
            </div>

            <h3 className="mt-4 text-[14px] font-bold leading-[18px] text-[#111832]">
              {title}
            </h3>

            <p className="mt-3 max-w-[175px] text-[12px] font-semibold leading-[21px] text-[#2f3650]">
              {desc}
            </p>

            <button className="mt-auto pt-4 text-[12px] font-bold text-[#5138ff] transition-all duration-300 hover:translate-x-1">
              {index === 0 && "View Guides"}
              {index === 1 && "View Calendar"}
              {index === 2 && "Explore Tools"}
              {index === 3 && "Read Blog"}
              {index === 4 && "View Stories"}
              <span className="ml-2">→</span>
            </button>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA */}
     <section className="w-full bg-[#f8f9ff] px-3 sm:px-5 lg:px-12 pb-10">
  <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-5 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)] sm:px-7 lg:px-10">
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-[#5138ff] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-all duration-300 hover:scale-110">
          <Target size={36} strokeWidth={2.3} />
        </div>

        <div>
          <h2 className="text-[20px] font-bold leading-tight sm:text-[24px]">
            Ready to Take the Next Step in Your Career?
          </h2>

          <p className="mt-2 text-[12px] font-semibold leading-[18px] text-white/90">
            Connect with our experts and start your journey toward greater impact.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <button className="inline-flex h-[48px] items-center justify-center gap-3 rounded-[5px] bg-white px-8 text-[13px] font-bold text-[#5138ff] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
          Talk to an Expert
          <span>→</span>
        </button>

        <button className="inline-flex h-[48px] items-center justify-center rounded-[5px] border border-white/60 bg-white/5 px-8 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#5138ff]">
          Request Consultation
        </button>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}

function Card({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#10162f]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5138ff]" />
    </div>
  );
}

export default CareerGrowthResources;