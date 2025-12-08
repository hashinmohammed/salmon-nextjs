
import React from "react";
import useWhatsappRedirect from "../../hooks/useWhatsappRedirect";
import whatsappMessages from "../../data/messagedata";
import CommonButton from "../client/common/CommonButton";
import microBg from "@/../public/images/micro-bg.png";

function NinthSection() {
  const redirectToWhatsapp = useWhatsappRedirect();

  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat overflow-hidden h-[90vh]"
      style={{
        backgroundImage: `url(${microBg.src})`,
      }}
    >
      {/* 1. items-center horizontally centers the flex children.
        2. justify-center vertically centers them.
      */}
      <section className="relative z-10 flex flex-col justify-center items-center h-full w-full px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <div className="max-w-4xl w-full text-center flex flex-col items-center">
            <h2 className="mb-4 text-2xl md:text-[2.5rem] font-semibold text-white leading-tight drop-shadow-md">
              Advanced Microbiology &<br className="hidden md:block" /> Industrial Equipment Solutions
            </h2>
            <p className="mb-8 text-sm md:text-lg text-white/90 max-w-[32rem] mx-auto leading-relaxed drop-shadow-sm">
              Salmon Medical Solutions delivers precision and reliability for critical scientific and industrial applications. We provide state-of-the-art microbiology equipment and comprehensive industrial solutions, ensuring laboratories and manufacturing facilities are equipped with the technology needed for superior quality control and operational efficiency.
            </p>
            <div className="mt-2 flex justify-center w-full">
              <CommonButton color="primary" onClick={() => redirectToWhatsapp(whatsappMessages.ninthSection)}>
                Explore
              </CommonButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
    </div>
  );
}

export default NinthSection;