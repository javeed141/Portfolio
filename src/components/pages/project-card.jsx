/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const colors = {
    cardBg: isDark
      ? "from-[#0d1224] to-[#0a0d37] border-[#1b2c68a0]"
      : "from-white to-gray-100 border-gray-300",

    keyword: isDark ? "text-pink-400" : "text-pink-700",
    varName: isDark ? "text-white" : "text-gray-900",
    bracket: isDark ? "text-gray-400" : "text-gray-600",
    string: isDark ? "text-amber-300" : "text-yellow-700",
    role: isDark ? "text-orange-400" : "text-orange-600",
    desc: isDark ? "text-cyan-300" : "text-blue-600",
    label: isDark ? "text-gray-200" : "text-gray-800"
  };

  return (
    <div
      className={`relative w-full rounded-lg border bg-gradient-to-r ${colors.cardBg}`}
    >

      {/* Project Image (sticky fade) */}
      {project.image && (
        <div className="sticky top-20 z-0 opacity-100 transition-opacity duration-700 hover:opacity-50">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-56 object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* Top gradient line */}
      <div className="flex flex-row mt-0">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"/>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"/>
      </div>

      {/* Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-2 absolute top-1/2 -translate-y-1/2">
          <span className="h-3 w-3 rounded-full bg-red-400"/>
          <span className="h-3 w-3 rounded-full bg-orange-400"/>
          <span className="h-3 w-3 rounded-full bg-green-200"/>
        </div>

        <p className="text-center ml-10 text-[#16f2b3] text-sm sm:text-xl">
          {project.name}
        </p>

        {/* GitHub Icon */}
        {project.github && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <a
              href={project.github}
              target="_blank"
              className="text-[#16f2b3] hover:scale-110 transition"
            >
              <FiGithub size={22}/>
            </a>
          </div>
        )}
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
            <span className={colors.role}>'{project.role}'</span>,
          </div>

          <div>
            <span className={`ml-6 mr-2 ${colors.label}`}>description:</span>
            <span className={colors.desc}>'{project.description}'</span>,
          </div>

          <div>
            <span className={colors.bracket}>{"};"}</span>
          </div>

        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
