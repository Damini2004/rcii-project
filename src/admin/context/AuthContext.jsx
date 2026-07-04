import React, { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const stored = localStorage.getItem("rcii_admin_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("rcii_admin_token");
    if (token && !admin) {
      authAPI
        .me()
        .then((res) => setAdmin(res.data.data))
        .catch(() => {
          localStorage.removeItem("rcii_admin_token");
          localStorage.removeItem("rcii_admin_user");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authAPI.login(email, password);
      const data = res.data.data;
      localStorage.setItem("rcii_admin_token", data.token);
      const user = { _id: data._id, name: data.name, email: data.email, role: data.role };
      localStorage.setItem("rcii_admin_user", JSON.stringify(user));
      setAdmin(user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("rcii_admin_token");
    localStorage.removeItem("rcii_admin_user");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading, isAuthenticated: !!admin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
