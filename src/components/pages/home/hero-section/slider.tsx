"use client";
import * as Theme from "@/components/styled-components/theme";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function HeroSliderPhoto() {
  const swiperSLideImage = [
    "jersey-front-strWave.jpg",
    "jersey-back-strWave.jpg",
    "jersey-black-yellow-strWave.jpg",
    "jersey-black-gray-strWave.jpg",
    "jersey-red-white-black-combine-strWave.jpg",
    "jersey-unisex-strWave.jpg",
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
    <div>
      <Theme.S__SLider breakPoints={swiperBreakPoints}>
        <div className="max-w-full">
          <div className="">
            {swiperSLideImage.map((image) => (
              <SwiperSlide key={image} className="rounded-3xl bg-transparent ">
                <Image
                  src={`/assets/images/${image}`}
                  height={80}
                  width={424}
                  alt="swiper images"
                  className="rounded-2xl select-none"
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Theme.S__SLider>
    </div>
  );
}
