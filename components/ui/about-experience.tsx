import React, { Fragment } from "react";
import ProjectsCollage from "./projects-collage";
import { AnimateScrollDownHorizontalLeft } from "../animation/animate-scroll-down";
import { projects } from "@/service/get-data";
import { useTranslations } from "next-intl";
import useProject from "@/hooks/useProject";
import MountProvider from "@/providers/mount-provider";

interface FilterProps {
  name: string;
  category: string;
  number: number;
}

function AboutExperience() {
  const t = useTranslations("Filter");
  const filters: FilterProps[] = [
    { name: t("filterAll"), number: projects.length, category: "All" },
    {
      name: t("filter1"),
      number: projects.filter((el) => el.category === "Web Development").length,
      category: "Web Development",
    },
    {
      name: t("filter2"),
      number: projects.filter((el) => el.category === "CMS").length,
      category: "CMS",
    },
    {
      name: t("filter3"),
      number: projects.filter((el) => el.category === "Chat Bot").length,
      category: "Chat Bot",
    },
  ];

  const categoryFilter = useProject();

  const handleFilters = (category: string) => {
    categoryFilter.filterItems(category);
  };

  return (
    <div className="w-full flex flex-col xs:p-8 lg:p-16 h-full relative">
      <AnimateScrollDownHorizontalLeft>
        <div className="text-neutral-500 flex lg:flex-row xs:flex-col font-sans text-lg font-semibold mb-8">
          <p className="pr-2">{t("filterBy")}</p>
          {filters.map((item, idx) => (
            <Fragment key={idx}>
              <p
                onClick={() => handleFilters(item.category)}
                className="hover:text-cyan-300 text-lg cursor-pointer mr-3 relative"
              >
                {item.name}
                <span className="text-xs absolute top-0 pr-1">
                  {item.number}
                </span>
              </p>

              <span className="pr-4 lg:visible xs:collapse">/</span>
            </Fragment>
          ))}
        </div>
      </AnimateScrollDownHorizontalLeft>

      <MountProvider />
    </div>
  );
}

export default AboutExperience;
