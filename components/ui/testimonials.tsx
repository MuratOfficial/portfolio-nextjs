import React from "react";

function Testimonials() {
  return (
    <div className="w-full h-[840px] flex flex-row">
      <div className="h-full w-5/12 bg-gradient-to-r from-purple-500 to-pink-500 p-8 flex flex-col">
        <div className="flex flex-row">
          <div className=""></div>
          <div></div>
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
      </div>
      <div className="h-full w-7/12 flex flex-col">
        <div className="flex h-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-8"></div>
        <div className="flex h-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 p-8"></div>
      </div>
    </div>
  );
}

export default Testimonials;
