import React from "react";
import AnimateSpecific from "@/components/animation/animate-specific";
import { AnimateScrollDown } from "../animation/animate-scroll-down";
import { useTranslations } from "next-intl";

function Work() {
  const t = useTranslations("Work");
  return (
    <section className="h-full w-full flex pb-4 p-16" id="projects">
      <div className="h-screen w-full flex flex-row gap-x-8">
        <div className="h-max w-2/5 flex flex-col gap-y-8">
          <AnimateScrollDown>
            <p className="h-2/5 w-1/2 text-[104px] font-semibold drop-shadow-md text-neutral-100 leading-[124px] text-left">
              {t("headerWork")}
            </p>
          </AnimateScrollDown>

          <p className="h-3/5 w-full font-mono text-neutral-100 text-2xl leading-7 drop-shadow-md">
            {t("descriptionWork")}
          </p>
        </div>
        {/** Here will be Animated component */}
        <div className="h-screen w-3/5 relative">
          <AnimateSpecific />
          <div className="h-1/5 w-full bottom-6 left-8 absolute flex flex-col gap-y-4 ">
            <p className="font-mono font-bold text-3xl drop-shadow-md text-neutral-100">
              {t("nameWork")}
            </p>
            <button className="font-mono text-center text-lg shadow-md hover:scale-105 font-semibold text-neutral-100 bg-purple-600 rounded-sm py-2 px-6 w-fit">
              {t("button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
