import React, { useContext, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: 'var(--navbar-bg)',
        borderColor: 'var(--navbar-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl font-extrabold select-none cursor-pointer transition-colors"
          style={{ color: 'var(--navbar-brand)' }}
        >
          &lt; Shaik Javeed /&gt;
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#about" className="navbar-link">About</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#education" className="navbar-link">Education</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-xl navbar-toggle"
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          <button
            className="md:hidden text-3xl navbar-link"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4 text-base border-t"
          style={{
            backgroundColor: 'var(--navbar-mobile-bg)',
            borderColor: 'var(--navbar-border)'
          }}
        >
          <a onClick={() => setMenuOpen(false)} href="#about" className="navbar-link">About</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="navbar-link">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#education" className="navbar-link">Education</a>
          <a onClick={() => setMenuOpen(false)} href="#projects" className="navbar-link">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="navbar-link">Contact</a>
        </div>
      )}
    </header>
  );
}
