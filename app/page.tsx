"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import PageBase from "@/components/custom/PageBase";
import { SocialLinks, Mlinks, Slinks } from "@/const/config/pages";
import Charger from "@/components/custom/RoutesPrefetch";
import { Info } from "@/const/page/info";

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
          <div className="flex flex-col space-y-1 mb-10 ">
            {Mlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-500 font-medium font-mono cursor-pointer  hover:text-black dark:hover:text-white transition-colors w-fit"
              >
                <Label className="cursor-pointer text-xl leading-snug">
                  {link.href}
                </Label>
              </Link>
            ))}
          </div>

          <details className="w-fit group">
            <summary className="cursor-pointer select-none text-zinc-500 hover:text-black dark:hover:text-white transition-colors  text-sm">
              social ({SocialLinks.length})
            </summary>

            <div className="mt-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 flex flex-col space-y-2 ">
              {Slinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors w-fit"
                >
                  <Label className="cursor-pointer text-sm leading-snug">
                    {link.label}
                  </Label>
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </PageBase>
    </>
  );
}
