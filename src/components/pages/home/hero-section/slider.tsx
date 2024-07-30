"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import * as Theme from "@/components/styled-components/theme";

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
  const swiperBreakPoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <Theme.S__SLider breakPoints={swiperBreakPoints}>
        <div className="max-w-full">
          <div className="">
            {swiperSLideImage.map((image) => (
              <SwiperSlide key={image} className="rounded-3xl bg-transparent ">
                <Image
                  src={`/assets/images/${image}.png`}
                  height={80}
                  width={424}
                  alt="swiper images"
                  className="rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Theme.S__SLider>
    </>
  );
}
