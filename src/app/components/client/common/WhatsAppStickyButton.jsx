// WhatsAppStickyButton.jsx
"use client";
import React from "react";
// WhatsApp SVG from Wikimedia
import useWhatsappRedirect from "../../../hooks/useWhatsappRedirect";

export default function WhatsAppStickyButton({ message = "Hello! I would like to know more about your products." }) {
  const redirectToWhatsapp = useWhatsappRedirect();
  return (
    <button
      type="button"
      onClick={() => redirectToWhatsapp(message)}
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-18 right-2 md:right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 md:p-4 flex items-center justify-center transition-colors duration-200 cursor-pointer"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 md:w-8 md:h-8"
        fill="currentColor"
      >
        <path d="M16.003 3.003c-7.18 0-13 5.82-13 13 0 2.302.603 4.547 1.747 6.52L3.01 29l6.66-1.71A12.93 12.93 0 0 0 16.003 29c7.18 0 13-5.82 13-13s-5.82-12.997-13-12.997zm0 23.666c-2.13 0-4.22-.56-6.04-1.62l-.43-.25-3.96 1.02 1.06-3.86-.28-.4A10.93 10.93 0 0 1 5.07 16c0-6.03 4.9-10.93 10.93-10.93 6.03 0 10.93 4.9 10.93 10.93 0 6.03-4.9 10.93-10.93 10.93zm6.01-8.27c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.5.15-.66.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.6 1.18 3.15 1.34 3.37.16.22 2.32 3.55 5.63 4.84.79.34 1.41.54 1.89.69.79.25 1.51.22 2.08.13.64-.1 1.95-.8 2.23-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/>
      </svg>
    </button>
  );
}
