"use client";
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
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "../../lib/analytics";
import DATA from "../data/productData";
import { Hospital, FlaskConical, PawPrint, GraduationCap } from "lucide-react";

function CategoryButtons() {
  const navigate = useNavigate();
  const cats = DATA.slice(0, 4);
  const ICONS = {
    hospital: Hospital,
    laboratory: FlaskConical,
    veterinary: PawPrint,
    academic: GraduationCap,
  };

  const onClick = (key, label) => {
    try {
      trackButtonClick(`Hero: Quick Nav -> ${label}`);
    } catch {
      /* ignore analytics errors */
    }
    navigate(`/product?cat=${encodeURIComponent(key)}`);
  };

  return (
    <div
      className="mt-6 flex mx-auto gap-2 max-w-[400px] justify-center items-center"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {cats.map((c) => {
        const displayLabel = c.key === "academic" ? "Academic" : c.label;
        const Icon = ICONS[c.key];
        return (
          <button
            key={c.key}
            onClick={() => onClick(c.key, displayLabel)}
            aria-label={`Go to ${displayLabel} products`}
            className="lg:min-w-[120px] mx-auto h-16 sm:h-20 bg-white/5 backdrop-blur-sm px-2 text-white rounded-md border text-[0.6rem] sm:text-[0.7rem] hover:bg-white/10 hover:brightness-150 flex flex-col items-center justify-center gap-0.5 p-0.5 hover:text-orange-500 hover:cursor-pointer hover:border-orange-500"
            style={{ borderColor: "white" }}
          >
            {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />}
            <span className="font-medium text-white/95 text-center">
              {displayLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

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
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <circle
                      cx="28"
                      cy="28"
                      r="20"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="20"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={Math.PI * 2 * 20}
                      strokeDashoffset={(1 - progress) * Math.PI * 2 * 20}
                      transform="rotate(-90 28 28)"
                      style={{
                        transition: "stroke-dashoffset 200ms linear",
                        stroke: "var(--color-secondary)",
                      }}
                    />
                    {playing ? (
                      <>
                        <rect
                          x="25"
                          y="23"
                          width="2.5"
                          height="10"
                          rx="0.5"
                          fill="white"
                        />
                        <rect
                          x="31"
                          y="23"
                          width="2.5"
                          height="10"
                          rx="0.5"
                          fill="white"
                        />
                      </>
                    ) : (
                      <path d="M27 22 L36 28 L27 34 Z" fill="white" />
                    )}
                  </svg>
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
                    className="text-[1.488rem] md:text-[1.98rem] lg:text-[2.472rem] xl:text-[2.976rem] font-medium text-white/85 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] leading-snug mb-1 max-w-3xl mx-auto"
                    data-aos="fade-right"
                    data-aos-delay="80"
                  >
                    {s.titleTop}
                  </h2>
                  <h1
                    className="text-[1.152rem] md:text-[1.32rem] lg:text-[1.488rem] xl:text-[1.656rem] font-sm text-white/85 drop-shadow-[0_3px_8px_rgba(0,0,0,0.32)] leading-snug mb-4 max-w-2xl mx-auto"
                    data-aos="fade-left"
                    data-aos-delay="160"
                  >
                    {s.titleBottom}
                  </h1>
                  {s.cta ? (
                    <p
                      className="text-[0.83rem] md:text-[0.96rem] text-white/90 max-w-2xl italic mb-3 mx-auto"
                      data-aos="fade-up"
                      data-aos-delay="240"
                    >
                      {s.cta}
                    </p>
                  ) : null}
                  {s.cta ? (
                    <div
                      className="mt-3 w-24 h-0 mx-auto border-b-2"
                      style={{ borderBottomColor: "var(--color-secondary)" }}
                    />
                  ) : null}

                  <CategoryButtons />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="left-1/2 w-[92%] max-w-[980px] z-30 mx-auto md:absolute md:left-1/2 md:bottom-0 md:transform md:-translate-x-1/2 md:translate-y-1/2 mt-6 md:mt-0"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div className="panel-primary p-4 md:p-6 -mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start text-sm md:text-base">
            <div className="flex flex-col">
              <span
                className="panel-label mb-1"
                style={{ color: "var(--color-secondary)" }}
              >
                Trust
              </span>
              <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
                Built on Relationships
              </h3>
              <p className="panel-copy text-white/60">
                Long-standing partnerships with hospitals and
                clinics—transparent pricing, clear SLAs, and responsive local
                support.
              </p>
            </div>

            <div
              className="flex flex-col border-t-0 md:border-l md:border-r border-dashed px-0 md:px-3"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <span
                className="panel-label mb-1"
                style={{ color: "var(--color-secondary)" }}
              >
                Credibility
              </span>
              <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
                Regulatory & Vendor-Backed
              </h3>
              <p className="panel-copy text-white/60">
                CE/FDA-compliant products, manufacturer warranties, and
                documented service records—trusted by clinicians and procurement
                officers.
              </p>
            </div>

            <div className="flex flex-col">
              <span
                className="panel-label mb-1"
                style={{ color: "var(--color-secondary)" }}
              >
                Quality
              </span>
              <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
                Performance You Can Rely On
              </h3>
              <p className="panel-copy text-white/60">
                Rigorous QA, certified calibration, and field-proven reliability
                to ensure accurate diagnostics and uninterrupted care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
