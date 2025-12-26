
"use client";
import Header from "./components/client/Header";
import HeroClientWrapper from "./components/HeroClientWrapper";
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

  return (
    <div className="relative min-h-screen">
      <Header />
      <HeroClientWrapper />
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
    </div>
  );
}
