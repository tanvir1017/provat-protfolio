import * as SVGIcon from "@/assets/svg/svg-icons";
import * as Theme from "@/components/styled-components/theme";
import { ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type SocialConnection = {
  name?: string;
  icon?: React.ReactNode;
  url?: string;
  alt?: string;
  color?: string;
  bg?: string;
};
const socialConnections: SocialConnection[] = [
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
const ContactMe = () => {
  return (
    <div className="contact__me__section py-[6rem] lg-min:py-[12rem]">
      <div className="px-4 lg-min:px-0 lg-min:max-w-4xl m-auto relative">
        <div className=" text-white">
          <Theme.SectionTitle className="text-center">
            Designing Success Starts With A conversation, Contact Me
          </Theme.SectionTitle>
          <hr className="border-[#616270] my-5" />
          <div className="grid grid-flow-col place-content-center gap-4 pb-14 pt-8">
            {socialConnections.map((socialConnection: SocialConnection) => (
              <a
                href={socialConnection.url}
                key={socialConnection.url}
                target="_blank"
                title={socialConnection.alt}
                className="bg-white/5 backdrop-blur-sm p-2 rounded-full flex items-center justify-center h-12 w-12 "
              >
                <span>{socialConnection.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="grid place-items-center">
          <Link
            href="/contact-me"
            className=" bg-white/5 p-2 rounded-lg backdrop-blur-md"
          >
            <Theme.PrimaryButton className="space-x-3 py-8">
              <span>Contact me</span> <MoveRight />{" "}
            </Theme.PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
