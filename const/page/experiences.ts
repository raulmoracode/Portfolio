import type { CareerCardProps } from "@/types/card";

export const experiences: CareerCardProps[] = [
  {
    role: "Frontend Developer",
    company: "Acme Studio",
    startDate: "2024-01-01",
    endDate: "2025-04-01",
    location: "Madrid, Spain",
    description:
      "Built and maintained modern interfaces with a focus on performance, accessibility and consistency.",
    highlights: [
      "Improved UI consistency across the product",
      "Reduced bundle size and improved load times",
      "Worked closely with design and backend teams",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    companyUrl: "https://acme.com",
    current: false,
  },
  {
    role: "Independent Developer",
    company: "Freelance",
    startDate: "2025-04-01",
    location: "Remote",
    description:
      "Creating small, clean and minimal digital products and personal portfolios.",
    highlights: [
      "Focused on personal branding",
      "Built reusable UI components",
    ],
    tags: ["UI Design", "Frontend", "Branding"],
    current: true,
  },
];
