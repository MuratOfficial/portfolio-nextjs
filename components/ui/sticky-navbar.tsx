"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home, Slack, FolderGit2, Gem, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { useTranslations } from "next-intl";

function StickyNavbar() {
  const i = useTranslations("Navbar");

  const handleSetActive = (to: string) => {
    console.log(to);
  };
  const routes = [
    {
      order: <Home size={14} />,
      name: i("name1"),
      href: `/#`,
    },
    {
      order: <Slack size={14} />,
      name: i("name2"),
      href: "expertise",
    },
    {
      order: <FolderGit2 size={14} />,
      name: i("name3"),
      href: "projects",
    },
    {
      order: <Gem size={14} />,
      name: i("name4"),
      href: "experience",
    },
    {
      order: <Mail size={14} />,
      name: i("name5"),
      href: "contact",
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
          <Link
            href={routes[0].href}
            className="flex flex-col cursor-pointer hover:text-cyan-400 transition delay-150 items-center duration-400"
          >
            <p className="text-xs text-right leading-3">{routes[0].order}</p>
            <p className="text-sm text-center leading-5">{routes[0].name}</p>
          </Link>
          {routes.slice(1).map((el, index) => (
            <ScrollLink
              key={index}
              // activeClass="active"
              to={el.href}
              spy={true}
              smooth={true}
              offset={-100}
              delay={150}
              duration={1000}
              onSetActive={handleSetActive}
              className="flex flex-col cursor-pointer hover:text-cyan-400 transition delay-150 items-center duration-400"
            >
              <p className="text-xs text-right leading-3">{el.order}</p>
              <p className="text-sm text-center leading-5">{el.name}</p>
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default StickyNavbar;
