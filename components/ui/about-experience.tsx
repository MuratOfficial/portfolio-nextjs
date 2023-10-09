import React, { Fragment } from "react";
import ProjectsCollage from "./projects-collage";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";

function AboutExperience() {
  const filters = [
    { name: "All", number: "12" },
    { name: "WebDev", number: "07" },
    { name: "CMS", number: "03" },
    { name: "ChatBots", number: "02" },
  ];

  return (
    <div className="w-full flex flex-col p-16">
      <AnimateScrollDownHorizontalLeft>
        <div className="text-neutral-500 flex flex-row font-sans text-lg font-semibold mb-8">
          <p className="pr-2">Filter by</p>
          {filters.map((item, idx) => (
            <Fragment key={idx}>
              <p className="hover:text-cyan-300 cursor-pointer mr-3 relative">
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
