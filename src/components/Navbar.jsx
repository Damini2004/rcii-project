import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/researcher-connect-logo.webp"; // use your RC logo image

const navItems = [
  {
    label: "Researchers",
    path: "/researchers",
    dropdown: [
      { label: "Author Services", path: "/author-services" },
      { label: "Publication Support", path: "/publication-support" },
      { label: "Ip & Innovation Support", path: "/ip-innovation-support" },
      {
        label: "Research Resources & Templates",
        path: "/reserach-resources-templates",
      },
      {
        label: "Research Profiling & Visibility",
        path: "/research-profiling-visibility",
      },
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
      { label: "Consulting", path: "/research-consulting" },
      {
        label: "Infrastructure Support",
        path: "/research-infrastructure-support",
      },
      { label: "Funding & Grant Support", path: "/funding-grants-support" },
      { label: "Research Data Management", path: "/research-data-Management" },
    ],
  },
  {
    label: "Publishers",
    path: "/publishers",
    dropdown: [
      { label: "Editorial Support", path: "/editorial-support" },
      { label: "Indexing Support", path: "/indexing-support" },
      { label: "Technological Solutions", path: "/technological-solutions" },
      { label: "Marketing Strategy", path: "/marketing-strategic" },
      { label: "Journal Solution", path: "/journal-solution" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
   
  },
  {
   
       label: "Blogs", path: "/blogs" 
     
    
  },

  {
    label: "Innovation & Ip",
    path: "/inovation",
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
                className={`font-bold text-[7px] uppercase tracking-[3.5px] mt-[4px] ${
                  location.pathname === "/" ? "text-[#111827]" : "text-white"
                }`}
              >
                PRIVATE LIMITED
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
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
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[999] bg-black/50 backdrop-blur-[3px] transition-all duration-300 lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 right-0 z-[1000] h-screen w-[85%] max-w-[340px] bg-white shadow-2xl 
  transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden
  ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-indigo-50 to-white">
            <span className="text-[17px] font-bold text-[#07073F] tracking-wide">
              Menu
            </span>

            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full bg-[#EEF0FF] text-[#4F46E5] flex items-center justify-center 
      hover:bg-[#4F46E5] hover:text-white transition-all duration-300 hover:rotate-90"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="h-[calc(100vh-70px)] overflow-y-auto py-4 px-2">
            {navItems.map((item) => (
              <div key={item.label} className="mb-1">
                {/* Main Item */}
                <Link
                  to={item.path}
                  onClick={() => {
                    if (!item.dropdown) setMobileOpen(false);
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-lg
          text-[13px] font-semibold text-[#07073F]
          hover:bg-[#F3F4FF] hover:text-[#4F46E5]
          transition-all duration-300 active:scale-[0.98]"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="ml-3 pl-3 border-l border-[#E8EAF6] space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-[12px] font-medium text-gray-600
                rounded-md transition-all duration-300
                hover:text-[#4F46E5] hover:bg-[#F6F7FF] hover:pl-4"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="px-3 mt-6">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-gradient-to-r from-[#4F46E5] to-[#4338CA]
        text-white font-bold py-3 rounded-xl shadow-md
        hover:shadow-xl hover:scale-[1.02]
        transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
}
