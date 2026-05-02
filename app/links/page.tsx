import type { Metadata } from "next";
import LinkPage from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Links.title,
  description: MainLinks.Links.description,
};

export default function LinksPage() {
  return <LinkPage />;
}
