import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/rc.png"; // use your RC logo image

const navItems = [
  // { label: "Home", path: "/" },

  {
    label: "Researchers",
    path: "/researchers",
    dropdown: [
      // { label: "Researchers", path: "/researchers" },
      { label: "Author Services", path: "/author-services" },
      { label: "Publication Support", path: "/publication-support" },
      { label: "Ip & Innovation Support", path: "/ip-innovation-support" },
      { label: "Research Resources & Templates", path: "/reserach-resources-templates" },

      { label: "Research Profiling & Visibility", path: "/research-profiling-visibility" },
    
      { label: "Grant & Funding Support", path: "/grant-funding-support" },
      { label: "Career & Growth Resources", path: "/career-growth-resources" },
    ],
  },

  {
    label: "Institutions",
    path: "/institutions",
    dropdown: [
      { label: "RAMS Platform", path: "/rams-platform" },
      { label: "Research Analytics", path: "/research-analytics" },
      { label: "Ranking Support", path: "/ranking-support" },
      { label: "Institutional Repository", path: "/institutional-repository" },
      { label: "Research Policy", path: "/research-policy" },
      { label: "Consulting", path: "/research-consulting" },
      { label: "Infrastructure Support", path: "/research-infrastructure-support" },
    ],
  },

  {
    label: "Publishers",
    path: "/publishers",
    dropdown: [
      { label: "Journal Hosting", path: "/journal-hosting" },
      { label: "Editorial Systems", path: "/editorial-systems" },
      { label: "DOI Solutions", path: "/doi-solutions" },
      { label: "Indexing Services", path: "/indexing-services" },
      { label: "Publishing Consultancy", path: "/publishing-consultancy" },
    ],
  },

  
 

 {
    label: "Innovation & Ip",
    path: "/inovation",
    dropdown: [
      { label: "RAMS", path: "/rams" },
      { label: "Journal Hosting", path: "/journal-hosting" },
      { label: "DOI Platform", path: "/doi-platform" },
      { label: "Conference System", path: "/conference-system" },
      { label: "Research Profiles", path: "/research-profiles" },
    ],
  },
 {
    label: "Technology",
    path: "/technology",
    dropdown: [
      { label: "RAMS", path: "/rams" },
      { label: "Journal Hosting", path: "/journal-hosting" },
      { label: "DOI Platform", path: "/doi-platform" },
      { label: "Conference System", path: "/conference-system" },
      { label: "Research Profiles", path: "/research-profiles" },
    ],
  },


  {
    label: "Resources",
    path: "/resources",
    dropdown: [
     
      { label: "Our Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-conditions" },
    ],
  },

   { label: "About Us", path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === "/"
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-[#061A33] border-b border-[#0f1738]"
      }`}
    >
      <nav className="w-full px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img
              src={logo}
              alt="Researcher Connect"
              className="h-[48px] w-auto object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <h2
                className={`font-bold text-[10.8px] tracking-tight uppercase ${
                  location.pathname === "/" ? "text-[#111827]" : "text-white"
                }`}
              >
                RESEARCHER CONNECT
              </h2>

              <p
                className={`font-bold text-[8px] uppercase tracking-[0.5px] mt-[2px] ${
                  location.pathname === "/" ? "text-[#111827]" : "text-white"
                }`}
              >
                INNOVATION AND IMPACT
              </p>

              <p
                className={`font-extrabold text-[7px] uppercase tracking-[3.5px] mt-[4px] ${
                  location.pathname === "/" ? "text-[#111827]" : "text-white"
                }`}
              >
                PRIVATE LIMITED
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`relative flex items-center gap-1 text-[13px] font-bold transition-colors duration-300 group-hover:text-[#4F46E5] ${
                    location.pathname === "/" ? "text-[#07073F]" : "text-white"
                  }`}
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 stroke-[3] transition-transform duration-300 group-hover:rotate-180" />
                  )}

                  <span className="absolute -bottom-[6px] left-0 h-[3px] w-0 rounded-full bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
                </Link>

                {item.dropdown && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-[38px] left-0 w-[230px] bg-white rounded-xl shadow-xl border border-gray-100 py-3 transition-all duration-300 z-50">
                   {item.dropdown.map((sub) => (
  <Link
    key={sub.label}
    to={sub.path}
    className="block px-5 py-2.5 text-[13px] font-semibold text-[#07073F] hover:text-[#4F46E5] hover:bg-indigo-50 transition"
  >
    {sub.label}
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
            className={`lg:hidden ${
              location.pathname === "/" ? "text-[#07073F]" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
  {/* Mobile Sidebar Overlay */}
<div
  className={`fixed inset-0 z-[999] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
    mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setMobileOpen(false)}
/>

{/* Mobile Sidebar */}
<aside
  className={`fixed top-0 right-0 z-[1000] h-screen w-[82%] max-w-[330px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
    <span className="text-[18px] font-extrabold text-[#07073F]">Menu</span>

    <button
      onClick={() => setMobileOpen(false)}
      className="w-9 h-9 rounded-full bg-[#F1EDFF] text-[#4F46E5] flex items-center justify-center"
    >
      ✕
    </button>
  </div>

  <div className="h-[calc(100vh-73px)] overflow-y-auto py-4">
    {navItems.map((item) => (
      <div key={item.label}>
        <Link
          to={item.path}
          onClick={() => {
            if (!item.dropdown) setMobileOpen(false);
          }}
          className="flex items-center justify-between px-5 py-3 text-sm font-bold text-[#07073F] hover:bg-[#F8F7FF]"
        >
          {item.label}
          {item.dropdown && <ChevronDown size={16} />}
        </Link>

        {item.dropdown && (
          <div className="pl-5 border-l border-[#EEF0FF] ml-5">
            {item.dropdown.map((sub) => (
              <Link
                key={sub.label}
                to={sub.path}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-xs font-semibold text-gray-600 hover:text-[#4F46E5]"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}

    <Link
      to="/contact"
      onClick={() => setMobileOpen(false)}
      className="block mx-5 mt-5 text-center bg-[#4F46E5] text-white font-bold py-3 rounded-lg shadow-md"
    >
      Get in Touch
    </Link>
  </div>
</aside>
      </nav>
    </header>
  );
}
