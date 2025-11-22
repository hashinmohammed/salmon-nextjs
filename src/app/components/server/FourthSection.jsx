import React from "react";
import Image from "next/image";
import doctorsImage from "@/../public/images/three-doctors.png";
import whiteBg from "@/../public/images/white-bg.png";

function FourthSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${whiteBg.src})` }}
    >
      {/* 1. Removed 'max-h-[80vh]' and 'overflow-hidden' to allow content to grow on mobile.
         2. Changed 'lg:items-center' to 'lg:items-end' is often better if the image needs to sit on the floor, 
            but here we use grid alignment to handle that inside the columns.
      */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[60vh] md:min-h-[80vh]">
        <div className="container mx-auto px-6 flex flex-col justify-end">
          {/* Changed breakpoint to lg:grid-cols-2 to prevent squished text on tablets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Left (Mobile: Top) */}
            <div className="order-1 lg:order-1 flex items-end justify-center h-full w-full mt-auto">
              <Image
                src={doctorsImage}
                alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{
                  objectPosition: 'bottom',
                  // Ensures image doesn't float mid-air if the text column is taller
                  display: 'block' 
                }}
              />
            </div>

            {/* Content Right (Mobile: Bottom) */}
            <div className="prose prose-invert max-w-none text-left order-2 lg:order-2 pb-12 lg:pb-0">
              {/* <p className="mb-2 text-sm font-semibold text-primary uppercase tracking-wide">
                Innovate. Care. Heal. Lead.
              </p> */}
              <h2 className="mb-6 text-3xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-3xl md:text-[2.5rem] leading-tight">
                  Elevating Healthcare
                </span>
                <span className="block text-black font-extrabold text-3xl md:text-[2.5rem] leading-tight">
                  through Innovation
                </span>
              </h2>
              <p className="mb-8 text-base text-gray-600 leading-relaxed">
                Salmon Medic delivers comprehensive hospital equipment and innovative solutions for every medical need. From advanced diagnostic tools to essential surgical instruments, we supply everything required for modern healthcare facilities. Our expert team ensures seamless integration, reliable support, and tailored solutions to help hospitals elevate patient care through the latest technology and trusted service.
              </p>

              <div className="flex justify-start">
                <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all transform hover:-translate-y-0.5 duration-200">
                  Connect Us
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSection;