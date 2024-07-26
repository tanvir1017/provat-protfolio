import Image from "next/image";
import React from "react";
import ReviewSLider from "./review-slider";

const ReviewOrTestimonial = () => {
  return (
    <div className="bg-[#0c0c1e] py-10">
      {/* Heading ANd title */}
      <div id="heading--and--title">
        <h5 className="uppercase text-[var(--offWhite-3)] text-center text-sm">
          Reviews
        </h5>
      </div>
      {/* Heading ANd title */}
      {/* Review Card */}
      <div className="px-5  pt-[4.25rem]">
        <ReviewSLider />
      </div>

      {/* Review Card */}
    </div>
  );
};

export default ReviewOrTestimonial;
