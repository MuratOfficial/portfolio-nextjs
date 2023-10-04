import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto py-8">
        <p className="text-center text-xs text-neutral-100">
          &copy; 2023 Toimet Murat. All rights reserved. Powered by
          <span className="font-semibold bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 p-1 rounded-md hover:text-white">
            <Link href="https://toimet.tech">ToimetTech</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
