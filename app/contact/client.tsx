"use client";

import PageBase from "@/components/custom/PageBase";
import { Info } from "@/const/page/info";
import { SortedMailList } from "@/const/config/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function ContactClient() {
  return (
    <PageBase
      title={Info.Contact.title}
      description={Info.Contact.description}
      showThemeToggle={true}
    >
      <div className="border-zinc-200  dark:border-zinc-800 flex flex-col space-y-2 ">
        {SortedMailList.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-400 cursor-pointer text-2xl hover:text-black dark:hover:text-white transition-colors w-fit"
          >
            <Label className="cursor-pointer font-medium font-mono text-2xl">
              {link.title}
            </Label>
          </Link>
        ))}
      </div>
    </PageBase>
  );
}
