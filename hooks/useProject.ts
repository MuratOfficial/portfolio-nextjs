import { ProjectItem, projects } from "@/service/get-data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProjectProps {
  items: ProjectItem[];
  filterItems: (category: string) => void;
}
const temporary = projects;

const useProject = create(
  persist<ProjectProps>(
    (set) => ({
      items: temporary,
      filterItems: (category: string) => {
        let filteredList = temporary.filter(
          (item) => item.category === category
        );
        if (category === "All") {
          filteredList = temporary;
        }
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
