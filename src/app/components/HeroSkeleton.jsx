"use client";

import React from "react";
import Image from "next/image";
import HeroPanel from "./HeroPanel";
import WhatsAppStickyButton from "./client/common/WhatsAppStickyButton";

const firstSlide = {
  titleTop: "Essential Equipment for Exceptional Care",
  titleBottom: "Delivering Quality, Safety, and Efficiency to Hospitals Worldwide",
  cta: "Your partner for a healthier tomorrow",
};

export default function HeroSkeleton() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "var(--hero-height, calc(100vh - var(--header-height, 64px)))",
      }}
    >
      <div
        className="relative flex items-center bg-black bg-center"
        style={{
          height: "var(--hero-height, calc(100vh - var(--header-height, 64px)))",
        }}
      >
        {/* Preview Image instead of Video */}
        <div className="hero-video-wrapper" aria-hidden="true">
          <Image
            src="/preview.png"
            alt="Video preview"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Gradient Overlay (same as Hero) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(80% 60% at 50% 55%, rgba(var(--color-primary-rgb),0.02) 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0.25) 100%),
              linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(var(--color-primary-rgb),0.04) 30%, rgba(0,0,0,0.02) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.18) 100%),
              linear-gradient(270deg, rgba(0,0,0,0.0) 40%, rgba(var(--color-primary-rgb),0.06) 100%)
            `,
            backgroundBlendMode: "overlay, normal, normal, normal",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `
              radial-gradient(80% 60% at 50% 55%, rgba(var(--color-primary-rgb),0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.6) 100%),
              linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(var(--color-primary-rgb),0.08) 30%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%),
              linear-gradient(270deg, rgba(0,0,0,0.0) 40%, rgba(var(--color-primary-rgb),0.12) 100%)
            `,
            backgroundBlendMode: "overlay, normal, normal, normal",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />

        {/* Skeleton Controls (gray circles) */}
        <div className="absolute left-10 lg:left-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-20">
          <div className="w-12 h-12 rounded-full bg-gray-400/40 flex items-center justify-center animate-pulse" />
          <div className="flex flex-col gap-3">
            {[0,1,2,3,4].map((i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full bg-gray-300/60 ${i === 0 ? 'scale-125 ring-2 ring-gray-200/30' : ''} animate-pulse`}
              />
            ))}
          </div>
        </div>

        {/* Text Content (first heading as is, rest as skeleton) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 md:py-10 flex flex-col justify-center items-center text-center h-full">
          <div className="w-full">
            <h2 className="text-[1.488rem] md:text-[1.98rem] lg:text-[2.472rem] xl:text-[2.976rem] font-semibold text-white/85 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] leading-snug mb-1 max-w-3xl mx-auto">
              {firstSlide.titleTop}
            </h2>
            <h1 className="text-[0.92rem] md:text-[1.06rem] lg:text-[1.19rem] xl:text-[1.32rem] font-sm text-white/85 drop-shadow-[0_3px_8px_rgba(0,0,0,0.32)] leading-snug mb-4 max-w-2xl mx-auto">
              {firstSlide.titleBottom}
            </h1>
            {firstSlide.cta && (
              <p className="text-[0.83rem] md:text-[0.96rem] text-white/90 max-w-2xl italic mb-3 mx-auto">
                {firstSlide.cta}
              </p>
            )}
            {firstSlide.cta && (
              <svg width="100" height="10" viewBox="0 0 237 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-3 mx-auto block max-w-full">
                <path d="M5.50098 15.5C80.6343 2.16667 155.768 2.16667 230.901 15.5" stroke="#F95B1C" strokeWidth="11" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Floating Info Panel */}
      <HeroPanel />

      {/* Sticky WhatsApp Button */}
      <WhatsAppStickyButton />
    </section>
  );
}
