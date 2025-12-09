"use client";
import React, { useState, useEffect } from "react";
import Preloader from "./components/client/PreLoader";
import Header from "./components/client/Header";
import Hero from "./components/HeroClientWrapper";
import SecondSection from "./components/server/SecondSection";
import ThirdSection from "./components/client/ThirdSection";
import FourthSection from "./components/server/FourthSection";
import FifthSection from "./components/server/FifthSection";
import SixthSection from "./components/server/SixthSection";
import SeventhSection from "./components/server/SeventhSection";
import EighthSection from "./components/server/EighthSection";
import NinthSection from "./components/server/NinthSection";
import FAQ from "./components/client/FAQ";
import Footer from "./components/client/Footer";
import OurPartners from './components/client/OurPartners';

export default function HomeClientWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Main content is ALWAYS in the DOM */}
      <div
        className={
          loading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <Header />
        <Hero />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <OurPartners/>
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <FAQ />
        <Footer />
      </div>

      {/* Preloader overlay – only visual, no layout change */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Preloader />
        </div>
      )}
    </div>
  );
}
