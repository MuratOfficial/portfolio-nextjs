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

function ArticleCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-3/5 h-max items-center justify-center text-center relative">
      <div
        className={cn(
          "px-6 w-[720px] h-14 flex flex-row relative bg-violet-900 rounded-lg font-semibold text-neutral-200 text-center pt-4 gap-x-12 justify-between z-50 mb-2",
          open === true &&
            "bg-violet-700 transition-colors duration-300 delay-75"
        )}
      >
        <p>Software Engineer @ Saimon Global Ltd</p>
        <p className="mr-16">2109 - present</p>

        <ChevronDown
          onClick={() => setOpen(true)}
          className={cn(
            "hover:text-indigo-950 absolute cursor-pointer right-8",
            open === true && "invisible isOpen peer"
          )}
        />

        <ChevronUp
          onClick={() => setOpen(false)}
          className={cn(
            "hover:text-indigo-950 absolute cursor-pointer right-8 invisible",
            open === true && "visible"
          )}
        />
      </div>

      <div
        className={cn(
          "px-6 w-[720px] h-0 overflow-hidden  flex flex-row  bg-indigo-950 rounded-lg mt-2 gap-x-12 items-center z-10",
          open === true &&
            "h-[180px] transition-[height] delay-150 duration-300 ease-in ",
          open === false &&
            "h-0 transition-[height] delay-150 duration-300 ease-in "
        )}
      >
        <div className="w-10/12 flex flex-col h-full py-6 gap-y-4">
          <div className="h-1/5 flex flex-row gap-x-2 text-neutral-300 text-sm">
            <MapPin color="rgb(109 40 217)" />
            <p className="mr-4">Dhaka, Bangladesh</p>

            <Link
              href="saimonglobal.com"
              className="hover:text-violet-500 flex flex-row gap-x-2"
            >
              <ArrowUpRightSquare color="rgb(109 40 217)" />
              saimonglobal.com
            </Link>
          </div>
          <div className="h-2/5 text-left text-neutral-200">
            Developing front-end and mobile app solutions (B2C, B2B) in Travel
            Tech on React/Next.js framework and Flutter SDK.
          </div>
          <div className="h-2/5 flex flex-row gap-x-2">
            <div className="py-1 px-3 h-7 rounded-2xl text-neutral-300 text-sm bg-blue-800">
              React
            </div>
            <div className="py-1 px-3 h-7 rounded-2xl text-neutral-300 text-sm bg-blue-800">
              Javascript
            </div>
            <div className="py-1 px-3 h-7 rounded-2xl text-neutral-300 text-sm bg-blue-800">
              Typescript
            </div>
            <div className="py-1 px-3 h-7 rounded-2xl text-neutral-300 text-sm bg-blue-800">
              Python
            </div>
            <div className="py-1 px-3 h-7 rounded-2xl text-neutral-300 text-sm bg-blue-800">
              Bootstrap
            </div>
          </div>
        </div>
        <div className="p-4 h-24 w-24 bg-orange-600 rounded-lg ml-4">Logo</div>
      </div>
    </div>
  );
}

export default ArticleCard;
