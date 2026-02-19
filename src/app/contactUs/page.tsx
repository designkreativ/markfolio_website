import React from "react";
import { mainSection } from "@/components/Action";

function page() {
  const { contactUs } = mainSection;
  return (
    <div className="">

      <div className="bg-teal-50 min-h-20  bg-gradient">
      <div className="mx-auto max-w-[1440px] px-2 md:px-4 pt-20 flex flex-col gap-5">

        <div className="pt-20 text-white pb-10">
          <h2 className="subheading">WANT TO REACH OUT?</h2>
          <h1 className="heading capitalize text-primary-light py-5">we are available!</h1>
          <p className="body-font max-w-100">We carry out the process to achieve maximum results for the development of your business</p>
        </div>
  {/* Contact form */}
        <div className="bg-white w-100 h-100">Contact me</div>
      </div>



      </div>
      <div className="mx-auto max-w-[1440px] px-2 md:px-4 pt-10 flex flex-col gap-2">
        <h2 className="section-heading">Call us</h2>
        <p>{contactUs.workingHours}</p>
        <p>{contactUs.phone}</p>
        <h2 className="section-heading">Visit Us</h2>
        <p>{contactUs.address}</p>
      </div>

    </div>
  );
}

export default page;
