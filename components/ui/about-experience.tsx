import React, { Fragment } from "react";
import ProjectsCollage from "./projects-collage";
import { AnimateScrollDownHorizontalLeft } from "../animation/animate-scroll-down";
import { projects } from "@/service/get-data";

interface FilterProps {
  name: string;
  number: number;
}

function AboutExperience() {
  const filters: FilterProps[] = [
    { name: "All", number: projects.length },
    {
      name: "WebDev",
      number: projects.filter((el) => el.category === "Web Development").length,
    },
    {
      name: "CMS",
      number: projects.filter((el) => el.category === "CMS").length,
    },
    {
      name: "ChatBots",
      number: projects.filter((el) => el.category === "Chat Bot").length,
    },
  ];

  return (
    <div className="w-full flex flex-col p-16" id="experience">
      <AnimateScrollDownHorizontalLeft>
        <div className="text-neutral-500 flex flex-row font-sans text-lg font-semibold mb-8">
          <p className="pr-2">Filter by</p>
          {filters.map((item, idx) => (
            <Fragment key={idx}>
              <p className="hover:text-cyan-300  cursor-pointer mr-3 relative">
                {item.name}
                <span className="text-xs absolute top-0 pr-1">
                  {item.number}
                </span>
              </p>

              <span className="pr-4">/</span>
            </Fragment>
          ))}
        </div>
      </AnimateScrollDownHorizontalLeft>

      <ProjectsCollage />
    </div>
  );
}

export default AboutExperience;
