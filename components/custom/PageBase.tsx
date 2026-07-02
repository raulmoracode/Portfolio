"use client";

import { ModeToggle } from "@/components/theme/ButtonTheme";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import type { PageBaseProps } from "@/types/card";
import Link from "next/link";
import ComingSoon from "@/components/custom/ComingSoon";
import { useEffect, useRef, useState } from "react";

export default function PageBase({
  title,
  description,
  children,
  showThemeToggle = false,
  isEmpty = false,
}: PageBaseProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isRootPath = pathname === "/" || pathname === "/links";
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const stored = sessionStorage.getItem("__prev");
    if (stored && stored !== pathname) {
      setPrevPage(stored);
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      sessionStorage.setItem("__prev", pathname);
    };
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      {showThemeToggle && <ModeToggle />}
      <main className="flex w-full max-w-4xl flex-col md:pt-25 sm:pt-40 sm:pb-1 pt-20 px-8 flex-1">
        <section className="space-y-4 mb-6 sm:mb-10">
          <h1 className="text-4xl tracking-tighter font-mono font-bold text-main">
            {title}
          </h1>
          <p className="max-w-150 mb-4 font-mono leading-snug text-dim text-lg">
            {description}
          </p>
          {!isRootPath && (
            <button
              type="button"
              onClick={() => router.push(prevPage || "/")}
              className="text-xl w-fit cursor-pointer text-dim hover:text-hover transition-colors font-mono font-medium"
            >
              /back
            </button>
          )}
          {isEmpty ? <ComingSoon /> : children}
        </section>
      </main>
      <footer className="w-full max-w-4xl px-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-faint font-mono font-medium">
        <Link href="/contact" className="hover:text-hover transition-colors">
          mail me
        </Link>
        <span>© {new Date().getFullYear()} raulmoracode</span>
      </footer>
    </div>
  );
}
