// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import HeroSection from "./components/pages/HeroSection";
import Skills from "./components/pages/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import Hello from "./components/pages/hello";

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
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      {/* <Hello /> */}
    </div>
  );
}