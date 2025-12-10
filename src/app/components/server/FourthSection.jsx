import React from "react";
import WhatsappButton from "../client/common/ConnectUsButton";
import whatsappMessages from "../../data/messagedata";
import Image from "next/image";
import doctorsImage from "@/../public/images/three-doctors.png";
import whiteBg from "@/../public/images/white-bg.png";

function FourthSection() {
    // Removed client logic; now using ConnectUsButton client component
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${whiteBg.src})` }}
    >
      {/* ❌ Removed height limitations – mobile grows naturally */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex">
        <div className="container mx-auto px-6 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image First on Mobile / Left on Desktop */}
            <div className="order-1 lg:order-1 flex items-end justify-center w-full">
              <Image
                src={doctorsImage}
                alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{ objectPosition: "bottom", display: "block" }}
              />
            </div>

            {/* Content */}
            <div
              className="
                order-2 lg:order-2
                prose prose-invert max-w-none
                text-center lg:text-left
                flex flex-col items-center lg:items-start
                pb-10 lg:pb-0
              "
            >
              <h2 className="mb-6 leading-tight">
                <span className="block text-secondary font-bold text-2xl md:text-[2.5rem]">
                  Elevating Healthcare
                </span>
                <span className="block text-black font-extrabold text-2xl md:text-[2.5rem]">
                  through Innovation
                </span>
              </h2>

              <p className="mb-8 text-sm md:text-base text-gray-600 leading-relaxed max-w-[32rem]">
                Salmon Medic delivers comprehensive hospital equipment and innovative solutions 
                for every medical need. From advanced diagnostic tools to essential surgical instruments, 
                we supply everything required for modern healthcare facilities. Our expert team ensures 
                seamless integration, reliable support, and tailored solutions to help hospitals elevate 
                patient care through the latest technology and trusted service.
              </p>

              <WhatsappButton color="primary" message={whatsappMessages.fourthSection}>Connect Us</WhatsappButton>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSection;
