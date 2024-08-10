"use client";
import { Button } from "@/components/ui/button";
import { serviceInfo } from "@/data/demo-arrays";
import { ServiceInfoType } from "@/ts/type";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import SpecializedCards from "./specialized-cards";

const Specialized = () => {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <div className="bg-[var(--dark-purple)] pt-10 lg-min:pt-0">
        <div className="container">
          <motion.div
            initial="initial"
            animate="visible"
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div variants={childVariants}>
              <Button className="lg-min:bg-white/5 bg-black/45 backdrop-blur-sm m-auto rounded-full px-10 hover:bg-white/5 grid place-content-center">
                <p className="purple_gradient__heading__txt text-center text-xl">
                  Specialized In
                </p>
              </Button>
            </motion.div>
          </motion.div>
          {/* Services Card */}
          <div className="grid grid-cols-1 lg-min:grid-cols-4 gap-14 lg-min:gap-5 pt-28 lg-min:pt-32">
            {serviceInfo.map((service: ServiceInfoType) => (
              <div key={service.id} className="relative isolate h-[250px]">
                <Button
                  size={"icon"}
                  className="icon__bg__gradient rounded-full h-24 w-24 m-auto flex items-center justify-center absolute -top-2/4 left-1/2 -translate-x-1/2 translate-y-3/4 z-10"
                >
                  {service.icon}
                </Button>
                <div className="bg-black/65 backdrop-blur-md px-4 pb-8 rounded-3xl text-center text-white border border-slate-700 border-opacity-50 h-full xs:[mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
                  <h2 className="font-semibold text-3xl pb-2.5 pt-14">
                    {service.title}
                  </h2>
                  <p className="font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services Card */}
        <div className="relative overflow-hidden">
          <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 right-0 inset-x-3/4 inset-y-2/4 blur-[150px]"></div>
          <SpecializedCards />

          {/* Descriptive Text */}
          <div className="pb-5 px-4">
            <div className="max-w-full lg-min:max-w-6xl m-auto isolate z-0  bg-black/30 backdrop-blur-sm px-5 py-10 rounded-2xl border border-slate-700">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident fuga, rerum repudiandae nulla dolore optio! Omnis
                excepturi asperiores corporis, placeat minima ex, nisi veniam
                officiis, provident libero quisquam. Reprehenderit hic illo
                praesentium fugiat nesciunt earum sapiente culpa cumque dicta!
                Quasi a eveniet maiores soluta placeat deleniti dignissimos
                officia, accusantium totam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialized;
