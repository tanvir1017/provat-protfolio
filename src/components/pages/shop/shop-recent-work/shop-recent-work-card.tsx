import * as Theme from "@/components/styled-components/theme";
import Image from "next/image";
import React from "react";

const RecentWorkCardShop = () => {
  return (
    <div className="grid place-items-center">
      <Theme.CardBg className="border-[#2e2e2e] border px-4 py-5 rounded-[28px] relative overflow-hidden">
        <div id="card--image" className="pb-3">
          <Image
            src="/assets/images/t-shirt.png"
            alt="E-sports T-shirt"
            height={100}
            width={450}
            className="block m-auto rounded-[20px]"
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
