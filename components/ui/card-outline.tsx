import React from "react";

interface CardItemProps {
  img: any;
  highlight: string;
  heading: string;
  bgColor: string;
  description: string;
}

interface CardOutlineProps {
  data: CardItemProps;
}

function CardOutline({ data }: CardOutlineProps) {
  return (
    <div
      id={data.bgColor}
      className="h-[360px] lg:w-[380px] xs:w-[320px]   border-x-2 border-y-4 border-neutral-400 p-4 px-8 py-4 flex flex-col"
    >
      <div className="flex flex-row h-1/3 pt-6 ">
        <div className="h-20 w-1/4">{data.img}</div>
        <div className="relative flex flex-col">
          <div className="relative w-fit ">
            <p className="z-10 text-2xl leading-7 font-semibold text-white px-1">
              {data.highlight}
            </p>
            <div
              className="h-2 absolute w-full top-5 -z-10"
              style={{ backgroundColor: data.bgColor }}
            />
          </div>
          <p className="text-2xl font-semibold text-white">{data.heading}</p>
        </div>
      </div>
      <p className="text-neutral-600 font-sans text-md">&lt;h3&gt;</p>
      <div className="px-4 border-l-2 border-neutral-600 ml-4 text-neutral-300 my-1 font-mono lg:text-lg xs:text-md font-semibold">
        {data.description}
      </div>
      <p className="text-neutral-600 font-sans text-md">&lt;/h3&gt;</p>
    </div>
  );
}

export default CardOutline;
