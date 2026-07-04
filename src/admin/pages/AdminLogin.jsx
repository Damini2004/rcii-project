import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin/blogs" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const result = await login(email, password);
    setSubmitting(false);
    if (result.success) {
      navigate("/admin/blogs");
    } else {
      setError(result.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f6fb] px-4 text-[#071044]">
      <div className="w-full max-w-[400px] rounded-[14px] border border-[#e8ebf7] bg-white p-8 shadow-[0_18px_50px_rgba(30,40,90,0.1)]">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#563BFF] to-[#02AFC7] text-[15px] font-bold text-white">
            RC
          </div>
          <h1 className="text-[20px] font-bold">RCII Admin Login</h1>
          <p className="mt-1 text-[12px] font-semibold text-[#7a839e]">
            Sign in to manage blog content
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-[8px] border border-red-200 bg-red-50 px-4 py-2.5 text-[12px] font-semibold text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-[12px] font-bold text-[#303b5d]">Email</label>
            <div className="flex h-[44px] items-center rounded-[6px] border border-[#dce1f1] bg-white px-3">
              <Mail size={16} className="mr-2 text-[#8a92aa]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rcii.com"
                className="w-full bg-transparent text-[13px] font-semibold outline-none placeholder:text-[#8a92aa]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[12px] font-bold text-[#303b5d]">Password</label>
            <div className="flex h-[44px] items-center rounded-[6px] border border-[#dce1f1] bg-white px-3">
              <Lock size={16} className="mr-2 text-[#8a92aa]" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-[13px] font-semibold outline-none placeholder:text-[#8a92aa]"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={16} className="text-[#8a92aa]" />
                ) : (
                  <Eye size={16} className="text-[#8a92aa]" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || loading}
            className="mt-2 h-[46px] w-full rounded-[6px] bg-[#321cff] text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#230fbf] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;
