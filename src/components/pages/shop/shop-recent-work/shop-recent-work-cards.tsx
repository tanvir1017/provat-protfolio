import React from "react";
import RecentWorkCardShop from "./shop-recent-work-card";

const RecentWorkCardsShop = () => {
  return (
    <>
      <div className="sm-max:container lg-min:max-w-5xl m-auto ">
        <div className="grid grid-cols-1 lg-min:grid-cols-2 place-items-center gap-5">
          {[...Array(4).keys()].map((index: number) => {
            return <RecentWorkCardShop key={index} />;
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default RecentWorkCardsShop;
