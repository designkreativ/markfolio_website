"use client";

import * as React from "react";
import Image from "next/image";
import Logo from "@/assets/markfolioLogo.svg";
import Link from "next/link";
import {
  Menu,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Navigation,
} from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import MobileNavBar from "./MobileNavbar";

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

export function NavbarMenu() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <MobileNavBar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="w-full flex items-center justify-center mx-auto py-4  text-white  fixed top-0 z-50 ">
        <NavigationMenu
          viewport={isMobile}
          className="container flex justify-between px-4 max-w-[1440px] "
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={140}
                  height={60}
                  className="w-25 md:w-30"
                />
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-none ">
                  {servicesData.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/portfolio">
                        <div className="font-medium">Graphic Design</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/portfolio">
                        <div className="font-medium">
                          Web Design Development
                        </div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/portfolio">
                        <div className="font-medium">Software Development</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Button variant="outline" size="lg" className="font-bold">
                  <Link href="/contactUs">Contact Us</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden not-md:block ">
              <Button
                variant="outline"
                size="sm"
                className="font-bold"
                onClick={toggleMobileMenu}
              >
                <Menu className="text-white" />
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium text-primary-low">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
