// import React, { useContext } from "react";
// import { BsMoon, BsSun } from "react-icons/bs";
// import ThemeContext from "../context/ThemeContext";

// export default function Navbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   // Theme-based color system for Navbar
//   const navbarColors = {
//     wrapper:
//       theme === "dark"
//         ? "bg-[#0f172a]/80 border-[#1e293b]"
//         : "bg-white/80 border-gray-300 shadow-sm",

//     brand: theme === "dark" ? "text-indigo-300" : "text-indigo-700",

//     links: theme === "dark" ? "text-slate-300" : "text-gray-700",

//     linkHover: theme === "dark" ? "hover:text-pink-400" : "hover:text-indigo-600",

//     toggleBtn:
//       theme === "dark"
//         ? "text-yellow-300 hover:text-yellow-400"
//         : "text-indigo-600 hover:text-indigo-800",
//   };

//   return (
//     <header
//       className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${navbarColors.wrapper}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* LOGO */}
//         <div className={`text-2xl font-extrabold select-none ${navbarColors.brand}`}>
//           &lt; Shaik Javeed /&gt;
//         </div>

//         {/* NAV LINKS */}
//         <nav className={`hidden md:flex gap-10 text-sm font-medium ${navbarColors.links}`}>
//           <a href="#about" className={`${navbarColors.linkHover} transition`}>About</a>
//           <a href="#skills" className={`${navbarColors.linkHover} transition`}>Skills</a>
//           <a href="#projects" className={`${navbarColors.linkHover} transition`}>Projects</a>
//           <a href="#contact" className={`${navbarColors.linkHover} transition`}>Contact</a>
//         </nav>

//         {/* THEME TOGGLE BUTTON */}
//         <button
//           onClick={toggleTheme}
//           className={`p-2 rounded-full text-xl transition ${navbarColors.toggleBtn}`}
//         >
//           {theme === "dark" ? <BsSun /> : <BsMoon />}
//         </button>
//       </div>
//     </header>
//   );
// }
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
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-xl navbar-toggle"
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl navbar-link"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
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
          <a onClick={() => setMenuOpen(false)} href="#projects" className="navbar-link">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="navbar-link">Contact</a>
        </div>
      )}
    </header>
  );
}
