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
    <div className=" flex flex-row sticky top-[520px] bg-transparent py-5 w-full ">
      <button
        onClick={scrollToTop}
        className="z-50 absolute right-0 text-cyan-600 pl-3 align-center w-12 mr-10 h-12 bg-neutral-200"
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
