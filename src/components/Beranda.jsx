import { motion } from "framer-motion";
import React, { useRef } from "react";

function Beranda() {
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
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Hi, Nama Saya Mohamad Zaelani Wira Kusuma
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
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
              className="px-6 py-3 bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 rounded-lg shadow-md transition-colors"
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
            src="/public/assets/wira.jpg"
            alt="Profile"
            className="w-full max-w-sm rounded-lg shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
      </div>
    </>
  );
}

export default Beranda;
