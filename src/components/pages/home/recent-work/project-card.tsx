import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }: { project: number }) => {
  return (
    <div className="recent__work__box relative border border-[#ffffff1a] backdrop-blur-md h-[21.875rem] overflow-hidden px-2.5 rounded-[14px] flex items-center justify-center">
      <div className="h-[20.5rem] w-full rounded-[16px] overflow-hidden relative">
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
