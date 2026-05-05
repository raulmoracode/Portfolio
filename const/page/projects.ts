import type { ProjectCardProps } from "@/types/card";

export const staticProjects: readonly ProjectCardProps[] = [
  {
    title: "Portfolio",
    description:
      "Personal portfolio of projects, skills, and experience in software development.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Resend", "Biome", "Shadcn/ui"],
    demoUrl: "https://raulmoracode.com",
    repoUrl: "https://github.com/raulmoracode/Portfolio",
    status: "Finished",
  },
  {
    title: "MonkeyFacer",
    description:
      "Real-time gesture and expression detection using MediaPipe Holistic.",
    tags: [
      "MediaPipe",
      "TypeScript",
      "WebGL",
      "Computer Vision",
      "Real-time Processing",
      "React",
      "Vite",
    ],
    demoUrl: "https://monkeyfacer.raulmoracode.com",
    repoUrl: "https://github.com/raulmoracode/MonkeyFacer",
    status: "Finished",
  },
  {
    title: "DevDash",
    description: " Google New tab, but for delopers.",
    tags: ["react", "TypeScript", "Tailwind", "Axios", "ESLint", "Shadcn/ui"],
    demoUrl: "https://devdash.raulmoracode.com",
    repoUrl: "https://github.com/raulmoracode/DevDash",
    status: "In Progress",
  },
  {
    title: "Kiboar",
    description: " Ultimate keyboard component library for Kicad.",
    tags: ["Kicad", "PCB", "3D Modeling", "Open Source"],
    repoUrl: "https://github.com/raulmoracode/Kiboar",
    status: "Finished",
  },
] as const;
