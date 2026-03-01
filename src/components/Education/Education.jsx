"use client";
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

const educationList = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 - 2027",
    school: "RGUKT - RK Valley, Idupulapaya",
    cgpa: "9.4",
    highlight: "Currently maintaining a strong CGPA of 9.4.",
    current: true,
  },
  {
    id: 2,
    degree: "Pre-University Course (PUC)",
    period: "2021 - 2023",
    school: "RGUKT - RK Valley, Idupulapaya",
    cgpa: "9.9",
    highlight: "Completed PUC with outstanding CGPA of 9.9.",
  },
  {
    id: 3,
    degree: "Schooling (SSC)",
    period: "2009 - 2021",
    school: "Viswa Bharathi English Medium High School",
    cgpa: "10.0",
    highlight: "Achieved a perfect CGPA of 10.0.",
  },
];

export default function Education() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  return (
    <section id="education" className="pt-8 pb-12 md:pt-10 md:pb-14 relative overflow-hidden">
      {/* Background glows */}
      {isDark && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-amber-500/8 blur-[130px] rounded-full left-0 top-20" />
          <div className="absolute w-80 h-80 bg-violet-600/8 blur-[150px] rounded-full right-0 bottom-20" />
        </div>
      )}

      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className={cls(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
              isDark ? "text-amber-400" : "text-violet-600"
            )}
          >
            Background
          </span>
          <h2
            className={cls(
              "text-3xl sm:text-4xl md:text-5xl font-bold",
              isDark ? "text-white" : "text-stone-900"
            )}
          >
            Education
          </h2>
          <p
            className={cls(
              "mt-3 text-base max-w-md mx-auto",
              isDark ? "text-stone-400" : "text-stone-500"
            )}
          >
            A journey of learning, improvement, and growth.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div
            className={cls(
              "absolute left-6 md:left-8 top-0 bottom-0 w-px",
              isDark ? "bg-stone-800" : "bg-stone-200"
            )}
          />

          <div className="flex flex-col gap-6">
            {educationList.map((edu) => (
              <div key={edu.id} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={cls(
                    "absolute left-[18px] md:left-[26px] top-2 w-4 h-4 rounded-full border-[3px] z-10",
                    edu.current
                      ? isDark
                        ? "bg-amber-400 border-amber-500/50"
                        : "bg-violet-500 border-violet-300"
                      : isDark
                        ? "bg-stone-700 border-stone-600"
                        : "bg-stone-300 border-stone-200"
                  )}
                />

                {/* Card */}
                <div
                  className={cls(
                    "rounded-xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5",
                    isDark
                      ? "bg-stone-900/60 border-stone-800 hover:border-amber-500/20"
                      : "bg-white border-stone-200 shadow-sm hover:shadow-md"
                  )}
                >
                  {/* Period row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={cls(
                        "text-xs font-medium px-2.5 py-0.5 rounded-full",
                        isDark
                          ? "bg-stone-800 text-stone-400"
                          : "bg-stone-100 text-stone-500"
                      )}
                    >
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span
                        className={cls(
                          "text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",
                          isDark
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-emerald-100 text-emerald-700"
                        )}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h3
                    className={cls(
                      "text-lg font-semibold mb-1",
                      isDark ? "text-white" : "text-stone-900"
                    )}
                  >
                    {edu.degree}
                  </h3>

                  {/* School */}
                  <p
                    className={cls(
                      "text-sm mb-2",
                      isDark ? "text-stone-500" : "text-stone-400"
                    )}
                  >
                    {edu.school}
                  </p>

                  {/* Highlight */}
                  <p
                    className={cls(
                      "text-sm leading-relaxed",
                      isDark ? "text-stone-400" : "text-stone-500"
                    )}
                  >
                    {edu.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
