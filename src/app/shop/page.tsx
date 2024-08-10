import HeroSectionShop from "@/components/pages/shop/shop-hero-section/shop-hero-section";
import RecentWorkShop from "@/components/pages/shop/shop-recent-work/shop-recent-work";
import ContactMe from "@/components/pages/home/contact/contect-me";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Str Wave / Shope",
  description: "This is a description for Str Wave",
};

const ShopRoute = () => {
  return (
    <>
      <div id="contact-me-hero" className="relative bg-[var(--dark-purple)]">
        <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[400px] lg-min:w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 inset-y-28 lg-min:inset-y-96 -inset-x-72 blur-[150px]"></div>

        <HeroSectionShop />
      </div>
      <RecentWorkShop />
      <ContactMe />
    </>
  );
};

export default ShopRoute;
