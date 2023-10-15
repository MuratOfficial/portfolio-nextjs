import React from "react";
import { useTranslations } from "next-intl";
import { Bird, Dog, Snail } from "lucide-react";

function Testimonials() {
  const t = useTranslations("Testimonials");
  return (
    <div className="w-full h-[840px] flex flex-row">
      <div className="h-full w-5/12 bg-gradient-to-r text-neutral-200 gap-y-6 from-purple-500 to-pink-500 p-8 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-8xl text-purple-300 font-bold">❞</div>
          <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2 items-center flex justify-center">
            <Bird size={40} color="white" />
          </div>
        </div>
        <p>{t("text1")}</p>
        <p className="mt-4">
          {" "}
          <strong>- {t("author1")}</strong>
        </p>
        <p className="text-sm">{t("description1")}</p>
      </div>
      <div className="h-full w-7/12 flex flex-col ">
        <div className="flex h-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-6 p-8 flex-col text-neutral-200">
          <div className="flex flex-row justify-between">
            <div className="text-8xl text-purple-300 font-bold">❞</div>
            <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2 items-center flex justify-center">
              <Snail size={40} color="white" />
            </div>
          </div>
          <p>{t("text2")}</p>
          <p className="mt-4">
            {" "}
            <strong>- {t("author2")}</strong>
          </p>
          <p className="text-sm">{t("description2")}</p>
        </div>
        <div className="flex h-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 p-8 gap-y-6 flex-col text-neutral-200">
          <div className="flex flex-row justify-between">
            <div className="text-8xl text-purple-300 font-bold">❞</div>
            <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2 items-center flex justify-center">
              <Dog size={40} color="white" />
            </div>
          </div>
          <p>{t("text3")}</p>
          <p className="mt-4">
            {" "}
            <strong>- {t("author3")}</strong>
          </p>
          <p className="text-sm">{t("description3")}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
