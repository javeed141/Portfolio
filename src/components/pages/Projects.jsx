"use client";

import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { projectsData } from "./projects-data";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const ProjectCard = ({ project, index }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-stone-900/50 border-stone-800 hover:border-amber-500/30"
          : "bg-white border-stone-200 hover:border-violet-300 shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Visual Side — project image with overlay */}
      <div
        className={`relative h-48 sm:h-56 lg:h-auto lg:min-h-[280px] overflow-hidden ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Project image */}
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"
              : "bg-gradient-to-t from-white via-white/30 to-transparent"
          }`}
        />
        {/* Project number watermark */}
        <span
          className={`absolute top-4 left-5 text-[80px] sm:text-[100px] font-black leading-none select-none ${
            isDark ? "text-amber-500/10" : "text-violet-500/10"
          }`}
        >
          0{index + 1}
        </span>
        {/* Floating tool badges */}
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool, i) => (
            <span
              key={i}
              className={`text-[11px] px-2.5 py-1 rounded-full font-medium backdrop-blur-md ${
                isDark
                  ? "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                  : "bg-violet-500/10 text-violet-700 border border-violet-300/40"
              }`}
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span
              className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                isDark ? "text-stone-400" : "text-stone-500"
              }`}
            >
              +{project.tools.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-center ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Role badge */}
        <span
          className={`inline-block w-fit text-xs font-semibold uppercase tracking-wider mb-3 px-3 py-1 rounded-full ${
            isDark
              ? "bg-amber-500/10 text-amber-400"
              : "bg-violet-100 text-violet-600"
          }`}
        >
          {project.role}
        </span>

        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold mb-3 ${
            isDark ? "text-white" : "text-stone-900"
          }`}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed mb-6 ${
            isDark ? "text-stone-400" : "text-stone-500"
          }`}
        >
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                isDark
                  ? "text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
                  : "text-violet-600 border-violet-300 hover:bg-violet-50"
              }`}
            >
              <BsGithub size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
              isDark ? "text-amber-400" : "text-violet-600"
            }`}
          >
            Portfolio
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-stone-900"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`mt-3 text-base max-w-xl mx-auto ${
              isDark ? "text-stone-400" : "text-stone-500"
            }`}
          >
            A selection of projects that showcase my skills and passion for building.
          </p>
        </div>

        {/* Projects List — alternating layout */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
