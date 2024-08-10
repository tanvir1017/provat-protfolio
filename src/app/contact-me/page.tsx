import GetInTouch from "@/components/pages/contact-me/get-in-touch/get-in-touch";
import HeroSectionContactMe from "@/components/pages/contact-me/hero-section/hero-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Str Wave / Contact",
  description: "This is a description for Str Wave",
};

const Contact = () => {
  return (
    <>
      <div
        id="contact-me-hero"
        className="relative overflow-hidden bg-[var(--dark-purple)] after:content-[''] after:bg-gradient-to-tr after:from-[#6a3af6] after:to-[#4a328d] after:absolute after:-bottom-[20%] after:-left-[150px]  after:w-[700px] after:h-[800px] after:rounded-[50%] after:rotate-[270deg] after:z-0 after:filter after:blur-[150px]"
      >
        <HeroSectionContactMe />
      </div>
      <GetInTouch />
    </>
  );
};

export default Contact;
