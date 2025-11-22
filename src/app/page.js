import Hero from "./components/HeroClientWrapper";
// import  SecondSection
import SecondSection from "./components/server/SecondSection";
import ThirdSection from './components/client/ThirdSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SecondSection />
      <ThirdSection/>
    </>
  );
}
