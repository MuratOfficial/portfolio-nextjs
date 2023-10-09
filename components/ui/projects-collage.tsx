import React from "react";
import ProjectCard from "./project-card";

function ProjectsCollage() {
  const projects = [
    {
      img: "",
      label: "Flight Local (B2B Travel Solution)",
      type: "Web Development",
      projectId: "project1",
      tags: ["NextJS", "TailwindCSS"],
    },
    {
      img: "",
      label: "AI Lab Granada",
      type: "Web Development",
      projectId: "project2",
      tags: ["ReactJS", "TailwindCSS"],
    },
    {
      img: "",
      label: "Khora Urban Thinkers Consulti",
      type: "Web Development",
      projectId: "project3",
      tags: ["NextJS", "TailwindCSS"],
    },
    {
      img: "",
      label: "Random Project",
      type: "Web Development",
      projectId: "project4",
      tags: ["Django", "Bootstrap"],
    },
    {
      img: "",
      label: "Some strange project",
      type: "Web Development",
      projectId: "project5",
      tags: ["MERN"],
    },
    {
      img: "",
      label: "Some strange project1",
      type: "ChatBots",
      projectId: "project5",
      tags: ["Django", "FireBase"],
    },
    {
      img: "",
      label: "Some strange project2",
      type: "Web Development",
      projectId: "project5",
      tags: ["MongoDB", "ReactJS", "Django"],
    },
    {
      img: "",
      label: "Some strange project3",
      type: "Web Development",
      projectId: "project5",
      tags: ["MERN"],
    },
  ];

  return (
    <section className="flex flex-row gap-4 w-full h-full mb-8 pb-8">
      {/** List of projects */}
      <div className="flex flex-col w-2/3 gap-4 flex-wrap">
        <div className="flex flex-row gap-x-8">
          <ProjectCard size="" data={projects[0]} />
          <ProjectCard size="" data={projects[1]} />
        </div>
        <ProjectCard size="big" data={projects[2]} />
        <ProjectCard size="big" data={projects[3]} />
      </div>
      <div className="flex flex-col w-1/3 gap-4 gap-y-4">
        <ProjectCard size="" data={projects[4]} />
        <ProjectCard size="" data={projects[5]} />
        <ProjectCard size="" data={projects[6]} />
        <ProjectCard size="" data={projects[7]} />
      </div>
    </section>
  );
}

export default ProjectsCollage;
