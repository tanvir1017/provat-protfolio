import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroSliderPhoto from "./slider";

const HeroSection = () => {
  const brandImageArray = ["10011", "10012", "10014", "10015", "10017"];
  return (
    <>
      <div className="container">
        <div className="grid place-content-center pt-[50px] sm-min:pt-[100px] md-min:pt-[150px] lg-min:pt-[200px]">
          <div className="grid place-items-center gap-y-6">
            <h1 className="inline-block font-medium text-center bg-cover lg-min:leading-[6rem] leading-[3rem] text-[2.75rem] lg-min:text-[5.75rem] max-w-full lg-min:max-w-3xl hero__text">
              Let's create a masterpiece
            </h1>
            <h6 className="text-[#ffffffb5] max-w-md text-center font-light lg-min:font-normal">
              Our AI image generation service empowers you to bring your
              creative visions to life like never before.
            </h6>
            <Button className="global__Button__gradient px-10 py-2 lg-min:px-14 lg-min:py-6  rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out">
              Start Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-hidden px-5 py-10 lg-min:mb-20 lg-min:mt-16 mt-8">
        <HeroSliderPhoto />
      </div>

      <div className="container">
        <div className=" grid place-items-center gap-y-7 lg-min:pb-44 pb-24">
          <h5 className="text-[var(--offWhite-3)]">
            WE HELP PEOPLE CREATE ART FOR
          </h5>

          <div className="grid grid-cols-3 lg-min:grid-cols-5 gap-x-5 gap-y-2 lg-min:gap-y-0 lg-min:gap-x-16 place-items-center  ">
            {brandImageArray.map((image, i) => (
              <>
                <Image
                  key={i + 1}
                  src={`/assets/images/${image}.png`}
                  height={100}
                  width={130}
                  alt="Brand that I've work with"
                  className="opacity-70 hover:opacity-100 lg-min:block hidden"
                />
                <Image
                  key={i + 1}
                  src={`/assets/images/${image}.png`}
                  height={100}
                  width={80}
                  alt="Brand that I've work with"
                  className="opacity-70 hover:opacity-100 lg-min:hidden block "
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
