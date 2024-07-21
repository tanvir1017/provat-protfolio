import React from "react";
import * as Theme from "@/components/styled-components/theme";

const PlanAndPricing = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative z-10 bg-black after:content-['hello'] after:bg-gradient-to-tr after:from-indigo-500/65 after:to-indigo-800/55 after:absolute after:top-[50%] after:-right-[200px] after:blur-[280px] after:w-[800px] after:h-[800px] after:rounded-full after:-z-10 bg-center bg-cover py-10 h-screen">
        {" "}
        {/* Heading ANd title */}
        <div id="heading--and--title">
          <h5 className="uppercase text-[var(--offWhite-3)] text-center text-sm">
            Plan And Pricing
          </h5>
          <div className="text-white text-5xl text-center space-y-0.5 mt-5 mb-16">
            <h3 className="font-semibold">Your AI Generation Option</h3>
          </div>
        </div>
        {/* Heading ANd title */}
      </div>
    </div>
  );
};

export default PlanAndPricing;
