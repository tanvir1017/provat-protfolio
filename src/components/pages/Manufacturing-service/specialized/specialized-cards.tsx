import SpecializedCardManufacture from "./specialized-card";

const SpecializedCardsManufacture = () => {
  return (
    <div className="grid grid-cols-1 lg-min:grid-cols-3 place-content-center gap-3 px-4 lg-min:px-4 py-10 lg-min:py-14 container m-auto isolate z-0">
      {[...Array(3).keys()].map((project: number) => (
        <SpecializedCardManufacture project={project} />
      ))}{" "}
      {[...Array(3).keys()].map((project: number) => (
        <SpecializedCardManufacture project={project} />
      ))}
    </div>
  );
};

export default SpecializedCardsManufacture;
