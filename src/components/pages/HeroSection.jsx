"use client";
import React, { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { personalData } from "../../../public/personal-data";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

export default function HeroSection() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const highlights = [
    { label: "React", category: "Frontend" },
    { label: "Node.js", category: "Backend" },
    { label: "MongoDB", category: "Database" },
    { label: "Python", category: "AI/ML" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-10 transition-colors duration-300"
    >
      {/* Background accent blobs */}
      {isDark && (
        <>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px]" />
        </>
      )}

      <Container>
        {/* Single-column centered hero */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <div className="flex justify-center mb-6">
            <span
              className={cls(
                "inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full border",
                isDark
                  ? "border-amber-500/20 bg-amber-500/5 text-amber-400"
                  : "border-violet-300/50 bg-violet-50 text-violet-600"
              )}
            >
              <span className={cls(
                "w-2 h-2 rounded-full animate-pulse",
                isDark ? "bg-emerald-400" : "bg-emerald-500"
              )} />
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={cls(
              "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight",
              isDark ? "text-white" : "text-stone-900"
            )}
          >
            Hi, I'm{" "}
            <span className={isDark ? "text-amber-400" : "text-violet-600"}>
              {personalData.name}
            </span>
          </h1>

          <p
            className={cls(
              "mt-2 text-xl sm:text-2xl font-medium",
              isDark ? "text-stone-400" : "text-stone-500"
            )}
          >
            {personalData.designation}
          </p>

          <p
            className={cls(
              "mt-5 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",
              isDark ? "text-stone-400" : "text-stone-500"
            )}
          >
            I build fast, reliable web applications with modern tools.
            Passionate about clean code, great UX, and solving real problems.
          </p>

          {/* Tech highlights — horizontal pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={cls(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 hover:scale-[1.03]",
                  isDark
                    ? "bg-stone-900/80 border-stone-700/50 text-stone-300"
                    : "bg-white border-stone-200 text-stone-600 shadow-sm"
                )}
              >
                <span className={cls(
                  "text-[10px] font-semibold uppercase tracking-wider",
                  isDark ? "text-amber-500" : "text-violet-500"
                )}>
                  {item.category}
                </span>
                <span className={cls(
                  "w-px h-4",
                  isDark ? "bg-stone-700" : "bg-stone-200"
                )} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalData.email}`}
              className={cls(
                "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold shadow-lg w-full sm:w-auto transition-all duration-200 hover:shadow-xl hover:scale-[1.02]",
                isDark
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-900"
                  : "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
              )}
            >
              <RiContactsFill size={18} /> Contact me
            </a>

            <a
              href="https://drive.google.com/file/d/1CpeAWvf03cgkMUhtimVOOr0NNVXbKt1n/view?usp=drive_open"
              target="_blank"
              className={cls(
                "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold w-full sm:w-auto transition-all duration-200",
                isDark
                  ? "border border-stone-600 text-stone-100 hover:border-amber-500/50 hover:bg-stone-900"
                  : "border border-stone-300 text-stone-700 bg-white hover:border-violet-400 hover:shadow-md"
              )}
            >
              <MdDownload size={18} /> Get Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 mt-8">
            {[
              { href: personalData.github, Icon: BsGithub, label: "GitHub" },
              { href: personalData.linkedIn, Icon: BsLinkedin, label: "LinkedIn" },
              { href: personalData.leetcode, Icon: SiLeetcode, label: "LeetCode" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cls(
                  "p-2.5 rounded-full border transition-all duration-200 hover:scale-110",
                  isDark
                    ? "border-stone-700 text-stone-400 hover:text-amber-400 hover:border-amber-500/40"
                    : "border-stone-200 text-stone-400 hover:text-violet-600 hover:border-violet-300"
                )}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
