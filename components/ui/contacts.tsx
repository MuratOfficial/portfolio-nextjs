import React from "react";
import Testimonials from "./testimonials";
import Link from "next/link";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";
import { useTranslations } from "next-intl";
import { Element } from "react-scroll";

function Contacts() {
  const t = useTranslations("Contact");
  const links = [
    { name: "Telegram", href: "https://t.me/Murat_Toimet" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/toimetm/" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/official_murattoimet/",
    },
    { name: "Github", href: "https://github.com/MuratOfficial" },
  ];
  return (
    <section className="grid grid-flow-row-dense lg:grid-cols-5 md:grid-cols-2 xs:grid-cols-2">
      <div className="w-full h-full col-span-2 bg-black flex flex-col xs:p-4 lg:p-16">
        <div className="h-1/2 w-full py-8 px-4 flex flex-col text-neutral-300 gap-y-16 justify-center items-center text-left">
          <AnimateScrollDownHorizontalLeft>
            <p className="text-4xl">{t("text1")}</p>
          </AnimateScrollDownHorizontalLeft>
          <AnimateScrollDown>
            <p className="text-xl">{t("text2")}</p>
          </AnimateScrollDown>
        </div>
        <div className="h-1/2 w-full py-8 mt-8 px-4 gap-y-8 flex flex-col">
          <AnimateScrollDownHorizontalLeft>
            <div className=" w-fit">
              <Link href="mailto:toimetm@gmail.com">
                <p className="lg:text-4xl xs:text-2xl transition-colors text-violet-700 hover:text-neutral-300 duration-500 delay-150 cursor-pointer hover:bg-violet-700 z-40">
                  toimetm@gmail.com
                </p>
              </Link>
            </div>
          </AnimateScrollDownHorizontalLeft>

          <AnimateScrollDown>
            <div className="text-neutral-300 flex flex-col gap-y-2 text-xl ">
              {links.map((item, index) => (
                <Link key={index} href={item.href}>
                  <p className="hover:text-cyan-500 transition-colors duration-500 delay-150">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </AnimateScrollDown>
        </div>
      </div>

      {/*Testimonials Block */}

      <div className="w-full h-full col-span-3">
        <Element name="contact">
          <Testimonials />
        </Element>
      </div>
    </section>
  );
}

export default Contacts;
