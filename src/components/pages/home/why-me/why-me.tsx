import React from "react";

const WhyMe = () => {
  return (
    <div className="relative z-10 bg-black after:content-['hello'] after:bg-gradient-to-tr after:from-indigo-500/65 after:to-indigo-800/55 after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[800px] after:h-[800px] after:rounded-full after:blur-[280px] after:-z-10 bg-center bg-cover h-screen">
      <div className="container py-10">
        <h5 className="uppercase text-[var(--offWhite-3)] text-center text-sm">
          Why Me
        </h5>
        <div className="text-white text-5xl text-center space-y-2 mt-5">
          <h3 className="">Whether you're a designer</h3>
          <h3 className="">our platform offers a world of possibilities</h3>
          <h3 className="max-w-3xl m-auto leading-tight">
            for stunning visuals that captivate your audience.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
