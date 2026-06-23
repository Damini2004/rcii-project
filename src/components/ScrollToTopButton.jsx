import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[9999]
      flex items-center justify-center font-extrabold
      w-12 h-12 rounded-full
      bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600
      text-white shadow-[0_10px_30px_rgba(14,165,233,0.35)]
      transition-all duration-500 ease-out
      hover:scale-110 hover:shadow-[0_15px_40px_rgba(14,165,233,0.55)]
      active:scale-95
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      animate-float`}
    >
      <ArrowUp size={22} className="animate-bounce" />
    </button>
  );
}