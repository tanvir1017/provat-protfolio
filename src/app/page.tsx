import Home from "@/components/pages/home";
import HeroSection from "@/components/pages/home/hero-section";
import Navbar from "@/components/shared/navbar/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="relative z-10 bg-black bg-[url(/assets/images/hero-bg.png)] bg-center bg-cover hero__section__afterEffects">
        <Navbar />
        <HeroSection />
      </div>
      <Home />
    </div>
  );
}
