import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CalendarDays,
  Headphones,
  FileText,
  ArrowRight,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Link as LinkIcon,
  ChevronDown,
  Quote,
  Icon,
} from "lucide-react";

import templeImg from "../assets/contact-research-support-team.webp";
import cityImg from "../assets/research-consultation-contact-form.webp";
import bannerBg from "../assets/research-consulting-contact-banner.webp";
import bgImg from "../assets/researcher-connect-office-location.webp";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    regarding: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.agree) {
      alert("Please fill required fields and accept Privacy Policy.");
      return;
    }

    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      org: "",
      regarding: "",
      message: "",
      agree: false,
    });
  };

  return (
    <main className="min-h-screen bg-[#fbfcff] pt-[70px] text-[#080f3d]">
      <section className="mx-auto max-w-[1420px] px-4 py-8 sm:px-6 lg:px-14">
        {/* TOP */}
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
  {/* LEFT */}
  <div className="pt-1">
      <div className="flex items-center gap-3 text-[14px] font-semibold sm:mb-8 mb-5">
     <Link
       to="/"
       className="text-[#6366F1] hover:text-[#4F46E5] transition"
     >
       Home
     </Link>
   
     <span className="text-gray-400">›</span>
   
     <span className="text-gray-500">
       Contact Us
     </span>
   </div>

    <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.05] tracking-[-1px] text-[#071044]">
      Contact Us
    </h1>

    <h2 className="mt-4 text-[#665fe8] text-[20px] font-bold">
      We’re Here to Help You Make an Impact.
    </h2>

    <div className="mt-4 h-[3px] w-[58px] rounded-full bg-[#13c7d5]" />

    <p className="mt-5 max-w-[440px] text-[15px] font-semibold leading-[1.9] text-[#202b56]">
      Have a question, need assistance, or want to explore how we can
      support your research, publishing, or innovation goals? Our team is
      ready to connect with you.
    </p>

    <div className="mt-7 space-y-7">
      <ContactInfo
        icon={Mail}
        bg="#f1edff"
        color="#4d29ff"
        title="Email Us"
        lines={["info@researcherconnect.com"]}
      />

      <ContactInfo
        icon={Phone}
        bg="#eaf8ef"
        color="#25a85c"
        title="Call Us"
        lines={["+91 9890917528 | 9960266198 | 7887755544", "Mon-Sat, 10.00-18.00. Sunday CLOSED"]}
      />

      <ContactInfo
        icon={MapPin}
        bg="#fff0e7"
        color="#ff6b19"
        title="Visit Us"
        lines={[
          "202, Planet Apartment, Jaywant Nagar,",
          "Omkar Nagar, Nagpur, Maharashtra 440027",
        ]}
         
      />
    </div>
  </div>

  {/* FORM */}
  <form
    onSubmit={handleSubmit}
    className="rounded-[12px] border border-[#e7e9f5] bg-white px-5 py-7 sm:px-8 sm:py-8 shadow-[0_14px_40px_rgba(24,34,82,0.10)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(24,34,82,0.14)]"
  >
    <h3 className="text-[24px] font-bold text-[#071044]">
      Send Us a Message
    </h3>

    <p className="mt-4 text-[13px] font-semibold text-[#26305a]">
      Fill out the form below and we’ll get back to you as soon as possible.
    </p>

    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <Input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
    </div>

    <Input
      className="mt-3"
      placeholder="Organization / Institution"
      value={form.org}
      onChange={(e) => setForm({ ...form, org: e.target.value })}
    />

    <div className="relative mt-3">
      <select
        value={form.regarding}
        onChange={(e) => setForm({ ...form, regarding: e.target.value })}
        className="h-[50px] w-full appearance-none rounded-[6px] border border-[#d8deec] bg-white px-4 text-[13px] font-semibold text-[#737b97] outline-none transition-all duration-300 focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10"
      >
        <option value="">I am contacting regarding...</option>
        <option>Research Support</option>
        <option>Publication Support</option>
        <option>Patent Assistance</option>
        <option>Partnership</option>
      </select>

      <ChevronDown
        size={20}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#4d29ff]"
      />
    </div>

    <textarea
      placeholder="Your Message"
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      className="mt-3 h-[125px] w-full resize-none rounded-[6px] border border-[#d8deec] px-4 py-4 text-[13px] font-semibold text-[#1d2545] outline-none transition-all duration-300 placeholder:text-[#7a839e] focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10"
    />

    <label className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-[#38425f]">
      <input
        type="checkbox"
        checked={form.agree}
        onChange={(e) => setForm({ ...form, agree: e.target.checked })}
        className="h-[14px] w-[14px] accent-[#563BFF]"
      />
      I agree to the{" "}
      <span className="font-semibold text-[#4d29ff] underline">
        Privacy Policy
      </span>
    </label>

    <button
      type="submit"
      className="group mt-4 flex h-[50px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#4215f5] text-[15px] font-bold text-white shadow-[0_12px_25px_rgba(63,22,245,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f0fd1] hover:shadow-[0_18px_34px_rgba(63,22,245,0.35)]"
    >
      <Send
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
      Send Message
    </button>
  </form>
</div>

        {/* OTHER WAYS */}
    <SectionTitle title="Other Ways to Connect" />

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
  <ConnectCard
    icon={MessageCircle}
    bg="#eaf8ef"
    color="#25a85c"
    title="Live Chat"
    text="Chat with our experts in real-time for quick answers to your queries."
    action="Start Chat"
  />

  <ConnectCard
    icon={CalendarDays}
    bg="#f1edff"
    color="#4d29ff"
    title="Schedule a Meeting"
    text="Book a consultation with our team to discuss your requirements."
    action="Schedule Now"
  />

  <ConnectCard
    icon={Headphones}
    bg="#fff0e7"
    color="#ff7a22"
    title="Support"
    text="For existing clients, reach out to our support team."
    action="Get Support"
  />

  <ConnectCard
    icon={FileText}
    bg="#eaf4ff"
    color="#0f83d8"
    title="Request a Proposal"
    text="Tell us about your project and we’ll send you a customized proposal."
    action="Request Now"
  />
</div>

        {/* BOTTOM GRID */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.08fr_.95fr_.82fr]">
  {/* OFFICES */}
  <Box>
    <TitleLine title="Our Offices" />

    <OfficeCard
      img={templeImg}
      title="Nagpur Office"
      lines={[
         "202, Planet Apartment, Jaywant Nagar,",
          "Omkar Nagar, Nagpur, Maharashtra 440027",
      ]}
    />

    <div className="my-7 h-px w-full bg-[#e5e8f4]" />

    <OfficeCard
      img={cityImg}
      title="Pune Office"
      lines={["Pune: 702, Westport, Baner"]}
    />
  </Box>

  {/* FAQ */}
  <Box>
    <TitleLine title="Frequently Asked Questions" center />

    {[
      "What services does RCII offer?",
      "Who can benefit from RCI’s services?",
      "How can I get started with RCI?",
      "Do you offer customized solutions?",
      "Where can I find your terms of service?",
    ].map((q, i) => (
      <details
        key={i}
        className="group mb-3 rounded-[8px] border border-[#e6e9f4] bg-white px-4 py-[15px] shadow-[0_4px_14px_rgba(30,40,90,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#d6d9ff]"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13px] font-bold text-[#101944]">
          {q}
          <ChevronDown
            size={17}
            strokeWidth={2.5}
            className="shrink-0 text-[#3f16f5] transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <p className="mt-3 text-[12px] font-semibold leading-[1.7] text-[#5a647d]">
          Our team provides complete research, publishing, innovation and
          technology support based on your needs.
        </p>
      </details>
    ))}

    {/* <button className="group mt-5 inline-flex items-center gap-3 text-[13px] font-bold text-[#321cff] transition-all duration-300 hover:gap-4">
      View All FAQs
      <ArrowRight
        size={15}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button> */}
  </Box>

  {/* FOLLOW */}
  <Box>
    <TitleLine title="Follow Us" />

    <p className="mt-4 text-[12.5px] font-bold leading-[1.85] text-[#354060]">
      Stay connected with us for the latest updates, insights, and resources.
    </p>

    <div className="mt-5 flex flex-wrap gap-4">
      <Social icon={Linkedin} bg="#0a66c2" />
      <Social icon={Twitter} bg="#1da1f2" />
      <Social icon={Facebook} bg="#1877f2" />
      <Social icon={Youtube} bg="#ff0000" />
      <Social icon={LinkIcon} bg="#ffffff" color="#563BFF" border />
    </div>

    <div className="mt-5 rounded-[10px] bg-[#eefafa] p-5 sm:p-6">
      {/* <Quote size={40} className="mb-2 text-[#83dce9]" fill="#83dce9" /> */}

      <p className="text-[12.5px] font-bold leading-[1.9] text-[#273455]">
        RCI has been a valuable partner in amplifying the reach and impact of
        our research. Their team is responsive, knowledgeable, and truly
        invested in our success.
      </p>

      <div className="mt-3 flex items-center gap-3">
        {/* <img
          src={profileImg}
          alt="Dr. Arvind Nair"
          className="h-[46px] w-[46px] rounded-full object-cover"
        /> */}

        <div>
          <h4 className="text-[13px] font-bold text-[#101944]">
            Vinit Khetani
          </h4>
          <p className="text-[11.5px] font-bold leading-[1.55] text-[#56617d]">
            Chief Technology Officer
            <br />
            RCI
          </p>
        </div>
      </div>
    </div>
  </Box>
</div>

        {/* CTA */}
    <section
  className="relative mt-8 overflow-hidden rounded-[16px]"
  style={{
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  

  <div className="relative flex min-h-[130px] flex-col gap-6 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
    
    {/* LEFT CONTENT */}
    <div className="flex items-center gap-5">
      <img
        src={bgImg}
        alt=""
        className="w-[90px] shrink-0 sm:w-[110px]"
      />

      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.3px] text-white sm:text-[30px]">
          Let’s Start a Conversation
        </h2>

        <p className="mt-2 max-w-[480px] text-[14px] font-semibold leading-[1.8] text-white/90">
          Whether you have a question or want to explore a partnership,
          we’d love to hear from you.
        </p>
      </div>
    </div>

    {/* BUTTON */}
    {/* <button
      className="
      mr-32
      group
      h-[50px]
      min-w-[200px]
      rounded-[8px]
      bg-white
      px-5
      text-[14px]
      font-bold
      text-[#2f19ff]
      shadow-[0_12px_30px_rgba(255,255,255,0.15)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_18px_35px_rgba(255,255,255,0.25)]
    "
    >
      <span className="flex items-center justify-center gap-3">
        Get in Touch Today
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </button> */}
  </div>
</section>
      </section>
    </main>
  );
}

/* Components */

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-[50px] w-full rounded-[6px] border border-[#dbe0ee] px-4 text-[12px] font-semibold text-[#1d2545] outline-none transition placeholder:text-[#77809a] focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10 ${className}`}
    />
  );
}

const ContactInfo = ({ icon: Icon, bg, color, title, lines }) => {
  return (
    <div className="group flex items-start gap-6">
      <div
        className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
        style={{ backgroundColor: bg }}
      >
        <Icon
          size={29}
          strokeWidth={2.2}
          style={{ color }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="pt-1">
        <h4 className="text-[15px] font-bold text-[#071044]">
          {title}
        </h4>

        {lines.map((line, index) => (
          <p
            key={index}
            className={`text-[14px] font-semibold leading-[1.65] ${
              index === 0 ? "text-[#4333d4]" : "text-[#737b97]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

function SectionTitle({ title }) {
  return (
    <div className="my-8 text-center">
      <h2 className="text-[20px] sm:text-[24px] font-bold">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#13c7d5]" />
    </div>
  );
}

const ConnectCard = ({ icon: Icon, bg, color, title, text, action }) => {
  return (
    <div className="group relative h-full min-h-[150px] rounded-[12px] border border-[#e8ebf7] bg-white p-6 shadow-[0_10px_30px_rgba(28,38,90,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(28,38,90,0.14)]">
      {/* <span className="absolute right-8 top-6 text-[18px] font-bold text-[#dcdff0] transition-all duration-300 group-hover:text-[#563BFF]">
        ↯
      </span> */}

      <div className="flex h-full flex-col">
        <div className="flex items-start gap-4">
          <div
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full transition-all duration-300 "
            style={{ backgroundColor: bg }}
          >
            <Icon
              size={30}
              strokeWidth={2.2}
              style={{ color }}
              className="transition-transform duration-300  "
            />
          </div>

          <div className="flex-1">
            <h3 className="text-[16px] font-bold leading-tight text-[#071044]">
              {title}
            </h3>

            <p className="mt-3 text-[12px] font-bold leading-[1.9] text-[#39435f]">
              {text}
            </p>
          </div>
        </div>

        {/* Always Bottom */}
        {/* <button
          type="button"
          className="mt-auto pt-5 ml-16 inline-flex items-center gap-3 text-[13px] font-bold text-[#321cff] transition-all duration-300 hover:gap-4 hover:text-[#230fbf]"
        >
          {action}
          <ArrowRight
            size={16}
            strokeWidth={2.4}
            className="transition-transform duration-300 hover:translate-x-1"
          />
        </button> */}
      </div>
    </div>
  );
};

function Box({ children }) {
  return (
    <div className="rounded-[12px] border border-[#e8eaf7] bg-white p-5 sm:p-6 shadow-[0_10px_32px_rgba(30,40,90,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(30,40,90,0.11)]">
      {children}
    </div>
  );
}

function TitleLine({ title, center = false }) {
  return (
    <div className={center ? "mb-6 text-center" : "mb-6"}>
      <h3 className="text-[20px] font-bold leading-tight text-[#071044]">
        {title}
      </h3>
      <div
        className={`mt-3 h-[3px] w-[40px] rounded-full bg-[#3f16f5] ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

function OfficeCard({ img, title, lines }) {
  return (
    <div className="group flex flex-col gap-5 sm:flex-row">
      <img
        src={img}
        alt={title}
        className="h-[140px] w-full rounded-[7px] object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.03] sm:h-[145px] sm:w-[170px]"
      />

      <div className="pt-1">
        <h4 className="text-[15px] font-bold text-[#071044]">
          {title}
        </h4>

        <div className="mt-3">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-[12.5px] font-semibold leading-[1.75] text-[#303b5d]"
            >
              {line}
            </p>
          ))}
        </div>

        {/* <button className="group/btn mt-7 inline-flex items-center gap-3 text-[12.5px] font-bold text-[#321cff] transition-all duration-300 hover:gap-4">
          View on Map
          <MapPin
            size={15}
            strokeWidth={2.4}
            className="transition-transform duration-300 group-hover/btn:-translate-y-1"
          />
        </button> */}
      </div>
    </div>
  );
}

function Social({ icon: Icon, bg, color = "#ffffff", border = false }) {
  return (
    <a
      href="#"
      className={`flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
        border ? "border-2 border-[#6b4dff]" : ""
      }`}
      style={{ backgroundColor: bg }}
    >
      <Icon size={19} strokeWidth={2.5} style={{ color }} />
    </a>
  );
}