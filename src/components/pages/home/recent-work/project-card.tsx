import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }: { project: number }) => {
  return (
    <div className="recent__work__box rounded-2xl flex items-center justify-center">
      <div className="h-[20rem] w-full rounded-3xl overflow-hidden relative">
        <Image
          src={`/assets/images/100${40 + (project + 1)}.jpg`}
          alt="Recent Work Thumbnail"
          fill
          objectFit="cover"
          // className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
