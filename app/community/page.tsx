import type { Metadata } from "next";
import CommunityClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Community.title,
};

export default function CommunityPage() {
  return <CommunityClient />;
}
