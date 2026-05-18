import type { Metadata } from "next";
import LinkPage from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Links.title,
};

export default function LinksPage() {
  return <LinkPage />;
}
