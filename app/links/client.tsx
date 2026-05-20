"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/Pagebase";
import { Info } from "@/const/page/info";
import { Tlinks } from "@/const/config/pages";
import { SocialLinks } from "@/const/config/pages";

export default function LinksClient() {
  return (
    <PageBase
      title={Info.Links.title}
      description={Info.Links.description}
      showThemeToggle={true}
    >
      <div className="mt-2  border-zinc-200 pt-8 dark:border-zinc-800 flex flex-col space-y-2 font-mono">
        {Tlinks.map((link) => (
          <Link
            key={`${link.href}-${link.href}`}
            href={link.href}
            className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors w-fit"
            target={
              SocialLinks.some((item) => item.href === link.href)
                ? "_blank"
                : "_self"
            }
          >
            <Label className="cursor-pointer text-2xl">{link.href}</Label>
          </Link>
        ))}
      </div>
    </PageBase>
  );
}
