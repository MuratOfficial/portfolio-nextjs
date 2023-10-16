"use client";
import { Home, Slack, FolderGit2, Gem, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import NextLink from "next-intl/link";
import { usePathname } from "next/navigation";

function Navbar() {
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
      href: "/#expertise",
    },
    {
      order: <FolderGit2 size={14} />,
      name: i("name3"),
      href: "/#projects",
    },
    {
      order: <Gem size={14} />,
      name: i("name4"),
      href: "/#experience",
    },
    {
      order: <Mail size={14} />,
      name: i("name5"),
      href: "/#contact",
    },
  ];
  const [link, setLink] = useState("#contact");

  return (
    <div className="flex flex-row p-2 lg:h-20 bg-transparent relative justify-center items-center">
      <div className="absolute left-4 font-semibold text-cyan-300 hover:text-cyan-500 justify-center items-center text-center m-4 text-2xl cursor-pointer">
        .toimetm
      </div>
      <nav className="flex pt-2">
        <ul className="flex flex-row gap-x-8 text-neutral-500 transition delay-150 duration-400">
          {routes.map((el, index) => (
            <Link
              href={el.href}
              key={index}
              className="flex flex-col  hover:text-neutral-200 transition delay-150 items-center duration-400"
            >
              <p className="text-xs text-right leading-3">{el.order}</p>
              <p className="text-md text-center leading-5">{el.name}</p>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="absolute right-4 text-neutral-500  justify-center items-center text-center m-4 text-md cursor-pointer">
        <NextLink
          href="/"
          locale="kk"
          className="mr-4 hover:text-neutral-300 focus:font-bold"
        >
          KZ
        </NextLink>
        <NextLink
          href="/"
          locale="en"
          className="mr-4 hover:text-neutral-300 focus:font-bold"
        >
          EN
        </NextLink>
        <NextLink
          href="/"
          locale="ru"
          className="hover:text-neutral-300 focus:font-bold"
        >
          RU
        </NextLink>
      </div>
    </div>
  );
}

export default Navbar;
