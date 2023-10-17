"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

function GoUp() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className=" flex flex-row sticky top-[520px] bg-transparent py-5 w-full z-50">
      <button
        onClick={scrollToTop}
        className="z-50 absolute right-0 text-cyan-600 xs:pl-1 lg:pl-3 align-center xs:w-8 xs:h-8 lg:w-12 lg:mr-10 xs:mr-2 lg:h-12 xs:bg-opacity-50 xs:rounded-md lg:rounded-none lg:bg-opacity-90 bg-neutral-200"
      >
        <ArrowUp
          size={24}
          className="animate-pulse hover:-translate-y-2 transition duration-500 delay-150"
        />
      </button>
    </div>
  );
}

export default GoUp;
