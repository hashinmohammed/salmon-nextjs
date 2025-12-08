import React from "react";
import CommonButton from "../client/common/CommonButton";
import Image from "next/image";
import ladyWithAnimalImage from "@/../public/images/lady-with-animal.png";
import tealBg from "@/../public/images/teal-bg.png";

function SeventhSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${tealBg.src})` }}
    >
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[60vh] md:min-h-[80vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 h-full">
            
            {/* --- IMAGE SECTION (Now Left on Desktop) --- */}
            {/* 1. Changed lg:order-2 to lg:order-1 (First on desktop) 
               2. Changed lg:justify-end to lg:justify-start (Aligns left)
            */}
            <div className="order-2 lg:order-1 flex items-end justify-center lg:justify-start w-full h-full mt-auto">
              <Image
                src={ladyWithAnimalImage}
                alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{
                  objectPosition: "bottom",
                  maxWidth: "100%",
                }}
              />
            </div>

            {/* --- CONTENT SECTION (Now Right on Desktop) --- */}
            {/* 1. Changed lg:order-1 to lg:order-2 (Second on desktop) 
            */}
            <div
              className="order-1 lg:order-2 prose prose-invert max-w-none
                text-center lg:text-left
                flex flex-col items-center lg:items-start
                text-white pb-8 lg:pb-20"
            >
              <h2 className="mb-4 text-2xl md:text-4xl leading-tight text-white">
                <span className="block font-semibold text-2xl md:text-[2.5rem] text-white leading-tight">
                  Complete Veterinary Equipment
                </span>
                <span className="block font-semibold text-2xl md:text-[2.5rem] text-white leading-tight">
                  & Integrated Solutions
                </span>
              </h2>
              <div className="mb-6">
                {/* Directly using stroke.svg markup */}
                <svg width="100" height="10" viewBox="0 0 237 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto lg:mx-0">
                  <path d="M5.50098 15.5C80.6343 2.16667 155.768 2.16667 230.901 15.5" stroke="#F95B1C" strokeWidth="11" strokeLinecap="round" />
                </svg>
              </div>
              <p className="mb-8 text-sm md:text-base text-white leading-relaxed opacity-90 max-w-[32rem]">
                Salmon Medical Solutions is your dedicated partner in animal healthcare, 
                delivering a comprehensive range of equipment tailored specifically for 
                veterinary departments. From advanced surgical units and diagnostic 
                imaging systems to essential daily supplies, we provide every solution 
                needed to run a modern clinic. Our goal is to empower veterinary professionals 
                with the tools required to deliver superior care, ensuring efficiency, 
                safety, and compassion in every treatment.
              </p>
              <div className="flex justify-center lg:justify-start">
                <CommonButton color="secondary">
                  Contact Us
                </CommonButton>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default SeventhSection;