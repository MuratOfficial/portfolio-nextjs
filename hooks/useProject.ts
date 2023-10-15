import { ProjectItem, projects } from "@/service/get-data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProjectProps {
  items: ProjectItem[];
  filterItems: (category: string) => void;
}

const useProject = create(
  persist<ProjectProps>(
    (set) => ({
      items: projects,
      filterItems: (category: string) => {
        const filteredList = projects.filter(
          (item) => item.category === category
        );
        set({
          items: filteredList,
        });
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProject;
