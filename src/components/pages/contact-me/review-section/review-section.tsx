"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { A11y, Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Quote } from "@/assets/svg/svg-icons";

const ReviewSection = () => {
  return (
    <div
      id="testimonial"
      className="lg-min:h-[60dvh] h-[40dvh] bg-[url(/assets/images/people.jpg)] bg-cover bg-no-repeat bg-center relative overflow-hidden lg-min:py-0"
    >
      <div className="bg-gradient-to-r to-[#d2e66ea4] from-5% from-[#000000ab] absolute w-[100%] h-[100%]"></div>
      {/* Reviews */}
      <div className="flex items-center justify-center h-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay, A11y]}
          autoplay={true}
          className={cn(
            "mySwiper !z-30 h-full lg-min:h-5/6 lg-min:w-1/2 overflow-hidden"
          )}
        >
          {[...Array(3).keys()].map((i: number) => (
            <SwiperSlide key={i} className="cursor-grab">
              <div className="text-white flex items-center !justify-center h-full">
                <div className="flex flex-col items-center gap-y-6 lg-min:gap-y-10">
                  <Quote className="h-20 w-20 lg-min:h-32 lg-min:w-32 rotate-180" />
                  <p className="lg-min:max-w-4xl text-center text-lg lg-min:text-2xl lg-min:font-medium italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore vero, esse, delectus at laborum maxime culpa dolorem
                    repellat hic ut in atque, mollitia voluptates inventore illo
                    voluptatibus? Cum, illum laboriosam.
                  </p>
                  <div className="flex items-center gap-x-3">
                    <Image
                      src="/assets/images/reviewer.png"
                      alt=""
                      height={100}
                      width={50}
                      className="rounded-full border-[#d2e66e] border-[2px]"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">Author Name</h2>
                      <h5 className="text-sm">DESIGNATION</h5>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Reviews */}
    </div>
  );
};

export default ReviewSection;
