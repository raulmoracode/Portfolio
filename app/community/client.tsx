"use client";

import PageBase from "@/components/custom/PageBase";
import { Info } from "@/const/page/info";
import { CommunityList } from "@/const/config/community-list";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function CommunityClient() {
  return (
    <PageBase
      title={Info.Community.title}
      description={Info.Community.description}
      isEmpty={Object.keys(CommunityList).length === 0}
    >
      <div className="flex flex-col space-y-5">
        {(
          Object.values(CommunityList) as {
            href: string;
            title: string;
            description: string;
          }[]
        ).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="text-faint cursor-pointer text-2xl hover:text-hover transition-colors w-fit"
          >
            <Label className="cursor-pointer font-medium font-mono text-2xl">
              {link.title}
            </Label>{" "}
            <Label className="cursor-pointer font-medium font-mono text-sm">
              {link.description}
            </Label>
          </Link>
        ))}
      </div>
    </PageBase>
  );
}
