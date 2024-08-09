"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroSliderPhoto from "./slider";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const brandImageArray = ["10011", "10012", "10014", "10015", "10017"];
  const router = useRouter();

  return (
    <>
      <div className="container lg-min:pt-[12.585rem] pt-[200px]">
        <div className="grid place-content-center">
          <div className="grid place-items-center gap-y-3 lg-min:gap-y-6 isolate z-0">
            <h1 className="inline-block font-medium text-center bg-cover lg-min:leading-[6rem] leading-[2rem] text-[1.7rem] lg-min:text-[5.75rem] max-w-full lg-min:max-w-5xl hero__text py-2.5">
              Finest Jersey Design and Manufacturing solution
            </h1>
            <h6 className="text-[#ffffffb5] max-w-md text-center font-light lg-min:font-normal">
              Whether you're a sports team, an organization or a company we're
              here to provide superior service.
            </h6>
            <Button
              onClick={() => router.push("/contact-me")}
              className="global__Button__gradient px-10 py-2 lg-min:px-14 lg-min:py-6 rounded-full relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out"
            >
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
          <h5 className="text-[var(--offWhite-3)] uppercase">
            We successfully worked fo
          </h5>

          <div className="grid grid-cols-3 lg-min:grid-cols-5 gap-x-5 gap-y-2 lg-min:gap-y-0 lg-min:gap-x-16 place-items-center  ">
            {brandImageArray.map((image) => (
              <>
                <Image
                  src={`/assets/images/${image}.png`}
                  height={100}
                  width={130}
                  priority
                  alt="Brand that I've work with"
                  className="opacity-70 hover:opacity-100 lg-min:block hidden"
                />
                <Image
                  src={`/assets/images/${image}.png`}
                  height={100}
                  width={80}
                  priority
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
