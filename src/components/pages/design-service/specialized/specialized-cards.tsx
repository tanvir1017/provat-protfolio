import React from "react";
import SpecializedCard from "./specialized-card";

const SpecializedCards = () => {
  return (
    <div className="grid grid-cols-1 lg-min:grid-cols-3 place-content-center gap-3 py-10 lg-min:pt-14  max-w-full lg-min:max-w-6xl m-auto isolate z-0">
      {[...Array(3).keys()].map((project: number) => (
        <SpecializedCard project={project} />
      ))}{" "}
      {[...Array(3).keys()].map((project: number) => (
        <SpecializedCard project={project} />
      ))}
    </div>
  );
};

export default SpecializedCards;
