import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment } from "react";

interface ProjectItemProps {
  projectId: string;
  type: string;
  img: string;
  label: string;
  tags: string[];
}

interface ProjectCardProps {
  data: ProjectItemProps;
  size: string;
}

function ProjectCard({ data, size }: ProjectCardProps) {
  return (
    <Link
      href={data?.projectId}
      className={cn(
        "w-[380px] h-[400px] bg-white rounded-lg",
        size === "big" && "w-[792px] h-[640px]"
      )}
    >
      <div className="relative  mb-4 flex ">
        <img className="w-full  rounded-md" src={data.img} />
        <div className=" absolute inset-0 p-8 t flex flex-col">
          <div className="relative">
            <h1 className="text-3xl font-bold mb-3">{data.label}</h1>
          </div>
          <div className="mt-auto">
            {data.tags.map((el, elidx) => (
              <span
                key={elidx}
                className=" bg-white bg-opacity-60 py-1 px-4 rounded-md text-black"
              >
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
