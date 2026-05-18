import type { Metadata } from "next";
import BlogClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Blog.title,
};

export default function BlogPage() {
  return <BlogClient />;
}
