import type { Metadata } from "next";
import ProjectsClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Projects.title,
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
