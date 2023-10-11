import { ArrowRight, ArrowUpCircle } from "lucide-react";
import React from "react";

function Descriptiom() {
  return (
    <div className="mt-8 flex flex-row">
      <div className="text-neutral-400  w-1/2 pr-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est adipisci
        officiis quidem rerum. Aut quis distinctio corrupti necessitatibus,
        placeat ipsum veritatis laborum assumenda doloremque, laudantium quidem
        facere dolore quam minima?
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row h-36 gap-x-8">
          <div className="text-md w-32 border-t border-neutral-400 py-4">
            <p className=" text-white font-medium">Client</p>
            <p className=" text-neutral-400 font-normal">Test Corp</p>
          </div>
          <div className="text-md w-32 border-t border-neutral-400 py-4">
            <p className=" text-white font-medium">Technologies</p>
            <p className=" text-neutral-400 font-normal">
              React, Firebase, PostgreSQL
            </p>
          </div>
        </div>
        <div className="text-neutral-200 gap-x-4 flex flex-row transition duration-500 delay-150 cursor-pointer hover:text-cyan-400 group/item">
          Open Project
          <ArrowUpCircle size={24} className="group-hover/item:animate-ping " />
        </div>
      </div>
    </div>
  );
}

export default Descriptiom;
