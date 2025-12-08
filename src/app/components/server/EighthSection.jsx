import React from "react";
import CommonButton from "../client/common/CommonButton";
import Image from "next/image";
import securityImage from "@/../public/images/security.png";
import whiteBg from "@/../public/images/white-bg.png";

function EighthSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${whiteBg.src})` }}
    >
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[60vh] md:min-h-[80vh]">
        <div className="container mx-auto px-6 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Left (Mobile: Bottom - order-2) */}
            <div
              className="order-2 lg:order-1 prose prose-invert max-w-none
                text-center lg:text-left
                flex flex-col items-center lg:items-start
                pb-12 lg:pb-0"
            >
              <h2 className="mb-6 text-2xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-2xl md:text-[2.5rem] leading-tight">
                  Uncompromising Safety
                </span>
                <span className="block text-black font-extrabold text-2xl md:text-[2.5rem] leading-tight">
                  For Every Workspace
                </span>
              </h2>
              <p className="mb-8 text-sm md:text-base text-gray-600 leading-relaxed max-w-[32rem]">
                Salmon Medic goes beyond standard healthcare to safeguard your professional environment. We provide a comprehensive range of industrial safety materials and regulatory-compliant first aid solutions tailored for modern workspaces. From essential protective gear to fully stocked emergency response kits, we ensure your team is prepared for any situation, prioritizing employee well-being and operational continuity.
              </p>

              <div className="flex justify-center lg:justify-start">
                <CommonButton color="primary">
                  Connect Us
                </CommonButton>
              </div>
            </div>

            {/* Image Right (Mobile: Top - order-1) */}
            <div className="order-1 lg:order-2 flex items-end justify-center h-full w-full mt-auto">
              <Image
                src={securityImage}
                alt="Workplace safety professionals"
                width={1940}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{
                  objectPosition: 'bottom',
                  display: 'block' 
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default EighthSection;