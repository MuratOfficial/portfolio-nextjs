import React from "react";

function Testimonials() {
  return (
    <div className="w-full h-[840px] flex flex-row">
      <div className="h-full w-5/12 bg-gradient-to-r text-neutral-200 gap-y-8 from-purple-500 to-pink-500 p-8 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-8xl text-purple-300 font-bold">❞</div>
          <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2"></div>
        </div>
        <p>
          Since 2018 Tamal has been responsible for the development of our
          website which has been instrumental to the growth of our company. Even
          while working remotely he’s been highly responsive, organized and
          strategic in his thinking. In addition to staying on top of day-to-day
          site changes and builds, he’s provided us with great advice to stay on
          top of the current changes in web technologies. He’s also implemented
          effective project management and Q&A processes. As a result Tamal has
          been an highly valued and impactful member of our team.
        </p>
        <p className="mt-4">
          {" "}
          <strong>- Mark Greenspan</strong>
        </p>
        <p className="text-sm">Founder at influenceTHIS Canada</p>
      </div>
      <div className="h-full w-7/12 flex flex-col ">
        <div className="flex h-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-8 p-8 flex-col text-neutral-200">
          <div className="flex flex-row justify-between">
            <div className="text-8xl text-purple-300 font-bold">❞</div>
            <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2"></div>
          </div>
          <p>
            Tamal is AMAZING! If you have any doubt about hiring him, ask me – I
            am really impressed by this guy!
          </p>
          <p className="mt-4">
            {" "}
            <strong>- Wilfried Hajek</strong>
          </p>
          <p className="text-sm">Agile Coach | Speaker | Trainer</p>
        </div>
        <div className="flex h-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 p-8 gap-y-8 flex-col text-neutral-200">
          <div className="flex flex-row justify-between">
            <div className="text-8xl text-purple-300 font-bold">❞</div>
            <div className="h-20 w-20 bg-blue-500 rounded-full border-white border-2"></div>
          </div>
          <p>
            Tamal is one of the best professionals that we have known in web
            development skills. Between his skills you can find good
            communication and accuracy with the planning in complex projects.
          </p>
          <p className="mt-4">
            {" "}
            <strong>- Jonathan Castro</strong>
          </p>
          <p className="text-sm">CEO & Founder at The Cliff</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
