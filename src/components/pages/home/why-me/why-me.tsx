"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlidingText } from "./sliding-text";
import CountUp from "react-countup";
import * as Theme from "@/components/styled-components/theme";

const WhyMe = () => {
  return (
    <>
      <Theme.PurpleBlurry className="overflow-hidden">
        <div className="container py-10">
          {/* Heading ANd title */}
          <div id="heading--and--title">
            <h5 className="uppercase text-[var(--offWhite-3)] text-center text-sm">
              Why Us?
            </h5>

            <h3 className="text-white text-2xl lg-min:text-5xl text-center mt-5 mb-16 font-medium lg-min:font-semibold max-w-4xl m-auto !leading-tight">
              From premium design to high-quality fabrics, our experienced team
              ensures every jersey meets your expectations.
            </h3>
          </div>
          {/* Heading ANd title */}

          {/* Grid layout */}

          {/* Third Grid */}
          <div className="grid grid-cols-1 lg-min:grid-cols-3 gap-5 ">
            {/* column 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl py-10 lg-min:py-0 grid place-items-center">
              <div id="heading--title" className=" text-center">
                <h2 className="text-[5.125rem] text-[#ba92ff] font-semibold">
                  <span>
                    <CountUp start={0} end={20} />
                  </span>
                  +
                </h2>
                <p className="text-[#ffffffa8] font-semibold text-lg leading-[2.8125rem] -mt-5">
                  Brand Endorsement
                </p>
              </div>
            </div>
            {/* column 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl py-10 lg-min:py-0 grid place-items-center ">
              <div id="heading--title" className="text-center">
                <h2 className="text-[5.125rem] text-[#ba92ff] font-semibold">
                  {/* &lt; */}
                  <span>
                    <CountUp start={0} end={98} />%
                  </span>
                </h2>
                <p className="text-[#ffffffa8] font-semibold text-lg leading-[2.8125rem] -mt-5">
                  Client satisfaction
                </p>
              </div>
            </div>
            {/* column 3 */}
            <div className="lg-min:col-span-2 py-16 lg-min:py-20 bg-[url('/assets/images/10029.png')] bg-cover bg-no-repeat bg-right-bottom rounded-xl relative overflow-hidden  after:content[''] after:absolute after:w-full after:h-full after:bg-[#0000007a] after:z-10 grid place-items-center">
              <h2 className="text-white text-3xl lg-min:text-5xl font-semibold max-w-2/3  lg-min:max-w-xl text-center z-20">
                Modern Design Ideas & Resources
              </h2>
            </div>
            {/* column 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl ">
              <div
                id="heading--title"
                className="p-10 space-y-2 lg-min:space-y-6"
              >
                <h2 className="text-2xl lg-min:text-[2.5625rem] text-white font-medium max-w-xs leading-[1.2em]">
                  Cost-Effectiveness
                </h2>
                <p className="text-[#ffffffa8] text-[18px] leading-[1.7rem] font-light">
                  t's a cost-effective solution, particularly for sports teams
                  and clothing businesses with limited budgets.
                </p>
                {/* <div>
                  <Link
                    href={"/"}
                    className="text-[#ba92ff] font-semibold inline-flex items-center group"
                  >
                    Discover{" "}
                    <ChevronRight className="group-hover:transform transition-all group-hover:translate-x-1 " />
                  </Link>
                </div> */}
              </div>
            </div>
            {/* column 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-10">
              <Image
                height={100}
                width={250}
                layout="responsive"
                src="/assets/images/10018.png"
                alt="dog cat bird"
              />
            </div>{" "}
            {/* column 6 */}
            <div className="image__generated__box lg-min:col-start-3 lg-min:row-start-1 lg-min:row-end-3  border-[#5c39c7] border-[2px] pt-10 px-9 text-white rounded-xl">
              <div id="heading--title" className="mb-20 mt-10 text-center">
                <h2 className="text-[5.125rem] text-[#ba92ff] font-semibold leading-4 mb-7">
                  <span>
                    <CountUp start={0} end={250} />
                  </span>
                  +
                </h2>
                <p className="text-[#FFFFFF5E] font-semibold text-lg leading-[2.8125rem]">
                  Projects completed
                </p>
              </div>
              <Image
                height={100}
                width={350}
                src="/assets/images/10019.png"
                alt="Ai generated doggy image"
              />
            </div>
            {/* column 7 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl grid place-items-center">
              <Image
                height={100}
                width={390}
                src="/assets/images/10020.png"
                alt="dog cat bird"
              />
            </div>{" "}
          </div>
          {/* Grid layout */}
        </div>
        <SlidingText />
      </Theme.PurpleBlurry>
    </>
  );
};

export default WhyMe;
