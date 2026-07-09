import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../../assets/researcher-connect-logo.webp";

const navItems = [
  { label: "Blogs", icon: FileText, to: "/admin/blogs" },
];

function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fb] text-[#071044]">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-[#e8ebf7] bg-white px-4 py-3 lg:hidden">
        <span className="text-[16px] font-bold text-[#071044]">RCII Admin</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-[240px] transform bg-[#07113f] text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
           {/* Logo */}
                    <Link to="/" className="flex items-center gap-1 px-4 py-4">
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
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

          <nav className="mt-6 space-y-1 px-3">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
              Menu
            </p>
            <Link
              to="/admin/blogs"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-[13px] font-semibold transition ${
                location.pathname.startsWith("/admin/blogs")
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutDashboard size={17} />
              Blog Dashboard
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className="hidden"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full border-t border-white/10 p-4">
            <div className="mb-3 px-1">
              <p className="text-[12px] font-bold">{user?.name || "User"}</p>
              <p className="text-[11px] font-semibold text-white/50">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-[8px] px-3 py-2 text-[12px] font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="min-h-screen flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
