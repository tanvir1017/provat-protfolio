"use client";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import React from "react";
import VideoPopup from "./video-popup";

const VideoPlayer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenAndClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cn("relative")}>
      {isOpen && (
        <VideoPopup
          onClose={handleOpenAndClose}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div
        id="video--placeholder"
        className="h-[30dvh] lg-min:h-[70dvh] bg-[var(--dark-purple)] bg-[url(/assets/images/10030.jpg)] bg-no-repeat bg-center bg-cover grid place-items-center"
      >
        <div className="bg-white inline-block rounded-full p-6 ">
          <PlayIcon
            onClick={handleOpenAndClose}
            className="h-10 w-10"
            style={{ strokeWidth: "1px" }}
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
