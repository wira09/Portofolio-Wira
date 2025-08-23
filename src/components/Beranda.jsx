/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import img from "/assets/Wira.jpg";
import TextType from './TextType';

function Beranda() {
  const { isDark } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const berandaRef = useRef(null);

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-8 py-12"
        id="beranda"
        ref={berandaRef}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <TextType
            text={["Hi, Nama Saya Mohamad Zaelani Wira Kusuma"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="mb-4"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
            highlightWords={["Mohamad Zaelani Wira Kusuma"]}
          />

          <motion.h2
            className="text-xl md:text-2xl mb-6 transition-colors duration-300"
            style={{
              color: isDark ? "#a78bfa" : "#7c3aed",
            }}
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 transition-colors duration-300"
            style={{
              color: isDark ? "#d1d5db" : "#4b5563",
            }}
            variants={itemVariants}
          >
            Saya adalah seorang mahasiswa di ASM Ariyanti yang memiliki passion
            kuat di bidang pengembangan web. Dengan kemampuan sebagai Full Stack
            Developer, saya menguasai teknologi front-end dan back-end untuk
            membangun aplikasi web yang komprehensif dan berkualitas.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/public/assets/CV WIRA.pdf"
              target="_blank"
              className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 rounded-lg shadow-md transition-colors"
            >
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#kontak"
              className="px-6 py-3 border border-purple-600 hover:bg-purple-50 rounded-lg shadow-md transition-colors"
              style={{
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                color: isDark ? "#a78bfa" : "#7c3aed",
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <motion.img
            src={img}
            alt="Profile"
            className="w-full max-w-sm rounded-lg shadow-xl transition-all duration-300"
            style={{
              boxShadow: isDark
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
      </div>
    </>
  );
}

export default Beranda;
