"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function AnimateFadeIn({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".card",
        {
          y: 80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: block.current,
            toggleActions: "play none none none",
            start: "top 90%",
            end: "bottom 70%",
            // markers: true,
            // scrub: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.4,
          ease: "none",
        }
      );
    }, block);

    return () => ctx.revert();
  });

  return (
    <div ref={block} className="flex flex-row gap-4 w-full h-max">
      {children}
    </div>
  );
}

export default AnimateFadeIn;
