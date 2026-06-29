"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/PageBase";
import {
  SocialRoutesConverter,
  SortedMainItems,
  SortedSocialItems,
} from "@/const/config/navigation";
import Charger from "@/components/custom/RoutesPrefetch";
import { Info } from "@/const/page/info";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
  return (
    <>
      <Charger />
      <PageBase
        title={Info.Home.title}
        description={Info.Home.description}
        showThemeToggle={true}
      >
        <nav className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-1 mb-10">
            {SortedMainItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dim font-medium font-mono cursor-pointer hover:text-hover transition-colors w-fit"
              >
                <Label className="cursor-pointer text-xl leading-snug">
                  {link.href}
                </Label>
              </Link>
            ))}
          </div>

          <Collapsible className="w-fit">
            <CollapsibleTrigger className="group flex items-center gap-1.5 cursor-pointer select-none text-dim hover:text-hover transition-colors font-mono font-medium">
              social ({SocialRoutesConverter.length})
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:-rotate-45" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="mt-2 pl-3 border-l border-border-subtle flex flex-col space-y-2">
                {SortedSocialItems.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dim hover:text-hover transition-colors w-fit"
                  >
                    <Label className="cursor-pointer font-mono leading-snug">
                      {link.label}
                    </Label>
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </PageBase>
    </>
  );
}
