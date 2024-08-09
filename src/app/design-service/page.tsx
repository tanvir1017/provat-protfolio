import HeroSectionDesignService from "@/components/pages/design-service/hero-section/hero-section";
import Specialized from "@/components/pages/design-service/specialized/specilaized";
import React from "react";

const DesignService = () => {
  return (
    <>
      <div id="contact-me-hero" className="relative bg-[var(--dark-purple)] ">
        <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[400px] lg-min:w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 inset-y-28 lg-min:inset-y-96 -inset-x-72 blur-[150px]"></div>

        {/* <Navbar className="py-10" /> */}
        <HeroSectionDesignService />
      </div>
      <Specialized />
    </>
  );
};

export default DesignService;
