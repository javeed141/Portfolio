import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl px-6 mx-auto ${className}`}>{children}</div>
  );
}
