"use client";
import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useTranslations } from "next-intl";

function AnimatedText() {
  const t = useTranslations("Hero");
  const block = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin);
    let ctx = gsap.context(() => {
      gsap.to(block.current, {
        duration: 4,
        text: t("text"),
        ease: "none",
      });
    }, []);
    return () => ctx.revert();
  });

  return (
    <div className="flex flex-row">
      <span
        ref={block}
        className={cn(
          "transition-opacity-100 ease-in-out opacity-100 duration-1000 delay-300"
        )}
      ></span>
    </div>
  );
}

export default AnimatedText;
