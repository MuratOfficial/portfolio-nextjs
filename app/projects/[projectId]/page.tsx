"use client";
import React from "react";
import Billboard from "./components/billboard";
import Descriptiom from "./components/description";
import ToggleProject from "./components/toggle-project";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "toimetm Portfolio",
  description: "Toimet Murat's Portfolio",
};

function ProjectPage() {
  return (
    <main>
      <Billboard />
      <Descriptiom />
      <ToggleProject />
    </main>
  );
}

export default ProjectPage;
