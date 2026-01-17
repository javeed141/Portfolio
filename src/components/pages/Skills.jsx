
// "use client";

// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import ThemeContext from "../../context/ThemeContext";

// const Skill = ({ name, x, y, colors }) => (
//   <motion.div
//     className={`flex items-center justify-center rounded-full font-semibold py-3 px-6 cursor-pointer absolute shadow-md ${colors.skillBg} ${colors.skillText}`}
//     initial={{ opacity: 0, x: 0, y: 0 }}
//     whileInView={{ opacity: 1, x, y }}
//     transition={{ duration: 1.3 }}
//     viewport={{ once: true }}
//   >
//     {name}
//   </motion.div>
  
// );

// const Skills = () => {
//   const { theme } = useContext(ThemeContext);
//   const isDark = theme === "dark";

//   const colors = {
//     title: isDark ? "text-[#9BE7FF]" : "text-gray-900",
//     skillBg: isDark ? "bg-[#4C2AFF]" : "bg-[#333]",
//     skillText: "text-white",
//     radialBg: isDark
//       ? "repeating-radial-gradient(rgba(76,42,255,0.25) 2px, #0C0C24 8px, #0C0C24 110px)"
//       : "repeating-radial-gradient(rgba(0,0,0,0.3) 2px, #fafafa 5px, #fafafa 100px)",
//   };
// const mobileSkills = [
//   {
//     title: "Front-End ()",
//     items: [
//       { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
//       { name: "CSS", icon: "https://cdn.simpleicons.org/css3" },
//       { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
//       { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
//       { name: "React", icon: "https://cdn.simpleicons.org/react" },
//       { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
//       { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
//     ],
//   },
//   {
//     title: "Back-End ()",
//     items: [
//       { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
//       { name: "Express", icon: "https://cdn.simpleicons.org/express" },
//       { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
//       { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
//     ],
//   },
//   {
//     title: "Programming ()",
//     items: [
//       { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
//       { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
//     ],
//   },
//   {
//     title: "Tools ()",
//     items: [
//       { name: "Git", icon: "https://cdn.simpleicons.org/git" },
//       { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
//       { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
//       { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
//     ],
//   },
// ];

//   // Perfectly balanced skill set
//   const ring1 = [
//     { name: "React.js", x: "12vw", y: "-8vw" },
//     { name: "Node.js", x: "-12vw", y: "-8vw" },
//     { name: "LangChain", x: "-15vw", y: "6vw" },
//     { name: "MongoDB", x: "15vw", y: "6vw" },
//   ];

//   const ring2 = [
//     { name: "RAG", x: "24vw", y: "-2vw" },
//     { name: "Chatbots", x: "20vw", y: "14vw" },
//     { name: "Express.js", x: "-20vw", y: "14vw" },
//     { name: "JavaScript", x: "-24vw", y: "-2vw" },
//   ];

//   const ring3 = [
//     { name: "Supabase", x: "0vw", y: "-20vw" },
//     { name: "TailwindCSS", x: "0vw", y: "22vw" },
//   ];

//   return (
// <div id="skills" className="pt-2 pb-4 md:py-8">
//       {/* TITLE */}
//       <h2
//         className={`font-bold text-4xl md:text-8xl w-full text-center mb-6 md:mb-[200px] ${colors.title}`}
//       >
//         Skills
//       </h2>

//       {/* DESKTOP ORBIT LAYOUT */}
//       <div className="hidden md:flex w-full md:h-[70vh] lg:h-[60vh] items-center justify-center relative">
//         <div
//           className="relative rounded-full flex items-center justify-center w-[90vw] h-[50vw]"
//           style={{ background: colors.radialBg }}
//         >
//           {/* Center Sun */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className={`flex items-center justify-center rounded-full p-8 font-semibold shadow-lg ${colors.skillBg} ${colors.skillText}`}
//           >
//             Developer
//           </motion.div>

//           {/* Ring 1 */}
//           {ring1.map((s, i) => (
//             <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
//           ))}

//           {/* Ring 2 */}
//           {ring2.map((s, i) => (
//             <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
//           ))}

//           {/* Ring 3 */}
//           {ring3.map((s, i) => (
//             <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
//           ))}
//         </div>
//       </div>

//       {/* MOBILE GRID (Clean & Compact) */}
//      {/* MOBILE SKILLS SECTION */}
// {/* MOBILE TECH STACK (POLISHED) */}
// {/* MOBILE SKILLS – FIXED ALIGNMENT */}
// {/* MOBILE SKILLS – DESKTOP-INSPIRED, PERFECTLY ALIGNED */}
// <div className="md:hidden w-full px-4 mt-12 space-y-14">
//   {mobileSkills.map((section, idx) => (
//     <div key={idx}>
//       {/* Section Title */}
//       <h3
//         className={`text-center text-lg font-semibold mb-6 ${
//           isDark ? "text-[#9BE7FF]" : "text-gray-900"
//         }`}
//       >
//         {section.title}
//       </h3>

//       {/* Grid */}
//       <div className="grid grid-cols-3 gap-5 justify-items-center">
//         {section.items.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -4, scale: 1.03 }}
//             whileTap={{ scale: 0.96 }}
//             transition={{ type: "spring", stiffness: 160 }}
//             className={`
//               w-[96px] h-[96px]
//               rounded-2xl
//               flex items-center justify-center
//               border
//               ${isDark
//                 ? "bg-[#140b24] border-white/10 shadow-[0_0_18px_rgba(155,231,255,0.12)]"
//                 : "bg-white border-gray-200 shadow-sm"}
//             `}
//           >
//             {/* Inner */}
//             <div className="flex flex-col items-center justify-center gap-2">
//               {/* Icon */}
//               <div className="w-10 h-10 flex items-center justify-center">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="max-w-full max-h-full object-contain"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Label */}
//               <span
//                 className={`text-[11px] font-medium text-center truncate w-[80px] ${
//                   isDark ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 {skill.name}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>




//     </div>
    
//   );
// };

// export default Skills;
"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

/* -------------------- ORBIT SKILL -------------------- */
const Skill = ({ name, x, y, colors }) => (
  <motion.div
    className={`absolute flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-md ${colors.skillBg} ${colors.skillText}`}
    initial={{ opacity: 0, x: 0, y: 0 }}
    whileInView={{ opacity: 1, x, y }}
    transition={{ duration: 1.3 }}
    viewport={{ once: true }}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const colors = {
    title: isDark ? "text-[#9BE7FF]" : "text-gray-900",
    skillBg: isDark ? "bg-[#4C2AFF]" : "bg-[#333]",
    skillText: "text-white",
    radialBg: isDark
      ? "repeating-radial-gradient(rgba(76,42,255,0.25) 2px, #0C0C24 8px, #0C0C24 110px)"
      : "repeating-radial-gradient(rgba(0,0,0,0.25) 2px, #fafafa 5px, #fafafa 100px)",
  };

  /* -------------------- DESKTOP ORBIT DATA -------------------- */
  const ring1 = [
    { name: "React.js", x: "12vw", y: "-8vw" },
    { name: "Node.js", x: "-12vw", y: "-8vw" },
    { name: "LangChain", x: "-15vw", y: "6vw" },
    { name: "MongoDB", x: "15vw", y: "6vw" },
  ];

  const ring2 = [
    { name: "LangGraph", x: "24vw", y: "-2vw" },
    { name: "AutoGen", x: "20vw", y: "14vw" },
    { name: "Express.js", x: "-20vw", y: "14vw" },
    { name: "JavaScript", x: "-24vw", y: "-2vw" },
  ];

  const ring3 = [
    { name: "Supabase", x: "0vw", y: "-20vw" },
    { name: "Python", x: "0vw", y: "22vw" },
  ];

  /* -------------------- MOBILE SKILLS (UNCHANGED) -------------------- */
  const mobileSkills = [
    {
      title: "Front-End",
      items: [
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
      ],
    },
    {
      title: "Back-End",
      items: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
      ],
    },
    {
      title: "Programming",
      items: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "Java", icon: "/java.png" },
      ],
    },
    {
      title: "Generative AI",
      items: [
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "LangGraph", icon: "https://cdn.simpleicons.org/langgraph" },
        { name: "AutoGen", icon: "/autogen.png" },
      ],
    },
  ];

  return (
    <div id="skills" className="pt-6 pb-16">
      {/* TITLE */}
      <h2 className={`font-bold text-4xl md:text-8xl text-center mb-12 md:mb-[180px] ${colors.title}`}>
        Skills
      </h2>

      {/* ==================== DESKTOP ORBIT ==================== */}
      <div className="hidden md:flex w-full h-[65vh] items-center justify-center relative">
        <div
          className="relative rounded-full flex items-center justify-center w-[90vw] h-[50vw]"
          style={{ background: colors.radialBg }}
        >
          {/* Center */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center justify-center rounded-full p-8 font-semibold shadow-lg ${colors.skillBg} ${colors.skillText}`}
          >
            Developer
          </motion.div>

          {ring1.map((s, i) => (
            <Skill key={`r1-${i}`} {...s} colors={colors} />
          ))}
          {ring2.map((s, i) => (
            <Skill key={`r2-${i}`} {...s} colors={colors} />
          ))}
          {ring3.map((s, i) => (
            <Skill key={`r3-${i}`} {...s} colors={colors} />
          ))}
        </div>
      </div>

      {/* ==================== MOBILE GRID (UNCHANGED) ==================== */}
      <div className="md:hidden px-5 space-y-14">
        {mobileSkills.map((section, idx) => (
          <div key={idx}>
            <h3
              className={`text-center text-lg font-semibold mb-6 ${
                isDark ? "text-[#9BE7FF]" : "text-gray-800"
              }`}
            >
              {section.title}
            </h3>

            <div className="grid gap-4 place-items-center [grid-template-columns:repeat(auto-fit,minmax(90px,1fr))]">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className={`w-full max-w-[110px] h-[110px] rounded-xl border flex items-center justify-center ${
                    isDark
                      ? "bg-[#0C0C24]/70 border-white/10"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={
                        skill.icon.startsWith("/")
                          ? skill.icon
                          : `${skill.icon}?color=${isDark ? "FFFFFF" : "000000"}`
                      }
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span
                      className={`text-[11px] ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
