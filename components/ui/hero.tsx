import React from "react";
import { FadeInBlocksVertical } from "../animation/basic-load-animation";
import AnimatedText from "../animation/animated-text";
import Link from "next/link";
// import { useTranslations } from "next-intl";

function Hero() {
  // const t = useTranslations("Hero");
  return (
    <div className="flex flex-col flex-wrap h-screen w-full items-center p-16">
      <img
        className="absolute lg:right-20 xs:top-[540px] hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="Cone.svg"
      />
      <img
        className="absolute lg:left-20 lg:top-0 xs:top-10 hover:opacity-60 dropshadow-lg hover:rotate-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="Cube-2.svg"
      />
      <img
        className="absolute lg:top-14 hover:opacity-60 xs:collapse lg:visible dropshadow-lg hover:-rotate-12 transition duration-1000 delay-300"
        height={200}
        width={200}
        src="Cylinder.svg"
      />
      <div className="text-white uppercase  lg:text-9xl xs:text-5xl font-bold  text-center items-center justify-center">
        <p className="pt-12 pb-6 drop-shadow-xl tracking-wider">Toimet M</p>
      </div>
      {/** Text animation will be here */}
      <div className="text-center text-white text-2xl tracking-wider z-40">
        <AnimatedText />
      </div>
      {/**btn svg should be here */}
      <FadeInBlocksVertical>
        <Link
          href="#expertise"
          className="p-4 flex justify-center mt-8 text-white hover:text-cyan-500 transition duration-500 delay-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-down animate-fadeDown"
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
        </Link>
      </FadeInBlocksVertical>
    </div>
  );
}

export default Hero;
