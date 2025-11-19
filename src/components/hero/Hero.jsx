"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { DEFAULT_DELAY, slides } from "@/components/hero/slides";
import PlayToggle from "@/components/hero/components/PlayToggle";
import SlideIndicators from "@/components/hero/components/SlideIndicators";
import TrustPanel from "@/components/hero/components/TrustPanel";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [slideDurations, setSlideDurations] = useState({});
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const updateAutoplayDelay = (swiper, index, durations = slideDurations) => {
    if (!swiper?.params?.autoplay) return;
    const delay = durations[index] ?? DEFAULT_DELAY;
    swiper.params.autoplay.delay = delay;
    if (swiper.autoplay.running && playing) {
      swiper.autoplay.stop();
      swiper.autoplay.start();
    }
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((vid) => {
      if (!vid) return;
      try {
        vid.pause();
      } catch {
        /* no-op */
      }
    });
  };

  const playActiveVideo = (index = activeIndex) => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    try {
      vid.currentTime = 0;
      const playPromise = vid.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } catch {
      /* no-op */
    }
  };

  const handleSlideChange = (sw) => {
    const idx = sw?.realIndex ?? sw?.activeIndex ?? 0;
    setActiveIndex(idx);
    setProgress(0);
    updateAutoplayDelay(sw, idx);
    pauseAllVideos();
    playActiveVideo(idx);
  };

  const handleAutoplayTimeLeft = (_, time) => {
    const delay = slideDurations[activeIndex] ?? DEFAULT_DELAY;
    if (!delay) {
      setProgress(0);
      return;
    }
    const elapsed = Math.max(0, delay - time);
    const ratio = Math.min(1, elapsed / delay);
    setProgress(ratio);
  };

  const handleVideoMetadata = (index) => (event) => {
    const rawDuration = event?.currentTarget?.duration;
    const durationMs = Number.isFinite(rawDuration) && rawDuration > 0 ? rawDuration * 1000 : DEFAULT_DELAY;
    setSlideDurations((prev) => {
      if (prev[index] === durationMs) return prev;
      const next = { ...prev, [index]: durationMs };
      if (swiperRef.current && index === activeIndex) {
        updateAutoplayDelay(swiperRef.current, index, next);
      }
      return next;
    });
  };

  const togglePlaying = () => {
    if (!swiperRef.current) return;
    if (playing) {
      swiperRef.current.autoplay.stop();
      pauseAllVideos();
    } else {
      updateAutoplayDelay(swiperRef.current, activeIndex);
      swiperRef.current.autoplay.start();
      playActiveVideo();
    }
    setPlaying((prev) => !prev);
  };

  return (
    <section
      className="relative"
      style={{ minHeight: "var(--hero-height, calc(100vh - var(--header-height, 64px)))" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: DEFAULT_DELAY, disableOnInteraction: false }}
        onSwiper={(sw) => {
          swiperRef.current = sw;
          handleSlideChange(sw);
        }}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        loop
        className="hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`${slide.titleTop}-${idx}`}>
            <div
              className="relative flex items-center bg-black bg-center"
              style={{ height: "var(--hero-height, calc(100vh - var(--header-height, 64px)))" }}
            >
              <div className="hero-video-wrapper" aria-hidden="true">
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={slide.video}
                  className={idx === activeIndex ? "video-diffuse-in" : "video-diffuse-prepare"}
                  muted
                  playsInline
                  loop
                  onLoadedMetadata={handleVideoMetadata(idx)}
                />
              </div>

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(80% 60% at 50% 55%, rgba(var(--color-primary-rgb),0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.6) 100%), linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(var(--color-primary-rgb),0.08) 30%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0) 100%), linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%), linear-gradient(270deg, rgba(0,0,0,0.0) 40%, rgba(var(--color-primary-rgb),0.12) 100%)",
                  backgroundBlendMode: "overlay, normal, normal, normal",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />

              <div className="absolute left-24 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 z-20 md:flex">
                <PlayToggle playing={playing} progress={progress} onToggle={togglePlaying} />

                <SlideIndicators
                  slideCount={slides.length}
                  activeIndex={activeIndex}
                  onSelect={(index) => swiperRef.current?.slideToLoop(index)}
                />
              </div>

              <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 py-6 text-center md:py-10">
                <div className="w-full">
                  <h2
                    className="mx-auto mb-1 max-w-3xl text-[1.488rem] font-medium leading-snug text-white/85 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] md:text-[1.98rem] lg:text-[2.472rem] xl:text-[2.976rem]"
                  >
                    {slide.titleTop}
                  </h2>
                  <h1
                    className="mx-auto mb-4 max-w-2xl text-[1.152rem] font-medium text-white/85 drop-shadow-[0_3px_8px_rgba(0,0,0,0.32)] leading-snug md:text-[1.32rem] lg:text-[1.488rem] xl:text-[1.656rem]"
                  >
                    {slide.titleBottom}
                  </h1>
                  {slide.cta ? (
                    <p
                      className="mx-auto mb-3 max-w-2xl text-[0.83rem] text-white/90 italic md:text-[0.96rem]"
                    >
                      {slide.cta}
                    </p>
                  ) : null}
                  {slide.cta ? (
                    <div
                      className="mx-auto mt-3 h-0 w-24 border-b-2"
                      style={{ borderBottomColor: "var(--color-secondary)" }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="left-1/2 z-30 mx-auto mt-6 w-[92%] max-w-[980px] md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:translate-y-1/2"
      >
        <TrustPanel />
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
