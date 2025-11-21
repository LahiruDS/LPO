import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#1F3A52]">About Us</h2>
          <p className="text-gray-700 leading-7">
            LPO Lanka is a trusted Legal Process Outsourcing provider based in
            Sri Lanka. We support global law firms with professional, timely, and
            cost-effective legal back-office services.
          </p>
          <p className="text-gray-700 mt-4 leading-7">
            Our team consists of highly skilled legal analysts, researchers, and
            documentation specialists dedicated to delivering world-class legal
            solutions.
          </p>
        </div>

        <div>
          <img
            src="https://www.onelegal.com/wp-content/uploads/2024/01/what-to-know-about-being-a-legal-advocate.jpg"
            className="rounded-lg shadow"
            alt="About us"
          />
        </div>
      </div>
    </section>
  );
}
