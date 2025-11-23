// App.jsx
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import HeroSection from "./components/pages/HeroSection";
import ThemeContext from "./context/ThemeContext";
import Skills from "./components/pages/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";

const cls = (...args) => args.filter(Boolean).join(" ");

export default function App() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  return (
    <div
      className={cls(
        "min-h-screen transition-colors duration-300",
        // page background switches with theme
        isDark ? "bg-[#070810] text-slate-200" : "bg-white text-gray-900"
      )}
    >
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
