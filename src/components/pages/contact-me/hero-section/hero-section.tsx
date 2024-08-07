"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSectionContactMe = () => {
  return (
    <>
      <div className="w-[120px] h-[120px] bg-[var(--indigo-5)] rounded-full blur-[80px] opacity-100 absolute right-0 bottom-0"></div>
      <div className="container mt-8 lg-min:mt-0 ">
        <div className="grid grid-cols-1 lg-min:grid-cols-2 place-items-center h-[90dvh] ">
          <div className="author__image z-10">
            <Image
              src="/assets/images/author-.jpg"
              alt=""
              height={100}
              width={200}
              className="rounded-full p-2 bg-transparent lg-min:hidden block"
            />
            <Image
              src="/assets/images/author-.jpg"
              alt=""
              height={100}
              width={300}
              className="rounded-full p-2 bg-transparent lg-min:block hidden"
            />
          </div>
          <div className="author__about text-white -mt-20 ">
            <h1 className="purple_gradient__heading__txt text-[4.5rem] lg-min:text-[7rem] font-medium">
              masterpiece
            </h1>
            <p className="text-lg leading-7 lg-min:leading-10">
              Create your Beautiful Software Company website with our carefully
              designed d Template Kit. This template contains ready-to-use pages
              that feature a beautiful FAQ, Pricing Table etc. It has a 100%
              responsive layout, retina-ready, and very easy to customize. You
              don't need a single line of coding! This temp late kit includes
              stunning carefully crafted 7 stunning templates, you can build
              your professional-looking Business website just a click away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionContactMe;
