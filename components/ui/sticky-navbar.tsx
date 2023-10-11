"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function StickyNavbar() {
  const routes = [
    {
      order: ".1",
      name: "home",
      href: "#home",
    },
    {
      order: ".2",
      name: "expertise",
      href: "#expertise",
    },
    {
      order: ".3",
      name: "projects",
      href: "#projects",
    },
    {
      order: ".4",
      name: "experience",
      href: "#experience",
    },
    {
      order: ".5",
      name: "contact",
      href: "#contact",
    },
  ];

  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement!.scrollTop;
      if (scrolled >= 300) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  return (
    <div
      className={cn(
        "flex flex-row collapse  lg:h-20 bg-slate-950 bg-blend-multiply bg-opacity-90 -translate-y-24 z-50 w-full relative justify-center items-center sticky top-0",
        pos === "moved" &&
          "visible transition delay-150 duration-500 translate-y-0"
      )}
    >
      <nav className="flex">
        <ul className="flex flex-row gap-x-12 text-cyan-200 transition delay-150 duration-400">
          {routes.map((el, index: any) => (
            <Link
              href={el.href}
              key={index}
              className="flex flex-col  hover:text-cyan-500 transition delay-150 duration-400"
            >
              <p className="text-[10px] text-right leading-3">{el.order}</p>
              <p className="text-sm text-center leading-5">{el.name}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default StickyNavbar;
