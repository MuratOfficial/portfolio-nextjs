import React, { useState } from "react";
import ArticleCard from "./article-card";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";

function CareerPath() {
  return (
    <section className="h-max w-full  justify-center items-center pb-36 p-16 overflow-x-hidden">
      <AnimateScrollDownHorizontalLeft>
        <p className=" text-7xl font-semibold drop-shadow-md text-neutral-100 text-center mb-6 mt-24 z-50 mb-12">
          Career Path
        </p>
      </AnimateScrollDownHorizontalLeft>

      <AnimateScrollDownHorizontal>
        <div className="flex flex-col items-center w-full h-1/2 gap-y-2 h-max">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </AnimateScrollDownHorizontal>
    </section>
  );
}

export default CareerPath;
