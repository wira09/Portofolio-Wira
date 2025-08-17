import React, { useRef } from "react";
import { motion } from "framer-motion";

const Kontak = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Kontak</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Mari terhubung dengan saya.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md space-y-6"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   // Di sini bisa tambahkan handle pengiriman
        //   alert("Pesan berhasil dikirim!");
        // }}
      >
        <form action="https://formsubmit.co/wirak009@gmail.com" method="POST">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 mt-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="nama@email.com"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 mt-1">Pesan</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
        </form>
      </motion.form>
    </section>
  );
};

export default Kontak;
