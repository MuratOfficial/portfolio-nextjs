import React from "react";
import CardOutline from "./card-outline";

function Expertise() {
  const expertise = [
    {
      img: "",
      highlight: "BackEnd",
      heading: "Developer",
      bgColor: "blue",
      description:
        "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript",
    },
    {
      img: "",
      highlight: "FrontEnd",
      heading: "Developer",
      bgColor: "green",
      description:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
    {
      img: "",
      highlight: "CMS, Content",
      heading: "Manager",
      bgColor: "orange",
      description:
        "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript",
    },
  ];

  return (
    <section className="h-full flex flex-col pb-80">
      {/*Header */}
      <p className="text-center text-white text-7xl py-8 mb-4 font-medium">
        My Expertise
      </p>
      <div className="flex flex-row h-2/3 flex-wrap">
        {expertise.map((el, index) => (
          <CardOutline data={el} key={index} />
        ))}
      </div>
      {/*Cards */}

      {/*Infinite animated svgs */}
    </section>
  );
}

export default Expertise;
