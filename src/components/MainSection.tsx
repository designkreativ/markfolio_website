import React from "react";

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
          id: 2,
          title: "Analytics",
        },
        {
          id: 2,
          title: "Creativity",
        },
      ],
    },
    ourFlow: {
      subTitle: "Our Flow",
      title: "we love what we do",
      description:
        "WWe carry out the process to achieve maximum results for the development of your business",
      flowList: [
        {
          id: 1,
          title: "Research",
          description: "Research to find the core of the problem",
        },
        {
          id: 2,
          title: "Planning",
          description: "Collecting, measuring and analyzing insights",
        },
        {
          id: 3,
          title: "Execution",
          description: "ISteps toward reaching your planned goals",
        },
        {
          id: 4,
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
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION */}
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
