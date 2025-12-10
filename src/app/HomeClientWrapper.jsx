
"use client";
import { useEffect, useState } from "react";
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

  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasVisitedHome");
    }
    return false;
  });

  useEffect(() => {
    if (showLoader) {
      sessionStorage.setItem("hasVisitedHome", "true");
      const timer = setTimeout(() => setShowLoader(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  return (
    <div className="relative min-h-screen">
      {showLoader ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <OurPartners />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EighthSection />
          <NinthSection />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}
