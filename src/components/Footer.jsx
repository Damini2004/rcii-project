import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, X, Youtube, Facebook, Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "../assets/rc.png";

const columns = [
  {
    title: "For Researchers",
    links: [
      { name: "Author Services", path: "/author-services" },
      { name: "Publication Support", path: "/publication-support" },
      { name: "Ip & Innovation Support", path: "/ip-innovation-support" },
      { name: "Research Resources & Templates", path: "/reserach-resources-templates" },
     { name: "Research Profiling & Visibility", path: "/research-profiling-visibility" },
  { name: "Grant & Funding Support", path: "/grant-funding-support" },
      { name: "Career & Growth Resources", path: "/career-growth-resources" },
    
    ],
  },


  {
    title: "For Institutions",
    links: [
      { name: "RAMS Platform", path: "/rams-platform" },
      { name: "Research Analytics", path: "/research-analytics" },
      { name: "Ranking Support", path: "/ranking-support" },
      { name: "Institutional Repository", path: "/institutional-repository" },
     
      { name: "Consulting", path: "/research-consulting" },
      { name: "Infrastructure Support", path: "/research-infrastructure-support" },
      { name: "Funding & Grant Support", path: "/funding-grants-support" },
      { name: "Research Data Management", path: "/research-data-management" },
    ],
  },

  {
    title: "For Publishers",
    links: [
      { name: "Editorial Support", path: "/editorial-support" },
      { name: "Indexing Support", path: "/indexing-support" },
      { name: "Technological Solutions", path: "/technological-solutions" },
      { name: "Marketing Strategy", path: "/marketing-strategic" },
      { name: "Journal Solutions", path: "/journal-solution" },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/our-team" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
  },
];

export default function Footer() {
  return (
<footer className="bg-[#071B33] text-white w-full">
  <div className="mx-auto max-w-[1420px] px-6 sm:px-6 lg:px-8 py-6">
    
    {/* GRID */}
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      {/* LOGO SECTION */}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
        <img src={logo} alt="Researcher Connect" className="h-[50px] w-auto" />

        <p className="mt-2 text-[11px] font-medium leading-[1.5] text-white/80 max-w-[260px]">
          Empowering researchers, institutions and publishers with ethical
          solutions and advanced technology for a better research future.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {[Linkedin, X, Youtube, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071B33]"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>

      {/* DYNAMIC COLUMNS */}
      {columns.map((col) => (
        <div key={col.title} className="min-w-0">
          <h3 className="mb-2 text-[13px] font-bold text-white">
            {col.title}
          </h3>

          <ul className="space-y-1">
            {col.links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-[11px] font-medium text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-[#4251d1]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* CONTACT */}
      <div className="min-w-0">
        <h3 className="mb-2 text-[13px] font-bold text-white">
          Get in Touch
        </h3>

        <div className="space-y-3">
          <ContactItem icon={Phone} text="+91 123 456 7890" />
          <ContactItem icon={Mail} text="info@rcii.in" />
          <ContactItem icon={MapPin} text="India | Global" />
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}

function ContactItem({ icon: Icon, text }) {
  return (
    <div className="group flex items-center gap-2 text-[11px] font-medium text-white/75 transition-all duration-300 hover:text-white">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 transition-all duration-300 group-hover:bg-white group-hover:text-[#071B33]">
        <Icon size={13} />
      </span>
      {text}
    </div>
  );
}