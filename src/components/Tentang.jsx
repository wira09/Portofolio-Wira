import React, { useRef } from "react";
import { motion } from "framer-motion";

const Tentang = () => {
  const tentangRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 mb-10 rounded-xl shadow-xl bg-gray-100 dark:bg-zinc-800"
      id="tentang"
      ref={tentangRef}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Tentang Saya
        </h2>
      </div>

      <p className="mb-6 text-black dark:text-white text-lg leading-relaxed text-justify">
        Saya Mohamad Zaelani Wira Kusuma, seorang Full Stack Web Developer yang
        menggabungkan keahlian teknis dan desain. Fokus saya adalah membangun
        website dan aplikasi yang efisien, responsif, dan user-friendly, dengan
        dukungan desain UI/UX yang mendukung performa produk digital secara
        menyeluruh.
      </p>

      <div className="flex justify-center gap-8 mt-8">
        <div className="text-center">
          <span className="text-3xl font-bold text-black dark:text-white">
            20+
          </span>
          <p className="text-black dark:text-white">Proyek Selesai</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-black dark:text-white">
            4+
          </span>
          <p className="text-black dark:text-white">Tahun Pengalaman</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Tentang;
