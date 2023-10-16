"use client";
import AboutExperience from "@/components/ui/about-experience";
import CareerPath from "@/components/ui/career-path";
import Contacts from "@/components/ui/contacts";
import Expertise from "@/components/ui/expertise";
import Hero from "@/components/ui/hero";
import { useEffect } from "react";
import Work from "@/components/ui/work";
import Image from "next/image";

import StickyNavbar from "@/components/ui/sticky-navbar";
import GoUp from "@/components/ui/go-up";

export default function Home() {
  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <StickyNavbar />

      {/*Start of Main Hero Block */}
      <Hero />
      <GoUp />

      {/*Start of Expertise Block */}

      <Expertise />

      {/*Start of Work Block */}

      <Work />

      {/*Start of Projects Preview Collage Block */}
      <AboutExperience />
      {/**Career Path block */}

      <CareerPath />

      {/*Contacts Block */}

      <Contacts />
    </main>
  );
}
