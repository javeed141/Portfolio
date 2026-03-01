"use client";

import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import Container from "../Container";

const cls = (...args) => args.filter(Boolean).join(" ");

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;
  const [toast, setToast] = useState("");

  const handleMailSend = (e) => {
    e.preventDefault();
    setToast("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setToast("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setToast("Failed to send message. Please try again later.");
      });

    setTimeout(() => setToast(""), 3500);
  };

  const contactLinks = [
    {
      Icon: FiMail,
      label: "javeedshaik7346@gmail.com",
      href: "mailto:javeedshaik7346@gmail.com",
    },
    {
      Icon: FiGithub,
      label: "github.com/javeed141",
      href: "https://github.com/javeed141",
    },
    {
      Icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/javeed-shaik-37a844315",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 transition-colors duration-300">
      {/* Toast */}
      {toast && (
        <div
          className={cls(
            "fixed top-6 right-6 px-5 py-3 rounded-xl shadow-lg z-50 text-sm font-medium",
            toast.includes("success")
              ? "bg-emerald-500 text-white"
              : toast === "Sending..."
                ? isDark ? "bg-stone-800 text-stone-200" : "bg-stone-200 text-stone-700"
                : "bg-red-500 text-white"
          )}
        >
          {toast}
        </div>
      )}

      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <span
            className={cls(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3",
              isDark ? "text-amber-400" : "text-violet-600"
            )}
          >
            Contact
          </span>
          <h2
            className={cls(
              "text-3xl sm:text-4xl md:text-5xl font-bold",
              isDark ? "text-white" : "text-stone-900"
            )}
          >
            Get In Touch
          </h2>
          <p
            className={cls(
              "mt-3 text-base max-w-md mx-auto",
              isDark ? "text-stone-400" : "text-stone-500"
            )}
          >
            I'm always open to opportunities, collaborations, or questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Quick contact links — horizontal row */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {contactLinks.map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={cls(
                  "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-[1.02]",
                  isDark
                    ? "border-stone-800 text-stone-300 hover:border-amber-500/30 hover:text-amber-400"
                    : "border-stone-200 text-stone-600 hover:border-violet-300 hover:text-violet-600 bg-white shadow-sm"
                )}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split("/").pop().split("@")[0]}</span>
              </a>
            ))}
          </div>

          {/* Form card */}
          <div
            className={cls(
              "rounded-2xl p-6 sm:p-8 border",
              isDark
                ? "bg-stone-900/50 border-stone-800"
                : "bg-white border-stone-200 shadow-sm"
            )}
          >
            <form onSubmit={handleMailSend} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={cls(
                    "w-full p-3.5 rounded-xl border text-sm outline-none transition-colors focus:ring-2",
                    isDark
                      ? "bg-stone-900 border-stone-700 text-white placeholder-stone-500 focus:ring-amber-500/30 focus:border-amber-500/50"
                      : "bg-stone-50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-violet-300 focus:border-violet-400"
                  )}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={cls(
                    "w-full p-3.5 rounded-xl border text-sm outline-none transition-colors focus:ring-2",
                    isDark
                      ? "bg-stone-900 border-stone-700 text-white placeholder-stone-500 focus:ring-amber-500/30 focus:border-amber-500/50"
                      : "bg-stone-50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-violet-300 focus:border-violet-400"
                  )}
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className={cls(
                  "w-full p-3.5 rounded-xl border text-sm outline-none transition-colors resize-none focus:ring-2",
                  isDark
                    ? "bg-stone-900 border-stone-700 text-white placeholder-stone-500 focus:ring-amber-500/30 focus:border-amber-500/50"
                    : "bg-stone-50 border-stone-200 text-stone-900 placeholder-stone-400 focus:ring-violet-300 focus:border-violet-400"
                )}
              />

              <button
                type="submit"
                className={cls(
                  "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02]",
                  isDark
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-stone-900"
                    : "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                )}
              >
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
