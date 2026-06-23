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
      { name: "Research Profiles", path: "/research-profile" },
      { name: "Grants & Funding", path: "/funding-grants-support" },
      { name: "Career Resources", path: "/career-resources" },
      { name: "Research Resources", path: "/research-resources" },
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
    <footer className="bg-[#071B33] text-white">
      <div className="mx-auto max-w-[1420px] sm:px-8 px-4 py-3 pt-4">
        <div className="grid gap-6 lg:grid-cols-6">
          <div>
            <img src={logo} alt="Researcher Connect" className="h-[54px] w-auto" />

            <p className="mt-2 max-w-[230px] text-[11px] font-medium leading-[1.45] text-white/80">
              Empowering researchers, institutions and publishers with ethical
              solutions and advanced technology for a better research future.
            </p>

            <div className="mt-3 flex gap-2">
              {[Linkedin, X, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071B33]"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

        {columns.map((col) => (
  <div key={col.title}>
    <h3 className="mb-2 text-[13px] font-bold text-white">
      {col.title}
    </h3>

    <ul className="">
      {col.links.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="text-[11px] font-medium text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-[#4251d1] hover:pl-1"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}

          <div>
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

        {/* <div className="mt-3 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-2 md:flex-row">
          <p className="text-[10px] text-white/70">
            © 2024 Researcher Connect Innovation and Impact Private Limited. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1 text-[10px] text-white/70">
            Made with <Heart size={11} fill="#ef4444" className="text-red-500" /> for the Global Research Community
          </p>
        </div> */}
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