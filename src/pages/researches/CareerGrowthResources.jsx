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

import heroImg from "../../assets/bgresearch.png";
import whyImg from "../../assets/auth2.png";

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
      <section className="w-full bg-white px-3 sm:px-5 lg:px-8 py-8">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[11px] font-semibold text-[#7b74d9]">
              Home <span className="mx-2">›</span> Researchers{" "}
              <span className="mx-2">›</span> Career & Growth Resources
            </div>

            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] text-[#10162f]">
              Career & Growth <br />
              <span className="text-[#5138ff]">Resources</span>
            </h1>

            <p className="mt-4 text-[14px] sm:text-[15px] font-extrabold text-[#5138ff]">
              Advance Your Career. Expand Your Impact.
            </p>

            <p className="mt-4 max-w-[520px] text-[13px] sm:text-[14px] font-medium leading-[26px] text-[#30384f]">
              RCI empowers researchers at every stage of their career with
              expert guidance, skills development, and growth opportunities to
              achieve their professional goals.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-[6px] bg-[#5138ff] px-6 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#402bd8] hover:shadow-lg">
                Talk to an Expert →
              </button>

              <button className="rounded-[6px] border border-[#8b7cff] bg-white px-6 py-3 text-[13px] font-extrabold text-[#5138ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                Explore All Services
              </button>
            </div>
          </div>

          <img
            src={heroImg}
            alt="Career Growth Resources"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* JOURNEY */}
      <section className="w-full px-3 sm:px-5 lg:px-8 py-6">
        <Card>
          <SectionTitle title="Your Career Growth Journey" />

          <div className="mt-8 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {journey.map(([title, desc, Icon], index) => (
              <div
                key={title}
                className="group relative flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(91,53,255,0.16)]">
                  <Icon size={27} strokeWidth={2.2} />
                </div>

                <h3 className="mt-4 text-[13px] font-extrabold text-[#111832]">
                  {title}
                </h3>

                <p className="mt-2 max-w-[145px] text-[11px] font-semibold leading-[19px] text-[#334155]">
                  {desc}
                </p>

                {index !== journey.length - 1 && (
                  <span className="hidden xl:block absolute left-[82%] top-[30px] h-[1px] w-[55px] bg-[#cfd4ee]" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* SERVICES */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <Card>
          <SectionTitle title="Our Career & Growth Resources" />

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map(([title, list, Icon]) => (
              <div
                key={title}
                className="group rounded-[10px] border border-[#e8ebf7] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 min-h-[40px] text-[12px] font-extrabold leading-[17px] text-[#111832]">
                  {title}
                </h3>

                <ul className="mt-3 space-y-2 text-left">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[10px] font-semibold text-[#334155]"
                    >
                      <CheckCircle
                        size={12}
                        className="shrink-0 text-[#5138ff]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 text-[10px] font-extrabold text-[#5138ff]">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* IMPACT */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-[#f0edff] px-5 py-5 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map(([num, label, Icon]) => (
              <div
                key={label}
                className="group flex items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-white text-[#5138ff] shadow-sm transition-all duration-300 group-hover:scale-110">
                  <Icon size={25} strokeWidth={2.2} />
                </div>

                <div>
                  <div className="text-[22px] font-extrabold leading-none text-[#5138ff]">
                    {num}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-[#334155]">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-6 rounded-[14px] border border-[#eceeff] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] lg:grid-cols-2 lg:px-10">
          <img
            src={whyImg}
            alt="Why choose RCI"
            className="w-full rounded-[12px] object-contain"
          />

          <div>
            <h2 className="text-[18px] font-extrabold text-[#111832]">
              Why Choose RCI?
            </h2>

            <ul className="mt-5 space-y-3">
              {whyPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[12px] font-semibold leading-[19px] text-[#1f2744]"
                >
                  <CheckCircle
                    size={15}
                    className="mt-[1px] shrink-0 text-[#00a6c8]"
                    fill="#00a6c8"
                    stroke="white"
                    strokeWidth={3}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <Card>
          <SectionTitle title="Resources to Support Your Growth" />

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {resources.map(([title, desc, Icon]) => (
              <div
                key={title}
                className="group rounded-[10px] border border-[#e8ebf7] bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-[12px] font-extrabold text-[#111832]">
                  {title}
                </h3>

                <p className="mt-3 text-[10px] font-semibold leading-[18px] text-[#334155]">
                  {desc}
                </p>

                <button className="mt-4 text-[10px] font-extrabold text-[#5138ff]">
                  View {title.split(" ")[0]} →
                </button>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-10">
        <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-between gap-5 rounded-[14px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-6 py-6 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)] md:flex-row lg:px-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-white text-[#5138ff]">
              <Target size={32} />
            </div>

            <div>
              <h2 className="text-[20px] sm:text-[24px] font-extrabold">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="mt-2 text-[12px] font-semibold text-white/85">
                Connect with our experts and start your journey toward greater impact.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="rounded-[6px] bg-white px-7 py-3 text-[13px] font-extrabold text-[#5138ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Talk to an Expert →
            </button>

            <button className="rounded-[6px] border border-white/70 bg-transparent px-7 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#5138ff]">
              Request Consultation
            </button>
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
      <h2 className="text-[17px] sm:text-[18px] font-extrabold text-[#10162f]">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-11 rounded-full bg-[#5138ff]" />
    </div>
  );
}

export default CareerGrowthResources;