import React from "react";
import { FadeInBlocksVertical } from "../animation/basic-load-animation";
import AnimatedText from "../animation/animated-text";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col flex-wrap h-screen w-full items-center p-16">
      <img
        className="absolute right-20 hover:opacity-60 dropshadow-lg hover:translate-x-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="Cone.svg"
      />
      <img
        className="absolute left-20 top-0 hover:opacity-60 dropshadow-lg hover:rotate-6 transition duration-500 delay-150"
        height={200}
        width={200}
        src="Cube-2.svg"
      />
      <img
        className="absolute top-14 hover:opacity-60 dropshadow-lg hover:-rotate-12 transition duration-1000 delay-300"
        height={200}
        width={200}
        src="Cylinder.svg"
      />
      <div className="text-white uppercase  text-9xl font-bold  text-center items-center justify-center">
        <p className="pt-12 pb-6 drop-shadow-xl tracking-wider">Toimet M</p>
      </div>
      {/** Text animation will be here */}
      <div className="text-center text-white text-2xl tracking-wider">
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
