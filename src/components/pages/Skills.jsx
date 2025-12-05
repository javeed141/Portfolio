
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

  // Perfectly balanced skill set
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
<div id="skills" className="pt-2 pb-4 md:py-8">
      {/* TITLE */}
      <h2
        className={`font-bold text-4xl md:text-8xl w-full text-center mb-6 md:mb-[200px] ${colors.title}`}
      >
        Skills
      </h2>

      {/* DESKTOP ORBIT LAYOUT */}
      <div className="hidden md:flex w-full md:h-[70vh] lg:h-[60vh] items-center justify-center relative">
        <div
          className="relative rounded-full flex items-center justify-center w-[90vw] h-[50vw]"
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

      {/* MOBILE GRID (Clean & Compact) */}
      <div className="md:hidden w-full px-6 mt-4">
        <div className="grid grid-cols-2 gap-3">
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
