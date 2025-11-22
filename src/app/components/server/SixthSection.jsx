import React from "react";
import academyBg from "@/../public/images/academy-bg.png";

function SixthSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat overflow-hidden h-[90vh]"
      style={{
        backgroundImage: `url(${academyBg.src})`,
      }}
    >
      {/* 1. items-center horizontally centers the flex children.
        2. justify-center vertically centers them.
      */}
      <section className="relative z-10 flex flex-col justify-center items-center h-full w-full px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <div className="max-w-4xl w-full text-center">
            <h2 className="mb-4 text-[2rem] md:text-[2.5rem] font-semibold text-white leading-tight drop-shadow-md">
              Empowering the Next Generation<br className="hidden md:block" /> of Healthcare Professionals
            </h2>
            
            {/* Added mx-auto to center the paragraph block itself */}
            <p className="mb-8 text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Salmon Medic bridges the gap between classroom theory and clinical practice. We equip medical universities, nursing colleges, and training institutes with state-of-the-art diagnostic, surgical, and laboratory tools, ensuring students gain hands-on mastery of the technology defining modern healthcare.
            </p>
            
            <div className="mt-2">
              <button className="px-8 py-3 cursor-pointer rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition hover:-translate-y-0.5 transform duration-200">
                Explore Academic Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
    </div>
  );
}

export default SixthSection;