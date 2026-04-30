import type { ProjectCardProps } from "@/types/card";

export const staticProjects: readonly ProjectCardProps[] = [
  {
    title: "Pene",
    description: "Portfolio minimalista con Next.js y shadcn/ui.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "React",
      "Node.js",
    ],
    demoUrl: "https://tu-demo.com",
    repoUrl: "https://github.com/raulmoracode/tu-repo",
    status: "In Progress",
  },
  {
    title: "pollk",
    description: "Portfolio minimalista con Next.js y shadcn/ui.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React", "Node.js"],
    demoUrl: "https://tu-demo.com",
    repoUrl: "https://github.com/raulmoracode/tu-repo",
    status: "Archived",
  },
] as const;
