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
      <section className="relative z-10 pt-12 pb-0 md:pt-20 md:pb-0 lg:flex overflow-hidden min-h-[60vh] md:min-h-[80vh] max-h-[80vh] lg:items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Image Left */}
            <div className="order-1 md:order-1 flex items-end h-full pb-0">
              <Image
                src={doctorsImage}
                alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="90vw"
                className="w-9/10 h-[54vh] md:h-[72vh] lg:h-[86.4vh] object-cover rounded-lg"
                style={{objectPosition: 'bottom'}}
              />
            </div>
            {/* Content Right */}
            <div className="prose prose-invert max-w-none text-left order-2 md:order-2">
              <p className="mb-2 text-sm font-semibold text-primary">Innovate. Care. Heal. Lead.</p>
              <h2 className="mb-4 text-3xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-[2rem] md:text-[2.5rem]">
                  Elevating Healthcare
                </span>
                <span className="block text-black font-extrabold text-[2rem] md:text-[2.5rem]">
                  through Innovation
                </span>
              </h2>
              <p className="mb-6 text-base text-gray-500">
                Salmon Medic delivers comprehensive hospital equipment and innovative solutions for every medical need. From advanced diagnostic tools to essential surgical instruments, we supply everything required for modern healthcare facilities. Our expert team ensures seamless integration, reliable support, and tailored solutions to help hospitals elevate patient care through the latest technology and trusted service.
              </p>

              <div className="flex justify-start mt-8">
                <button className="px-6 cursor-pointer py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition">Connect Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSection;
