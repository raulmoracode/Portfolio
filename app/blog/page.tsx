import type { Metadata } from "next";
import BlogClient from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Blog.href,
  description: MainLinks.Blog.description,
};

export default function BlogPage() {
  return <BlogClient />;
}
