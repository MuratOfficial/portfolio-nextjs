import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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
    <Link href={`projects/${data?.projectId}`}>
      <div
        className={cn(
          "card w-[380px] h-[400px] bg-white rounded-lg group/item flex flex-col justify-end hover:brightness-90 transition duration-150 delay-75",
          size === "big" && "w-[792px] h-[640px]"
        )}
      >
        {/* <img className="w-full  rounded-md" src={data.img} /> */}
        <div className=" p-6  flex flex-col bg-slate-900 rounded-b-md w-full h-28">
          <div className="relative">
            <h1 className="text-lg mb-3 text-neutral-200">{data.label}</h1>
          </div>
          <div className="justify-between flex flex-row">
            <div className="mt-auto flex flex-row gap-x-4 ">
              {data.tags.map((el, elidx) => (
                <span
                  key={elidx}
                  className=" bg-neutral-200 bg-opacity-60 py-1 px-4 rounded-md text-slate-900 text-sm"
                >
                  {el}
                </span>
              ))}
            </div>

            <ArrowRight
              color="rgb(203 213 225)"
              className=" group-hover/item:translate-x-4 transition invisible duration-700 delay-150 group-hover/item:visible"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
