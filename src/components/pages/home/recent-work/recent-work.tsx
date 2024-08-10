"use client";
import * as Theme from "@/components/styled-components/theme";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import React from "react";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

const RecentWork = () => {
  return (
    <>
      <Theme.PurpleBlurry className="overflow-hidden">
        <div className="container py-10">
          <Button className="bg-white/5 backdrop-blur-sm  m-auto rounded-full px-10 block hover:bg-white/5">
            Recent Work
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-5 mb-0 lg-min:mb-16"
          >
            <Theme.SectionTitle>
              Where Imagination Meets Reality
            </Theme.SectionTitle>
          </motion.div>
          {/* Cards that represent the recent work of Provat */}
          <div className="grid grid-cols-1 lg-min:grid-cols-3 place-content-center gap-3 py-10 lg-min:pt-5  max-w-full lg-min:max-w-6xl m-auto">
            {[...Array(3).keys()].map((project) => (
              <ProjectCard project={project} key={project} />
            ))}
          </div>

          <motion.div className="text-center lg-min:pb-20">
            <Theme.PrimaryButton>check Out Portfolio!</Theme.PrimaryButton>
          </motion.div>
        </div>
      </Theme.PurpleBlurry>

      {/* Video Placeholder */}

      <div
        id="video--placeholder"
        className="h-[30dvh] lg-min:h-[70dvh] bg-[var(--dark-purple)] bg-[url(/assets/images/10030.jpg)] bg-no-repeat bg-center bg-cover grid place-items-center"
      >
        <div className="bg-white inline-block rounded-full p-6 ">
          <PlayIcon className="h-10 w-10" style={{ strokeWidth: "1px" }} />
        </div>
      </div>
      {/* Video Placeholder */}
    </>
  );
};

export default RecentWork;
