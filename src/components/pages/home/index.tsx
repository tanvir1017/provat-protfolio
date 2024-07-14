import React from "react";
import HeroSection from "./hero-section/hero-section";
import { NavbarWithHome } from "@/components/shared/navbar/navbar";
import WhyMe from "./why-me/why-me";

const Home = () => {
  return (
    <>
      {/* Navbar with hero section */}

      <div className="relative z-10 bg-black after:content-['hello'] after:bg-gradient-to-tr after:from-indigo-500/65 after:to-indigo-800/55 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[800px] after:h-[800px] after:rounded-full after:blur-[280px] after:-z-10 bg-center bg-cover hero__section__afterEffects">
        <NavbarWithHome />
        <HeroSection />
      </div>
      {/* Navbar with hero section */}

      {/* Why Me section */}
      <WhyMe />
      {/* Why Me section */}
    </>
  );
};

export default Home;
