import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaReddit, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Kiri: Logo atau Brand */}
        <div className="text-black dark:text-white text-2xl font-bold">Portfolio</div>

        {/* Tengah: Navigasi */}
        <div className="flex space-x-6 text-sm md:text-base">
          <a href="#beranda" className="text-black dark:text-white hover:text-purple-400 transition">
            Beranda
          </a>
          <a href="#tentang" className="text-black dark:text-white hover:text-purple-400 transition">
            Tentang
          </a>
          <a href="#proyek" className="text-black dark:text-white hover:text-purple-400 transition">
            Proyek
          </a>
        </div>

        {/* Kanan: Ikon Sosial */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/wira09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black dark:text-white hover:text-purple-400 transition" />
          </a>
          <a
            href="https://www.instagram.com/zaelaniwira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-black dark:text-white hover:text-purple-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-zaelani-wira-kusuma-4859b3262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black dark:text-white hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
