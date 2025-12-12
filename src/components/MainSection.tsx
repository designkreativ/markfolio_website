import React from "react";
import Image from "next/image";
import { Check} from "lucide-react";
import Link from "next/link";
import sectionImage from "@/assets/sectionImage.png";
import { Button } from "./ui/button";
import { mainSection } from "@/components/Action";


function MainSection() {
  return (
    <main className="mx-auto max-w-[1440px] px-2 md:px-4">
      <div className="">

        <div className="flex flex-col md:flex-row md:items-end gap-5">
          <div className="flex flex-col  gap-2 mt-10">
            <p className="subheading text-primary-mid">
              {mainSection.services.subTitle}
            </p>
            <h1 className="heading text-primary-dark">
              {mainSection.services.title}
            </h1>
          </div>
          <p className="body-font">{mainSection.services.excerpt}</p>
        </div>

        {/* SERVICES LIST */}

        <div className="flex flex-col md:flex-row gap-10 py-10 md:py-15 lg:py-20">
          {mainSection.services.servicesList.map((service) => (
            <div key={service.id}>
              <p className="text-stroke opacity-50 absolute">
                {service.number}
              </p>
              <div className="flex flex-col pl-10 pt-10 top-3 bg-">
                <h2 className="section-heading text-primary-dark">
                  {service.title}
                </h2>
                <p className="body-font">{service.excerpt}</p>
                <Button
                  variant="outline"
                  className="mt-4 text-primary-mid/40 w-fit"
                  size="sm"
                >
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION  | WHY CHOOSE US */}

        <div className="flex flex-col md:flex-row items-center gap-10 py-10">
          <div className="flex-1">
            <Image src={sectionImage} alt="image section" />
          </div>
          <div className="flex-1 flex flex-col gap-2 ">
            <p className="subheading text-primary-mid">
              {mainSection.whyChooseUs.subTitle}
            </p>
            <h2 className="heading capitalize pb-1 text-primary-dark">
              {mainSection.whyChooseUs.title}
            </h2>
            <p className="body-font">{mainSection.whyChooseUs.description}</p>

            <ul className="grid grid-cols-2 gap-4 pt-10">
              {mainSection.whyChooseUs.pitchList.map((pitch) => (
                <li key={pitch.id} className="flex items-center gap-2">
                  <Check
                    size={30}
                    className="bg-primary-mid/12 text-primary-mid rounded-sm p-0.5 "
                  />
                  <span className="text-primary-low font-extrabold uppercase ">
                    {pitch.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION | OUR FLOW */}
        <div className="flex flex-col md:flex-row items-center gap-10 py-10">
          <div className="flex-1 flex flex-col gap-2">
            <p className="subheading text-primary-mid">
              {mainSection.ourFlow.subTitle}
            </p>
            <h2 className="heading capitalize pb-1 text-primary-dark">
              {mainSection.ourFlow.title}
            </h2>
            <p className="body-font">{mainSection.ourFlow.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {mainSection.ourFlow.flowList.map((flow) => (
                <div key={flow.id}>
                  <p className="text-stroke opacity-50 absolute">
                    {flow.number}
                  </p>
                  <div className="flex flex-col pl-10 pt-10 top-3">
                    <h2 className="section-heading text-primary-dark">
                      {flow.title}
                    </h2>
                    <p className="body-font">{flow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image src={sectionImage} alt="image section" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
