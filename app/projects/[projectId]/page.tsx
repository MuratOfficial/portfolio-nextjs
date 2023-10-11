"use client";
import React from "react";
import Billboard from "./components/billboard";
import Descriptiom from "./components/description";
import ToggleProject from "./components/toggle-project";
import Footer from "./components/footer";

function ProjectPage() {
  return (
    <main className="flex flex-col pt-14 mx-24 gap-y-8">
      <Billboard />
      <Descriptiom />
      <ToggleProject />
      <Footer />
    </main>
  );
}

export default ProjectPage;
