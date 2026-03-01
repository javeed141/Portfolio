"use client";

import React, { useContext } from "react";
import { personalData } from "../../../public/personal-data";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="pt-8 pb-12 md:pt-10 md:pb-14 relative transition-colors duration-300"
      aria-label="about section"
    >
      <Container>
        {/* Section Label */}
        <div className="text-center mb-8">
          <span
            className={cls(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
              isDark ? "text-amber-400" : "text-violet-600"
            )}
          >
            About
          </span>
          <h2
            className={cls(
              "text-3xl sm:text-4xl md:text-5xl font-bold",
              isDark ? "text-white" : "text-stone-900"
            )}
          >
            Who I Am
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Image — takes 2 columns on desktop */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Decorative border frame */}
              <div
                className={cls(
                  "absolute -inset-3 rounded-2xl border-2 border-dashed",
                  isDark ? "border-amber-500/15" : "border-violet-300/30"
                )}
              />
              <div
                className={cls(
                  "relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]",
                  isDark ? "ring-1 ring-stone-700" : "ring-1 ring-stone-200 shadow-lg"
                )}
              >
                {/* Mobile image */}
                <img
                  src="mobile_view_image_portfolio.png"
                  alt={personalData.name || "Profile"}
                  className="block md:hidden w-64 h-72 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Desktop image */}
                <img
                  src={personalData.profile}
                  alt={personalData.name || "Profile"}
                  className="hidden md:block w-72 h-80 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text + Stats — takes 3 columns on desktop */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3
              className={cls(
                "text-2xl font-semibold mb-4",
                isDark ? "text-white" : "text-stone-900"
              )}
            >
              {personalData.name}
            </h3>

            <p
              className={cls(
                "text-sm sm:text-base lg:text-lg leading-relaxed mb-8",
                isDark ? "text-stone-400" : "text-stone-500"
              )}
            >
              {personalData.description}
            </p>

            {/* Stat counters */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={cls(
                    "text-center py-4 px-3 rounded-xl border transition-colors",
                    isDark
                      ? "bg-stone-900/60 border-stone-800"
                      : "bg-stone-50 border-stone-200"
                  )}
                >
                  <p
                    className={cls(
                      "text-2xl sm:text-3xl font-bold",
                      isDark ? "text-amber-400" : "text-violet-600"
                    )}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={cls(
                      "text-xs sm:text-sm mt-1 font-medium",
                      isDark ? "text-stone-500" : "text-stone-400"
                    )}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
