import React from "react";
import servicesbg from "@/assets/servicesbg.jpg";
import { mainSection } from "@/components/Action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient w-screen fixed top-0 z-0"></div>

      <div className="mx-auto max-w-[1440px] px-2 md:px-4 pt-40 gap-2 flex flex-col pb-8">
        <p className="subheading text-primary-mid">{mainSection.services.subTitle}</p>
        <h1 className="heading text-primary-dark">{mainSection.services.title}</h1>
      </div>
      <div
        className="bg-gray-100 min-h-50 w-full mx-auto flex justify-center items-center bg-top-left bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${servicesbg.src})` }}
      >
        <p className="max-w-[1440px] py-20 px-2 md:px-4 body-font ">
          {mainSection.services.description}
        </p>
      </div>

      <div className="max-w-[1440px] px-2 md:px-4 mx-auto">
        {/* ADD SERVICE CARDS HERE */}
        <div className="flex flex-col gap-10 py-10 md:py-15 lg:py-20">
          {mainSection.services.servicesList.map((service) => (
            <div key={service.id}>
              <p className="text-stroke opacity-50 absolute">
                {service.number}
              </p>
              <div className="flex flex-col pl-10 pt-10 top-3 bg-">
                <h2 className="section-heading text-primary-dark">
                  {service.title}
                </h2>
                <p className="body-font">{service.description}</p>
                
              </div>
            </div>
          ))}
        </div>
        <div>Learn more about our process </div>
      </div>
    </div>
  );
}

export default page;
