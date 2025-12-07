import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/markfolioLogo.svg";

function Footer() {
  const contactDetails = {
    fooerLinks: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Services", href: "/services" },
      { id: 3, name: "Pricing", href: "/pricing" },
      { id: 4, name: "Portfolio", href: "/portfolio" },
    ],
    contactDetails: [
      { id: 1, name: "email", detail: "markfolio@gmail.com" },
      { id: 2, name: "phone", detail: "+122 456 789 00" },
      { id: 3, name: "address", detail: "West Street, New York, USA" },
    ],
   
    socialMedia: [
      { id: 1, name: "Facebook", href: "#" },
      { id: 2, name: "LinkedIn", href: "#" },
      { id: 3, name: "Instagram", href: "#" },
    ],
  };

  return (
    <div className="bg-gradient">
      <div className="mx-auto max-w-[1440px]">
        <div className=" flex flex-row justify-between items-center pt-15 pb-10 text-white ">
          <div className="flex-1">
            <h2 className="text-2xl leading-15 md:text-5xl font-bold capitalize py-4">
              lets boost your business <br/> with Markfolio agency
            </h2>
            <p className=" text-xl opacity-70 mt-2 ">
              Power up your business with our best digital marketing services.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Button size="xl" className="text-black font-bold">
              Get Started
            </Button>
          </div>
        </div>

        <div className="h-100 text-white flex flex-row justify-between items-start border-t border-white/10 pt-10 pb-10 ">
          <div>
            
              <Image
                src={Logo}
                alt="Markfolio Logo"
                width={100}
                height={100}
                className="w-150 h-auto mb-0 pb-2"
              />
            
            <p className="text-white/80">Markfolio.2025 All rights reserved@copyright</p>
          </div>
          <ul>
            <li>
              <h4 className="footer-h4">Menu</h4>
            </li>
            {contactDetails.fooerLinks.map((item) => (
              <li key={item.id} className="py-1.5">
                <Link href={item.href} className="footer-link ">{item.name}</Link>
              </li>
            ))}

            
          </ul>
          <ul>
            <li>
              <h4 className="footer-h4">Contact Us</h4>
            </li>
            {contactDetails.contactDetails.map((item) => (
              <li key={item.id} className="py-1.5">
                <Link href="#"  className="footer-link ">{item.detail}</Link>
              </li>
            ))}
            
          </ul>
          <ul>
            <li>
              <h4 className="footer-h4">Social Media</h4>
            </li>
            {contactDetails.socialMedia.map((item) => (
              <li key={item.id} className="py-1.5">
                <Link href={item.href} className="footer-link ">{item.name}</Link>
              </li>
            ))}

            
          </ul>
          <ul></ul>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
