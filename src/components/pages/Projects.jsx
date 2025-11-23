// "use client";
// import React from "react";
// import { projectsData } from "./projects-data"; // adjust path if needed

// const Projects = () => {
//   return (
//     <div
//       id="projects"
//       className="relative my-12 lg:my-24 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="w-full max-w-5xl mx-auto">

//         {/* STICKY HEADING */}
//         <div className="sticky top-16 sm:top-20 z-40 mb-8 sm:mb-10 flex items-center justify-center pointer-events-none">
//           <span className="bg-[#1a1443] text-white px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-2xl rounded-md pointer-events-auto">
//             PROJECTS
//           </span>
//         </div>

//         {/* PROJECT CARDS */}
//         <div className="pt-2 sm:pt-4">
//           <div className="flex flex-col gap-6 lg:gap-8">

//             {projectsData.map((project, index) => (
//               <div
//                 key={index}
//                 className="sticky top-32 sm:top-40 w-full mx-auto max-w-xl sm:max-w-2xl z-0"
//               >
//                 <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
//                   {/* Project Card */}
//                   <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
                    
//                     {/* Top thin gradient bar */}
//                     <div className="flex flex-row">
//                       <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
//                       <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
//                     </div>

//                     {/* Header */}
//                     <div className="px-4 sm:px-6 lg:px-8 py-3 lg:py-5 relative">
//                       <div className="flex flex-row space-x-1 lg:space-x-2 absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2">
//                         <span className="h-3 w-3 rounded-full bg-red-400" />
//                         <span className="h-3 w-3 rounded-full bg-orange-400" />
//                         <span className="h-3 w-3 rounded-full bg-green-200" />
//                       </div>
//                       <p className="text-center ml-10 text-[#16f2b3] text-sm sm:text-base lg:text-xl">
//                         {project.name}
//                       </p>
//                     </div>

//                     {/* Code-styled body */}
//                     <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//                       <code className="font-mono text-[0.7rem] xs:text-xs md:text-sm lg:text-base leading-relaxed">
//                         <div>
//                           <span className="text-pink-500">const</span>{" "}
//                           <span className="text-white">project</span>{" "}
//                           <span className="text-pink-500">=</span>{" "}
//                           <span className="text-gray-400">{"{"}</span>
//                         </div>

//                         <div className="mt-1">
//                           <span className="ml-6 text-white mr-2">name:</span>
//                           <span className="text-amber-300">'{project.name}'</span>
//                           <span className="text-gray-400">,</span>
//                         </div>

//                         <div className="mt-1">
//                           <span className="ml-6 text-white mr-2">tools:</span>
//                           <span className="text-gray-400">[</span>
//                           {project.tools.map((t, i) => (
//                             <span key={i} className="text-amber-300">
//                               {i > 0 && <span className="text-gray-400">, </span>}
//                               '{t}'
//                             </span>
//                           ))}
//                           <span className="text-gray-400">],</span>
//                         </div>

//                         <div className="mt-1">
//                           <span className="ml-6 text-white mr-2">myRole:</span>
//                           <span className="text-orange-400">{project.role}</span>
//                           <span className="text-gray-400">,</span>
//                         </div>

//                         <div className="mt-1">
//                           <span className="ml-6 text-white mr-2">description:</span>
//                           <span className="text-cyan-400">
//                             {project.description}
//                           </span>
//                           <span className="text-gray-400">,</span>
//                         </div>

//                         <div className="mt-1">
//                           <span className="text-gray-400">{"};"}</span>
//                         </div>
//                       </code>
//                     </div>
//                   </div>
//                   {/* END Project Card */}
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";
import { projectsData } from "./projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="relative my-12 lg:my-24 z-10">
      {/* STICKY HEADING */}
      <div className="sticky top-14 z-30">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>

<div className="flex justify-center relative pointer-events-none">
  <span className="bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md pointer-events-auto">
    PROJECTS
  </span>
</div>

      </div>

      {/* SCROLL SECTION WITH STICKY CARDS */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sticky top-32 w-full mx-auto max-w-2xl z-0"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.25)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
