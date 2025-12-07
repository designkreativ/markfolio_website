import React from "react";
import { Button } from "./ui/button";
import bgImage from "@/assets/background.png";

function Header() {
  return (
    <div className="flex flex-col items-center gap-4 not-sm:pt-30 sm:pt-35 md:pt-40 pb-0 text-white bg-gradient">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className=" font-bold text-center text-3xl md:text-5xl   lg:text-6xl  px-5 pb-5">
            Business 🚀 Skyrocketing <br /> with Digital Marketing
          </h1>

          <p className="text-center text-[0.8rem] sm:text-base md:text-lg max-w-150 not-sm:px-5 sm:px-10 opacity-70 pb-10 ">
            Digimar internet Marketing Agency is a full-service digital
            marketing agency. Attract, impress, and Convert more leads online
            and get results with Digimar.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="text-primary-dark font-bold md:h-11 md:px-8 md:text-base"
          >
            Registration
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="md:h-11 md:px-8 md:text-base"
          >
            See How It Works
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative w-full overflow-hidden">
        <div
          className="h-40 sm:h-80 md:h-96 lg:h-140 w-100 sm:w-120 md:w-full bg-bottom bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
        </div>
        <div className="absolute h-20 sm:h-24 md:h-30 bg-yellow-500 w-screen flex justify-center items-center bottom-0 opacity-60 mix-blend-hue clip-path-polygon"></div>
      </div>
        </div>
      );
    }

    export default Header;
