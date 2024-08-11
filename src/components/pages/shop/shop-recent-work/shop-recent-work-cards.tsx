import RecentWorkCardShop from "./shop-recent-work-card";

const RecentWorkCardsShop = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="grid grid-cols-1  sm-min:grid-cols-2 lg-min:grid-cols-3 place-items-center gap-4 sm-min:gap-5 lg-min:gap-8">
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
