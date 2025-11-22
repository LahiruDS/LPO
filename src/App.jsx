import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";






function App() {
  return (
    <div className="bg-gray-50 text-[#1F3A52]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

