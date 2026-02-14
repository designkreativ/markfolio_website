import React from "react";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <div>
      <div className="bg-gradient min-h-60 w-screen flex flex-col gap-4  justify-end pb-4 items-center">
        <h1 className="text-primary-light heading">Portfolio</h1>
        <Input
          type="email"
          placeholder="Search"
          className="text-white w-fit border-b border-none  placeholder-white bg-white focus:ring-40 focus:border-none focus:outline-none rounded-full" 
        />
      </div>
      <div className="mx-auto max-w-[1440px] px-2 md:px-4  ">
        <div className="flex justify-between py-5">
          <div className="flex gap-2 justify-center items-center">
            <p className="bg-primary-light px-6 py-2 rounded-full">Sort By</p>
            <p className=" px-6 ">Sort By</p>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;