import type { CareerCardProps } from "@/types/card";

export const experiences: readonly CareerCardProps[] = [
  {
    company: "Narval",
    role: "Software Engineer Intern",
    description: "AI & Infrastructure Engineering Intern",
    startDate: "2026-03-08",
    endDate: "2026-5-31",
    current: false,
    companyUrl: "https://narval.es",
    location: "Madrid, Spain",
    highlights: [
      "Developed and trained machine learning models for food supply chain optimization, improving logistics planning and operational efficiency.",
      "Processed and analyzed large-scale logistics datasets to support AI-driven decision making.",
      "Collaborated on the deployment and maintenance of server infrastructure supporting AI workloads and internal services.",
      "Automated infrastructure and development workflows to improve system reliability and deployment efficiency.",
      "Worked closely with multidisciplinary teams to integrate AI solutions into production environments.",
    ],
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Server Infrastructure",
      "Linux",
      "Automation",
    ],
  },
] as const;
