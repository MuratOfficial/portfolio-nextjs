"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

function GoUp() {
  return (
    <div className=" flex flex-row sticky top-[520px] bg-transparent py-5 w-full ">
      <Link
        href="#"
        className="z-50 absolute right-0 text-cyan-600 pl-3 pt-3 align-center w-12 mr-10 h-12 bg-neutral-200"
      >
        <ArrowUp
          size={24}
          className="animate-pulse hover:-translate-y-2 transition duration-500 delay-150"
        />
      </Link>
    </div>
  );
}

export default GoUp;
