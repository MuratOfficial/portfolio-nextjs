"use client";

import { useEffect, useState } from "react";

import ProjectsCollage from "@/components/ui/projects-collage";

const MountProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ProjectsCollage />;
};

export default MountProvider;
