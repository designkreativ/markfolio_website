import Navbar from "@/components/navbar";
import { NavigationMenuDemo } from "@/components/NavbarShad";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <p>Navbar here</p>
      <Navbar/>
      <NavigationMenuDemo/>
    </div>
  );
}
