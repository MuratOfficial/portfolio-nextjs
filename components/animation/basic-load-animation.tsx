"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

function BasicLoadAnimations() {
  return <div>BasicLoadAnimations</div>;
}

export default BasicLoadAnimations;

export function FadeInBlocks({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      block.current,
      {
        x: 60,
        opacity: 0,
      },
      {
        duration: 1,
        x: 0,
        delay: 0.5,
        opacity: 1,
      }
    );
  }, []);

  return <div ref={block}>{children}</div>;
}

export function FadeInBlocksVertical({
  children,
}: {
  children: React.ReactNode;
}) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      block.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        delay: 0.5,
        opacity: 1,
      }
    );
  }, []);

  return <div ref={block}>{children}</div>;
}
