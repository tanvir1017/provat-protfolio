"use client";
import * as Theme from "@/components/styled-components/theme";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function HeroSliderPhoto() {
  return (
    <div>
      <Theme.S__SLider breakPoints={swiperBreakPoints}>
        <div className="max-w-full">
          <div className="">
            {swiperSLideImage.map((item) => (
              <SwiperSlide
                key={item.id}
                className="rounded-3xl bg-transparent "
              >
                <Image
                  src={`/assets/images/jursy/${item.image}`}
                  height={80}
                  width={424}
                  priority
                  alt="swiper images"
                  className="rounded-2xl select-none"
                  placeholder="blur"
                  blurDataURL="/assets/images/blur.webp"
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Theme.S__SLider>
    </div>
  );
}

const swiperSLideImage = [
  {
    id: 1,
    image: "jersey-front-strWave.jpg",
  },
  {
    id: 2,
    image: "jersey-back-strWave.jpg",
  },
  {
    id: 3,
    image: "jersey-black-yellow-strWave.jpg",
  },
  {
    id: 4,
    image: "jersey-black-gray-strWave.jpg",
  },
  {
    id: 5,
    image: "jersey-red-white-black-combine-strWave.jpg",
  },
  {
    id: 6,
    image: "jersey-unisex-strWave.jpg",
  },
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
