"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import "@fontsource/poppins";
import Navbar from "@/components/ui/navbar";

import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
