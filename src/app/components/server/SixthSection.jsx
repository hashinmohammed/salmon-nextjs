import React from "react";
import WhatsappButton from "../client/common/ConnectUsButton";
import whatsappMessages from "../../data/messagedata";
import academyBg from "@/../public/images/academy-bg.png";

function SixthSection() {
    // Removed client logic; now using ExploreButton client component
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat overflow-hidden h-[70vh] md:h-[90vh]"
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
            <h2 className="mb-6 leading-tight">
              <span className="block text-white font-bold text-2xl md:text-[2.5rem]">
                Empowering the Next Generation
              </span>
              <span className="block text-white font-extrabold text-2xl md:text-[2.5rem]">
                of Healthcare Professionals
              </span>
            </h2>
            
            {/* Added mx-auto to center the paragraph block itself */}
            <p className="mb-8 text-sm md:text-base text-white/90 max-w-[32rem] mx-auto leading-relaxed drop-shadow-sm">
              Salmon Medic bridges the gap between classroom theory and clinical practice. We equip medical universities, nursing colleges, and training institutes with state-of-the-art diagnostic, surgical, and laboratory tools, ensuring students gain hands-on mastery of the technology defining modern healthcare.
            </p>
            
            <div className="mt-2">
              <WhatsappButton color="primary" message={whatsappMessages.sixthSection}>Explore</WhatsappButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
    </div>
  );
}

export default SixthSection;