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
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${secondBg.src})`,
        minHeight: "80vh",

      }}
    >
      <section className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center pt-16 md:pt-24">
          <h2 className="mb-4 text-[2rem] md:text-[2.5rem] font-semibold text-white leading-tight text-center">
            Total Health Care<br />Solutions
          </h2>
          <p className="mb-8 text-base text-white/80 max-w-2xl text-center">
            Salmon Medic offers Endoscopy, Surgical, Orthopedic, Academic & Innovative, Laboratory and IVF solutions with procurement, installation, training and after-sales support.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={1200}
            allowTouchMove={false}
            className="services-swiper"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col justify-end bg-white/90 rounded-2xl shadow-lg min-h-[340px] h-full max-w-xs mx-auto border-12 border-white p-0">
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
                      <h3 className="text-lg font-bold text-white mb-0 text-center w-full">{card.title}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination" />
          </Swiper>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 cursor-pointer rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary-dark transition">Know More</button>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 bg-black/40 z-0" />
    </div>
  );
}

export default ThirdSection;
