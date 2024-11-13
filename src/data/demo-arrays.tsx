import * as SVGIcon from "@/assets/svg/svg-icons";
import { ReviewArrType, ServiceInfoType, SocialConnection } from "@/ts/type";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";

export const reviewArr: ReviewArrType[] = [
  {
    name: "Willam Millots",
    role: "CEO",
    image: "10026",
    text: "Str Waves has been a game-changer for my Custom Jersey business. They been able to create stunning Jerseys that are both visually appealing and engaging. My clients have been incredibly satisfied with the designs, and I'm grateful for the help I've received from Str.",
  },
  {
    name: "Jack and Brothers",
    role: "Founder",
    image: "10027",
    text: "I recently had the pleasure of working with Str, and I am beyond thrilled with the outcome. The attention to detail, color coordination, and overall design aesthetic truly exceeded my expectations. I couldn't be happier with the final result. Highly recommend this designer for anyone looking for top-tier, custom jersey designs!",
  },
  {
    name: "Hustle Clo24",
    role: "Founder",
    image: "10028",
    text: "From the initial concept to the final product, everything was executed with precision and creativity. Each jersey reflects a unique blend. Their satisfaction speaks volumes, and I highly recommend this designer to anyone looking for high-quality, custom jersey designs that stand out from the crowd.",
  },
  {
    name: "Caribbean",
    role: "Founder",
    image: "10028_1",
    text: "I recently had the pleasure of working with Str Waves, a talented jersey designer, and I couldn't be more impressed with their work. The creative direction was fresh, with bold choices that still felt timeless. If you're looking for a designer who can bring your vision to life with precision and flair, I highly recommend Str Waves. The entire experience was smooth, professional, and ultimately delivered designs that exceeded my expectations",
  },
];

export const socialConnections: SocialConnection[] = [
  {
    name: "Instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/str_waves/",
    alt: "Instagram connection of provat || strwave",
  },
  {
    name: "Tiktok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@strwaves",
    alt: "Tiktok connection of provat || strwave",
  },
  {
    name: "twitter",
    icon: <BsTwitterX />,
    url: "https://x.com/strwaves",
    alt: "Twitter connection of provat || strwave",
  },
  {
    name: "LinkedIn",
    icon: <TfiLinkedin />,
    url: "https://www.linkedin.com/in/str-wave-b8a3462a9/",
    alt: "LinkedIn connection of provat || strwave",
  },
  {
    name: "Youtube",
    icon: <SVGIcon.Youtube />,
    url: "https://www.youtube.com/@strwaves",
    alt: "Youtube connection of provat || strwave",
  },
];

export const designServiceInfo: ServiceInfoType[] = [
  {
    id: 1,
    icon: <SVGIcon.Diamond className="w-10 h-10" />,
    title: "Quality",
    description:
      "We deliver designs which are original, premium and maintain a modern look that stands out and performs well.",
  },
  {
    id: 2,
    icon: <SVGIcon.CheckList className="w-10 h-10 fill-white" />,
    title: "Budget Friendly",
    description:
      "Our service offers high-quality designs at affordable prices, ensuring that you get the best value for your budget",
  },
  {
    id: 3,
    icon: <SVGIcon.Badge className="w-10 h10 fill-white" />,
    title: "Originality",
    description:
      "At our jersey design service, we pride ourselves on creating unique and original designs that stand out from the competition.",
  },
  {
    id: 4,
    icon: <SVGIcon.PencilAndRuler className="w-10 h-10 fill-white" />,
    title: "Customization",
    description:
      "From colors and patterns to logos and text, we work closely with you to create a design that perfectly matches your vision.",
  },
];

export const manufactureServiceInfo: ServiceInfoType[] = [
  {
    id: 1,
    icon: <SVGIcon.Diamond className="w-10 h-10" />,
    title: "Quality",
    description:
      "Our jersey manufacturing service is dedicated to delivering exceptional quality with every product we create.",
  },
  {
    id: 2,
    icon: <SVGIcon.Fabric className="w-10 h-10 fill-white" />,
    title: "Fabric",
    description:
      "Materials are selected for their breathability and moisture-wicking properties, making them ideal for athletes and casual wearers alike.",
  },
  {
    id: 3,
    icon: <SVGIcon.CheckList className="w-10 h10 fill-white" />,
    title: "Budget Friendly",
    description:
      "Our service offers high-quality products at affordable prices, ensuring that you get the best value for your budget",
  },
  {
    id: 4,
    icon: <SVGIcon.Shipping className="w-10 h-10 fill-white" />,
    title: "Rapid Shipping",
    description:
      "Our shipping process is designed to handle international orders with care and precision, providing you with timely updates and reliable delivery",
  },
];
