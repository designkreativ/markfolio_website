import React from "react";
import { Button } from "./ui/button";
import bgImage from "@/assets/background.png";


import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col items-center gap-4 pt-40 pb-0 text-white bg-gradient">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className=" font-bold text-center text-3xl md:text-5xl   lg:text-6xl  px-5 pb-5">
            Business 🚀 Skyrocketing <br /> with Digital Marketing
          </h1>

          <p className="text-center max-w-150 px-10 opacity-70 pb-10">
            Digimar internet Marketing Agency is a full-service digital
            marketing agency. Attract, impress, and Convert more leads online
            and get results with Digimar.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="default"
            size="xl"
            className="text-primary-dark font-bold"
          >
            Registration
          </Button>
          <Button variant="outline" size="xl">
            See How It Works
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <div
          className="h-140 w-400 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
        
        </div>
        <div className="absolute h-30 bg-primary  w-screen flex justify-center items-center bottom-1 opacity-60 sepia-0 mix-blend-hue">
          
          
        </div>
        
      </div>
    </div>
  );
}

export default Header;
