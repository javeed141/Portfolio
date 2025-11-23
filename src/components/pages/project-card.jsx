/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
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
        <p className="text-center ml-10 text-[#16f2b3] text-sm sm:text-xl">
          {project.name}
        </p>
      </div>

      {/* Body */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">

          <div>
            <span className="text-pink-500">const</span>{" "}
            <span className="text-white">project</span> ={" "}
            <span className="text-gray-400">{"{"}</span>
          </div>

          <div>
            <span className="ml-6 mr-2 text-white">name:</span>
            <span className="text-amber-300">'{project.name}'</span>,
          </div>

          <div>
            <span className="ml-6 mr-2 text-white">tools:</span>
            <span className="text-gray-400">[</span>
            {project.tools.map((tag, i) => (
              <span key={i} className="text-amber-300">
                {tag}
                {i < project.tools.length - 1 && (
                  <span className="text-gray-400">, </span>
                )}
              </span>
            ))}
            <span className="text-gray-400">],</span>
          </div>

          <div>
            <span className="ml-6 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>,
          </div>

          <div>
            <span className="ml-6 mr-2 text-white">description:</span>
            <span className="text-cyan-400">{project.description}</span>,
          </div>

          <div>
            <span className="text-gray-400">{"};"}</span>
          </div>

        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
