import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-black/30">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Shaik Javeed — Built with React & Tailwind.
      </div>
    </footer>
  );
}
