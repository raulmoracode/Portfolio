import type { ArticleCardProps } from "@/types/card";

export const articles: ArticleCardProps[] = [
  {
    title: "Building a Modern React UI System",
    description:
      "How to design scalable UI components using React, Tailwind and composition patterns.",
    date: "2026-04-10",
    url: "https://medium.com/@user/react-ui-system",
    author: "John Doe",
    readingTime: "6 min read",
    tags: ["React", "UI", "Design Systems"],
  },
  {
    title: "Why TypeScript Improves Your Codebase",
    description:
      "A practical look at how TypeScript helps reduce bugs and improve developer experience.",
    date: "2026-03-28",
    url: "https://medium.com/@user/typescript-benefits",
    author: "Jane Smith",
    readingTime: "5 min read",
    tags: ["TypeScript", "JavaScript", "DX"],
  },
  {
    title: "Scaling Next.js Applications",
    description:
      "Architecture patterns and performance strategies for large Next.js apps in production.",
    date: "2026-02-15",
    url: "https://medium.com/@user/nextjs-scaling",
    author: "Alex Rivera",
    readingTime: "8 min read",
    tags: ["Next.js", "Performance", "Architecture"],
  },
];
