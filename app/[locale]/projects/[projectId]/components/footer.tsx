import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto py-8">
        <p className="lg:text-left xs:text-center text-xs font-normal text-neutral-200">
          &copy; {t("text1")}
          <span className="font-medium bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-1 rounded-md hover:text-white">
            <Link href="https://toimet.tech">Toimet Murat</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
