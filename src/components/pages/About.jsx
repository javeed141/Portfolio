"use client";

import React, { useContext } from "react";
import { personalData } from "../../../public/personal-data";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const colors = {
    sideBg: isDark ? "bg-[#1a1443] text-white" : "bg-gray-100 text-gray-900",
    lineBg: isDark ? "bg-[#1a1443]" : "bg-gray-300",
    headingAccent: "text-[#16f2b3]",
    title: isDark ? "text-white" : "text-gray-900",
    body: isDark ? "text-gray-200" : "text-gray-700",
    sectionBg: isDark ? "bg-[#07102a]" : "bg-white",
    imgRing: isDark ? "ring-2 ring-[#1a1443]/60" : "ring-2 ring-gray-200",
  };

  return (
    <section
      id="about"
      className={cls(
        "py-12 md:py-14 lg:py-16 relative transition-colors duration-300",
        isDark ? "text-white" : "text-gray-900"
      )}
      aria-label="about section"
    >
      {/* Side Label – desktop only */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span
          className={cls(
            colors.sideBg,
            "w-fit rotate-90 p-2 px-5 text-xl rounded-md"
          )}
        >
          ABOUT ME
        </span>
        <span className={cls("h-36 w-[2px]", colors.lineBg)}></span>
      </div>

      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            <p
              className={cls(
                "font-medium mb-3 md:mb-4 text-lg md:text-xl uppercase tracking-wide",
                colors.headingAccent
              )}
            >
              Who I am?
            </p>

            <h2
              className={cls(
                "text-2xl md:text-3xl font-semibold mb-4",
                colors.title
              )}
            >
              {personalData.name}
            </h2>

            <p className={cls("text-sm md:text-base lg:text-lg leading-relaxed", colors.body)}>
              {personalData.description}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div
              className={cls(
                "rounded-lg overflow-hidden transition-all duration-700 transform hover:scale-105",
                colors.imgRing
              )}
            >
              <img
                src={personalData.profile}
                alt={personalData.name || "Profile"}
                className="w-44 h-44 md:w-60 md:h-60 lg:w-[280px] lg:h-[280px] object-cover grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
