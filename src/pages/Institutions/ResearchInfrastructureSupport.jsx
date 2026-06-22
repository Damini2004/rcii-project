import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Microscope,
  Settings,
  Wrench,
  Monitor,
  Presentation,
  Beaker,
  Cpu,
  BarChart3,
  ShieldCheck,
  Globe2,
  FlaskConical,
  ClipboardCheck,
  FileText,
  Handshake,
  Award,
  ArrowRight,
  CheckCircle,
  Quote,
  Users,
} from "lucide-react";

import heroBg from "../../assets/risBg.png";
import ris1 from "../../assets/ris1.png";
import ris2 from "../../assets/ris2.png";
import ris3 from "../../assets/ris3.png";
import ris4 from "../../assets/ris4.png";
import ris5 from "../../assets/ris5.png";
import risCta from "../../assets/risCta.png";
import logo from "../../assets/logo.png";

const purple = "#4424e9";

export default function ResearchInfrastructureSupport() {
  const services = [
    [Building2, "Infrastructure Planning", "Strategic planning for new facilities and upgradation of existing infrastructure."],
    [Microscope, "Laboratory Setup", "Design and setup of advanced laboratories with optimal workflow."],
    [Settings, "Equipment Procurement", "End-to-end support in sourcing and procuring best-in-class equipment."],
    [Wrench, "Installation & Commissioning", "Professional installation and commissioning for seamless operations."],
    [Monitor, "Maintenance & Calibration", "Regular maintenance, calibration, and performance validation."],
    [Presentation, "Training & Capacity Building", "Training for researchers and staff to maximize equipment utilization."],
  ];

  const areas = [
    [ris1, "Life Sciences", "Molecular Biology, Biotechnology, Microbiology, Genomics"],
    [ris2, "Physical Sciences", "Physics, Chemistry, Materials Science, Nanotechnology"],
    [ris3, "Engineering & Technology", "Mechanical, Electrical, Civil, Aerospace, Robotics"],
    [ris4, "Computational Resources", "HPC, Data Storage, Cloud Computing, Software"],
    [ris5, "Environmental & Earth Sciences", "Climate, Geosciences, Renewable Energy, Sustainability"],
  ];

  const process = [
    [FileText, "Assess", "Evaluate needs and current infrastructure"],
    [ClipboardCheck, "Plan", "Design customized infrastructure roadmap"],
    [Wrench, "Implement", "Execute with precision and quality"],
    [BarChart3, "Optimize", "Enhance performance and efficiency"],
    [Award, "Sustain", "Ensure long-term reliability and growth"],
  ];

  return (
    <div className="bg-white text-[#08132c] overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[420px] bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-14">
          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-center mt-16">
            <div className="max-w-[620px]">
              <Link to="/" className="text-[12px] text-[#3d25e6] mb-6 font-medium">
                Home &nbsp;›&nbsp; Institutions &nbsp;›&nbsp; Research Infrastructure Support
              </Link>

              <h1 className="text-[34px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-bold text-[#07113F] mt-4">
                Research Infrastructure <br />
                <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">Support</span>
              </h1>

              <h2 className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-3 sm:mt-6 leading-6">
                Enable Discovery. Empower Innovation.
              </h2>

              <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[430px]">
                RCII helps institutions build, optimize, and manage world-class research infrastructure to drive high-quality research and foster innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-7">
                <Link className="inline-flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-[12px]">
                  <Building2 size={18} /> Request Infrastructure Support
                </Link>

                <Link className="inline-flex items-center justify-center gap-2 border border-[#4F46E5] text-[#4F46E5] hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-[12px] bg-white/50">
                  Explore Our Solutions <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-[16px] shadow-[0_18px_45px_rgba(27,36,86,0.12)] border border-[#edf0ff] overflow-hidden">
          <h2 className="text-center pt-6 text-[18px] sm:text-[22px] font-bold">
            Comprehensive Infrastructure Support
          </h2>
          <div className="w-14 h-[3px] bg-[#4424e9] mx-auto mt-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
            {services.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className="group relative text-center px-5 py-4 hover:bg-[#fbfbff] hover:-translate-y-1 transition-all duration-300"
              >
                {index !== 5 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[120px] w-px bg-[#dfe3f5]" />
                )}

                <div className="mx-auto w-[60px] h-[60px] rounded-full bg-[#eef3ff] flex items-center justify-center text-[#4424e9] group-hover:bg-[#4424e9] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="mt-4 text-[14px] font-bold">{title}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-[#1f2937]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-7">
          Areas We Support
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 h-[270px]">
          {areas.map(([img, title, desc]) => (
            <div
              key={title}
              className="bg-white border border-[#e2e7fb] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(25,37,80,0.08)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img src={img} alt={title} className="w-full h-[140px] object-cover" />
              <div className="p-4 text-center flex flex-col h-[120px]">
  <h3 className="text-[#4424e9] font-bold text-[14px] leading-5 min-h-[40px]">
    {title}
  </h3>

  <p className="text-[12px] leading-6 mt-2">
    {desc}
  </p>
</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-white border border-[#e2e7fb] rounded-[16px] shadow-[0_8px_26px_rgba(25,37,80,0.06)] p-6 lg:p-6">
          <div className="grid lg:grid-cols-[.9fr_1.4fr] gap-8 items-center">
            <div>
              <h2 className="text-[18px] sm:text-[22px] font-bold mb-5">
                Why Partner with RCII?
              </h2>

              {[
                "Deep domain expertise and industry connections",
                "Cost-effective and future-ready solutions",
                "Quality assurance and regulatory compliance",
                "Timely execution and dedicated support",
                "Focus on safety, sustainability, and scalability",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-[13px] mb-2">
                  <CheckCircle size={14} color={purple} /> {item}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
              {process.map(([Icon, title, desc], index) => (
                <div key={title} className="relative text-center">
                  <div className="mx-auto w-[68px] h-[68px] rounded-full border-2 border-[#d8d1ff] bg-white flex items-center justify-center text-[#4424e9] shadow-sm hover:scale-110 transition">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-4 text-[14px] font-bold">{title}</h3>
                  <p className="text-[11.5px] leading-2 mt-2">{desc}</p>
                  {index !== 4 && (
                    <div className="hidden sm:block absolute top-[38px] -right-4 w-8 border-t-2 border-dashed border-[#8c8abf]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[12px] px-5 sm:px-4 py-6 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            [Building2, "200+", "Institutions Served"],
            [FlaskConical, "1000+", "Labs Established"],
            [ShieldCheck, "5000+", "Equipment Installed"],
            [Globe2, "30+", "Countries Supported"],
            [Award, "98%", "Client Satisfaction"],
          ].map(([Icon, num, label]) => (
            <div key={label} className="flex items-center gap-5 justify-center lg:justify-start">
              <div className="w-[54px] h-[54px] rounded-full bg-white/10 flex items-center justify-center">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">{num}</h3>
                <p className="text-[14px] font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <h2 className="text-center text-18 lg:text-[22px] font-bold mb-7">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["RCII helped us establish a state-of-the-art molecular biology lab that significantly accelerated our research output.", "Prof. Ananya Verma", "Director, School of Life Sciences"],
            ["Their end-to-end support in setting up our advanced materials characterization facility was exceptional.", "Dr. Rajesh Srinivasan", "Dean (Research), IIT Madras"],
            ["RCII's maintenance and training programs have improved equipment uptime and researcher productivity.", "Dr. Meera Iyer", "Head – Research & Development"],
          ].map(([text, name, role]) => (
            <div key={name} className="bg-white border border-[#e2e7fb] rounded-[12px] p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <Quote size={22} color={purple} />
              <p className="text-[14px] leading-5 mt-4">{text}</p>
              <h4 className="font-bold text-[14px] mt-5">{name}</h4>
              <p className="text-[13px] text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-16 pb-10">
        <div className="bg-gradient-to-r from-[#573BFF] via-[#3D5BFF] to-[#0797A8] shadow-[0_12px_28px_rgba(79,70,229,0.18)] rounded-[14px] text-white px-6 sm:px-6 py-6 grid lg:grid-cols-[180px_1fr_auto_auto] gap-6 items-center">
          <img src={risCta} alt="" className="w-full hidden lg:block" />

          <div>
            <h2 className="text-[15px] font-semibold">
              Build World-Class Infrastructure for Breakthrough Research
            </h2>
            <p className="mt-2 text-[13px] text-medium leading-6">
              Let RCII be your partner in creating a robust research ecosystem that drives innovation and impact.
            </p>
          </div>

          <Link className="inline-flex justify-center items-center gap-3 bg-white text-[#4424e9] px-6 py-4 rounded-[6px] text-[12px] font-semibold hover:-translate-y-1 transition">
            Request Infrastructure Support <ArrowRight size={17} />
          </Link>

          <Link className="inline-flex justify-center items-center gap-3 border border-white/60 text-white px-6 py-4 rounded-[6px] text-[12px] font-semibold hover:bg-white hover:text-[#4424e9] transition">
            Talk to an Expert
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06122c] text-white pt-10">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div>
            <img src={logo} alt="Researcher Connect" className="w-[210px] mb-4" />
            <p className="text-[13px] leading-6 text-white/75">
              Empowering researchers, institutions and publishers with ethical solutions and advanced technology for a better research future.
            </p>
          </div>

          {[
            ["For Researchers", "Author Services", "Publication Support", "Research Profiling", "Grants & Funding", "Career Resources"],
            ["For Institutions", "Research Analytics", "RAMS Platform", "Institutional Repository", "Research Consulting", "Research Infrastructure Support"],
            ["For Publishers", "Journal Hosting", "Editorial Systems", "DOI Solutions", "Indexing Services", "Publishing Consultancy"],
            ["Get in Touch", "+91 123 456 7890", "info@rcii.in", "India | Global"],
          ].map((col) => (
            <div key={col[0]}>
              <h4 className="font-bold mb-4">{col[0]}</h4>
              {col.slice(1).map((item) => (
                <p key={item} className="text-[13px] mb-3 text-white/75 hover:text-white cursor-pointer transition">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[13px] text-white/70">
          © 2024 Researcher Connect Innovation and Impact Private Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}