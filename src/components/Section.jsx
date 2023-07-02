import React from "react";

export default function Section({ children, title, sectionRef, className }) {
  return (
    <section className={`mt-6 p-8 ${className ?? ""}`} ref={sectionRef}>
      <h6 className="text-4xl font-semibold text-gray-300 mb-10">{title}</h6>
      {children}
    </section>
  );
}
