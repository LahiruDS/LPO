import React from "react";

export default function Services() {
  const items = [
    { title: "Sworn Translation", desc: "Official certified translations for legal, academic, and immigration documents." },
    { title: "Legal Document Review", desc: "Fast, accurate review of contracts, agreements, and legal files for errors and compliance." },
    { title: "Litigation Support", desc: "Back-office legal support for law firms." },
    { title: "Contract Drafting", desc: "Professionally drafted and analyzed contracts tailored to business and personal needs." },
    { title: "Legal Research", desc: "Detailed case law, statutory, and regulatory research to support legal matters." },
    { title: "Corporate Compliance", desc: "Company registration, annual filings, and full corporate documentation support." },
    { title: "Legal Transcription", desc: "Accurate transcription of court hearings, interviews, and legal recordings." },
    { title: "Document Digitization", desc: "Scanning, converting, and organizing legal files into secure digital formats." },


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
