// "use client";

// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import ThemeContext from "../../context/ThemeContext";

// const Skill = ({ name, x, y, colors }) => (
//   <motion.div
//     className={`flex items-center justify-center rounded-full font-semibold py-3 px-6 cursor-pointer absolute shadow-md ${colors.skillBg} ${colors.skillText} pointer-events-auto`}
//     initial={{ x: 0, y: 0, opacity: 0 }}
//     whileInView={{ x: x, y: y, opacity: 1 }}
//     transition={{ duration: 1.5 }}
//     viewport={{ amount: 0.3 }}
//   >
//     {name}
//   </motion.div>
// );

// const Skills = () => {
//   const { theme } = useContext(ThemeContext);
//   const isDark = theme === "dark" || theme === true;

//   const colors = {
//     title: isDark ? "text-[#9BE7FF]" : "text-gray-900",
//     skillBg: isDark ? "bg-[#4C2AFF]" : "bg-dark",
//     skillText: "text-white",
//     radialBg: isDark
//       ? "repeating-radial-gradient(rgba(76,42,255,0.25) 2px, #0C0C24 8px, #0C0C24 110px)"
//       : "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
//   };

//   const skillList = [
//     "HTML",
//     "CSS",
//     "Javascript",
//     "ReactJS",
//     "NextJS",
//     "GatsbyJS",
//     "Web Design",
//     "Figma",
//     "Firebase",
//     "Tailwind CSS",
//   ];

//   return (
//     <div id="skills">
//      <h2
//   className={`font-bold text-6xl md:text-8xl mt-20  w-full text-center mb-12 ${colors.title}`}
// >
//   Skills
// </h2>


//       {/* Desktop circular layout */}
//       <div className="hidden md:flex w-full h-screen items-center justify-center pointer-events-none">
//         <div
//           className="w-[85vw] h-[55vw] rounded-full flex items-center justify-center relative"
//           style={{ background: colors.radialBg }}
//         >
//           <motion.div
//             className={`flex items-center justify-center rounded-full font-semibold p-8 shadow-md cursor-pointer ${colors.skillBg} ${colors.skillText} pointer-events-auto`}
//             whileHover={{ scale: 1.05 }}
//           >
//             Web
//           </motion.div>

//           <Skill name="HTML" x="-20vw" y="0vw" colors={colors} />
//           <Skill name="CSS" x="-5vw" y="-10vw" colors={colors} />
//           <Skill name="Javascript" x="20vw" y="6vw" colors={colors} />
//           <Skill name="ReactJS" x="0vw" y="12vw" colors={colors} />
//           <Skill name="NextJS" x="-20vw" y="-15vw" colors={colors} />
//           <Skill name="GatsbyJS" x="15vw" y="-12vw" colors={colors} />
//           <Skill name="Web Design" x="32vw" y="-5vw" colors={colors} />
//           <Skill name="Figma" x="0vw" y="-20vw" colors={colors} />
//           <Skill name="Firebase" x="-25vw" y="18vw" colors={colors} />
//           <Skill name="Tailwind CSS" x="18vw" y="18vw" colors={colors} />
//         </div>
//       </div>

//       {/* Mobile stacked layout */}
//       <div className="flex md:hidden w-full justify-center px-6">
//         <div className="grid grid-cols-2 gap-4 w-full max-w-md">
//           {skillList.map((skill, i) => (
//             <div
//               key={i}
//               className={`text-center py-3 font-semibold rounded-lg shadow-md ${colors.skillBg} ${colors.skillText}`}
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";

const Skill = ({ name, x, y, colors }) => (
  <motion.div
    className={`flex items-center justify-center rounded-full font-semibold py-3 px-6 cursor-pointer absolute shadow-md ${colors.skillBg} ${colors.skillText}`}
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
      : "repeating-radial-gradient(rgba(0,0,0,0.3) 2px, #fafafa 5px, #fafafa 100px)",
  };

  // 🔥 Perfect Balanced Set of 10 Skills
  const ring1 = [
    { name: "React.js", x: "12vw", y: "-8vw" },
    { name: "Node.js", x: "-12vw", y: "-8vw" },
    { name: "LangChain", x: "-15vw", y: "6vw" },
    { name: "MongoDB", x: "15vw", y: "6vw" },
  ];

  const ring2 = [
    { name: "RAG", x: "24vw", y: "-2vw" },
    { name: "Chatbots", x: "20vw", y: "14vw" },
    { name: "Express.js", x: "-20vw", y: "14vw" },
    { name: "JavaScript", x: "-24vw", y: "-2vw" },
  ];

  const ring3 = [
    { name: "Supabase", x: "0vw", y: "-20vw" },
    { name: "TailwindCSS", x: "0vw", y: "22vw" },
  ];

  return (
    <div id="skills" className="py-10">
      <h2
        className={`font-bold text-6xl md:text-8xl mt-20 w-full text-center mb-[90px] ${colors.title}`}
      >
        Skills
      </h2>

      {/* Desktop Orbit Layout */}
      <div className="hidden md:flex w-full h-screen items-center justify-center relative">
        <div
          className="relative rounded-full flex items-center justify-center w-[90vw] h-[60vw]"
          style={{ background: colors.radialBg }}
        >
          {/* Center Sun */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center justify-center rounded-full p-8 font-semibold shadow-lg ${colors.skillBg} ${colors.skillText}`}
          >
            Developer
          </motion.div>

          {/* Ring 1 */}
          {ring1.map((s, i) => (
            <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
          ))}

          {/* Ring 2 */}
          {ring2.map((s, i) => (
            <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
          ))}

          {/* Ring 3 */}
          {ring3.map((s, i) => (
            <Skill key={i} name={s.name} x={s.x} y={s.y} colors={colors} />
          ))}
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden w-full px-6">
        <div className="grid grid-cols-2 gap-4">
          {[...ring1, ...ring2, ...ring3].map((s, i) => (
            <div
              key={i}
              className={`text-center py-3 font-semibold rounded-lg shadow-md ${colors.skillBg} ${colors.skillText}`}
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
