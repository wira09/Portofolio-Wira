/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Untuk animasi lebih smooth
import { useTheme } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  console.log("Navbar rendered with isDark:", isDark);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    console.log("Theme toggle clicked, current isDark:", isDark);
    toggleTheme();
  };

  return (
    <div className="navbar py-4 md:py-7 flex items-center justify-between px-4 md:px-2 bg-transparent relative">
      <div className="logo">
        <h1
          className="text-2xl md:text-3xl font-bold p-1 transition-colors duration-300"
          style={{
            color: isDark ? "#ffffff" : "#000000",
          }}
        >
          Portofolio
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 transition-colors duration-300"
        style={{
          color: isDark ? "#ffffff" : "#000000",
        }}
        onClick={toggleMenu}
      >
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 },
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.div>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10">
        <li>
          <a
            href="#beranda"
            className="text-base lg:text-lg font-medium hover:text-purple-400 transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="text-base lg:text-lg font-medium hover:text-purple-400 transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="text-base lg:text-lg font-medium hover:text-purple-400 transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="text-base lg:text-lg font-medium hover:text-purple-400 transition-colors duration-300"
            style={{
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            Kontak
          </a>
        </li>
        <li>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            style={{
              backgroundColor: isDark ? "#6b7280" : "#d1d5db",
            }}
          >
            <span
              className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300"
              style={{
                transform: isDark ? "translateX(24px)" : "translateX(4px)",
              }}
            >
              {isDark ? (
                <svg
                  className="h-6 w-6 p-1 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 p-1 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </span>
          </button>
        </li>
      </ul>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed top-16 right-4 rounded-lg shadow-xl z-40 p-4 w-48 transition-colors duration-300"
            style={{
              backgroundColor: isDark ? "#1f2937" : "#ffffff",
            }}
          >
            <ul className="flex flex-col gap-3">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#beranda"
                  className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                  onClick={toggleMenu}
                >
                  Beranda
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#tentang"
                  className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                  onClick={toggleMenu}
                >
                  Tentang
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#proyek"
                  className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                  onClick={toggleMenu}
                >
                  Proyek
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#kontak"
                  className="text-base font-medium hover:text-blue-500 transition-colors duration-300"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                  onClick={toggleMenu}
                >
                  Kontak
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-2 border-t"
                style={{
                  borderColor: isDark ? "#374151" : "#e5e7eb",
                }}
              >
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center gap-2 text-base font-medium hover:text-purple-500 transition-colors duration-300"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                >
                  {isDark ? (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
