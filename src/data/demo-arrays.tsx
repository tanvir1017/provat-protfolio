import { ReviewArrType, ServiceInfoType, SocialConnection } from "@/ts/type";
import * as SVGIcon from "@/assets/svg/svg-icons";
import React from "react";

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
    icon: <SVGIcon.Facebook />,
    url: "https://www.facebook.com/provat.dev",
    alt: "Facebook connection of provat || strwave",
  },
  {
    name: "Discord",
    icon: <SVGIcon.Discord className="w-5 h-5" />,
    url: "https://www.disDiscord.com/provat.dev",
    alt: "Discord connection of provat || strwave",
  },
  {
    name: "twitter",
    icon: <SVGIcon.Twitter />,
    url: "https://www.twitter.com/provat.dev",
    alt: "Twitter connection of provat || strwave",
  },
  {
    name: "Behance",
    icon: <SVGIcon.Behance className="w-5 h-5" />,
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

export const serviceInfo: ServiceInfoType[] = [
  {
    id: 1,
    icon: <SVGIcon.Behance className="w-5 h-5" />,
    title: "Logo Design",
    description:
      "perspiciatis delectus ab asperiores? Debitis voluptatum rem vel aspernatur magni quia adipisci id rerum libero tempora eligendi autem quae, quasi, voluptate excepturi aliquam cumque?",
  },
  {
    id: 2,
    icon: <SVGIcon.Behance className="w-5 h-5" />,
    title: "NFT Artwork",
    description:
      "laborum mollitia ipsa cupiditate nostrum doloribus laboriosam tempora eum libero iste maxime saepe alias!",
  },
  {
    id: 3,
    icon: <SVGIcon.Behance className="w-5 h-5" />,
    title: "Esports Team",
    description:
      "aliquid explicabo repellendus, incidunt eveniet, facere quae nulla ad nemo rerum vitae voluptatum accusantium tempora Mollitia",
  },
  {
    id: 4,
    icon: <SVGIcon.Behance className="w-5 h-5" />,
    title: "Branding",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, voluptatum?",
  },
];
