import type { Metadata } from "next";
import PageBase from "@/components/custom/Pagebase";
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
        className="text-xl grid w-fit cursor-pointer text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
      >
        /
      </Link>
    </PageBase>
  );
}
