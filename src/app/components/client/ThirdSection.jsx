"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import secondBg from "@/../public/images/second-bg.png";

const cards = [
  { title: "Endoscopy", image: "/images/endoscopy.jpeg" },
  { title: "Surgical", image: "/images/surgical.jpeg" },
  { title: "Veterinary", image: "/images/veterinary.jpeg" },
  { title: "Orthopedic", image: "/images/orthopedic.png" },
  { title: "Laboratory", image: "/images/laboratory.png" },
  { title: "Innovative Solutions", image: "/images/ins.png" },
  { title: "Furniture", image: "/images/furniture.jpeg" },
  { title: "IVF", image: "/images/ivf.png" },
];

function ThirdSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${secondBg.src})`,
        // Ensures the background itself follows the requested height
        minHeight: "80vh",
      }}
    >
      {/* 1. Changed min-h-screen to min-h-[80vh].
        2. Added py-12 to ensure safe spacing on mobile without forcing it too tall.
        3. justify-center handles the vertical centering automatically.
      */}
      <section className="relative z-10 flex flex-col justify-center items-center min-h-[80vh] px-4 py-12">
        
        {/* Reduced top padding here since flex-col centers it */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-2 text-[2rem] md:text-[2.5rem] font-semibold text-white leading-tight text-center">
            Total Health Care<br />Solutions
          </h2>
          {/* Reduced mb-8 to mb-6 to tighten space */}
          <p className="mb-6 text-base text-white/80 max-w-2xl text-center leading-snug">
            Salmon Medic offers Endoscopy, Surgical, Orthopedic, Academic & Innovative, Laboratory and IVF solutions with procurement, installation, training and after-sales support.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={1200}
            allowTouchMove={false}
            className="services-swiper"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="pb-8 pt-4"> 
              {/* Added pt/pb to slide to allow shadow to show without cutting off */}
                <div className="flex flex-col justify-end bg-white/90 rounded-2xl shadow-lg border-12 border-white p-0 mx-auto
                  min-h-[300px] h-full max-w-xs transition-transform duration-300 hover:scale-105">
                  {/* Reduced min-h from 340px to 300px to fit 80vh better */}
                  
                  <div className="relative w-full h-full rounded-xl overflow-hidden flex-1">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 pointer-events-none primary-gradient" />
                    <div className="absolute bottom-0 left-0 w-full py-3 px-2 flex items-center justify-center">
                      <h3 className="text-lg font-bold text-white mb-0 text-center w-full shadow-black drop-shadow-md">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Adjusted margin top */}
          <div className="flex justify-center mt-4">
            <button className="px-8 py-3 cursor-pointer rounded-lg bg-secondary text-white font-semibold shadow-lg hover:bg-primary-dark transition hover:-translate-y-0.5">
              Know More
            </button>
          </div>
        </div>
      </section>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
    </div>
  );
}

export default ThirdSection;