import GetInTouch from "@/components/pages/contact-me/get-in-touch/get-in-touch";
import HeroSectionContactMe from "@/components/pages/contact-me/hero-section/hero-section";
import ReviewSection from "@/components/pages/contact-me/review-section/review-section";
import { Navbar } from "@/components/shared/navbar/navbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact-me-hero"
        className="relative overflow-hidden bg-[var(--dark-purple)] after:content-[''] after:bg-gradient-to-tr after:from-[#6a3af6] after:to-[#4a328d] after:absolute after:-bottom-[20%] after:-left-[150px]  after:w-[700px] after:h-[800px] after:rounded-[50%] after:rotate-[270deg] after:z-10 after:blur-[150px]"
      >
        <Navbar className="!z-20" />
        <HeroSectionContactMe />
      </div>
      <ReviewSection />
      <GetInTouch />
    </>
  );
};

export default Contact;
