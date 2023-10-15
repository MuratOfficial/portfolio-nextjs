export interface ProjectItem {
  projectId: string;
  category: string;
  label: string;
  description?: string;
  client?: string;
  technologies: string[];
  link?: string;
  images?: string[];
}

export const projects: ProjectItem[] = [
  {
    projectId: "project1",
    category: "Web Development",
    label: "E-store DE'COLE",
    description:
      "E-store made in about 3 month. Store has 2 services: Admin dashboard and e-store itself. Admin dashboard has an API for communicate with store. Admin Dashboard made with Shadcn-UI. Database is on cloud PascaleDB (MySQL). For image store and edit used Cloudinary. Admin server can change background color, billboard, assets, products list, sizes, colors of assets in Store server. UPDATE: On Development, new requires",
    technologies: [
      "NextJS",
      "ShadcnUI",
      "Tailwind",
      "Typescript",
      "Prisma",
      "MySQL",
    ],
    client: "IP Symbat",
    link: "https://furniture-lux.kz",
    images: [],
  },
];
