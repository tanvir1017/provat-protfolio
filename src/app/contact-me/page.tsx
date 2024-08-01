import HeroSectionContactMe from "@/components/pages/contact-me/hero-section/hero-section";
import ReviewSection from "@/components/pages/contact-me/review-section/review-section";
import { NavbarWithHome } from "@/components/shared/navbar/navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[var(--dark-purple)]">
        <NavbarWithHome />
        <HeroSectionContactMe />
      </div>
      <ReviewSection />
    </>
  );
};

export default Contact;
