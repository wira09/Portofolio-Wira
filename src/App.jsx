import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Beranda from "./components/Beranda.jsx";
import Tentang from "./components/Tentang.jsx";
import Tools from "./components/Tools.jsx";
import Pengalaman from "./components/Pengalaman.jsx";
import Certificate from "./components/Certificate.jsx";
import Project from "./components/Project.jsx";
import Kontak from "./components/Kontak.jsx";
import Footer from "./components/Footer.jsx";
// loader
import Preloader from "./components/Preloader.jsx";

const App = () => {
  return (
    <>
      <Preloader />
      <div className="container mx-auto px-4">
        <Navbar />
        <Beranda />
        <Tentang />
        <Tools />
        <Pengalaman />
        <Certificate />
        <Project />
        <Kontak />
        <Footer />
      </div>
    </>
  );
};

export default App;
