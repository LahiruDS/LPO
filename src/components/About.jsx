import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#1F3A52]">About Us</h2><br/>
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
            src="https://www.totallylegal.com/getasset/56176023-541f-4fb9-94f4-08772a06096f/"
            className="rounded-lg shadow"
            alt="About us"
          />
        </div>
      </div>
    </section>
  );
}
