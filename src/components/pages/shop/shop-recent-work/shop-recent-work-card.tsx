import * as Theme from "@/components/styled-components/theme";
import Image from "next/image";
import React from "react";

const RecentWorkCardShop = () => {
  return (
    <div className="grid place-items-center">
      <Theme.CardBg className="border-[#2e2e2e] border px-2 lg-min:px-3 py-2 lg-min:py-2.5 rounded-xl relative overflow-hidden">
        <div id="card--image" className="pb-2">
          <Image
            src="/assets/images/t-shirt.png"
            alt="E-sports T-shirt"
            height={100}
            width={450}
            className="block m-auto rounded-xl"
          />
        </div>

        <Theme.SecondaryButton className="w-full uppercase">
          Download
        </Theme.SecondaryButton>
      </Theme.CardBg>
    </div>
  );
};

export default RecentWorkCardShop;
