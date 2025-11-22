import Hero from "./components/HeroClientWrapper";
// import  SecondSection
import SecondSection from "./components/server/SecondSection";
import ThirdSection from './components/client/ThirdSection';
import FourthSection from './components/server/FourthSection';
import FifthSection from './components/server/FifthSection';
import SixthSection from './components/server/SixthSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection/>
    </>
  );
}
