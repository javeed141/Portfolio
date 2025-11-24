"use client";
import React, { useContext } from "react";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const colors = {
    bg: isDark ? "bg-[#0d1224]" : "bg-gray-100",
    border: isDark ? "border-[#353951]" : "border-gray-300",
    text: isDark ? "text-white" : "text-gray-800",
    accent: isDark ? "text-[#16f2b3]" : "text-teal-600",
    hover: isDark ? "hover:text-[#16f2b3]" : "hover:text-teal-600",
    iconHover: isDark ? "hover:text-[#16f2b3]" : "hover:text-teal-700",
    glow:
      isDark
        ? "bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        : "bg-gradient-to-r from-transparent via-purple-300 to-transparent",
    shadow: isDark ? "shadow-[0_0_20px_rgba(22,242,179,0.15)]" : "shadow-md",
  };

  return (
    <footer
      className={`relative border-t ${colors.bg} ${colors.border} ${colors.text} mt-20`}
    >
      {/* Top gradient line */}
      <div className="flex justify-center">
        <div className={`absolute top-0 h-[1px] w-1/2 ${colors.glow}`}></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Text */}
          <p className="text-sm text-center md:text-left">
            © Developer Portfolio by{" "}
            <a
              href="https://www.linkedin.com/in/javeed-shaik-37a844315"
              target="_blank"
              rel="noreferrer"
              className={`${colors.accent} underline-offset-2 hover:underline`}
            >
              Shaik Javeed
            </a>
          </p>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/javeed141/Portfolio"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 uppercase transition ${colors.iconHover}`}
            >
              <IoStar />
              <span>Star</span>
            </a>

            <a
              href="https://github.com/javeed141/Portfoliofork"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 uppercase transition ${colors.iconHover}`}
            >
              <CgGitFork />
              <span>Fork</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
