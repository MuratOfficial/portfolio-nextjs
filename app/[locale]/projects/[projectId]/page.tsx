"use client";
import React from "react";
import Billboard from "./components/billboard";
import ToggleProject from "./components/toggle-project";
import Footer from "./components/footer";
import { projects } from "@/service/get-data";
import { Metadata } from "next";

// type Props = {
//   params: { id: string };
// };

// export async function generateMetadata({
//   params,
// }: {
//   params: { projectId: string };
// }): Promise<Metadata> {
//   // fetch data
//   const project = projects.find((el) => el.projectId === params.projectId)!;

//   return {
//     title: project?.label,
//   };
// }

function ProjectPage({ params }: { params: { projectId: string } }) {
  const project = projects.find((el) => el.projectId === params.projectId);

  return (
    <main className="flex flex-col pt-14 xs:mx-8 lg:mx-24 gap-y-16">
      <Billboard data={project!} />

      <ToggleProject data={project?.images!} />
      <Footer />
    </main>
  );
}

export default ProjectPage;
