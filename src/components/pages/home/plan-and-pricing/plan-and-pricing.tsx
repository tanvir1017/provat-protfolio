"use client";
import React from "react";
import * as Theme from "@/components/styled-components/theme";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const PlanAndPricing = () => {
  return (
    <div className="overflow-hidden ">
      <div className="relative z-10 bg-[var(--dark-purple)] after:content-[''] after:bg-gradient-to-tr after:from-[var(--indigo-5)] after:to-[var(--indigo-5)] after:absolute after:top-[50%] after:-right-[200px] after:blur-[280px] after:w-[800px] after:h-[800px] after:rounded-full after:-z-10 bg-center bg-cover pt-10 pb-[6rem]">
        {" "}
        {/* Heading ANd title */}
        <div id="heading--and--title">
          <motion.h5
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[var(--offWhite-3)] text-center text-sm"
          >
            Service
          </motion.h5>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-5 mb-16"
          >
            <Theme.SectionTitle>Discover your Desire</Theme.SectionTitle>
          </motion.div>
        </div>
        {/* Heading ANd title */}
        {/* Card */}
        <div className="sm-max:container lg-min:max-w-5xl m-auto ">
          <div className="grid grid-cols-1 lg-min:grid-cols-2 place-items-center gap-5">
            {[...Array(2).keys()].map((index: number) => (
              <div className="grid place-items-center" key={index}>
                <Theme.CardBg className="border-[#2e2e2e] border px-4 pt-5 pb-16 rounded-[28px] relative overflow-hidden">
                  <div id="card--image" className="">
                    <Image
                      src="/assets/images/t-shirt.png"
                      alt="E-sports T-shirt"
                      height={100}
                      width={450}
                      className="block m-auto rounded-[20px]"
                    />
                  </div>

                  <div id="card--text" className="mt-5 text-[#c9c9c9]">
                    <p>
                      {Number(!index) == 0
                        ? "Our excellence is reflected in our use of high-grade materials and Premium Fabric collection."
                        : "we combine creativity with precision to deliver designs that stand out and perform."}
                    </p>
                  </div>
                </Theme.CardBg>
                <Link href="/shop">
                  <Theme.SecondaryButton className="-mt-5 py-7 space-x-3">
                    <span>Check Out</span> <MoveRight />
                  </Theme.SecondaryButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanAndPricing;
