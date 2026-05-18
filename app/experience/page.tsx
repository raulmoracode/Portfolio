import type { Metadata } from "next";
import ExperienceClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Experience.title,
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
