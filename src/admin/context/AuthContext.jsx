import React, { createContext, useContext, useEffect, useState } from "react";
import { authAPI } from "../../services/api";
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const res = await authAPI.me();
          const profile = res.data;

          if (profile) {
            localStorage.setItem("rcii_user", JSON.stringify(profile));
            setUser(profile);
          } else {
            const fallbackUser = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || "",
            };
            localStorage.setItem("rcii_user", JSON.stringify(fallbackUser));
            setUser(fallbackUser);
          }
        } catch (error) {
          await authAPI.logout();
          localStorage.removeItem("rcii_user");
          setUser(null);
        }
      } else {
        localStorage.removeItem("rcii_auth_token");
        localStorage.removeItem("rcii_user");
        setUser(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await authAPI.login(email, password);
      const profile = res.data;
      if (!profile) {
        throw new Error("Unable to load user profile.");
      }

      localStorage.setItem("rcii_user", JSON.stringify(profile));
      setUser(profile);
      return { success: true, user: profile };
    } catch (error) {
      await authAPI.logout();
      localStorage.removeItem("rcii_user");
      setUser(null);

      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again.",
      };
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authAPI.logout();
    } finally {
      localStorage.removeItem("rcii_auth_token");
      localStorage.removeItem("rcii_user");
      setUser(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
