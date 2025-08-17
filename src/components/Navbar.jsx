import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Untuk animasi lebih smooth

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar py-4 md:py-7 flex items-center justify-between px-4 md:px-2 bg-transparent relative">
      <div className="logo">
        <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white p-1">
          Portofolio
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black dark:text-white focus:outline-none z-50"
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
            className="text-base lg:text-lg font-medium text-black hover:text-purple-400 dark:text-white dark:hover:text-purple-400 transition"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="text-base lg:text-lg font-medium text-black hover:text-purple-400 dark:text-white dark:hover:text-purple-400 transition"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="text-base lg:text-lg font-medium text-black hover:text-purple-400 dark:text-white dark:hover:text-purple-400 transition"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="text-base lg:text-lg font-medium text-black hover:text-purple-400 dark:text-white dark:hover:text-purple-400 transition"
          >
            Kontak
          </a>
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
            className="md:hidden fixed top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-40 p-4 w-48"
          >
            <ul className="flex flex-col gap-3">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#beranda"
                  className="text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
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
                  className="text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
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
                  className="text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
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
                  className="text-base font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
                  onClick={toggleMenu}
                >
                  Kontak
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
