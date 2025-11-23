import Hero from "./components/HeroClientWrapper";
// import  SecondSection
import SecondSection from "./components/server/SecondSection";
import ThirdSection from "./components/client/ThirdSection";
import FourthSection from "./components/server/FourthSection";
import FifthSection from "./components/server/FifthSection";
import SixthSection from "./components/server/SixthSection";
import SeventhSection from "./components/server/SeventhSection";
import EighthSection from './components/server/EighthSection';
import NinthSection from './components/server/NinthSection';
import FAQ from "./components/client/FAQ";
import Header from './components/client/Header';
import Footer from './components/client/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <FAQ />
      <Footer/>
    </>
  );
}
