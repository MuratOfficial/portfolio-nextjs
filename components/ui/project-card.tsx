import { cn } from "@/lib/utils";
import { ProjectItem } from "@/service/get-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

interface ProjectCardProps {
  data: ProjectItem;
}

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Link href={`/projects/${data?.projectId}`}>
      <div
        className={cn(
          "card lg:w-[400px] lg:h-[410px] xs:w-[320px] xs:h-[340px] bg-white rounded-lg group/item flex flex-col justify-end hover:brightness-90 transition duration-150 delay-75"
          // data.bigFrame === true &&
          //   "lg:w-[826px] lg:h-[640px] xs:w-[320px] xs:h-[340px]"
        )}
        style={{ backgroundImage: `url(${data?.images![0]})` }}
      >
        <div className=" lg:p-6 xs:p-4  flex flex-col bg-slate-900 bg-opacity-95 rounded-b-md w-full xs:h-24 lg:h-32">
          <div className="relative">
            <h1 className="text-lg mb-3 text-neutral-200">{data.label}</h1>
          </div>
          <div className="justify-between flex flex-row">
            <div className="mt-auto flex flex-row lg:gap-x-4 xs:gap-x-2 gap-y-2 w-full flex-wrap">
              {data.technologies.slice(0, 3).map((el, elidx) => (
                <span
                  key={elidx}
                  className=" bg-neutral-200 bg-opacity-60 py-1 px-4 rounded-md text-slate-900 xs:text-xs lg:text-sm"
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
