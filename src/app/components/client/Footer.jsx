"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" >
      {/* Modern gradient background */}
      {/* Orange background image layer */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <Image
          src="/images/orange-bg.png"
          alt="Footer background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Glassy overlay */}
      {/* <div className="absolute inset-0 w-full h-full -z-10 bg-white/10 backdrop-blur-xl" /> */}
      {/* Logo or brand */}
      <div className="flex items-center justify-center mt-8 md:mt-12">
        {/* <Image src="/images/logo.png" alt="Logo" width={80} height={32} className="object-contain" /> */}
      </div>
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight drop-shadow-lg">
          Stay Connected
        </h2>
        <p className="text-white/80 text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8 max-w-xl">
          Join our community and follow us for updates, news, and more. We’re here to help you level up your health journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 items-center justify-center w-full">
          <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition font-semibold text-base sm:text-lg">
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/salmonmedic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-secondary transition font-semibold text-base sm:text-lg"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            href="https://wa.me/971551421502?text=Hello%20Salmon%20Medic%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-secondary transition font-semibold text-base sm:text-lg"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </div>
      {/* Footer bottom row */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 pb-4 sm:pb-6 text-white text-xs sm:text-sm gap-2">
        <span className="text-center sm:text-left">© 2025 Salmon Medical Equipment Trading LLC. All rights reserved.</span>
        <span className="text-center sm:text-right">
          Crafted by <a href="https://www.hashinpk.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition">Hashin</a> <span role="img" aria-label="rocket">🚀</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;