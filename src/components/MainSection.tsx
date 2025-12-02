import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

function MainSection() {
  const mainSection = {
    services: {
      subTitle: "Our Services",
      title: "Full Service Digital Marketing Agency",
      description:
        "Digimar Internet Marketing Agency is a full-service digital marketing agency, Attract, Impress, and Convert more leads online and get results with Digimar",
      servicesList: [
        {
          number: "01",
          id: 1,
          title: "Search Engine Optimization",
          description:
            "Through careful keyword research, we can help you achieve high rankings in the major search engines",
        },
        {
          number: "02",
          id: 2,
          title: "Social Media Marketing",
          description:
            "Social media is a critical element in staying connected with your audience, we help your community engaged.",
        },
        {
          number: "03",
          id: 3,
          title: "Web Design Development",
          description:
            "With millions of websites, you want to be sure your website stands out and helps your business grow.",
        },
      ],
    },
    whyChooseUs: {
      subTitle: "Why Choose Us",
      title: "exceptional solution for digital business model",
      description:
        "Our digital marketing services include consulting and management options for a variety of online marketing tactics",
      pitchList: [
        {
          id: 1,
          title: "Strategy",
        },
        {
          id: 2,
          title: "Technology",
        },
        {
          id: 3,
          title: "Analytics",
        },
        {
          id: 4,
          title: "Creativity",
        },
      ],
    },
    ourFlow: {
      subTitle: "Our Flow",
      title: "we love what we do",
      description:
        "We carry out the process to achieve maximum results for the development of your business",
      flowList: [
        {
          id: 1,
          number: "01",
          title: "Research",
          description: "Research to find the core of the problem",
        },
        {
          id: 2,
          number: "02",
          title: "Planning",
          description: "Collecting, measuring and analyzing insights",
        },
        {
          id: 3,
          number: "03",
          title: "Execution",
          description: "ISteps toward reaching your planned goals",
        },
        {
          id: 4,
          number: "04",
          title: "Optimization",
          description: "Finding solutions to your business issues",
        },
      ],
    },
  };
  return (
    <main className="mx-auto max-w-[1440px]">
      <div>
        <div className="">
          <div className="flex items-end gap-5">
            <div className="flex flex-col  gap-4 mt-10">
              <p className="subheading text-primary-mid">
                {mainSection.services.subTitle}
              </p>
              <h1 className="heading text-primary-dark">
                {mainSection.services.title}
              </h1>
            </div>
            <p className="">{mainSection.services.description}</p>
          </div>

          {/* SERVICES LIST */}

          <div className="flex gap-10 mt-10 py-20">
            {mainSection.services.servicesList.map((service) => (
              <div key={service.id}>
                <p className="text-stroke opacity-50 absolute">
                  {service.number}
                </p>
                <div className="flex flex-col pl-10 pt-10 top-3">
                  <h2 className="section-heading text-primary-low">
                    {service.title}
                  </h2>
                  <p className="body-font">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION  | WHY CHOOSE US */}

          <div className="flex items-center gap-10 py-10">
            <div>
              <div className="h-150 w-200 bg-teal-700"></div>
              {/* <Image src="" alt=""></Image> */}
            </div>
            <div className="flex flex-col gap-5">
              <p className="subheading text-primary-mid">
                {mainSection.whyChooseUs.subTitle}
              </p>
              <h2 className="heading capitalize pr-35">
                {mainSection.whyChooseUs.title}
              </h2>
              <p className="body-font">{mainSection.whyChooseUs.description}</p>

              <ul className="grid grid-cols-2 gap-4">
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
          <div className="flex items-center gap-10 py-10">
            <div className="flex flex-col gap-5">
              <p className="subheading text-primary-mid">{mainSection.ourFlow.subTitle}</p>
              <h2 className="heading capitalize pr-30">{mainSection.ourFlow.title}</h2>
              <p className="body-font">{mainSection.ourFlow.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {mainSection.ourFlow.flowList.map((flow) => (
                  <div key={flow.id}>
                    <p className="text-stroke opacity-50 absolute">
                      {flow.number}
                    </p>
                    <div className="flex flex-col pl-10 pt-10 top-3">
                      <h2 className="section-heading text-primary-low">
                        {flow.title}
                      </h2>
                      <p className="body-font">{flow.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-150 w-200 bg-teal-700"></div>
              {/* <Image src="" alt=""></Image> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
