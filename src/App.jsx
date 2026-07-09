import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function App() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollToTopButton />

      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <AppRoutes />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;