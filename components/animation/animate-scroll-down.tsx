"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function AnimateScrollDown({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        y: 0,
        duration: 0.5,
        opacity: 1,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

export function AnimateScrollDownHorizontal({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,
      {
        x: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        x: 0,
        duration: 0.5,
        opacity: 1,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

export function AnimateScrollDownHorizontalLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        x: 0,
        duration: 0.5,
        opacity: 1,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

export function AnimateScrollDownGroup1({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,

      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        y: 0,
        duration: 0.5,
        opacity: 1,
        delay: 0,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

export function AnimateScrollDownGroup2({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,

      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        y: 0,
        duration: 0.5,
        opacity: 1,
        delay: 0.5,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

export function AnimateScrollDownGroup3({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      block.current,

      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: block.current,
          toggleActions: "play none none none",
          start: "top 95%",
          end: "bottom 70%",
          // scrub: true,
        },
        y: 0,
        duration: 0.5,
        opacity: 1,
        delay: 1,
        ease: "none",
      }
    );
  }, []);
  return <div ref={block}>{children}</div>;
}

// export function AnimateScrollDownNavbar({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const block = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.fromTo(
//       block.current,
//       {
//         y: 200,
//         opacity: 0,
//       },
//       {
//         scrollTrigger: {
//           trigger: block.current,
//           toggleActions: "play none none none",
//           start: "top 95%",
//           end: "bottom 70%",
//           // scrub: true,
//         },
//         y: 0,
//         duration: 0.5,
//         opacity: 1,
//         ease: "none",
//       }
//     );
//   }, []);
//   return <div ref={block}>{children}</div>;
// }
