import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const Kontak = () => {
  const { isDark } = useTheme();
  const kontakRef = useRef(null);

  return (
    <section id="kontak" ref={kontakRef} className="py-16 px-4 md:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{
            color: isDark ? "#ffffff" : "#1f2937",
          }}
        >
          Kontak
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{
            color: isDark ? "#d1d5db" : "#4b5563",
          }}
        >
          Mari terhubung dengan saya.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        action="https://formsubmit.co/wirak009@gmail.com"
        method="POST"
        className="max-w-2xl mx-auto p-8 rounded-lg shadow-md space-y-6 bg-white dark:bg-zinc-800"
        style={{
          backgroundColor: isDark ? "oklch(27.4% 0.006 286.033)" : "#f3f4f6",
          boxShadow: isDark
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          >
            Nama
          </label>
          <input
            type="text"
            name="name"
            placeholder="Masukkan nama Anda"
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                   bg-gray-100 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 
                   text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1 mt-1"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="nama@email.com"
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
          bg-gray-100 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 
          text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1 mt-1"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          >
            Pesan
          </label>
          <textarea
            rows="5"
            name="message"
            placeholder="Tulis pesan Anda di sini..."
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                   bg-gray-100 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 
                   text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors"
        >
          Kirim Pesan
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Kontak;
