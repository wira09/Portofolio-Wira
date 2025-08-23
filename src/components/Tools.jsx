/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const Tools = () => {
  const { isDark } = useTheme();

  // Array of tool objects with name and icon properties
  const tools = [
    // Kode Editor
    {
      name: "Visual Studio Code",
      icon: "/assets/tools/vscode.png",
      description: "Code Editor",
    },
    // Bahasa Pemrograman
    { name: "PHP", icon: "/assets/tools/PHP.png", description: "Language" },
    {
      name: "JavaScript",
      icon: "/assets/tools/js.png",
      description: "Language",
    },
    { name: "Go", icon: "/assets/tools/go.png", description: "Language" },
    {
      name: "Node JS",
      icon: "/assets/tools/nodejs.png",
      description: "Language",
    },
    // Framework
    {
      name: "Bootstrap",
      icon: "/assets/tools/bootstrap.png",
      description: "Framework",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tools/tailwind.png",
      description: "Framework",
    },
    {
      name: "React",
      icon: "/assets/tools/reactjs.png",
      description: "Framework",
    },
    {
      name: "Express JS",
      icon: "/assets/tools/express.png",
      description: "Framework",
    },
    {
      name: "Laravel",
      icon: "/assets/tools/laravel.png",
      description: "Framework",
    },
    // Database
    { name: "MySQL", icon: "/assets/tools/Mysql.png", description: "Database" },
    {
      name: "MongoDB",
      icon: "/assets/tools/mongoDB.png",
      description: "Database",
    },
    {
      name: "Sqlite",
      icon: "/assets/tools/Sqlite.png",
      description: "Database",
    },
    // Design
    {
      name: "Figma",
      icon: "/assets/tools/figma.png",
      description: "Design App",
    },
    {
      name: "Canva",
      icon: "/assets/tools/canva.png",
      description: "Design App",
    },
    // Tools
    { name: "Github", icon: "/assets/tools/github.png", description: "Tools" },
    { name: "Git", icon: "/assets/tools/Git.png", description: "Tools" },
    { name: "Gitlab", icon: "/assets/tools/gitlab.png", description: "Tools" },
  ];

  return (
    <div className="mt-12 px-4 md:px-8">
      {/* Animated heading for the tools section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold transition-colors duration-300"
        style={{
          color: isDark ? "#ffffff" : "#1f2937",
        }}
      >
        Tools yang dipakai
      </motion.h2>

      {/* Description paragraph below the heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 max-w-2xl transition-colors duration-300"
        style={{
          color: isDark ? "#d1d5db" : "#6b7280",
        }}
      >
        Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website
        ataupun Design
      </motion.p>

      {/* Grid of tool items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 mb-5 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-md flex flex-col items-center"
            style={{
              backgroundColor: isDark
                ? "oklch(27.4% 0.006 286.033)"
                : "#f3f4f6",
              boxShadow: isDark
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Tool icon */}
            <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
            {/* Tool name */}
            <span
              className="text-sm mt-3 font-medium text-center text-black dark:text-white"
              style={{
                color: isDark ? "#ffffff" : "#1f2937",
              }}
            >
              {tool.name}
            </span>
            {/* Tool description */}
            <p
              className="text-xs text-gray-500 dark:text-gray-400 mt-2"
              style={{
                color: isDark ? "#d1d5db" : "#4b5563",
              }}
            >
              {tool.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
