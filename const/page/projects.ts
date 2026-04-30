import type { ProjectCardProps } from "@/types/card";

export const staticProjects: readonly ProjectCardProps[] = [
  {
    title: "Moracode Portfolio",
    description:
      "A personal portfolio with fast navigation, modular cards and a clean editorial layout.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React", "Framer Motion"],
    demoUrl: "https://raulmoracode.dev",
    repoUrl: "https://github.com/raulmoracode/moracode-portfolio",
    status: "In Progress",
  },
  {
    title: "Notes & Links Hub",
    description:
      "A lightweight personal hub to collect links, notes and recurring resources in one place.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React", "Supabase"],
    demoUrl: "https://links.raulmoracode.dev",
    repoUrl: "https://github.com/raulmoracode/notes-links-hub",
    status: "Archived",
  },
] as const;
