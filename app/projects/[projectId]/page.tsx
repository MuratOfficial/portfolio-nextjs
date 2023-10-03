import React from "react";
import Billboard from "./components/billboard";
import Descriptiom from "./components/description";
import ToggleProject from "./components/toggle-project";

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
