import React from "react";
import { mainSection } from "@/components/Action";
import { Check } from "lucide-react";

function page() {
  const { priceCards } = mainSection;
  return (
    <div className="">
      <div className="bg-teal-50 min-h-20  bg-gradient"></div>

      <div className="mx-auto max-w-[1440px] px-2 md:px-4 pt-20 flex flex-col justify-center items-center gap-5">
        {/*  Title  */}
        <div className="text-center flex flex-col items-center gap-2">
          <h1 className="heading text-primary-low">Pricing</h1>
          <p className="body-font">
            Receive unlimited credits when you pay yearly, and save on your plan
          </p>
        </div>

        {/*  Toggle  */}
        <div className="flex gap-3 bg-gray-100 py-2 px-4 w-fit rounded-2xl items-center justify-center">
          <p>Monthly</p>
          <p className="bg-white py-2 px-4 rounded-lg">Annually</p>
        </div>

        {/*  Price Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {priceCards.map((card) => (
            <div
              key={card.id}
              className={`border rounded-4xl p-6 flex flex-col gap-2 relative ${
          card.popular ? " bg-primary-low" : " bg-gray-100"
              }`}
            >
              {card.popular && (
          <p className="absolute top-4 right-4 bg-primary-mid text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </p>
              )}
              <h2
          className={`text-2xl font-bold pb-2 ${card.popular ? "text-white" : "text-primary-low"}`}
              >
          {card.price}
          <span className="text-sm font-light pl-1">/month</span>
              </h2>
              <p
          className={`section-heading text-primary-low ${card.popular ? "text-white" : ""}`}
              >
          {card.title}
              </p>
              <p
          className={`body-font ${card.popular ? "text-white" : "text-primary-low"}`}
              >
          {card.description}
              </p>
              <div
          className={`body-font pb-4 ${card.popular ? "text-white" : "text-primary-low"}`}
              >
          {card.features.map((feature, index) => (
            <div key={index} className="flex items-center pt-2 gap-2 ">
              <Check
                size={25}
                className={` text-primary-light rounded-sm p-0.5 ${card.popular ? "bg-primary-light/12" :  "bg-white"}`}
              />
              <p className=" ">{feature}</p>
            </div>
          ))}
              </div>
              <button
          className={`mt-auto py-2 px-4 rounded-full inner-heading ${
            card.popular
              ? "bg-primary-light text-primary-low"
              : "bg-primary-low text-white"
          }`}
              >
          Choose Plan
              </button>
            </div>
          ))}
        </div>
            </div>
          </div>
        );
      }

      export default page;
