import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import servicesbg from "@/assets/servicesbg.jpg";
import { mainSection } from "@/components/Action";



function page() {
  const { projects } = mainSection;
  

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
        {/* ------- CARD FILTERS . ----- */}
        <div className="flex justify-between py-6 pb-10">
          <div className="flex gap-2 justify-center items-center">
            <p className="bg-primary-light px-6 py-2 rounded-full">Sort By</p>
            <p className=" px-6 ">Sort By</p>
          </div>
        </div>
        {/* ------- CARDS . ----- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-none overflow-hidden"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="w-screen h-auto aspect-video object-cover  bg-gray-300"
              />
            <div className="p-4 gap-4 flex flex-col border border-gray-200">
              <h3 className="section-heading">
                {project.title}
              </h3>
              <p className="body-font">
                {project.description}
              </p>
            </div>

            </div>
          ))}
          

          
        </div>
      </div>
    </div>
  );
}

export default page;
