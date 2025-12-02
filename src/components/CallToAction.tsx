import React from "react";
import { Button } from "./ui/button";

function CallToAction() {
  return (
    <div className="bg-gradient">
      <div className=" flex flex-row justify-between items-center mx-auto max-w-[1440px] px-2 py-10 text-white ">
        <div className="flex-1">
          <h2 className="heading capitalize pr-">
            lets boost your business with Markfolio agency
          </h2>
          <p className="text-primary text-xl opacity-70 mt-2 ">
            Power up your business with our best digital marketing services.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <Button size="xl" className="text-black font-bold">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
