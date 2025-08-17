import React, { useRef } from "react";
import { motion } from "framer-motion";

const Project = () => {
  const projectRef = useRef(null);

  const projects = [
    {
      name: "Absensi Siswa",
      image: "/assets/proyek/proyek1.png",
      description:
        "Sebuah website responsif untuk sekolah dengan fitur administrasi, informasi akademik, dan portal siswa.",
      link: "#",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
    },
    {
      name: "Kasir Toko",
      image: "/assets/proyek/proyek2.png",
      description:
        "Sebuah aplikasi kasir berbasis web untuk toko dengan fitur manajemen produk, transaksi, dan laporan penjualan.",
      link: "#",
      tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    },
    {
      name: "Tracer Study",
      image: "/assets/proyek/proyek3.png",
      description:
        "Sebuah platform e-commerce lengkap dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran.",
      link: "#",
      tech: ["Javascript", "PHP", "Laravel 12", "Vite", "MySQL"],
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
    <section
      className="py-12 px-4 md:px-8 text-black dark:text-white"
      id="proyek"
      ref={projectRef}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Project</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-100 dark:bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden border border-zinc-700 transition-all duration-300"
          >
            {/* Gambar Full Width */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden"
            >
              <img
                className="w-full h-auto object-cover"
                src={project.image}
                alt={project.name}
              />
            </motion.div>

            {/* Konten Deskripsi */}
            <div className="p-6">
              <h3 className="text-black dark:text-white text-2xl font-bold mb-2">
                {project.name}
              </h3>
              <p className="mb-4 text-black dark:text-gray-300">
                {project.description}
              </p>

              {/* Badge Teknologi */}
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

              {/* Tombol */}
              {/* <motion.a
                href={project.link}
                className="block text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Website
              </motion.a> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
