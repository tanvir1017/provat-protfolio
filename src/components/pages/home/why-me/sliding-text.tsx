"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export const SlidingText = () => {
  /*     color: #98B854;
    font-family: "Outfit", Sans-serif;
    font-size: 92px;
    font-weight: 500;
    line-height: 101px;
 */
  return (
    <Marquee className="my-10">
      <h3 className="text-[5.75rem] font-medium text-[#ba92ff] select-none">
        realistic photos * abstract art * creative photography * digital art *
        realistic photos * abstract art * creative photography * digital art *
        realistic photos *
      </h3>
    </Marquee>
  );
};
