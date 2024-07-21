import * as Theme from "@/components/styled-components/theme";
import { Button } from "@/components/ui/button";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const RecentWork = () => {
  return (
    <>
      <Theme.PurpleBlurry className="h-screen border-t">
        <div className="container py-10">
          <Button className="bg-white/5 backdrop-blur-sm  m-auto rounded-full px-10 block">
            Recent Work
          </Button>
          <h2 className="text-[80px] font-bold text-white text-center">
            Where Imagination Meets Reality
          </h2>
          {/* Cards that represent the recent work of Provat */}
          <div className="grid grid-cols-3 place-items-center py-20">
            {[...Array(3).keys()].map((i) => {
              return (
                <div
                  key={i}
                  className="border border-[#747474a9] h-[26.875rem] w-[26.875rem] rounded-2xl p-1 flex items-center justify-center"
                >
                  <Image
                    src={`/assets/images/r${i + 1}.jpg`}
                    alt="Recent Work Thumbnail"
                    height={100}
                    width={400}
                    className="rounded-lg object-cover"
                  />
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