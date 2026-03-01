// App.jsx
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import HeroSection from "./components/pages/HeroSection";
import Skills from "./components/pages/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import ThemeContext from "./context/ThemeContext";

function SectionDivider() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;
  return (
    <div className="flex justify-center">
      <div
        className={`h-px w-2/5 max-w-md ${
          isDark
            ? "bg-gradient-to-r from-transparent via-stone-700/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-stone-300/60 to-transparent"
        }`}
      />
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
}
