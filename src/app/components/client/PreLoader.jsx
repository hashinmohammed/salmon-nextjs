"use client";

import React from "react";
import Image from "next/image";


const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background image using Next.js Image */}
      <Image
        src="/images/teal-bg.png"
        alt="Background"
        fill
        className="object-cover absolute inset-0 -z-10"
        priority
      />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={240}
          height={96}
          className="mx-auto object-contain w-30 h-12 lg:w-60 lg:h-24 filter brightness-0 invert"
          priority
        />
        {/* SVG Progress Bar Loader */}
        <div className="mt-6 flex items-center justify-center w-full">
          <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="2" width="120" height="8" rx="2" fill="white" opacity="0.8" />
            <rect x="0" y="2" width="0" height="8" rx="2" fill="#F95B1C" opacity="1">
              <animate attributeName="width" values="0;120;0" dur="5s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </div>
    </div>
  );
};



export default Preloader;
