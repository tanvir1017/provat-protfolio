"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const HeroSectionShop = () => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="container isolate z-0 min-h-[57.5dvh] grid place-content-center lg-min:pt-36 pt-[200px]">
      <motion.div
        initial="initial"
        animate="visible"
        variants={{
          initial: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid place-items-center gap-y-6"
      >
        <motion.h1
          variants={childVariants}
          className="inline-block font-medium text-center lg-min:leading-[6rem] leading-[3rem] text-[2.75rem] lg-min:text-[5.75rem] max-w-full lg-min:max-w-4xl hero__text"
        >
          Where Imagination Meets Reality
        </motion.h1>
        <motion.h6
          variants={childVariants}
          className="text-[#ffffffb5] max-w-md text-center font-light lg-min:font-normal"
        >
          Turning your imagination into vibrant, tangible experiences through
          innovative design and technology.
        </motion.h6>
      </motion.div>
    </div>
  );
};

export default HeroSectionShop;
