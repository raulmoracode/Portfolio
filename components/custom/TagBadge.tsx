"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { colorScheme } from "@/styles/styles";

export default function TagBadge({ tags = [] }: { tags?: readonly string[] }) {
  return (
    <>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5  min-h-[1.67rem]">
          {tags.slice(0, 10).map((tag) => (
            <Badge
              key={tag}
              className={cn(
                "text-xs px-2 py-1 rounded-sm ",
                colorScheme.background.badge,
                "text-zinc-800 dark:text-zinc-300",
              )}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
            </Badge>
          ))}
        </div>
      )}
    </>
  );
}
