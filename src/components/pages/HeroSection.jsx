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

  const colors = {
    primary: theme === "dark" ? "text-pink-500" : "text-pink-600",
    accent: theme === "dark" ? "text-teal-400" : "text-teal-600",
    heading: theme === "dark" ? "text-white" : "text-gray-900",
    sub: theme === "dark" ? "text-slate-300" : "text-slate-700",
    ctaBg:
      theme === "dark"
        ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white"
        : "bg-gradient-to-r from-purple-400 to-pink-400 text-white",
    resumeBtn:
      theme === "dark"
        ? "border border-slate-700 text-slate-100 bg-transparent"
        : "border border-gray-300 text-gray-800 bg-white",
    terminalWrapper:
      theme === "dark"
        ? "rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#050617] to-[#07102a]"
        : "rounded-lg border border-gray-200 bg-gradient-to-r from-white to-slate-50",
    hrGradient:
      theme === "dark"
        ? "h-[1px] w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-violet-600"
        : "h-[1px] w-1/2 bg-gradient-to-r from-transparent via-pink-400 to-violet-300",
    dotRed: theme === "dark" ? "bg-red-400" : "bg-red-600",
    dotOrange: theme === "dark" ? "bg-orange-400" : "bg-orange-600",
    dotGreen: theme === "dark" ? "bg-green-200" : "bg-green-500",
    codeText: theme === "dark" ? "text-slate-200" : "text-gray-800",
    codeGray: theme === "dark" ? "text-gray-400" : "text-gray-500",
    codeAmber: theme === "dark" ? "text-amber-300" : "text-amber-600",
    codeOrange: theme === "dark" ? "text-orange-400" : "text-orange-600",
    codeCyan: theme === "dark" ? "text-cyan-400" : "text-cyan-600",
  };

  return (
    <section
    id="home"
      className={cls(
        "relative flex flex-col items-center justify-between py-10 lg:py-16 transition-colors duration-300",
        theme === "dark" ? "text-white" : "text-gray-900"
      )}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT → Should appear second on mobile */}
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center text-center lg:text-left">
            <h1
              className={cls(
                "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight",
                colors.heading
              )}
            >
              Hello,
              <br />
              This is{" "}
              <span className={cls(colors.primary, "mx-1")}>
                {personalData.name}
              </span>
              , I'm a{" "}
              <span className={cls(colors.accent, "mx-1")}>
                {personalData.designation}
              </span>
              .
            </h1>

            <p className={cls("mt-5 sm:mt-6 max-w-lg text-base sm:text-lg", colors.sub)}>
Full Stack Developer 🧑‍💻 | Building Fast, Reliable Web Apps ⚡
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 w-full">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className={cls(colors.primary, "hover:scale-110 transition")}
              >
                <BsGithub size={26} />
              </a>
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className={cls(colors.primary, "hover:scale-110 transition")}
              >
                <BsLinkedin size={26} />
              </a>
              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noreferrer"
                className={cls(colors.primary, "hover:scale-110 transition")}
              >
                <SiLeetcode size={26} />
              </a>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href={`mailto:${personalData.email}`}
                className={cls(
                  "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold shadow w-full sm:w-auto",
                  colors.ctaBg
                )}
              >
                <RiContactsFill /> Contact me
              </a>

              <a
                href="https://drive.google.com/file/d/1WOgkd_5zm_l3idJR-gTcNJInV0hiN5sT/view"
                target="_blank"
                className={cls(
                  "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold w-full sm:w-auto",
                  colors.resumeBtn
                )}
              >
                <MdDownload /> Get Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (TERMINAL) → Should appear first on mobile */}
          <div className="order-1 lg:order-2 w-full">
            <div className={cls(colors.terminalWrapper)}>
              <div className="flex">
                <div className={cls(colors.hrGradient)} />
                <div
                  className={cls(
                    theme === "dark"
                      ? "h-[1px] w-1/2 bg-gradient-to-r from-violet-600 to-transparent"
                      : "h-[1px] w-1/2 bg-gradient-to-r from-violet-300 to-transparent"
                  )}
                />
              </div>

              <div className="px-4 py-4 flex items-center space-x-2">
                <span className={cls("h-3 w-3 rounded-full", colors.dotRed)} />
                <span className={cls("h-3 w-3 rounded-full", colors.dotOrange)} />
                <span className={cls("h-3 w-3 rounded-full", colors.dotGreen)} />
              </div>

              <div
                className={cls(
                  "px-4 sm:px-6 py-6 border-t overflow-x-auto text-xs sm:text-sm lg:text-base",
                  theme === "dark" ? "border-indigo-900" : "border-gray-200"
                )}
              >
                <code className={cls("font-mono leading-relaxed block", colors.codeText)}>
                  {/* Code content unchanged */}
                  <div>
                    <span className={colors.primary}>const</span>{" "}
                    <span className={colors.heading}>coder</span>{" "}
                    <span className={colors.primary}>=</span>{" "}
                    <span className={colors.codeGray}>{"{"}</span>
                  </div>

                  <div className="mt-3 ml-4">
                    <span className={colors.heading}>name:</span>{" "}
                    <span className={colors.codeAmber}>'{personalData.name}'</span>,
                  </div>

                  <div className="mt-2 ml-4">
                    <span className={colors.heading}>skills:</span>{" "}
                    <span className={colors.codeGray}>['</span>
                    React<span className={colors.codeGray}>, '</span>
                    Node<span className={colors.codeGray}>, '</span>
                    Tailwind<span className={colors.codeGray}>, '</span>
                    Docker<span className={colors.codeGray}>, '</span>
                    MongoDB<span className={colors.codeGray}>']</span>,
                  </div>

                  <div className="mt-3 ml-4">
                    <span className={colors.heading}>hardWorker:</span>{" "}
                    <span className={colors.codeOrange}>true</span>,
                  </div>

                  <div className="mt-2 ml-4">
                    <span className={colors.heading}>quickLearner:</span>{" "}
                    <span className={colors.codeOrange}>true</span>,
                  </div>

                  <div className="mt-2 ml-4">
                    <span className={colors.heading}>problemSolver:</span>{" "}
                    <span className={colors.codeOrange}>true</span>,
                  </div>

                  <div className="mt-2 ml-4">
                    <span className={colors.codeCyan}>hireable:</span>{" "}
                    <span className={colors.codeOrange}>function</span>{" "}
                    <span className={colors.codeGray}>{"() {"}</span>
                  </div>

                  <div className="mt-2 ml-8 text-orange-400">return {" {"}</div>

                  <div className="mt-2 ml-12">
                    <span className={colors.codeCyan}>this.</span>
                    <span className={colors.heading}>hardWorker</span>
                    <span className={colors.codeAmber}> &&</span>
                  </div>

                  <div className="mt-2 ml-12">
                    <span className={colors.codeCyan}>this.</span>
                    <span className={colors.heading}>problemSolver</span>
                    <span className={colors.codeAmber}> &&</span>
                  </div>

                  <div className="mt-2 ml-12">
                    <span className={colors.codeCyan}>this.</span>
                    <span className={colors.heading}>skills.length</span>
                    <span className={colors.codeAmber}> &gt;=</span>
                    <span className={colors.codeOrange}> 5</span>
                  </div>

                  <div className="mt-3 ml-8 text-gray-400">{"}"};</div>
                  <div className="mt-1 ml-4 text-gray-400">{"}"};</div>
                  <div className="mt-1 text-gray-400">{"}"};</div>
                </code>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
