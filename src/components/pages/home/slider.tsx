"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

export default function HeroSliderPhoto() {
  const swiperSLideImage = [
    "10003",
    "10004",
    "10005",
    "10006",
    "10007",
    "10008",
    "10009",
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <div className="max-w-full">
          <div className="grid grid-cols-4 gap-x-5">
            {swiperSLideImage.map((image) => (
              <SwiperSlide key={image} className="rounded-3xl bg-transparent ">
                <Image
                  src={`/assets/images/${image}.png`}
                  height={80}
                  width={450}
                  alt="swiper images"
                  className="rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </>
  );
}
