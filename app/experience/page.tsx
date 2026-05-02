import type { Metadata } from "next";
import ExperienceClient from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Experience.title,
  description: MainLinks.Experience.description,
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
