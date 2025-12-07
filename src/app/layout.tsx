import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/NavbarMenu";
import Footer from "@/components/Footer";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "MarkFolio",
  description: "Business Services Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      > 
        <NavbarMenu />
        {children}
        {/* <Footer/> */}
      <div className="bg-gradientt w-screen">

      </div>
      </body>
    </html>
  );
}
