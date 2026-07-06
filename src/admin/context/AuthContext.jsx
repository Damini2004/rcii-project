import React, { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import api from "../../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("rcii_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken(true);
          localStorage.setItem("rcii_auth_token", token);
          const res = await api.get("/auth/me");
          const profile = res.data.data;
          localStorage.setItem("rcii_user", JSON.stringify(profile));
          setUser(profile);
        } catch (error) {
          await signOut(auth);
          localStorage.removeItem("rcii_auth_token");
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
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const token = await credential.user.getIdToken(true);
      localStorage.setItem("rcii_auth_token", token);
      const res = await api.get("/auth/me");
      const profile = res.data.data;
      localStorage.setItem("rcii_user", JSON.stringify(profile));
      setUser(profile);
      return { success: true, user: profile };
    } catch (error) {
      return {
        success: false,
        message:
          error.message || error.response?.data?.message || "Login failed. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } finally {
      localStorage.removeItem("rcii_auth_token");
      localStorage.removeItem("rcii_user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
