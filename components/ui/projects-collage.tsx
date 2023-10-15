import React from "react";
import ProjectCard from "./project-card";
import AnimateFadeIn from "../animation/animate-fade-in";
import { projects } from "@/service/get-data";

function ProjectsCollage() {
  return (
    <section className="flex flex-row gap-4 w-full h-max mb-8 pb-8">
      {/** List of projects */}
      <AnimateFadeIn>
        {" "}
        <div className="flex flex-col w-2/3 gap-4 flex-wrap">
          <div className="flex flex-row gap-x-8">
            {projects[0] !== undefined ? (
              <ProjectCard size="" data={projects[0]} />
            ) : null}
            {projects[1] !== undefined ? (
              <ProjectCard size="" data={projects[1]} />
            ) : null}
          </div>
          {projects[2] !== undefined ? (
            <ProjectCard size="" data={projects[2]} />
          ) : null}
          {projects[3] !== undefined ? (
            <ProjectCard size="" data={projects[3]} />
          ) : null}
        </div>
        <div className="flex flex-col w-1/3 gap-4 gap-y-4">
          {projects[4] !== undefined ? (
            <ProjectCard size="" data={projects[4]} />
          ) : null}
          {projects[5] !== undefined ? (
            <ProjectCard size="" data={projects[5]} />
          ) : null}
          {projects[6] !== undefined ? (
            <ProjectCard size="" data={projects[6]} />
          ) : null}
          {projects[7] !== undefined ? (
            <ProjectCard size="" data={projects[7]} />
          ) : null}
        </div>
      </AnimateFadeIn>
    </section>
  );
}

export default ProjectsCollage;
