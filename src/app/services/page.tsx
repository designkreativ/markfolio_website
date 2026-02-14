import React from "react";
import servicesbg from "@/assets/servicesbg.jpg";
import Image from "next/image";
import { mainSection } from "@/components/Action";
import { Play } from 'lucide-react';
import { Check } from "lucide-react";




function page() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient w-screen fixed top-0 z-1"></div>

      <div className="mx-auto max-w-[1440px] px-2 md:px-4 pt-40 gap-2 flex flex-col pb-8">
        <p className="subheading text-primary-mid">
          {mainSection.services.subTitle}
        </p>
        <h1 className="heading text-primary-dark">
          {mainSection.services.title}
        </h1>
      </div>
      <div
        className="bg-gray-100 min-h-50 w-full mx-auto flex justify-center items-center bg-top-left bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${servicesbg.src})` }}
      >
        <p className="max-w-[1440px] py-20 px-2 md:px-4 body-font ">
          {mainSection.services.description}
        </p>
      </div>

      {/* ------- SERVICE SECTION HERE. ----- */}
      <div className="max-w-[1440px] px-2 md:px-4 mx-auto pb-20">
        <div className="flex flex-col gap-2 lg:gap-10 py-10 md:py-15 lg:py-20">
          {mainSection.services.servicesList.map((service) => (
            <div key={service.id}>
              <p className="text-stroke opacity-50 absolute">
                {service.number}
              </p>
              <div
                className={
                  service.list3
                    ? "pl-10 pt-10 top-3 pb-6 flex flex-col md:flex-row gap-4"
                    : " pl-10 pt-10 top-3 pb-6 flex flex-col"
                }
              >
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="section-heading text-primary-dark">
                    {service.title}
                  </h2>
                  <p className="body-font">{service.description}</p>
                  {service.list3 ? (
                    <div>
                      <p className="body-font font-medium">
                        {mainSection.whyChooseUs.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-4 pt-10">
                        {mainSection.whyChooseUs.pitchList.map((pitch) => (
                          <li
                            key={pitch.id}
                            className="flex items-center gap-2"
                          >
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
                  ) : null}
                </div>
                {service.list3
                  ? service.image && (
                      <Image
                        className="flex-1 h-100 object-cover"
                        src={service.image}
                        alt={service.title}
                      />
                    )
                  : null}
              </div>

              {/* SUB SERVICE HERE FOR SUB 1 */}
              {service.list1 && service.sublist && (
                <div className="flex not-md:flex-col gap-4 md:gap-8 lg:gap-15 mt-4 ml-10">
                  {service.sublist.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex flex-1 flex-row justify-start not-sm:flex-col gap-2 lg:gap-6 mb-2"
                    >
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        className="w-full flex-1 h-30  md:h-45 lg:h-60 object-cover "
                      />
                      <div className="flex flex-1 flex-col gap-2">
                        <h3 className="inner-heading">{sub.title}</h3>
                        <p className="body-font">{sub.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* SUB SERVICE HERE FOR SUB 2 */}
            </div>
          ))}
        </div>
        {/* SUB SERVICE HERE FOR SUB 3 */}

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="subheading text-primary-mid">our service</p>
            <h1 className="heading capitalize">Learn about our process</h1>
            <p className="body-font text-center">
              Social media is a critical element in staying connected with your
              audience, we help your community engaged.
            </p>
          </div>
          <div className="relative">
            <video
              width="320"
              height="150"
              // controls
              preload="none"
              className="w-screen h-auto aspect-video object-cover rounded-4xl "
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/process.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-white/50 rounded-4xl pointer-events-none flex
             justify-center items-center">
              <div className="bg-primary-mid p-4 rounded-full stroke-1 stroke-amber-50">

              <Play size={30} className="" color="white"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
