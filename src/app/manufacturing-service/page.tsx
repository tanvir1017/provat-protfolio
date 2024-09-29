import ContactMe from "@/components/pages/home/contact/contect-me";
import HeroSectionMenufacturingService from "@/components/pages/Manufacturing-service/hero-section/hero-section";
import SpecializedManufacture from "@/components/pages/Manufacturing-service/specialized/specilaized";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Service",
  description: "This is a description for Str Wave",
};
const ManuFacturingService = () => {
  return (
    <div>
      <div id="contact-me-hero" className="relative bg-[var(--dark-purple)] ">
        <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[400px] lg-min:w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 inset-y-28 lg-min:inset-y-96 -inset-x-72 blur-[150px]"></div>
        <HeroSectionMenufacturingService />
      </div>
      <SpecializedManufacture />
      <ContactMe />
    </div>
  );
};

export default ManuFacturingService;
