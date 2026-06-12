import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  X,
  Youtube,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import logo from "../assets/rc.png";

const columns = [
  {
    title: "For Researchers",
    links: [
      "Author Services",
      "Publication Support",
      "Research Profiles",
      "Patent Services",
      "Grants & Funding",
      "Career Support",
    ],
  },
  {
    title: "For Institutions",
    links: [
      "RAMS Platform",
      "Research Analytics",
      "Ranking Support",
      "Institutional Repository",
      "Research Policy",
      "Consulting",
    ],
  },
  {
    title: "For Publishers",
    links: [
      "Journal Hosting",
      "Editorial Systems",
      "DOI Solutions",
      "Indexing Services",
      "Publishing Consultancy",
    ],
  },
  {
    title: "Technology",
    links: [
      "RAMS",
      "Journal Hosting",
      "DOI Platform",
      "Conference System",
      "Research Profiles",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact Us",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#061A33] text-white">
      <div className="max-w-[1320px] mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_repeat(5,1fr)_1.15fr] gap-6">
          {/* Brand */}
          <div className="pr-6 lg:border-r border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Researcher Connect"
                className="h-[52px] w-auto"
              />

              <div className="leading-[1.7]">
                <h2 className="text-[9px] font-extrabold uppercase tracking-wide">
                  Researcher Connect
                </h2>
                <p className="text-[7.5px] font-semibold uppercase">
                  Innovation and Impact
                </p>
                <p className="text-[7px] font-bold uppercase tracking-[1.8px]">
                  Private Limited
                </p>
              </div>
            </div>

            <p className="text-[12px] leading-[1.8] text-white/80 max-w-[230px]">
              Empowering researchers, institutions and publishers with ethical
              solutions and advanced technology for a better research future.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10"
                href="#"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10"
                href="#"
              >
                <X size={18} />
              </a>
              <a
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10"
                href="#"
              >
                <Youtube size={18} />
              </a>
              <a
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10"
                href="#"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:border-r border-white/10 pr-5">
              <h3 className="text-[13px] font-semibold mb-5">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-[12px] text-white/75 hover:text-[#8B5CF6] transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-5">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-white/80 text-[12px]"
              >
                <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center">
                  <Phone size={17} />
                </span>
                +91 123 456 7890
              </a>

              <a
                href="mailto:info@rcilin"
                className="flex items-center gap-3 text-white/80 text-[12px]"
              >
                <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center">
                  <Mail size={17} />
                </span>
                info@rcilin
              </a>

              <div className="flex items-center gap-3 text-white/80 text-[12px]">
                <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center">
                  <MapPin size={17} />
                </span>
                India | Global
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-5 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/75">
            © 2024 Researcher Connect Innovation and Impact Private Limited. All
            Rights Reserved.
          </p>

          <p className="text-[12px] text-white/75 flex items-center gap-1">
            Made with for the Global Research Community
          </p>
        </div>
      </div>
    </footer>
  );
}
