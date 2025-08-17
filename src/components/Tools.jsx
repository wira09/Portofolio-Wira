import { motion } from "framer-motion";

const Tools = () => {
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
    { name: "MySQL", icon: "/assets/tools/mysql.png", description: "Database" },
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
        className="text-3xl font-bold text-black dark:text-white"
      >
        Tools yang dipakai
      </motion.h2>

      {/* Description paragraph below the heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
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
          >
            {/* Tool icon */}
            <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
            {/* Tool name */}
            <span className="text-sm mt-3 font-medium text-center text-black dark:text-white">
              {tool.name}
            </span>
            {/* Tool description */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {tool.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
