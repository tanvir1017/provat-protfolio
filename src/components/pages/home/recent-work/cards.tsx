import * as Theme from "@/components/styled-components/theme";
import { Button } from "@/components/ui/button";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const RecentWork = () => {
  return (
    <>
      <Theme.PurpleBlurry className="">
        <div className="container py-10">
          <Button className="bg-white/5 backdrop-blur-sm  m-auto rounded-full px-10 block hover:bg-white/5">
            Recent Work
          </Button>
          <h2 className="text-[80px] font-bold text-white text-center">
            Where Imagination Meets Reality
          </h2>
          {/* Cards that represent the recent work of Provat */}
          <div className="grid grid-cols-3 place-content-center gap-3 py-20 max-w-6xl m-auto">
            {[...Array(3).keys()].map((i) => {
              return (
                <div
                  key={i}
                  className="recent__work__box rounded-2xl flex items-center justify-center"
                >
                  <div className="h-[20rem] w-full rounded-3xl overflow-hidden relative">
                    <Image
                      src={`/assets/images/100${40 + (i + 1)}.jpg`}
                      alt="Recent Work Thumbnail"
                      fill
                      objectFit="cover"
                      // className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Theme.PrimaryButton>check Out Portfolio!</Theme.PrimaryButton>
          </div>
        </div>
      </Theme.PurpleBlurry>

      {/* Video Placeholder */}

      <div
        id="video--placeholder"
        className="h-[70vh] bg-black bg-[url(/assets/images/10030.jpg)] bg-no-repeat bg-center bg-cover grid place-items-center"
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
