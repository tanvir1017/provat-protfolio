import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroSliderPhoto from "./slider";

const HeroSection = () => {
  const brandImageArray = ["10011", "10012", "10014", "10015", "10017"];
  return (
    <>
      <div className="container">
        <div className="grid place-content-center pt-[50px] sm:pt-[100px] md:pt-[150px] lg:pt-[200px]">
          <div className="grid place-items-center gap-y-6">
            <h1 className="hero__text text-[5.75rem] max-w-3xl">
              Let's create a masterpiece
            </h1>
            <h6 className="text-[#ffffffb5] max-w-md text-center">
              Our AI image generation service empowers you to bring your
              creative visions to life like never before.
            </h6>
            <Button className="global__Button__gradient px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out">
              Start Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-hidden px-5 py-10 mb-20 mt-16">
        <HeroSliderPhoto />
      </div>

      <div className="container">
        <div className=" grid place-items-center gap-y-7 pb-44">
          <h5 className="text-[var(--offWhite-3)]">
            WE HELP PEOPLE CREATE ART FOR
          </h5>

          <div className="grid grid-cols-5 gap-x-16">
            {brandImageArray.map((image) => (
              <Image
                key={image}
                src={`/assets/images/${image}.png`}
                height={100}
                width={130}
                alt="Brand that I've work with"
                className="opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
