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
    period: "2009 – 2021",
    school: "Viswa Bharathi English Medium High School",
    logo: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    cgpa: "10.0",
    highlight: "Achieved a perfect CGPA of 10.0.",
  },
];

export default function Education() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  return (
    <section
      id="education"
      className="pt-2 pb-6 relative overflow-hidden xl:mt-[190px]"
    >
      {/* Dark mode glows */}
      {isDark && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-cyan-500/25 blur-[130px] rounded-full left-0 top-20"></div>
          <div className="absolute w-80 h-80 bg-purple-600/25 blur-[150px] rounded-full right-0 bottom-20"></div>
        </div>
      )}

      <Container>
        {/* Heading */}
        <div className="text-center mb-10 mt-2">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            Education
          </h2>
          <p 
            className="mt-3 text-base md:text-lg transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            A journey of learning, improvement, and growth
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
              style={{
                backgroundColor: 'var(--edu-card-bg)',
                border: '1px solid var(--edu-card-border)',
                boxShadow: 'var(--edu-card-shadow)',
              }}
            >
              {/* Neon bar */}
              <div
                className="absolute top-0 left-0 w-full h-[4px] rounded-t-2xl"
                style={{
                  background: 'var(--edu-neon-bar)',
                }}
              ></div>

              {/* Logo */}
              <div className="flex justify-center mb-5">
                <img
                  src={edu.logo}
                  alt="school logo"
                  className="w-16 h-16 object-contain opacity-90 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                />
              </div>

              {/* Degree */}
              <h3
                className="text-xl font-semibold text-center mb-1 transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                {edu.degree}
              </h3>

              <p 
                className="text-sm text-center transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {edu.school}
              </p>

              {/* Period */}
              <div className="flex justify-center mt-4">
                <span
                  className="px-4 py-1 rounded-full text-xs font-medium border transition-colors"
                  style={{
                    backgroundColor: 'var(--edu-period-bg)',
                    color: 'var(--edu-period-text)',
                    borderColor: 'var(--edu-period-text)',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              {/* CGPA */}
              <div className="flex justify-center mt-3">
                <span
                  className="px-3 py-[6px] text-xs font-bold rounded-full border transition-colors"
                  style={{
                    backgroundColor: 'var(--edu-cgpa-bg)',
                    color: 'var(--edu-cgpa-text)',
                    borderColor: 'var(--edu-cgpa-text)',
                  }}
                >
                  CGPA: {edu.cgpa}
                </span>
              </div>

              <p
                className="mt-4 text-sm leading-relaxed text-center transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {edu.highlight}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
