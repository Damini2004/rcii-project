import React from "react";
import {
  Search,
  FileText,
  CalendarDays,
  PenLine,
  UploadCloud,
  MessageCircle,
  BadgeCheck,
  CheckCircle,
  Building2,
  Globe,
  Handshake,
  Users,
  GraduationCap,
  HeartHandshake,
  FlaskConical,
  Leaf,
  BookOpen,
  Settings,
  IndianRupee,
  FileBadge,
  Smile,
  ArrowRight,
  Award,
} from "lucide-react";

import heroImg from "../../assets/bgpub.png";
import whyImg from "../../assets/bgauth.png";

const GrantFunding = () => {
  const lifecycle = [
    ["Identify", "Discover suitable funding opportunities.", Search],
    ["Assess", "Evaluate eligibility and alignment.", FileText],
    ["Plan", "Develop timeline and documents.", CalendarDays],
    ["Develop", "Prepare compelling proposals.", PenLine],
    ["Submit", "Submit before due dates.", UploadCloud],
    ["Follow-up", "Track progress and respond to queries.", MessageCircle],
    ["Manage", "Post-award support and reporting guidance.", BadgeCheck],
  ];

  const services = [
    ["Funding Opportunity Search", ["Global Funding Database", "Customized Opportunity Matching", "Deadline Alerts", "Funding Trend Analysis"], Search],
    ["Proposal Development", ["Proposal Writing", "Research Plan", "Budget Preparation", "Supporting Documents"], FileText],
    ["Budgeting & Financial Planning", ["Budget Structuring", "Cost Justification", "Resource Planning", "Financial Compliance"], IndianRupee],
    ["Review & Refinement", ["Expert Review", "Feedback & Improvement", "Compliance Check", "Proposal Polishing"], PenLine],
    ["Submission Support", ["Portal Guidance", "Document Formatting", "Submission Verification", "Online Submission"], UploadCloud],
    ["Post-Award Support", ["Award Management", "Reporting Assistance", "Milestone Tracking", "Compliance Support"], Award],
  ];

  const fundingSources = [
    ["Government Grants", Building2],
    ["International Funding Agencies", Globe],
    ["Private Foundations & Trusts", Handshake],
    ["Industry Collaborations", Users],
    ["University Seed Grants", GraduationCap],
    ["CSR & Philanthropic Grants", HeartHandshake],
  ];

  const researchAreas = [
    ["Engineering & Technology", Settings],
    ["Life Sciences & Medicine", HeartHandshake],
    ["Physical & Earth Sciences", FlaskConical],
    ["Social Sciences & Humanities", Users],
    ["Environment & Sustainability", Leaf],
    ["Education & Development", GraduationCap],
    ["Interdisciplinary Research", BookOpen],
  ];

  const whyPoints = [
    "Experienced grant experts with domain knowledge",
    "Access to a wide range of global funding opportunities",
    "High-quality, compliant, and impact-driven proposals",
    "End-to-end support from ideation to award management",
    "Ethical practices with complete transparency",
    "Proven track record of successful funding outcomes",
  ];

  const impact = [
    ["₹250 Cr+", "Funding Secured", IndianRupee],
    ["1,200+", "Proposals Supported", FileBadge],
    ["35+", "Countries Covered", Globe],
    ["85%+", "Client Satisfaction Rate", Smile],
  ];

  return (
    <main className="bg-[#f8f9ff] text-[#10162f] pt-[70px]">
      {/* HERO */}
      <section className="w-full bg-white px-3 sm:px-5 lg:px-8 py-8">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-5 text-[11px] font-semibold text-[#7b74d9]">
              Home <span className="mx-2">›</span> Researchers{" "}
              <span className="mx-2">›</span> Grant & Funding Support
            </div>

            <h1 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] text-[#10162f]">
              Grant & Funding <br />
              <span className="text-[#5138ff]">Support</span>
            </h1>

            <p className="mt-4 text-[14px] sm:text-[15px] font-extrabold text-[#5138ff]">
              Empowering Your Research with the Right Funding
            </p>

            <p className="mt-4 max-w-[520px] text-[13px] sm:text-[14px] font-medium leading-[26px] text-[#30384f]">
              RCI empowers researchers to find, secure, and successfully manage
              research funding through expert guidance and end-to-end support.
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
            alt="Grant Funding Support"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="w-full px-3 sm:px-5 lg:px-8 py-6">
        <Card>
          <SectionTitle title="Our Grant & Funding Support Lifecycle" />

          <div className="mt-8 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
            {lifecycle.map(([title, desc, Icon], index) => (
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

                {index !== lifecycle.length - 1 && (
                  <span className="hidden xl:block absolute left-[82%] top-[30px] h-[1px] w-[45px] bg-[#cfd4ee]" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* SERVICES */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <Card>
          <SectionTitle title="Our Grant & Funding Services" />

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
                      <CheckCircle size={12} className="shrink-0 text-[#5138ff]" />
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

      {/* SOURCES */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <Card>
          <SectionTitle title="Funding Sources We Assist With" />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {fundingSources.map(([title, Icon]) => (
              <SmallBox key={title} title={title} Icon={Icon} />
            ))}
          </div>
        </Card>
      </section>

      {/* RESEARCH AREAS */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <Card>
          <SectionTitle title="Research Areas We Support" />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {researchAreas.map(([title, Icon]) => (
              <SmallBox key={title} title={title} Icon={Icon} />
            ))}
          </div>
        </Card>
      </section>

      {/* WHY */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-6 rounded-[14px] border border-[#eceeff] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] lg:grid-cols-2 lg:px-10">
          <img
            src={whyImg}
            alt="Why researchers choose RCI"
            className="w-full rounded-[12px] object-contain"
          />

          <div>
            <h2 className="text-[18px] font-extrabold text-[#111832]">
              Why Researchers Choose RCI
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

      {/* IMPACT */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-6">
        <div className="mx-auto w-full max-w-[1420px] rounded-[10px] bg-gradient-to-r from-[#563BFF] via-[#2566E8] to-[#009CA6] px-5 py-5 text-white shadow-[0_12px_30px_rgba(37,102,232,0.18)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {impact.map(([num, label, Icon], index) => (
              <div
                key={label}
                className={`group flex items-center justify-center gap-4 px-4 transition-all duration-300 hover:-translate-y-1 ${
                  index !== impact.length - 1 ? "lg:border-r lg:border-white/15" : ""
                }`}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:scale-110">
                  <Icon size={25} strokeWidth={2.2} />
                </div>

                <div>
                  <div className="text-[22px] font-extrabold leading-none text-white">
                    {num}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-white/85">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-3 sm:px-5 lg:px-8 pb-10">
        <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-between gap-5 rounded-[14px] border border-[#eceeff] bg-[#f0edff] px-6 py-6 shadow-[0_8px_30px_rgba(79,70,229,0.06)] md:flex-row lg:px-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#5138ff] text-white">
              <Award size={31} />
            </div>

            <div>
              <h2 className="text-[20px] sm:text-[24px] font-extrabold text-[#111832]">
                Ready to Secure Your Next Grant?
              </h2>
              <p className="mt-2 text-[12px] font-semibold text-[#334155]">
                Our experts are here to guide you at every step of your funding journey.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="rounded-[6px] bg-[#5138ff] px-7 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#402bd8] hover:shadow-lg">
              Talk to an Expert →
            </button>

            <button className="rounded-[6px] border border-[#8b7cff] bg-white px-7 py-3 text-[13px] font-extrabold text-[#5138ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

function Card({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1420px] rounded-[14px] border border-[#eceeff] bg-white px-4 py-7 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgba(79,70,229,0.06)]">
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

function SmallBox({ title, Icon }) {
  return (
    <div className="group rounded-[10px] border border-[#e8ebf7] bg-white px-3 py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c7bfff] hover:shadow-[0_16px_34px_rgba(91,53,255,0.13)]">
      <div className="mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f0edff] text-[#5138ff] transition-all duration-300 group-hover:scale-110">
        <Icon size={22} />
      </div>
      <h3 className="mt-3 text-[11px] font-extrabold leading-[16px] text-[#111832]">
        {title}
      </h3>
    </div>
  );
}

export default GrantFunding;