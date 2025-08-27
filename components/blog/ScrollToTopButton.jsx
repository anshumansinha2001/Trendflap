"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleBtn = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 px-4 py-3 text-2xl opacity-80 hover:opacity-100 cursor-pointer rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition ${
        visible ? "block" : "hidden"
      }`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
