"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/PageBase";
import { Info } from "@/const/page/info";
import { TaggerSortedAllItems } from "@/const/config/navigation";
import { SocialRoutesConverter } from "@/const/config/navigation";

export default function TaggerClient() {
  return (
    <PageBase
      title={Info.Tagger.title}
      description={Info.Tagger.description}
      showThemeToggle={true}
    >
      <div className="flex flex-col space-y-2">
        {TaggerSortedAllItems.map((link) => (
          <Link
            key={`${link.href}-${link.href}`}
            href={link.href}
            className="text-faint cursor-pointer text-2xl hover:text-hover transition-colors w-fit"
            target={
              SocialRoutesConverter.some((item) => item.href === link.href)
                ? "_blank"
                : "_self"
            }
          >
            <Label className="cursor-pointer font-medium font-mono text-2xl">
              {link.href}
            </Label>
          </Link>
        ))}
      </div>
    </PageBase>
  );
}
