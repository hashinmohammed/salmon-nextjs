"use client";

import dynamic from "next/dynamic";
import HeroSkeleton from "./HeroSkeleton";

const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  loading: () => <HeroSkeleton />,
});

export default function HeroClientWrapper(props) {
  return <Hero {...props} />;
}
