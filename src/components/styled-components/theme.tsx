"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import * as Shadcn from "../ui/button";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css/autoplay";

type ThemeProps = {
  className?: string;
  children?: ReactNode;
};

interface breakPoints {
  breakPoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}

type SliderProps = ThemeProps & breakPoints;

// Used as background for matching the theme context
const PurpleBlurry = ({ children, className }: ThemeProps) => {
  return (
    <div
      className={cn(
        "relative z-10 bg-[var(--dark-purple)] after:content-[''] after:bg-gradient-to-tr after:from-[var(--indigo-5)] after:to-[var(--indigo-5)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[800px] after:h-[800px] after:blur-[280px] after:rounded-full after:-z-10 bg-center bg-cover",
        className
      )}
    >
      {children}
    </div>
  );
};

// Gradient Button with purple and white shade
const PrimaryButton = ({ children, className }: ThemeProps) => {
  return (
    <Shadcn.Button
      className={cn(
        "global__Button__gradient px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </Shadcn.Button>
  );
};

// Purple Button without gradient
const SecondaryButton = ({ children, className }: ThemeProps) => {
  return (
    <Shadcn.Button
      className={cn(
        "bg-[var(--indigo-5)] hover:bg-[var(--indigo-5)]  px-14 py-6 rounded-md relative overflow-hidden tracking-wider transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </Shadcn.Button>
  );
};

const SectionTitle = ({ className, children }: ThemeProps) => {
  return (
    <h3
      className={cn(
        "text-white text-3xl lg-min:text-5xl font-medium",
        className
      )}
    >
      {children}
    </h3>
  );
};

const S__SLider = ({ breakPoints, className, children }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      breakpoints={breakPoints}
      loop={true}
      modules={[FreeMode, Pagination, Autoplay]}
      // pagination={{
      //   clickable: false,
      // }}
      autoplay={true}
      className={cn("mySwiper", className)}
    >
      {children}
    </Swiper>
  );
};
export {
  PurpleBlurry,
  PrimaryButton,
  SecondaryButton,
  SectionTitle,
  S__SLider,
};
