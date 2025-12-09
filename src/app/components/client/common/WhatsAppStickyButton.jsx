// WhatsAppStickyButton.jsx
"use client";
import React from "react";
import { Phone } from "lucide-react";
import useWhatsappRedirect from "../../../hooks/useWhatsappRedirect";

export default function WhatsAppStickyButton({ message = "Hello! I would like to know more about your products." }) {
  const redirectToWhatsapp = useWhatsappRedirect();
  return (
    <button
      type="button"
      onClick={() => redirectToWhatsapp(message)}
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200 cursor-pointer"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
    >
      <Phone size={32} />
    </button>
  );
}
