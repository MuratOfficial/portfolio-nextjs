import AboutExperience from "@/components/ui/about-experience";
import Contacts from "@/components/ui/contacts";
import Expertise from "@/components/ui/expertise";
import Hero from "@/components/ui/hero";
import ProjectsCollage from "@/components/ui/projects-collage";
import Testimonials from "@/components/ui/testimonials";
import Work from "@/components/ui/work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      {/*Start of Main Hero Block */}
      <Hero />

      {/*Start of Expertise Block */}
      <Expertise />
      {/*Start of Work Block */}
      <Work />

      {/*Start of Projects Preview Collage Block */}
      <AboutExperience />

      {/*Testimonials Block */}
      <Testimonials />
      {/*Contacts Block */}
      <Contacts />
    </main>
  );
}
