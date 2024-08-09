import React from "react";
import RecentWorkCardShop from "./shop-recent-work-card";

const RecentWorkCardsShop = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="grid grid-cols-1 lg-min:grid-cols-3 place-items-center gap-5">
          {[...Array(6).keys()].map((index: number) => {
            return <RecentWorkCardShop key={index} />;
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default RecentWorkCardsShop;
