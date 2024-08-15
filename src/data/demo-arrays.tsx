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
    name: "facebook",
    icon: <GrInstagram />,
    url: "https://www.facebook.com/provat.dev",
    alt: "Facebook connection of provat || strwave",
  },
  {
    name: "Discord",
    icon: <FaTiktok />,
    url: "https://www.disDiscord.com/provat.dev",
    alt: "Discord connection of provat || strwave",
  },
  {
    name: "twitter",
    icon: <BsTwitterX />,
    url: "https://www.twitter.com/provat.dev",
    alt: "Twitter connection of provat || strwave",
  },
  {
    name: "Behance",
    icon: <TfiLinkedin />,
    url: "https://www.behance.net/provat.dev",
    alt: "Behance connection of provat || strwave",
  },
  {
    name: "Youtube",
    icon: <SVGIcon.Youtube />,
    url: "https://www.youtube.com/provat.dev",
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
    title: "Esports Team",
    description:
      "SamX brought our team's vision to life! The graphics for our esports team are not just visually stunning but also cohesive. -Angstygurl",
  },
  {
    id: 4,
    icon: <SVGIcon.PencilAndRuler className="w-10 h-10 fill-white" />,
    title: "Branding",
    description:
      "Exceptional creativity and professionalism! SamX transformed our ideas into a visually striking marketing campaign. — Sarah B",
  },
];

export const manufactureServiceInfo: ServiceInfoType[] = [
  {
    id: 1,
    icon: <SVGIcon.Diamond className="w-10 h-10" />,
    title: "Logo Design",
    description:
      "SamX delivered beyond expectations! Our new logo perfectly captures the essence of our brand. — Amanda K., Startup Founder",
  },
  {
    id: 2,
    icon: <SVGIcon.Fabric className="w-10 h-10 fill-white" />,
    title: "NFT Artwork",
    description:
      "Collaborating was seamless, and the end result exceeded our expectations. Truly a visionary in the NFT space! -Michael C (NFT Enthusiasts)",
  },
  {
    id: 3,
    icon: <SVGIcon.CheckList className="w-10 h10 fill-white" />,
    title: "Esports Team",
    description:
      "SamX brought our team's vision to life! The graphics for our esports team are not just visually stunning but also cohesive. -Angstygurl",
  },
  {
    id: 4,
    icon: <SVGIcon.Shipping className="w-10 h-10 fill-white" />,
    title: "Branding",
    description:
      "Exceptional creativity and professionalism! SamX transformed our ideas into a visually striking marketing campaign. — Sarah B",
  },
];
