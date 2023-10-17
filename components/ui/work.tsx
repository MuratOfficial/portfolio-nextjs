import React from "react";
import AnimateSpecific from "@/components/animation/animate-specific";
import { AnimateScrollDown } from "../animation/animate-scroll-down";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Element } from "react-scroll";
import Image from "next/image";

function Work() {
  const t = useTranslations("Work");
  return (
    <section className="h-max md:h-max w-full flex md:mb-32 lg:mb-4 xs:p-8 lg:p-16 flex-row  flex-wrap md:gap-y-8">
      <div className="h-screen w-full   flex lg:flex-row md:flex-col xs:flex-col xs:h-full gap-x-8">
        <div className="h-max lg:w-2/5 flex flex-col gap-y-8">
          <Element name="projects">
            <AnimateScrollDown>
              <p className="h-2/5 w-1/2 lg:text-[104px] xs:text-5xl md:text-7xl font-semibold drop-shadow-md text-neutral-100 leading-[124px] text-left">
                {t("headerWork")}
              </p>
            </AnimateScrollDown>
          </Element>

          <p className="h-3/5 w-full font-mono text-neutral-100 text-2xl leading-7 drop-shadow-md">
            {t("descriptionWork")}
          </p>
        </div>
        {/** Here will be Animated component */}
        <div className="lg:h-screen lg:w-3/5 relative flex md:flex-col xs:h-full xs:flex-col">
          {/* <AnimateSpecific /> */}
          <Image
            alt="pdf-chatter"
            src="/main-project.png"
            className="hover:scale-105 hover:brightness-125 hover:shadow-xl transition delay-200 duration-500 cursor-none"
            width={800}
            height={800}
            sizes="(max-width: 640px) 100vw,
    (max-width: 1280px) 50vw,
    (max-width: 1536px) 33vw,
    25vw"
          />
          <div className="h-1/5 w-full bottom-6 left-8 absolute flex flex-col gap-y-4 ">
            <p className="font-mono font-bold text-3xl drop-shadow-md lg:text-neutral-100 md:text-blue-500">
              {t("nameWork")}
            </p>
            <Link
              href="https://github.com/MuratOfficial"
              className="font-mono text-center text-lg shadow-md hover:scale-105 font-semibold text-neutral-100 bg-purple-600 rounded-sm py-2 px-6 w-fit"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
