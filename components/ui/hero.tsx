import React from "react";
import { AnimateScrollDown } from "../animation/animate-scroll-down";

function Hero() {
  return (
    <div className="flex flex-col flex-wrap h-screen">
      <div className="text-white uppercase  text-9xl font-bold drop-shadow-md text-center items-center justify-center">
        <p className="pt-12 pb-6 tracking-wider">Toimet M</p>
      </div>
      {/** Text animation will be here */}
      <p className="text-center text-white text-2xl tracking-wider">
        SOFTWARE ENGINEER, FRONT END & APP DEVELOPER
      </p>
      {/**btn svg should be here */}
      <button className="p-4 flex justify-center mt-8">btnsvg</button>
    </div>
  );
}

export default Hero;
