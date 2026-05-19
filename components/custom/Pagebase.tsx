"use client";

import { ModeToggle } from "@/components/theme/ButtonTheme";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import type { PageBaseProps } from "@/types/card";

export default function PageBase({
  title,
  description,
  children,
  showThemeToggle = false,
}: PageBaseProps) {
  const pathname = usePathname();
  const isRootPath = pathname === "/" || pathname === "/links";
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      {showThemeToggle && <ModeToggle />}
      <main className="flex w-full max-w-4xl flex- md:pt-25 sm:pt-40 sm:pb-1 pt-20 px-8 flex-1">
        <section className="space-y-4 mb-6 sm:mb-10">
          <h1 className="text-4xl font-bold tracking-tighter">{title}</h1>
          <p className="max-w-150 leading-snug text-zinc-500 dark:text-zinc-400 text-lg ">
            {description}
          </p>
          {!isRootPath && (
            <button
              type="button"
              onClick={() => router.back()}
              className="text-xl w-fit cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              /back
            </button>
          )}
          {children}
        </section>
      </main>
      <footer className="w-full max-w-4xl px-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-md text-zinc-400">
        <span>© {new Date().getFullYear()} raulmoracode</span>
        <a
          href="mailto:contact@raulmoracode.com"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          contact@raulmoracode.com
        </a>
      </footer>
    </div>
  );
}
