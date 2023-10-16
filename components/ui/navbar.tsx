"use client";
import { Home, Slack, FolderGit2, Gem, Mail } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import NextLink from "next-intl/link";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

function Navbar() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const i = useTranslations("Navbar");
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

  return (
    <div className="flex flex-row p-2 lg:h-20 bg-transparent relative justify-center items-center">
      <div className="absolute left-4 font-semibold text-cyan-300 hover:text-cyan-500 justify-center items-center text-center m-4 text-2xl cursor-pointer">
        .toimetm
      </div>
      <nav className="flex pt-2">
        <ul className="flex flex-row gap-x-8 text-neutral-500 transition delay-150 duration-400">
          <Link
            href={routes[0].href}
            className="flex flex-col cursor-pointer hover:text-neutral-200 transition delay-150 items-center duration-400"
          >
            <p className="text-xs text-right leading-3">{routes[0].order}</p>
            <p className="text-md text-center leading-5">{routes[0].name}</p>
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
              className="flex flex-col cursor-pointer hover:text-neutral-200 transition delay-150 items-center duration-400"
            >
              <p className="text-xs text-right leading-3">{el.order}</p>
              <p className="text-md text-center leading-5">{el.name}</p>
            </ScrollLink>
          ))}
        </ul>
      </nav>
      <div className="absolute right-4 text-neutral-500  justify-center items-center text-center m-4 text-md cursor-pointer">
        <NextLink
          href="/"
          locale="kk"
          className="mr-4 hover:text-neutral-300 focus:font-bold"
        >
          kz
        </NextLink>
        <NextLink
          href="/"
          locale="en"
          className="mr-4 hover:text-neutral-300 focus:font-bold"
        >
          en
        </NextLink>
        <NextLink
          href="/"
          locale="ru"
          className="hover:text-neutral-300 focus:font-bold"
        >
          ru
        </NextLink>
      </div>
    </div>
  );
}

export default Navbar;
