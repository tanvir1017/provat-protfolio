"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const HeroSectionContactMe = () => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <div className="w-[120px] h-[120px] lg-min:bg-[var(--indigo-5)] lg-min:rounded-full lg-min:blur-[80px] opacity-100 absolute right-0 bottom-0"></div>
      <div className="container mt-8 lg-min:mt-0 lg-min:pt-36 pt-[100px]">
        <div className="grid grid-cols-1 lg-min:grid-cols-2 place-items-center h-[90dvh]">
          <div className="author__image z-10 p-1.5 rounded-full ">
            <div className="bg-black/75 backdrop-blur-md rounded-full">
              <Image
                src="/assets/images/author-.jpg"
                alt=""
                height={100}
                width={200}
                className="rounded-full p-2 bg-transparent lg-min:hidden block"
              />
              <Image
                src="/assets/images/author-.jpg"
                alt=""
                height={100}
                width={300}
                className="rounded-full p-2 bg-transparent lg-min:block hidden"
              />
            </div>
          </div>
          <motion.div
            initial="initial"
            animate="visible"
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="text-white -mt-20 z-10"
          >
            <motion.h1
              variants={childVariants}
              className="purple_gradient__heading__txt text-[3.0rem] xs-min:text-[4.0rem] sm-min:text-[5rem] lg-min:text-[7rem] font-medium "
            >
              About Us
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-base font-light lg-min:text-lg leading-7 lg-min:leading-10"
            >
              Welcome to Str Waves, your premier destination for custom jersey
              design and manufacturing. Since our inception in 2020, we have
              proudly served clients across more than 30 countries, delivering
              high-quality, bespoke jerseys tailored to meet diverse needs. Our
              commitment to excellence in design and production ensures that
              every jersey we create offers unmatched comfort, durability, and
              style. At Str Waves, we blend creativity with craftsmanship to
              provide you with top-notch jerseys that stand out on the field and
              beyond.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionContactMe;
