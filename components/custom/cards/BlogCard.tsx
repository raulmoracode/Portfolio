"use client";

import Link from "next/link";
import { Calendar, ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ArticleCardProps } from "@/types/card";
import { buttonStyle, colorScheme, iconSize } from "@/styles/styles";
import { Badge } from "@/components/ui/badge";
import CardBase from "./CardBase";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleCard({
  title,
  description,
  date,
  url,
  author,
  readingTime,
  tags,
}: ArticleCardProps) {
  const formattedDate = formatDate(date);

  return (
    <CardBase
      cardHeaderStyle={"flex flex-col"}
      cardHeader={
        <>
          <h3 className="text-base font-medium tracking-tight">{title}</h3>

          <div className="flex flex-wrap items-center gap-3 text-xs mt-1">
            {author && (
              <span className={colorScheme.text.primary}>By {author}</span>
            )}

            <div
              className={cn(
                "flex items-center gap-1",
                colorScheme.text.primary,
              )}
            >
              <Calendar className={iconSize} />
              {formattedDate}
            </div>

            {readingTime && (
              <div
                className={cn(
                  "flex items-center gap-1",
                  colorScheme.text.primary,
                )}
              >
                <Clock className={iconSize} />
                {readingTime}
              </div>
            )}
          </div>
        </>
      }
      cardContent={
        <>
          <p className={cn("text-sm line-clamp-3", colorScheme.text.primary)}>
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className={cn(
                    "text-xs px-2 py-1 rounded-md",
                    colorScheme.background.badge,
                    "text-zinc-800 dark:text-zinc-300",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonStyle, colorScheme.button.hover.primary)}
          >
            Read article <ExternalLink className={iconSize} />
          </Link>
        </>
      }
    />
  );
}
