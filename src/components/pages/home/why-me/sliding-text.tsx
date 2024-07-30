"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export const SlidingText = () => {
  return (
    <Marquee className="py-10">
      <h3 className="lg-min:text-[5.75rem] text-[2.65rem] font-medium text-[#ba92ff] select-none">
        realistic photos * abstract art * creative photography * digital art *
        realistic photos * abstract art * creative photography * digital art *
        realistic photos *
      </h3>
    </Marquee>
  );
};
