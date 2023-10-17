"use client";
import { cn } from "@/lib/utils";
import {
  MapPin,
  ArrowUpRightSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import React, { Fragment, useState } from "react";

interface ArticleProps {
  role: string;
  years: string;
  location: string;
  link: string;
  name: string;
  decription: string;
  tags: string[];
  logo: any;
}

interface ArticleCardProps {
  data: ArticleProps;
}

function ArticleCard({ data }: ArticleCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-max xs:w-[360px] lg:w-fit items-center justify-center text-center relative">
      <div
        className={cn(
          "px-6 lg:w-[720px] xs:w-[360px] xs:h-full lg:h-14 flex xs:flex-col lg:flex-row relative bg-violet-900 rounded-lg font-semibold text-neutral-200 text-center xs:py-2 lg:pt-4 gap-x-12 justify-between z-50 mb-2",
          open === true &&
            "bg-violet-700 transition-colors duration-300 delay-75"
        )}
      >
        <p className="xs:text-sm lg:text-md">
          {data.role} @ {data.name}
        </p>
        <p className="mr-16 xs:text-sm lg:text-md">{data.years}</p>

        <ChevronDown
          onClick={() => setOpen(true)}
          className={cn(
            "hover:text-indigo-950 absolute cursor-pointer xs:right-3 lg:right-8",
            open === true && "invisible isOpen peer"
          )}
        />

        <ChevronUp
          onClick={() => setOpen(false)}
          className={cn(
            "hover:text-indigo-950 absolute cursor-pointer xs:right-3 lg:right-8 invisible",
            open === true && "visible"
          )}
        />
      </div>

      <div
        className={cn(
          "px-6 lg:w-[720px]  h-0 overflow-hidden  flex flex-row  bg-indigo-950 rounded-lg mt-2 gap-x-12 items-center z-10",
          open === true &&
            "lg:h-[180px] xs:h-[220px] transition-[height] delay-150 duration-300 ease-in ",
          open === false &&
            "h-0 transition-[height] delay-150 duration-300 ease-in "
        )}
      >
        <div className="lg:w-10/12 xs:w-full flex flex-col h-full py-6 gap-y-4">
          <div className="h-1/5 flex flex-row gap-x-2 text-neutral-300 text-sm">
            <MapPin color="rgb(109 40 217)" />
            <p className="mr-4">{data.location}</p>

            <Link
              href={data.link}
              className="hover:text-violet-500 flex flex-row gap-x-2"
            >
              <ArrowUpRightSquare color="rgb(109 40 217)" />
              {data.name}
            </Link>
          </div>
          <div className="h-2/5 text-left xs:text-sm text-neutral-200">
            {data.decription}
          </div>
          <div className="lh-2/5  flex flex-row gap-x-2 flex-wrap">
            {data.tags.map((el, ind) => (
              <div
                key={ind}
                className="py-1 px-3 xs:h-6 lg:h-7 rounded-2xl text-neutral-300 xs:text-xs lg:text-sm bg-blue-800"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 h-24 w-24  rounded-lg ml-4 justify-center xs:collapse lg:visible items-center flex">
          {data.logo}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
