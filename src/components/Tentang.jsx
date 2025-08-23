import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const Tentang = () => {
  const { isDark } = useTheme();
  const tentangRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 mb-10 rounded-xl shadow-xl transition-all duration-300"
      style={{
        backgroundColor: isDark ? "oklch(27.4% 0.006 286.033)" : "#f3f4f6",
        boxShadow: isDark
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      id="tentang"
      ref={tentangRef}
    >
      <div className="text-center mb-6">
        <h2
          className="text-2xl font-bold transition-colors duration-300"
          style={{
            color: isDark ? "#ffffff" : "#1f2937",
          }}
        >
          Tentang Saya
        </h2>
      </div>

      <p
        className="mb-6 text-lg leading-relaxed text-justify transition-colors duration-300"
        style={{
          color: isDark ? "#d1d5db" : "#374151",
        }}
      >
        Saya Mohamad Zaelani Wira Kusuma, seorang Full Stack Web Developer yang
        menggabungkan keahlian teknis dan desain. Fokus saya adalah membangun
        website dan aplikasi yang efisien, responsif, dan user-friendly, dengan
        dukungan desain UI/UX yang mendukung performa produk digital secara
        menyeluruh.
      </p>

      <div className="flex justify-center gap-8 mt-8">
        <div className="text-center">
          <span
            className="text-3xl font-bold transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          >
            20+
          </span>
          <p
            className="transition-colors duration-300"
            style={{
              color: isDark ? "#d1d5db" : "#6b7280",
            }}
          >
            Proyek Selesai
          </p>
        </div>
        <div className="text-center">
          <span
            className="text-3xl font-bold transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          >
            4+
          </span>
          <p
            className="transition-colors duration-300"
            style={{
              color: isDark ? "#d1d5db" : "#6b7280",
            }}
          >
            Tahun Pengalaman
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Tentang;
