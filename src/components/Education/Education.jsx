"use client";
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";
import { BsMortarboard, BsBuildings } from "react-icons/bs";

const educationList = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – 2027",
    school: "RGUKT – RK Valley, Idupulapaya",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    cgpa: "9.4",
    highlight: "Currently maintaining a strong CGPA of 9.4.",
  },
  {
    id: 2,
    degree: "Pre-University Course (PUC)",
    period: "2021 – 2023",
    school: "RGUKT – RK Valley, Idupulapaya",
    logo: "https://cdn-icons-png.flaticon.com/512/4413/4413600.png",
    cgpa: "9.9",
    highlight: "Completed PUC with outstanding CGPA of 9.9.",
  },
  {
    id: 3,
    degree: "Schooling (SSC)",
    period: "2008 – 2021",
    school: "Viswa Bharathi English Medium High School",
    logo: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    cgpa: "10.0",
    highlight: "Achieved a perfect CGPA of 10.0.",
  },
];

export default function Education() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  // ⚡ Attractive modern dark-mode palette
  const colors = {
    title: isDark ? "text-white" : "text-gray-900",
    subtitle: isDark ? "text-gray-300" : "text-gray-600",

    // Light mode remains same, Dark mode gets neon glass upgrade
    cardBg: isDark
      ? "bg-[#0b0f1f]/80 backdrop-blur-xl border border-[#233269]/50 shadow-[0_0_20px_rgba(0,255,255,0.07)]"
      : "bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md",

    neonBar: isDark
      ? "from-cyan-400 via-blue-500 to-purple-500"
      : "from-purple-500 to-pink-500",

    cgpaBg: isDark ? "bg-[#141c38]/70" : "bg-purple-100",
    cgpaText: isDark ? "text-purple-300" : "text-purple-700",

    periodBg: isDark ? "bg-cyan-500/15" : "bg-cyan-200",
    periodText: isDark ? "text-cyan-300" : "text-cyan-800",
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* 🎇 Dark mode neon glows */}
      {isDark && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-cyan-500/25 blur-[130px] rounded-full left-0 top-20"></div>
          <div className="absolute w-80 h-80 bg-purple-600/25 blur-[150px] rounded-full right-0 bottom-20"></div>
        </div>
      )}

      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight ${colors.title}`}
          >
            Education
          </h2>
          <p className={`mt-3 text-base md:text-lg ${colors.subtitle}`}>
            A journey of learning, improvement, and growth
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className={`relative rounded-2xl p-6 transition duration-300 hover:-translate-y-2 ${colors.cardBg}`}
            >
              {/* Neon bar top */}
              <div
                className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${colors.neonBar} rounded-t-2xl`}
              ></div>

              {/* Dummy Logo */}
              <div className="flex justify-center mb-5">
                <img
                  src={edu.logo}
                  alt="school logo"
                  className="w-16 h-16 object-contain opacity-90 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                />
              </div>

              <h3 className={`text-xl font-semibold text-center mb-1 ${colors.title}`}>
                {edu.degree}
              </h3>

              <p className={`text-sm text-center ${colors.subtitle}`}>
                {edu.school}
              </p>

              <div className="flex justify-center mt-4">
                <span
                  className={`px-4 py-1 rounded-full text-xs font-medium border ${colors.periodBg} ${colors.periodText}`}
                >
                  {edu.period}
                </span>
              </div>

              {/* CGPA Badge */}
              <div className="flex justify-center mt-3">
                <span
                  className={`px-3 py-[6px] text-xs font-bold rounded-full border ${colors.cgpaBg} ${colors.cgpaText}`}
                >
                  CGPA: {edu.cgpa}
                </span>
              </div>

              <p className={`mt-4 text-sm leading-relaxed text-center ${colors.subtitle}`}>
                {edu.highlight}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
