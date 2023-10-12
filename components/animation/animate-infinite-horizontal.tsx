"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export function AnimateInfiniteHorizontal() {
  const block = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".box",
        {
          x: -1400,
        },
        {
          x: 1400,
          duration: 20,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        ".box1",
        {
          x: 1400,
        },
        {
          x: -800,
          duration: 15,
          repeat: -1,
          ease: "none",
        }
      );
      gsap.fromTo(
        ".box2",
        {
          x: -1400,
        },
        {
          x: 1400,
          duration: 30,
          repeat: -1,
          ease: "none",
        }
      );
    }, block);

    return () => ctx.revert();
  });

  const logos = [
    {
      src: "/logos/bootstrap-5-vector-logo-seeklogo.com/bootstrap-5-seeklogo.com.svg",
      alt: "bootstrap",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/github-vector-logo-seeklogo.com/github-seeklogo.com.svg",
      alt: "github",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/javascript-js-vector-logo-seeklogo.com/javascript-js-seeklogo.com.svg",
      alt: "javascript",
      height: 80,
      width: 80,
    },
    {
      src: "logos/next-js-vector-logo-seeklogo.com/next-js-seeklogo.com.svg",
      alt: "nextjs",
      height: 80,
      width: 80,
    },
  ];
  const logos1 = [
    {
      src: "/logos/postgresql-vector-logo-seeklogo.com/postgresql-seeklogo.com.svg",
      alt: "postgresql",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/prisma-vector-logo-seeklogo.com/prisma-seeklogo.com.svg",
      alt: "prisma",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/python-vector-logo-seeklogo.com/python-seeklogo.com.svg",
      alt: "python",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/react-vector-logo-seeklogo.com/react-seeklogo.com.svg",
      alt: "reactjs",
      height: 80,
      width: 80,
    },
  ];
  const logos2 = [
    {
      src: "/logos/redux-vector-logo-seeklogo.com/redux-seeklogo.com.svg",
      alt: "redux",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/tailwind-css-wordmark-vector-logo-seeklogo.com/tailwind-css-wordmark-seeklogo.com.svg",
      alt: "tailwindcss",
      height: 180,
      width: 180,
    },
    {
      src: "/logos/typescript-vector-logo-seeklogo.com/typescript-seeklogo.com.svg",
      alt: "typescript",
      height: 80,
      width: 80,
    },
    {
      src: "/logos/MySQL-vector-logo-seeklogo.com/mysql-seeklogo.com.svg",
      alt: "mysql",
      height: 80,
      width: 80,
    },
  ];

  return (
    <div ref={block} className="flex flex-col gap-y-12 w-full -z-10">
      <div className="flex-row flex gap-x-40">
        {logos.map((el, idx) => (
          <div className="box" key={idx}>
            <img
              height={el.height}
              width={el.width}
              alt={el.alt}
              src={el.src}
            />
          </div>
        ))}
      </div>
      <div className="flex-row flex gap-x-40">
        {logos1.map((el, idx) => (
          <div className="box1" key={idx}>
            <img
              height={el.height}
              width={el.width}
              alt={el.alt}
              src={el.src}
            />
          </div>
        ))}
      </div>
      <div className="flex-row flex gap-x-40">
        {logos2.map((el, idx) => (
          <div className="box2" key={idx}>
            <img
              height={el.height}
              width={el.width}
              alt={el.alt}
              src={el.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimateInfiniteHorizontal;
