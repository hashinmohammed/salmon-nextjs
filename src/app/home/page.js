import Hero from "@/components/hero/Hero";
import SecondSection from "@/components/SecondSection/SecondSection";

export const metadata = {
  title: "Home",
  description: "Front page spotlighting our hero carousel and forthcoming content platform.",
};

export default function HomeRoute() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <SecondSection />
    </main>
  );
}
