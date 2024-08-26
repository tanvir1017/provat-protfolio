import * as SVGIcon from "@/assets/svg/svg-icons";
import { ReviewArrType, ServiceInfoType, SocialConnection } from "@/ts/type";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";

export const reviewArr: ReviewArrType[] = [
  {
    name: "Justin L.",
    role: "Content Creator",
    image: "10026",
    text: "I was initially skeptical about AI-generated images as a professional photographer. However, I've found that this service complements my work brilliantly. It helps me experiment with new styles and concepts that I wouldn't have considered otherwise.",
  },
  {
    name: "Emily B.",
    role: "Designer",
    image: "10027",
    text: "I've always been fascinated by the idea of AI-generated images. With Provat, I've been able to create beautiful, realistic images that are both visually appealing and engaging. My clients have loved the results, and I'm grateful for the help I've received from Provat.",
  },
  {
    name: "Michael C.",
    role: "Artist",
    image: "10028",
    text: "I've always been a fan of AI-generated images, and Provat has been an incredible help in creating beautiful, realistic images that I've been able to use in my work. My clients have been incredibly satisfied with the results, and I'm grateful for the help I've received from Provat.",
  },
  {
    name: "Mark S",
    role: "Photographer",
    image: "10028_1",
    text: "Provat has been a game-changer for my photography business. I've been able to create stunning images that are both visually appealing and engaging. My clients have been incredibly satisfied with the results, and I'm grateful for the help I've received from Provat.",
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
    title: "Logo Design",
    description:
      "SamX delivered beyond expectations! Our new logo perfectly captures the essence of our brand. — Amanda K., Startup Founder",
  },
  {
    id: 2,
    icon: <SVGIcon.CheckList className="w-10 h-10 fill-white" />,
    title: "NFT Artwork",
    description:
      "Collaborating was seamless, and the end result exceeded our expectations. Truly a visionary in the NFT space! -Michael C (NFT Enthusiasts)",
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
