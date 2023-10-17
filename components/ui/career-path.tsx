import React, { useState } from "react";
import ArticleCard from "./article-card";
import {
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";
import { useTranslations } from "next-intl";
import { FlameKindling, Leaf, MountainSnow, TentTree } from "lucide-react";
import { Element } from "react-scroll";

function CareerPath() {
  const t = useTranslations("Career");
  const careerPath = [
    {
      role: t("role1"),
      years: t("years1"),
      location: t("location1"),
      link: "visit-kazakhstan.kz",
      name: t("name1"),
      decription: t("description1"),
      tags: ["Bootstrap", "AdobeXD", "Photoshop", "Joomla"],
      logo: <TentTree size={54} color="yellow" />,
    },
    {
      role: t("role2"),
      years: t("years2"),
      location: t("location2"),
      link: "kazatomprom.kz",
      name: t("name2"),
      decription: t("description2"),
      tags: ["NumPy", "D3", "ExcelVBA", "Python"],
      logo: <FlameKindling size={54} color="orange" />,
    },
    {
      role: t("role3"),
      years: t("years3"),
      location: t("location3"),
      link: "kazpost.kz",
      name: t("name3"),
      decription: t("description3"),
      tags: ["PHP", "PostgreSQL", "CSSGrid", "BPMN", "Javascript"],
      logo: <MountainSnow size={54} color="pink" />,
    },
    {
      role: t("role4"),
      years: t("years4"),
      location: t("location4"),
      link: "toimet.tech",
      name: t("name4"),
      decription: t("description4"),
      tags: ["NextJS", "Typescript", "Django", "React"],
      logo: <Leaf size={54} color="cyan" />,
    },
  ];
  return (
    <section className="h-max w-full  justify-center items-center pb-36 lg:p-16 xs:p-8 overflow-x-hidden">
      <Element name="experience">
        <AnimateScrollDownHorizontalLeft>
          <p className=" lg:text-7xl xs:text-5xl font-semibold drop-shadow-md text-neutral-100 text-center mb-6 mt-24 z-50 mb-12">
            {t("headerCareer")}
          </p>
        </AnimateScrollDownHorizontalLeft>
      </Element>

      <AnimateScrollDownHorizontal>
        <div className="flex flex-col items-center w-full justify-center gap-y-2 h-max">
          {careerPath.map((item, index) => (
            <ArticleCard key={index} data={item} />
          ))}
        </div>
      </AnimateScrollDownHorizontal>
    </section>
  );
}

export default CareerPath;
