import React from "react";
import { FadeInBlocksVertical } from "../animation/basic-load-animation";
import AnimatedText from "../animation/animated-text";

function Hero() {
  return (
    <div className="flex flex-col flex-wrap h-screen p-16">
      <div className="text-white uppercase  text-9xl font-bold drop-shadow-md text-center items-center justify-center">
        <p className="pt-12 pb-6 tracking-wider">Toimet M</p>
      </div>
      {/** Text animation will be here */}
      <div className="text-center text-white text-2xl tracking-wider">
        <AnimatedText />
      </div>
      {/**btn svg should be here */}
      <FadeInBlocksVertical>
        <button className="p-4 flex justify-center mt-8 text-white">
          btnsvg
        </button>
      </FadeInBlocksVertical>
    </div>
  );
}

export default Hero;
