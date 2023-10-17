import React from "react";
import ProjectCard from "./project-card";
import AnimateFadeIn from "../animation/animate-fade-in";
import useProject from "@/hooks/useProject";

function ProjectsCollage() {
  const projects = useProject().items;
  return (
    <section className="w-full h-max mb-8 pb-8 flex">
      {/** List of projects */}
      <AnimateFadeIn>
        {projects.map((item, index) => (
          <ProjectCard data={item} key={index} />
        ))}
      </AnimateFadeIn>
    </section>
  );
}

export default ProjectsCollage;
