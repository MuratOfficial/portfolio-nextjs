"use client";
import Footer from "@/components/ui/footer";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

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
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
