import HeroSectionDesignService from "@/components/pages/design-service/hero-section/hero-section";
import Specialized from "@/components/pages/design-service/specialized/specilaized";
import { Navbar } from "@/components/shared/navbar/navbar";
import * as Theme from "@/components/styled-components/theme";
import React from "react";

const DesignService = () => {
  return (
    <>
      <div
        id="contact-me-hero"
        className="relative overflow-hidden bg-[var(--dark-purple)]  h-screen"
      >
        <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] absolute -bottom-[20%] -left-[150px]  w-[700px] h-[800px] rounded-[50%] rotate-[270deg] blur-[150px]"></div>
        <Navbar className="!z-20" />
        <HeroSectionDesignService />
        <Specialized />
      </div>
    </>
  );
};

export default DesignService;
