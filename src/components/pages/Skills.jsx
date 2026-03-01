"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

/* ─── Orbit Skill Bubble ─── */
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

/* ─── Mobile skill categories ─── */
const mobileSkills = [
  {
    title: "Frontend",
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
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
    ],
  },
  {
    title: "Languages",
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

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const colors = {
    skillBg: isDark ? "bg-amber-600" : "bg-violet-600",
    skillText: "text-white",
    radialBg: isDark
      ? "repeating-radial-gradient(rgba(245,158,11,0.15) 2px, #0c0a09 8px, #0c0a09 110px)"
      : "repeating-radial-gradient(rgba(124,58,237,0.15) 2px, #faf8f5 5px, #faf8f5 100px)",
  };

  /* ─── Orbit rings ─── */
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

  return (
    <section id="skills" className="py-10 md:py-14 mb-[200px]">
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <span
            className={cls(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
              isDark ? "text-amber-400" : "text-violet-600"
            )}
          >
            Tech Stack
          </span>
          <h2
            className={cls(
              "text-3xl sm:text-4xl md:text-5xl font-bold",
              isDark ? "text-white" : "text-stone-900"
            )}
          >
            Skills
          </h2>
        </div>
      </Container>

      {/* ─── DESKTOP: Eclipse / Orbit Layout ─── */}
      <div className="hidden md:flex w-full h-[50vh] items-center justify-center relative">
        <div
          className="relative rounded-full flex items-center justify-center w-[85vw] h-[45vw]"
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

      {/* ─── MOBILE: Icon Grid ─── */}
      <div className="md:hidden px-5 space-y-10">
        {mobileSkills.map((section, idx) => (
          <div key={idx}>
            <h3
              className={cls(
                "text-center text-lg font-semibold mb-5",
                isDark ? "text-amber-400" : "text-stone-800"
              )}
            >
              {section.title}
            </h3>

            <div className="grid gap-4 place-items-center [grid-template-columns:repeat(auto-fit,minmax(90px,1fr))]">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className={cls(
                    "w-full max-w-[110px] h-[110px] rounded-xl border flex items-center justify-center",
                    isDark
                      ? "bg-stone-900/70 border-stone-700/50"
                      : "bg-white border-stone-200"
                  )}
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
                      className={cls(
                        "text-[11px]",
                        isDark ? "text-white" : "text-stone-800"
                      )}
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
    </section>
  );
};

export default Skills;
