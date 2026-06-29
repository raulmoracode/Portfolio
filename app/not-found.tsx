import type { Metadata } from "next";
import PageBase from "@/components/custom/PageBase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "/404",
  description: "Here nothing was found.",
};

export default function NotFound() {
  return (
    <PageBase
      title="404"
      description="Here nothing was found, but you can go back to."
    >
      <Link
        href="/"
        className="text-xl grid w-fit cursor-pointer text-faint hover:text-hover transition-colors"
      >
        /
      </Link>
    </PageBase>
  );
}
