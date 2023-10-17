"use client";
import React from "react";
import CardOutline from "./card-outline";
import {
  AnimateScrollDown,
  AnimateScrollDownGroup1,
  AnimateScrollDownGroup2,
  AnimateScrollDownGroup3,
} from "../animation/animate-scroll-down";
import AnimateInfiniteHorizontal from "../animation/animate-infinite-horizontal";
import { useTranslations } from "next-intl";
import { Database, Figma, Wand2 } from "lucide-react";
import { Element } from "react-scroll";

function Expertise() {
  const t = useTranslations("Expertise");
  const expertise = [
    {
      img: <Database size={44} color="blue" />,
      highlight: t("highlight1"),
      heading: t("heading1"),
      bgColor: "blue",
      description: t("description1"),
    },
    {
      img: <Figma size={44} color="green" />,
      highlight: t("highlight2"),
      heading: t("heading2"),
      bgColor: "green",
      description: t("description2"),
    },
    {
      img: <Wand2 size={44} color="orange" />,
      highlight: t("highlight3"),
      heading: t("heading3"),
      bgColor: "orange",
      description: t("description3"),
    },
  ];

  return (
    <section className="h-full flex flex-col pb-48 lg:p-16 xs:p-2 gap-y-16 overflow-x-hidden">
      {/*Header */}
      <Element name="expertise">
        <AnimateScrollDown>
          <p className="text-center text-white lg:text-7xl xs:text-3xl py-4 font-medium">
            {t("header")}
          </p>
        </AnimateScrollDown>
      </Element>

      {/*Cards */}
      <div className="flex lg:flex-row xs:flex-col xs:h-full lg:h-2/3 flex-wrap w-full">
        <AnimateScrollDownGroup1>
          <CardOutline data={expertise[0]} />
        </AnimateScrollDownGroup1>
        <AnimateScrollDownGroup2>
          <CardOutline data={expertise[1]} />
        </AnimateScrollDownGroup2>
        <AnimateScrollDownGroup3>
          <CardOutline data={expertise[2]} />
        </AnimateScrollDownGroup3>
      </div>

      {/*Infinite animated svgs */}
      <AnimateInfiniteHorizontal />
    </section>
  );
}

export default Expertise;
