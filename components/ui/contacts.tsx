import React from "react";
import Testimonials from "./testimonials";
import Link from "next/link";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontalLeft,
} from "../animation/animate-scroll-down";

function Contacts() {
  const links = [
    { name: "Messenger", href: "www.facebook.com" },
    { name: "Linkedin", href: "www.linkedin.com" },
    { name: "Instagram", href: "www.instagram.com" },
    { name: "Github", href: "www.github.com" },
  ];
  return (
    <section className="w-full h-full flex flex-row ">
      <div className="w-5/12 h-[840px] bg-black flex flex-col p-16">
        <div className="h-1/2 w-full py-8 px-4 flex flex-col text-neutral-300 gap-y-16 justify-center items-center text-left">
          <AnimateScrollDownHorizontalLeft>
            <p className="text-4xl">
              Available for select freelance opportunities
            </p>
          </AnimateScrollDownHorizontalLeft>
          <AnimateScrollDown>
            <p className="text-xl">
              Have an exciting project you need help with? Send me an email or
              contact me via instant message!
            </p>
          </AnimateScrollDown>
        </div>
        <div className="h-1/2 w-full py-8 mt-8 px-4 gap-y-8 flex flex-col">
          <AnimateScrollDownHorizontalLeft>
            <div className=" w-fit">
              <Link href="mailto:toimetm@gmail.com">
                <p className="text-4xl transition-colors text-violet-700 hover:text-neutral-300 duration-500 delay-150 cursor-pointer hover:bg-violet-700 z-40">
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
      <div className="w-7/12 h-full">
        <Testimonials />
      </div>
    </section>
  );
}

export default Contacts;
