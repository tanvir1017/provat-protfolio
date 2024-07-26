"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { ReviewArrType } from "@/ts/type";
import { reviewArr } from "@/data/demo-arrays";

export default function ReviewSLider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="max-w-full">
          <div className="grid grid-cols-3 place-content-stretch gap-3">
            {reviewArr.map((review: ReviewArrType) => (
              <SwiperSlide
                key={review.image}
                className="bg-white/5 backdrop-blur-sm rounded-xl py-10 px-7 !h-[380px] cursor-grab"
              >
                <Image
                  src={`/assets/images/${review.image}.png`}
                  alt={`${review.name}'s Review`}
                  height={60}
                  width={60}
                />
                <div className="flex flex-col text-white text-sm pt-6">
                  <p className="text-xl font-light pb-4">"{review.text}"</p>
                  <p className="font-semibold text-[#808080] text-base">
                    {review.name} - {review.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </>
  );
}
