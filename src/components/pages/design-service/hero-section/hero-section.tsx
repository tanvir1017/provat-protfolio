"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const HeroSectionDesignService = () => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="container isolate z-0 min-h-[40.5dvh] lg-min:min-h-[57.5dvh] grid place-content-center lg-min:pt-36 pt-[200px]">
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
          className="inline-block font-medium text-center lg-min:leading-[6rem] leading-[3rem] text-[2.75rem] lg-min:text-[5.75rem] max-w-full lg-min:max-w-3xl hero__text"
        >
          Let's create a masterpiece
        </motion.h1>
        <motion.h6
          variants={childVariants}
          className="text-[#ffffffb5] max-w-md text-center font-light lg-min:font-normal"
        >
          Our AI image generation service empowers you to bring your creative
          visions to life like never before.
        </motion.h6>
      </motion.div>
    </div>
  );
};

export default HeroSectionDesignService;
