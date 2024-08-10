"use client";
import * as Theme from "@/components/styled-components/theme";
import { socialConnections } from "@/data/demo-arrays";
import { SocialConnection } from "@/ts/type";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
  return (
    <div className="contact__me__section py-[6rem] lg-min:py-[12rem] -mt-1">
      <div className="px-4 lg-min:px-0 lg-min:max-w-4xl m-auto relative">
        <div className="text-white">
          <Theme.SectionTitle className="text-center text-[25px] lg-min:text-5xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start your project with us Now
            </motion.div>
          </Theme.SectionTitle>
          <hr className="border-[#616270] my-6 lg-min:my-8 " />
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
            className=" bg-white/5 p-1.5 backdrop-blur-md rounded-full"
          >
            <Theme.PrimaryButton className="space-x-3 py-6 lg-min:py-8 rounded-full">
              <span>Contact me</span> <MoveRight />{" "}
            </Theme.PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
