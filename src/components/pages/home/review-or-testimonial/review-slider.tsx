"use client";

import * as Theme from "@/components/styled-components/theme";
import { reviewArr } from "@/data/demo-arrays";
import { ReviewArrType } from "@/ts/type";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function ReviewSLider() {
  const swiperBreakPoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <Theme.S__SLider breakPoints={swiperBreakPoints}>
        {reviewArr.map((review: ReviewArrType) => (
          <SwiperSlide
            key={review.image}
            className="bg-white/5 backdrop-blur-sm rounded-xl py-10 px-7 h-full cursor-grab"
          >
            <Image
              src={`/assets/images/reviewer-user.jpg`}
              alt={`${review.name}'s Review`}
              height={60}
              width={60}
              className="rounded-full"
            />
            <div className="flex flex-col text-white text-sm pt-6">
              <p className="text-xl font-light pb-4">"{review.text}"</p>
              <p className="font-semibold text-[#808080] text-base">
                {review.name} - {review.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Theme.S__SLider>
    </>
  );
}
