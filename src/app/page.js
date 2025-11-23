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

export default function Home() {
  return (
    <>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection/>
    </>
  );
}
