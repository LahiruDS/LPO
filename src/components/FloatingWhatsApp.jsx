import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp({ phone = "94760764038", message = "Hello! I have a question." }) {
  // wa.me link requires phone without + or dashes e.g. 9477...
  const href = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : "https://web.whatsapp.com/";

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // show bubble briefly on mount to draw attention
    setShowBubble(true);
    const t = setTimeout(() => setShowBubble(false), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex items-end">
      {/* Bubble */}
      <div
        className={`mr-3 mb-2 max-w-xs px-3 py-2 rounded-lg bg-white border shadow-md text-sm text-gray-800 flex items-center space-x-2 transition-opacity duration-200 ${showBubble ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
        role="status"
        aria-live="polite"
      >
        <FaWhatsapp className="w-5 h-5 text-green-600" />
        <span>Contact via WhatsApp!</span>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-150"
      >
        <span className="sr-only">Open WhatsApp chat</span>
        <FaWhatsapp className="w-6 h-6 z-10" />
        {/* small pulse */}
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-50 animate-ping"></span>
      </a>
    </div>
  );
}
