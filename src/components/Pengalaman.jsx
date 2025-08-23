import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { useTheme } from "../context/ThemeContext.jsx";

const Pengalaman = () => {
  const { isDark } = useTheme();
  const tentangRef = useRef(null);

  const experiences = [
    {
      title: "Front-End dan Back-End Developer",
      company: "Coding Camp powered by DBS Foundation",
      date: "Feb 2025 - Jun 2025 · 5 bln",
      location: "Indonesia · Jarak jauh",
      skills: [
        "Full-Stack Development",
        "Front-End Development",
        "Back-End Web Development",
        "JavaScript",
        "Teamwork",
      ],
      icon: <FaLaptopCode className="mr-2" />,
    },
    {
      title: "Full-stack Developer",
      company: "CODEPOLITAN",
      date: "Jul 2024 - Jun 2025 · 1 thn",
      location: "Indonesia · Jarak jauh",
      skills: [
        "HTML5",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MongoDB",
        "Express JS",
      ],
      icon: <FaCode className="mr-2" />,
    },
    {
      title: "Junior Network Administrator",
      company: "Telkom Indonesia",
      date: "Nov 2022 - Des 2022 · 2 bln",
      location: "Indonesia · Jarak jauh",
      skills: [
        "Jaringan Komputer",
        "Pengelolaan Jaringan",
        "Dukungan Jaringan",
        "Dukungan Teknis",
        "Time Management",
      ],
      icon: <FaNetworkWired className="mr-2" />,
    },
  ];

  const getSkillIcon = (skill) => {
    switch (skill) {
      case "JavaScript":
        return <SiJavascript className="inline mr-1" />;
      case "HTML5":
        return <SiHtml5 className="inline mr-1" />;
      case "CSS":
        return <SiCss3 className="inline mr-1" />;
      case "Bootstrap":
        return <SiBootstrap className="inline mr-1" />;
      case "MongoDB":
        return <SiMongodb className="inline mr-1" />;
      case "Express JS":
        return <SiExpress className="inline mr-1" />;
      case "Back-End Web Development":
        return <FaServer className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mt-9 mx-auto p-8 mb-10 rounded-xl shadow-xl bg-gray-100 dark:bg-zinc-800"
      id="tentang"
      ref={tentangRef}
      style={{
        backgroundColor: isDark ? "oklch(27.4% 0.006 286.033)" : "#f3f4f6",
        boxShadow: isDark
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="text-center mb-6">
        <h2
          className="text-2xl font-bold text-black dark:text-white flex items-center justify-center"
          style={{
            color: isDark ? "#ffffff" : "#1f2937",
          }}
        >
          <GiSkills
            className="mr-2"
            style={{
              color: isDark ? "#ffffff" : "#1f2937",
            }}
          />{" "}
          Pengalaman
        </h2>
      </div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-8 p-4 rounded-lg bg-white dark:bg-zinc-700 shadow-md hover:shadow-lg transition-shadow duration-300"
          style={{
            backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
            boxShadow: isDark
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex items-start">
            <div className="text-xl text-blue-500 dark:text-blue-400 mt-1">
              {exp.icon}
            </div>
            <div className="ml-2">
              <p
                className="text-lg font-semibold text-black dark:text-white mb-1"
                style={{
                  color: isDark ? "#ffffff" : "#1f2937",
                }}
              >
                {exp.title}
              </p>
              <p
                className="text-black dark:text-white text-md"
                style={{
                  color: isDark ? "#ffffff" : "#1f2937",
                }}
              >
                {exp.company}
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-1">
                <FaCalendarAlt
                  className="mr-1"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                />
                <span
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                >
                  {exp.date}
                </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                <FaMapMarkerAlt
                  className="mr-1"
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                />
                <span
                  style={{
                    color: isDark ? "#ffffff" : "#1f2937",
                  }}
                >
                  {exp.location}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-black dark:text-white text-sm flex items-start">
                  <GiSkills
                    className="mr-2 mt-1 flex-shrink-0"
                    style={{
                      color: isDark ? "#ffffff" : "#1f2937",
                    }}
                  />
                  <span className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        
                      >
                        {getSkillIcon(skill)} {skill}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Pengalaman;
