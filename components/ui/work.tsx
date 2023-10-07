import React from "react";
import AnimateSpecific from "@/components/animation/animate-specific";

function Work() {
  return (
    <section className="h-full w-full flex pb-4 p-16">
      <div className="h-screen w-full flex flex-row gap-x-8">
        <div className="h-screen w-2/5 flex flex-col gap-y-8">
          <p className="h-2/5 w-1/2 text-[104px] font-semibold drop-shadow-md text-neutral-100 leading-[124px] text-left">
            My Work
          </p>
          <p className="h-3/5 w-full font-mono text-neutral-100 text-2xl leading-7 drop-shadow-md">
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
        </div>
        {/** Here will be Animated component */}
        <div className="h-screen w-3/5 relative">
          <AnimateSpecific />
          <div className="h-1/5 w-full bottom-6 left-8 absolute flex flex-col gap-y-4 ">
            <p className="font-mono font-bold text-3xl drop-shadow-md text-neutral-100">
              LML Web App
            </p>
            <button className="font-mono text-center text-lg shadow-md hover:scale-105 font-semibold text-neutral-100 bg-purple-600 rounded-sm py-2 px-6 w-fit">
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
