import React, { useState, useEffect } from "react";
// ADD THIS LINE: Import the WhatsApp icon
import { FaWhatsapp } from "react-icons/fa"; 
import SignInModal from "./SignInModal";
import SignUpModal from "./SignupModal";


export default function Navbar() {
  // 1. Placeholder State for Authentication
  // In a real app, this would come from global state (Context/Redux) or a hook
  // Start as logged out so a full page reload shows the logged-out UI
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    photoUrl: "", // Placeholder photo URL
  });

  // On first mount, clear common auth persistence so reloads show logged-out state.
  useEffect(() => {
    try {
      // Remove common auth keys - adjust if your app uses different keys
      localStorage.removeItem("token");
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    } catch (e) {
      // ignore storage errors
      console.warn("Could not clear auth from localStorage:", e);
    }
    // force logged-out UI
    setIsLoggedIn(false);
  }, []);

  // Placeholder functions for demonstration
  const handleLogout = () => {
    // In a real app: clear JWT, update global state, redirect
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  // Modal state for sign-in
  const [showSignIn, setShowSignIn] = useState(false);

  const handleOpenSignIn = () => setShowSignIn(true);
  const handleCloseSignIn = () => setShowSignIn(false);

  const handleSignIn = (newUser) => {
    // For demo: set in-memory user and close modal. Do NOT persist to localStorage here.
    setUser({ name: newUser.name || "User", photoUrl: newUser.photoUrl || "" });
    setIsLoggedIn(true);
    setShowSignIn(false);
  };

  // Sign-up modal state
  const [showSignUp, setShowSignUp] = useState(false);
  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleSignUp = (data) => {
    // For demo: set user from sign-up data and close modal. Replace with real sign-up flow as needed.
    setUser({ name: (data.firstName || data.email || "User"), photoUrl: data.photoUrl || "" });
    setIsLoggedIn(true);
    setShowSignUp(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-1 flex justify-between items-center">
        
        {/* Logo/Brand */}
        <a href="/">
          <img src="LPO2.png" alt="Logo" className="w-32 h-15" />
        </a>

        {/* Main Navigation Links (Hidden on small screens) */}
        <div className="space-x-6 font-medium hidden md:block">
          <a href="https://sworn-translator-five.vercel.app/" className="hover:text-blue-700">
            Sworn Translator
          </a>
          <a href="#services" className="hover:text-blue-700">
            Services
          </a>
          <a href="#about" className="hover:text-blue-700">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-700">
            Contact
          </a>
        </div>
        
        {/* 2. Authentication and User Profile Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            // === LOGGED IN STATE: Show Photo/Avatar ===
            <div className="relative group">
              <button className="flex items-center focus:outline-none">
                {/* User Photo */}
                <img
                  src={user.photoUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 cursor-pointer"
                />
              </button>
              
              {/* Dropdown Menu (Hidden by default, shown on hover/focus) */}
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-xl py-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="px-4 py-2 text-sm text-gray-700 truncate">
                    Signed in as: <span className="font-semibold">{user.name}</span>
                </div>
                <hr className="my-1"/>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // === LOGGED OUT STATE: Show Login/Sign Up Buttons ===
            <div className="space-x-2">
              <button onClick={handleOpenSignIn} className="text-gray-600 hover:text-blue-700 font-medium px-3 py-1">
                Login
              </button>
              <button onClick={handleOpenSignUp} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
      {/* SignIn Modal */}
      <SignInModal isOpen={showSignIn} onClose={handleCloseSignIn} onSignIn={handleSignIn} />
      {/* SignUp Modal */}
      <SignUpModal isOpen={showSignUp} onClose={handleCloseSignUp} onSignUp={handleSignUp} />
    </nav>
  );
}