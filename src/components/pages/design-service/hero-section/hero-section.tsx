import { Button } from "@/components/ui/button";
import React from "react";

const HeroSectionDesignService = () => {
  return (
    <div className="container z-10">
      <div className="grid place-content-center pt-[50px] sm:pt-[100px] md:pt-[150px] lg:pt-[200px]">
        <div className="grid place-items-center gap-y-6">
          <h1 className="inline-block font-medium text-center bg-cover lg-min:leading-[6rem] leading-[3rem] text-[2.75rem] lg-min:text-[5.75rem] max-w-full lg-min:max-w-3xl hero__text">
            Let's create a masterpiece
          </h1>
          <h6 className="text-[#ffffffb5] max-w-md text-center font-light lg-min:font-normal">
            Our AI image generation service empowers you to bring your creative
            visions to life like never before.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDesignService;
