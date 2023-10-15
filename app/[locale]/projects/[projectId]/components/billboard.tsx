import { ProjectItem } from "@/service/get-data";
import React from "react";
import { ArrowRight, ArrowUpCircle } from "lucide-react";
import Link from "next/link";
interface BillboardProps {
  data: ProjectItem;
}

function Billboard({ data }: BillboardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8">
        <div className="text-neutral-400 text-md ">{data.category}</div>
        <div className="text-neutral-200 font-semibold drop-shadow-lg text-7xl w-1/2">
          {data.label}
        </div>
        <div className="text-neutral-400 font text-md w-1/2 pt-12">
          Home &gt; Projects &gt; {data.label}
        </div>
      </div>
      <div className="mt-8 flex flex-row">
        <div className="text-neutral-400  w-1/2 pr-12">{data.description}</div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row h-36 gap-x-8">
            <div className="text-md w-32 border-t border-neutral-400 py-4">
              <p className=" text-white font-medium">Client</p>
              <p className=" text-neutral-400 font-normal">{data.client}</p>
            </div>
            <div className="text-md w-32 border-t border-neutral-400 py-4">
              <p className=" text-white font-medium">Technologies</p>
              {data.technologies.map((item, idx) => (
                <p key={idx} className=" text-neutral-400 font-normal">
                  {item}{" "}
                </p>
              ))}
            </div>
          </div>
          <Link
            href={data.link!}
            className="text-neutral-200 gap-x-4 flex flex-row transition duration-500 delay-150 cursor-pointer hover:text-cyan-400 group/item"
          >
            Open Project
            <ArrowUpCircle
              size={24}
              className="group-hover/item:animate-ping "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
