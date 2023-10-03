import React from "react";
import Filter from "./filter";
import ProjectCard from "./project-card";

function ProjectsCollage() {
  return (
    <section>
      ProjectsCollage
      <Filter />
      {/** List of projects */}
      <ProjectCard />
    </section>
  );
}

export default ProjectsCollage;
