import AboutExperience from "@/components/ui/about-experience";
import CareerPath from "@/components/ui/career-path";
import Contacts from "@/components/ui/contacts";
import Expertise from "@/components/ui/expertise";
import Hero from "@/components/ui/hero";
import ProjectsCollage from "@/components/ui/projects-collage";
import Testimonials from "@/components/ui/testimonials";
import Work from "@/components/ui/work";
import Image from "next/image";

import type { Metadata } from "next";
import StickyNavbar from "@/components/ui/sticky-navbar";
import GoUp from "@/components/ui/go-up";

export const metadata: Metadata = {
  title: "toimetm Portfolio",
  description: "Toimet Murat's Portfolio",
};

export default function Home() {
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
