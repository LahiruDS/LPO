import React from "react";

export default function Services() {
  const items = [
    { title: "Legal Research", desc: "Accurate legal insights and case research." },
    { title: "Contract Drafting", desc: "Professional drafting and reviewing services." },
    { title: "Litigation Support", desc: "Back-office legal support for law firms." },
    { title: "Document Review", desc: "High-quality analysis and verification." },
    { title: "Document Review", desc: "High-quality analysis and verification." },
    { title: "Document Review", desc: "High-quality analysis and verification." },
    { title: "Document Review", desc: "High-quality analysis and verification." },
    { title: "Document Review", desc: "High-quality analysis and verification." },


  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-[#1F3A52]">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#1F3A52]">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
