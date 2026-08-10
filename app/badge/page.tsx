import type { Metadata } from "next";
import TaggerClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Tagger.title,
};

export default function TaggerPage() {
  return <TaggerClient />;
}
