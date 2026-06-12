import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/rc.png"; // use your RC logo image

const navItems = [
  { label: "Home", path: "/" },

  {
    label: "Researchers",
    path: "/researchers",
    dropdown: [
      "Author Services",
      "Publication Support",
      "Research Profiles",
      "Patent Services",
      "Grants & Funding",
      "Career Support",
    ],
  },

  {
    label: "Institutions",
    path: "/institutions",
    dropdown: [
      "RAMS Platform",
      "Research Analytics",
      "Ranking Support",
      "Institutional Repository",
      "Research Policy",
      "Consulting",
    ],
  },

  {
    label: "Publishers",
    path: "/publishers",
    dropdown: [
      "Journal Hosting",
      "Editorial Systems",
      "DOI Solutions",
      "Indexing Services",
      "Publishing Consultancy",
    ],
  },

  {
    label: "Technology",
    path: "/technology",
    dropdown: [
      "RAMS",
      "Journal Hosting",
      "DOI Platform",
      "Conference System",
      "Research Profiles",
    ],
  },

  {
    label: "Company",
    path: "/about",
    dropdown: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact Us",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="w-full px-7">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Researcher Connect"
              className="h-[48px] w-auto object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <h2 className="text-[#111827] font-bold text-[10.8px] tracking-tight uppercase">
                RESEARCHER CONNECT
              </h2>

              <p className="text-[#111827] font-bold text-[8px] uppercase tracking-[0.5px] mt-[2px]">
                INNOVATION AND IMPACT
              </p>

              <p className="text-[#111827] font-extrabold text-[7px] uppercase tracking-[3.5px] mt-[4px]">
                PRIVATE LIMITED
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className="relative flex items-center gap-1 text-[13px] font-extrabold text-[#07073F] transition-colors duration-300 group-hover:text-[#4F46E5]"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 stroke-[3] transition-transform duration-300 group-hover:rotate-180" />
                  )}

                  <span className="absolute -bottom-[18px] left-0 h-[3px] w-0 rounded-full bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
                </Link>

                {item.dropdown && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[38px] left-0 w-[230px] bg-white rounded-xl shadow-xl border border-gray-100 py-3 transition-all duration-300 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        to={item.path}
                        className="block px-5 py-2.5 text-[13px] font-semibold text-[#07073F] hover:text-[#4F46E5] hover:bg-indigo-50 transition"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-[#4F46E5] text-white text-[13px] font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-[#4338CA] transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#07073F]"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-[#07073F]"
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-3 text-center bg-[#4F46E5] text-white font-bold py-3 rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
