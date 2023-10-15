"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home, Slack, FolderGit2, Gem, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

function StickyNavbar() {
  const routes = [
    {
      order: <Home size={14} />,
      name: "home",
      href: "#",
    },
    {
      order: <Slack size={14} />,
      name: "expertise",
      href: "#expertise",
    },
    {
      order: <FolderGit2 size={14} />,
      name: "projects",
      href: "#projects",
    },
    {
      order: <Gem size={14} />,
      name: "experience",
      href: "#experience",
    },
    {
      order: <Mail size={14} />,
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
        "flex flex-row collapse backdrop-blur-sm lg:h-20 bg-slate-950 bg-blend-multiply bg-opacity-90 -translate-y-24 z-50 w-full relative justify-center items-center sticky top-0",
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
              className="flex flex-col  hover:text-cyan-500 transition items-center delay-150 duration-400"
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
