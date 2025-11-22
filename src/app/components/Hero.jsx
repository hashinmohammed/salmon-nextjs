"use client";
import HeroPanel from "./HeroPanel";
import PlayPauseIcon from "./PlayPauseIcon";
import React, { useState, useRef } from "react";
// Using Tailwind CSS utility classes instead of a separate CSS file

// Swiper imports (ensure `swiper` is installed: npm install swiper)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Use public videos for Next.js
const v1 = "/videos/v1.mp4";
const v2 = "/videos/v2.mp4";
const v3 = "/videos/v3.mp4";
const v4 = "/videos/v4.mp4";
const v5 = "/videos/v5.mp4";


const slides = [
  {
    titleTop: "Essential Equipment for Exceptional Care",
    titleBottom:
      "Delivering Quality, Safety, and Efficiency to Hospitals Worldwide",
    cta: "Your partner for a healthier tomorrow",
    video: v2,
  },
  {
    titleTop: "Innovative Solutions for Academic Excellence",
    titleBottom: "Empowering Education with State-of-the-Art Products",
    cta: "Your partner for a healthier tomorrow",
    video: v3,
  },
  {
    titleTop: "Comprehensive care for animal health",
    titleBottom: "Leading Veterinary Products for Every Need",
    cta: "one heartbeat at a time.",
    video: v4,
  },
  {
    titleTop: "Advanced solutions for modern laboratories",
    titleBottom: "Precision, Reliability, and Innovation in Every Product",
    cta: "Discover tailored laboratory solutions",
    video: v1,
  },
  {
    titleTop: "First Aid & Emergency Readiness",
    titleBottom:
      "Essential first-aid kits, training, and supplies for immediate response",
    cta: "Prepared when it matters most",
    video: v5,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);


  const handleSlideChange = (sw) => {
    const idx = sw.realIndex ?? sw.activeIndex;
    setActiveIndex(idx);
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      try {
        if (i === idx) {
          vid.currentTime = 0;
          const p = vid.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          vid.pause();
        }
      } catch {
        /* ignore playback errors */
      }
    });
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((vid) => {
      if (!vid) return;
      try {
        vid.pause();
      } catch {
        /* ignore playback errors */
      }
    });
  };

  const playActiveVideo = (idx = activeIndex) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;
    try {
      vid.currentTime = 0;
      const p = vid.play();
      if (p && p.catch) p.catch(() => {});
    } catch {
      /* ignore playback errors */
    }
  };

  const togglePlaying = () => {
    if (!swiperRef.current) return;
    if (playing) {
      swiperRef.current.autoplay.stop();
      pauseAllVideos();
    } else {
      swiperRef.current.autoplay.start();
      playActiveVideo();
    }
    setPlaying(!playing);
  };

  return (
    <section
      className="relative"
      style={{
        minHeight:
          "var(--hero-height, calc(100vh - var(--header-height, 64px)))",
      }}
    >
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={(sw, time, p) => setProgress(p)}
        loop
        className="hero-swiper"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative flex items-center bg-black bg-center"
              style={{
                height:
                  "var(--hero-height, calc(100vh - var(--header-height, 64px)))",
              }}
            >
              <div className="hero-video-wrapper" aria-hidden="true">
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={s.video}
                  className={`${
                    idx === activeIndex
                      ? "video-diffuse-in"
                      : "video-diffuse-prepare"
                  }`}
                  muted
                  playsInline
                  loop
                />
              </div>

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(80% 60% at 50% 55%, rgba(var(--color-primary-rgb),0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.6) 100%), linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(var(--color-primary-rgb),0.08) 30%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%), linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%), linear-gradient(270deg, rgba(0,0,0,0.0) 40%, rgba(var(--color-primary-rgb),0.12) 100%)`,
                  backgroundBlendMode: "overlay, normal, normal, normal",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />

              <div className="absolute left-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-20">
                <button
                  aria-label={playing ? "Pause autoplay" : "Start autoplay"}
                  onClick={togglePlaying}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white/90"
                >
                  <PlayPauseIcon playing={playing} progress={progress} />
                </button>

                <div className="flex flex-col gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => swiperRef.current?.slideToLoop(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        i === activeIndex ? "bg-white scale-125" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-6 md:py-10 flex flex-col justify-center items-center text-center h-full">
                <div className="w-full">
                  <h2
                    className="text-[1.488rem] md:text-[1.98rem] lg:text-[2.472rem] xl:text-[2.976rem] font-semibold text-white/85 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] leading-snug mb-1 max-w-3xl mx-auto"
                  >
                    {s.titleTop}
                  </h2>
                  <h1
                    className="text-[0.92rem] md:text-[1.06rem] lg:text-[1.19rem] xl:text-[1.32rem] font-sm text-white/85 drop-shadow-[0_3px_8px_rgba(0,0,0,0.32)] leading-snug mb-4 max-w-2xl mx-auto"
                  >
                    {s.titleBottom}
                  </h1>
                  {s.cta ? (
                    <p
                      className="text-[0.83rem] md:text-[0.96rem] text-white/90 max-w-2xl italic mb-3 mx-auto"
                    >
                      {s.cta}
                    </p>
                  ) : null}
                    {s.cta ? (
                      <>
                        <svg width="100" height="10" viewBox="0 0 237 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-3 mx-auto" style={{display: 'block', maxWidth: '100%'}}>
                          <path d="M5.50098 15.5C80.6343 2.16667 155.768 2.16667 230.901 15.5" stroke="#F95B1C" strokeWidth="11" strokeLinecap="round" />
                        </svg>
                      </>
                    ) : null}

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static panel moved to server component */}
      <HeroPanel />
    </section>
  );
}
