import { Button } from "@/components/ui/button";
import React from "react";
import RecentWorkCardsShop from "./shop-recent-work-cards";

const RecentWorkShop = () => {
  return (
    <>
      <div className="bg-[var(--dark-purple)] -mt-1">
        <div className="container py-8">
          <div>
            <Button className="bg-black/45 lg-min:bg-white/5 backdrop-blur-sm m-auto rounded-full px-10 lg-min:hover:bg-white/5 hover:bg-black/45 grid place-content-center">
              <p className="purple_gradient__heading__txt text-center text-xl">
                Recent Work
              </p>
            </Button>
          </div>
        </div>

        {/* Specialized Services Card */}
        <div className="relative overflow-hidden lg-min:py-6">
          <div className="bg-gradient-to-tr from-[#6a3af6] to-[#4a328d] w-[700px] h-[800px] rounded-[50%] rotate-[270deg] absolute bottom-0 right-0 inset-x-3/4 inset-y-2/4 blur-[150px]"></div>
          <RecentWorkCardsShop />
        </div>
      </div>
    </>
  );
};

export default RecentWorkShop;
