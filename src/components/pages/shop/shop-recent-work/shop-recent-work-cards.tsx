import RecentWorkCardShop from "./shop-recent-work-card";

const RecentWorkCardsShop = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="grid grid-cols-1  sm-min:grid-cols-2 lg-min:grid-cols-3 place-items-center gap-4 sm-min:gap-5 lg-min:gap-8">
          {shopImages.map((shopImage: TShopImages, index) => {
            return <RecentWorkCardShop shopImage={shopImage} key={index} />;
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default RecentWorkCardsShop;

export type TShopImages = {
  img: string;
  title: string;
  link: string;
};
const shopImages: TShopImages[] = [
  {
    img: "/assets/images/service-page/m1.jpg",
    title: "E-sports T-shirt",
    link: "https://drive.google.com/file/d/13Rw8PJgOycF8qUo7vY9wxjsnRT2Xi-rB/view?usp=sharing",
  },
  {
    img: "/assets/images/service-page/coming-soon.jpg",
    title: "E-sports T-shirt",
    link: "",
  },
  {
    img: "/assets/images/service-page/coming-soon.jpg",
    title: "E-sports T-shirt",
    link: "",
  },
  {
    img: "/assets/images/service-page/coming-soon.jpg",
    title: "E-sports T-shirt",
    link: "",
  },
  {
    img: "/assets/images/service-page/coming-soon.jpg",
    title: "E-sports T-shirt",
    link: "",
  },
  {
    img: "/assets/images/service-page/coming-soon.jpg",
    title: "E-sports T-shirt",
    link: "",
  },
];
