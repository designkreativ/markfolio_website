"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/assets/markfolioLogoDark.svg";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const servicesData: { title: string; href: string; description: string }[] = [
  {
    title: "Search Engine Optimization",
    href: "/services",
    description:
      "Through careful keyword research, we can help you achieve high rankings in the major search engines",
  },
  {
    title: "Software Development",
    href: "/services",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Social Media Marketing",
    href: "/services",
    description:
      "Social media is a critical element in staying connected with your audience,",
  },
  {
    title: "Web Design Development",
    href: "/services",
    description:
      "With millions of websites, you want to be sure your website stands out and helps your business grow",
  },
];

const portfolioData = [
  {
    title: "Graphic Design",
    href: "/portfolio",
    description: "Browse all components in the library.",
  },
  {
    title: "Web Design Development",
    href: "/portfolio",
    description: "Learn how to use the library.",
  },
  {
    title: "Software Development",
    href: "/portfolio",
    description: "Read our latest blog posts.",
  },
];

interface MobileNavBarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

function MobileNavBar({
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileNavBarProps) {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [portfolioOpen, setPortfolioOpen] = React.useState(false);

  function handleLinkClick() {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
      setServicesOpen(false);
      setPortfolioOpen(false);
    }
  }

  return (
    <>
      {isMobileMenuOpen && (
        <motion.div
          whileInView={{ opacity: [0, 1], transition: { duration: 0.3 } }}
          onClick={toggleMobileMenu}
          className={cn(`absolute left-[-100%] z-[99] hidden bg-slate-900/80`, {
            "inset-0 block lg:hidden": isMobileMenuOpen,
          })}
        />
      )}
      <nav
        className={cn(
          `fixed left-[-100%] top-0 z-[999] h-full w-[70%] min-w-[300px] max-w-[412px] flex-col bg-white p-5 transition-all duration-300 ease-in-out overflow-y-auto`,
          { "left-0 flex md:-left-[100%]": isMobileMenuOpen }
        )}
      >
        <button
          className="absolute -right-20 top-8 rounded-full bg-primary text-primary-foreground max-w-fit p-2"
          onClick={toggleMobileMenu}
        >
          <IoCloseOutline className="h-6 w-6 transition-all duration-200 ease-in hover:text-primary/80" />
        </button>
        <div className="flex h-full w-full flex-col gap-4">
          <div className="mb-4">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src={Logo}
                alt="Logo"
                width={140}
                height={60}
                className="w-25"
              />
            </Link>
          </div>
          <hr className="border-slate-100" />
          {/* MENU ITEMS CONTAINER */}
          <ul className="flex-1 flex-col flex">
            {/* Home */}
            <li>
              <Link href="/" onClick={handleLinkClick}>
                <div className="p-1 py-4 flex items-center hover:bg-primary/10 hover:text-primary font-medium hover:font-bold cursor-pointer transition-all duration-200 ease-in text-primary-mid">
                  Home
                </div>
              </Link>
            </li>

            {/* Services */}
            <li className="border-t border-slate-100">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full p-1 py-4 flex items-center justify-between hover:bg-primary/10 hover:text-primary font-medium hover:font-bold cursor-pointer transition-all duration-200 ease-in text-primary-mid"
              >
                Services
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", {
                    "rotate-180": servicesOpen,
                  })}
                />
              </button>
              {servicesOpen && (
                <ul className="pl-4 pb-2 space-y-2">
                  {servicesData.map((service) => (
                    <li key={service.title}>
                      <Link href={service.href} onClick={handleLinkClick}>
                        <div className="p-2 hover:bg-primary/5 rounded">
                          <div className="text-sm font-medium text-primary-low">
                            {service.title}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Portfolio */}
            <li className="border-t border-slate-100">
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="w-full p-1 py-4 flex items-center justify-between hover:bg-primary/10 hover:text-primary font-medium hover:font-bold cursor-pointer transition-all duration-200 ease-in text-primary-mid"
              >
                Portfolio
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", {
                    "rotate-180": portfolioOpen,
                  })}
                />
              </button>
              {portfolioOpen && (
                <ul className="pl-4 pb-2 space-y-2">
                  {portfolioData.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} onClick={handleLinkClick}>
                        <div className="p-2 hover:bg-primary/5 rounded">
                          <div className="text-sm font-medium text-primary-low">
                            {item.title}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Pricing */}
            <li className="border-t border-slate-100">
              <Link href="/pricing" onClick={handleLinkClick}>
                <div className="p-1 py-4 flex items-center hover:bg-primary/10 hover:text-primary font-medium hover:font-bold cursor-pointer transition-all duration-200 ease-in text-primary-mid">
                  Pricing
                </div>
              </Link>
            </li>

            {/* Contact Us Button */}
            <li className="border-t border-slate-100 pt-4">
              <Link href="/contactUs" onClick={handleLinkClick}>
                <Button
                  variant="outline"
                  size="lg"
                  
                  className="w-full font-bold bg-primary-mid text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNavBar;
