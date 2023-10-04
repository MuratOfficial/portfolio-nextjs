import Link from "next/link";
import React from "react";

function Navbar() {
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

  return (
    <div className="flex flex-row p-2 lg:h-20 bg-transparent relative justify-center items-center">
      <div className="absolute left-4 font-semibold text-cyan-300 hover:text-cyan-500 justify-center items-center text-center m-4 text-2xl cursor-pointer">
        .toimetm
      </div>
      <nav className="flex pt-2">
        <ul className="flex flex-row gap-x-8 text-neutral-200 hover:text-neutral-500">
          {routes.map((el, index) => (
            <Link
              href={el.href}
              key={index}
              className="flex flex-col hover:scale-105  hover:text-neutral-200 "
            >
              <p className="text-xs text-right leading-3">{el.order}</p>
              <p className="text-md text-center leading-5">{el.name}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
