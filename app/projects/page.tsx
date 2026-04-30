import type { Metadata } from "next";
import ProjectsClient from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Projects.href,
  description: MainLinks.Projects.description,
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
