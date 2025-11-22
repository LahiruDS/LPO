import React, { useState } from "react";
import SignUpModal from "./SignupModal";

export default function Hero() {

    // Sign-up modal state
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

    const handleSignUp = (data) => {
    // For demo: set user from sign-up data and close modal. Replace with real sign-up flow as needed.
    setUser({ name: (data.firstName || data.email || "User"), photoUrl: data.photoUrl || "" });
    setIsLoggedIn(true);
    setShowSignUp(false);
  };


  return (
    <>
      <section className="pt-32 pb-20 bg-[#1F3A52] text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Legal Process Outsourcing in Sri Lanka
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          High-quality, reliable, and cost-effective legal services for global
          firms. Trusted by law professionals worldwide.
        </p>
        <button onClick={handleOpenSignUp} className="mt-6 px-6 py-3 bg-white text-[#1F3A52] font-semibold rounded shadow hover:bg-gray-200">
          Get Started
        </button>
      </section>

      <SignUpModal isOpen={showSignUp} onClose={handleCloseSignUp} onSignUp={handleSignUp} />
    </>
  );
}
