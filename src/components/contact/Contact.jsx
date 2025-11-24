"use client";

import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark" || theme === true;

  const [toast, setToast] = useState("");

  const colors = {
    bg: isDark ? "bg-[#05081a]" : "bg-white",
    title: isDark ? "text-[#16f2b3]" : "text-purple-700",
    text: isDark ? "text-gray-300" : "text-gray-700",
    card: isDark
      ? "bg-[#0d1224]/70 border-[#1b2c68a0]"
      : "bg-white border-gray-300",
    inputBg: isDark ? "bg-[#0d1224] text-white" : "bg-gray-100 text-gray-900",
    borderColor: isDark ? "border-[#2b3a7a]" : "border-gray-300",
  };

  //  HANDLE EMAIL SENDING USING EMAILJS
  const handleMailSend = (e) => {
    e.preventDefault();

    setToast("Sending...");

  emailjs.sendForm(
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

  return (
    <section
      id="contact"
      className={`relative py-20 px-6 sm:px-10 lg:px-20 transition-colors duration-300 ${colors.bg}`}
    >
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
          {toast}
        </div>
      )}

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${colors.title}`}>Contact Me</h2>
        <p className={`mt-3 text-base ${colors.text}`}>
          I'm always open to opportunities, collaborations, or questions.
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side (Info) */}
        <div className={`p-6 rounded-xl border shadow-lg ${colors.card}`}>
          <h3 className={`text-2xl font-semibold mb-6 ${colors.title}`}>
            Get in touch
          </h3>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FiMail className={`${colors.title}`} size={24} />
              <a
                href="mailto:javeedshaik7346@gmail.com"
                className={`text-sm sm:text-base font-medium ${colors.text}`}
              >
                javeedshaik7346@gmail.com
              </a>
            </div>


            <div className="flex items-center gap-4">
              <FiGithub className={`${colors.title}`} size={24} />
              <a
                href="https://github.com/javeed999"
                target="_blank"
                className={`text-sm sm:text-base font-medium hover:underline ${colors.text}`}
              >
                github.com/javeed999
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FiLinkedin className={`${colors.title}`} size={24} />
              <a
                href="https://linkedin.com/in/javeed-shaik-37a844315"
                target="_blank"
                className={`text-sm sm:text-base font-medium hover:underline ${colors.text}`}
              >
                linkedin.com/in/javeed-shaik-37a844315
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`p-6 rounded-xl border shadow-lg ${colors.card}`}>
          <h3 className={`text-2xl font-semibold mb-6 ${colors.title}`}>
            Send a message
          </h3>

          <form onSubmit={handleMailSend} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`w-full p-3 rounded-lg border ${colors.borderColor} ${colors.inputBg}`}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`w-full p-3 rounded-lg border ${colors.borderColor} ${colors.inputBg}`}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className={`w-full p-3 rounded-lg border ${colors.borderColor} ${colors.inputBg}`}
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
