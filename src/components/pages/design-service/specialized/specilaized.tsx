import { Button } from "@/components/ui/button";
import { serviceInfo } from "@/data/demo-arrays";
import { ServiceInfoType } from "@/ts/type";
import React from "react";

const Specialized = () => {
  return (
    <>
      <div className="my-[100px]">
        <div className="container">
          <div>
            <Button className="bg-white/5 backdrop-blur-sm  m-auto rounded-full px-10 hover:bg-white/5 grid place-content-center">
              <p className="contact__heading__txt text-center text-xl ">
                Specialized In
              </p>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg-min:grid-cols-4 gap-5 pt-16">
            {serviceInfo.map((SI: ServiceInfoType) => (
              <div
                key={SI.id}
                className="bg-[var(--dark-purple)] z-10 p-4 rounded-3xl text-center text-white border border-slate-700 border-opacity-50"
              >
                <h2 className="font-semibold text-3xl pb-2.5">{SI.title}</h2>
                <p>{SI.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialized;
