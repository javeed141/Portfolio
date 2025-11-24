"use client";

import React, { useContext } from "react";
import { projectsData } from "./projects-data";
import ThemeContext from "../../context/ThemeContext";

/* -----------------------------------------------------------
   PROJECT CARD (THEME-ONLY COLORS)
   ⚠️ NO ALIGNMENT PROPERTIES WERE MODIFIED
----------------------------------------------------------- */
const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  // Perfect color palette for dark/light
  const colors = {
    cardBg: isDark
      ? "from-[#0d1224] to-[#0a0d37] border-[#1b2c68a0]"
      : "from-white to-gray-100 border-gray-300",

    title: isDark ? "text-[#16f2b3]" : "text-purple-700",

    keyword: isDark ? "text-pink-400" : "text-pink-600",
    varName: isDark ? "text-white" : "text-gray-800",
    bracket: isDark ? "text-gray-400" : "text-gray-600",
    string: isDark ? "text-amber-300" : "text-yellow-700",
    role: isDark ? "text-orange-400" : "text-orange-700",
    desc: isDark ? "text-cyan-300" : "text-blue-600",
  };

  return (
    <div
      className={`relative w-full rounded-lg border bg-gradient-to-r ${colors.cardBg}`}
    >
      {/* Top gradient bar */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-2 absolute top-1/2 -translate-y-1/2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-orange-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-200"></span>
        </div>

        <p className={`text-center ml-10 text-sm sm:text-xl ${colors.title}`}>
          {project.name}
        </p>
      </div>

      {/* Body */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">

          <div>
            <span className={colors.keyword}>const</span>{" "}
            <span className={colors.varName}>project</span> ={" "}
            <span className={colors.bracket}>{"{"}</span>
          </div>

         <div>
  <span className={`ml-6 mr-2 ${colors.label}`}>name:</span>
  <span className={colors.string}>'{project.name}'</span>,
</div>

<div>
  <span className={`ml-6 mr-2 ${colors.label}`}>tools:</span>
  <span className={colors.bracket}>[</span>
  {project.tools.map((tag, i) => (
    <span key={i} className={colors.string}>
      '{tag}'
      {i < project.tools.length - 1 && (
        <span className={colors.bracket}>, </span>
      )}
    </span>
  ))}
  <span className={colors.bracket}>],</span>
</div>

<div>
  <span className={`ml-6 mr-2 ${colors.label}`}>myRole:</span>
  <span className={colors.role}>{project.role}</span>,
</div>

<div>
  <span className={`ml-6 mr-2 ${colors.label}`}>description:</span>
  <span className={colors.desc}>{project.description}</span>,
</div>


          <div>
            <span className={colors.bracket}>{"};"}</span>
          </div>

        </code>
      </div>
    </div>
  );
};

/* -----------------------------------------------------------
   PROJECTS PAGE (THEME-ONLY COLORS)
   ⚠️ ALIGNMENT PRESERVED 100%
----------------------------------------------------------- */
const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  return (
    <div
  id="projects"
  className="relative my-10 md:my-16 px-4 sm:px-6 lg:px-0 z-10"
>

      {/* STICKY HEADING */}
      <div className="sticky top-16 z-30 pb-6 lg:pb-10">
        
        {/* Glow (only in dark mode) */}
        {isDark && (
          <div className="w-[90px] h-[90px] bg-purple-500/30 rounded-full absolute -top-6 left-1/2 -translate-x-1/2 blur-3xl"></div>
        )}

        {/* Title */}
        <div className="flex justify-center relative">
          <span
            className={`px-5 py-3 text-lg sm:text-xl rounded-md shadow-lg ${
              isDark
                ? "bg-[#1a1443] text-white"
                : "bg-purple-200 text-purple-800"
            }`}
          >
            PROJECTS
          </span>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <div className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-10 sm:gap-14">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sticky top-40 sm:top-48 w-full mx-auto max-w-md sm:max-w-xl lg:max-w-2xl"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
