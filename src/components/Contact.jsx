import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1F3A52] text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow text-gray-800">
          <form className="grid gap-6">
            <input
              className="border p-3 rounded w-full hover:border-[#1F3A52]"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="border p-3 rounded w-full hover:border-[#1F3A52]"
              placeholder="Email Address"
              type="email"
            />
            <textarea
              className="border p-3 rounded w-full hover:border-[#1F3A52]"
              placeholder="Message"
              rows="4"
            ></textarea>
            <button className="bg-[#1F3A52] text-white py-3 rounded hover:bg-blue-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
