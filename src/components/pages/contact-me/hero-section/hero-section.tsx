"use client";
import Image from "next/image";
import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSectionContactMe = () => {
  return (
    <div>
      <div
        id="contact-me-hero"
        className="relative overflow-hidden bg-[var(--dark-purple)] after:content-[''] after:bg-gradient-to-tr after:from-[#6437ea] after:to-[#6437ea] after:absolute after:top-[35%] after:-left-[150px] after:blur-[180px] after:w-[800px] after:h-[800px] after:rounded-full after:z-10"
      >
        {/* <div className="w-[520px] h-[520px] bg-[var(--indigo-5)] rounded-full filter blur-[80px] opacity-100 absolute bottom-0"></div> */}
        <div className="container ">
          <div className="grid grid-cols-2 place-items-center h-[90vh] ">
            <div className="author__image !z-20">
              <Image
                src="/assets/images/author.png"
                alt=""
                height={100}
                width={300}
                className="rounded-full"
              />
            </div>
            <div className="author__about text-white">
              <h1 className="contact__heading__txt text-[7rem] font-medium">
                masterpiece
              </h1>
              <p className="text-lg leading-10">
                Create your Beautiful Software Company website with our
                carefully designe d Template Kit. This template contains
                ready-to-use pages that feature a bea utiful FAQ, Pricing Table
                etc. It has a 100% responsive layout, retina-ready, and very
                easy to customize. You don't need a single line of coding! This
                temp late kit includes stunning carefully crafted 7 stunning
                templates, you can build your professional-looking Business
                website just a click away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionContactMe;
