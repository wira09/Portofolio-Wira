import { motion } from "framer-motion";

const Certificate = () => {
  const sertifikat = [
    {
      name: "[Coding Camp 2025] Certificate",
      image: "/assets/certificate/sertifikat 1.jpg",
      tech: ["HTML", "CSS", "Javascript", "Node JS", "Git", "Back End", "Front End"],
    },
    {
      name: "UDEMY - Laravel 11 Fundamentals",
      image: "/assets/certificate/Laravel 11_1.png",
      tech: ["PHP","Javascript","Database","Framework"],
    },
    // Dicoding
    {
      name: "Belajar Back-End Pemula dengan JavaScript",
      image: "/assets/certificate/Dicoding/Belajar Back-End Pemula dengan JavaScript_1.png",
      tech: ["HTML","CSS","Javascript","Node JS","API"],
    },
    {
      name: "Belajar Dasar Git dengan GitHub",
      image: "/assets/certificate/Dicoding/Belajar Dasar Git dengan GitHub_1.png",
      tech: ["Github","Tools"],
    },
    {
      name: "Belajar Dasar Pemrograman JavaScript",
      image: "/assets/certificate/Dicoding/Belajar Dasar Pemrograman JavaScript_1.png",
      tech: ["Javascript"],
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      image: "/assets/certificate/Dicoding/Belajar Dasar Pemrograman Web_1.png",
      tech: ["HTML","CSS","Javascript"],
    },
    {
      name: "Belajar Fundamental Front-End Web Development",
      image: "/assets/certificate/Dicoding/Belajar Fundamental Front-End Web Development_1.png",
      tech: ["HTML","CSS","Javascript"],
    },
    {
      name: "Belajar Membuat Front-End Web untuk Pemula",
      image: "/assets/certificate/Dicoding/Belajar Membuat Front-End Web untuk Pemula_1.png",
      tech: ["HTML","CSS","Javascript"],
    },
    {
      name: "Belajar Pengembangan web Intermediate",
      image: "/assets/certificate/Dicoding/Belajar Pengembangan web Intermediate_1.png",
      tech: ["HTML","CSS","Javascript","Node JS","Vite","API"],
    },
    {
      name: "Financial Literacy 101",
      image: "/assets/certificate/Dicoding/Financial Literacy 101_1.png",
      tech: ["Finance"],
    },
    {
      name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      image: "/assets/certificate/Dicoding/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software_1.png",
      tech: ["Tools"],
    },
    {
      name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      image: "/assets/certificate/Dicoding/Pengenalan ke Logika Pemrograman (Programming Logic 101)_1.png",
      tech: ["Logic"],
    },
    // CodePolitan
    {
      name: "HTML",
      image: "/assets/certificate/HTML_1.png",
      tech: ["HTML"],
    },
    {
      name: "CSS",
      image: "/assets/certificate/CSS_1.png",
      tech: ["CSS"],
    },
    {
      name: "Javascript",
      image: "/assets/certificate/JavaScript.png",
      tech: ["Javascript"],
    },
    {
      name: "Javascript OOP",
      image: "/assets/certificate/javascript OOP_1.png",
      tech: ["Javascript"],
    },
    {
      name: "Javascript Acronous",
      image: "/assets/certificate/Javascript acronous_1.png",
      tech: ["Javascript"],
    },
    {
      name: "Javascript DOM",
      image: "/assets/certificate/JS DOOM_1.png",
      tech: ["Javascript"],
    },
    {
      name: "Belajar Ajax Dan Web API",
      image: "/assets/certificate/Belajar Ajax Dan Web API_1.png",
      tech: ["Javascript"],
    },
    {
      name: "Boostrap 4",
      image: "/assets/certificate/Bootsrap 4_1.png",
      tech: ["Framework"],
    },
    {
      name: "MongoDB",
      image: "/assets/certificate/certificate mongoDB_1.png",
      tech: ["Database"],
    },
    {
      name: "Golang dasar",
      image: "/assets/certificate/Golang dasar_1.png",
      tech: ["Go"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="mt-12 px-4 md:px-8">
      {/* Judul section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-black dark:text-white"
      >
        Certificate
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        Berikut ini beberapa sertifikat yang saya miliki.
      </motion.p>

      {/* Grid sertifikat */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sertifikat.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-100 dark:bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden border border-zinc-700 transition-all duration-300"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src={project.image}
                alt={project.name}
              />
            </motion.div>

            <div className="p-6">
              <h3 className="text-black dark:text-white text-2xl font-bold mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700 text-white text-sm font-semibold px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificate;
