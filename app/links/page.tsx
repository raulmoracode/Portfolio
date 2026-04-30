import type { Metadata } from "next";
import LinkPage from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Links.href,
  description: MainLinks.Links.description,
};

export default function LinksPage() {
  return <LinkPage />;
}
