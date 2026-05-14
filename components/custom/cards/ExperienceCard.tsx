"use client";

import Link from "next/link";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { buttonStyle, colorScheme, iconSize } from "@/styles/styles";
import type { CareerCardProps } from "@/types/card";
import CardBase from "./CardBase";
import TagBadge from "../TagBadge";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function CareerCard({
  role,
  company,
  startDate,
  endDate,
  location,
  description,
  highlights = [],
  tags = [],
  companyUrl,
  current = false,
}: CareerCardProps) {
  const dateRange = `${formatDate(startDate)}${
    current ? " — Present" : endDate ? ` — ${formatDate(endDate)}` : ""
  }`;

  return (
    <CardBase
      cardHeader={
        <>
          <div>
            <h3 className="text-base font-medium tracking-tight">{role}</h3>
            <p className={colorScheme.text.secondary}>{company}</p>

            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
              <div
                className={cn(
                  "flex items-center gap-1",
                  colorScheme.text.primary,
                )}
              >
                <Calendar className={iconSize} />
                {dateRange}
              </div>
              {location && (
                <div
                  className={cn(
                    "flex items-center gap-1",
                    colorScheme.text.primary,
                  )}
                >
                  <MapPin className={iconSize} />
                  {location}
                </div>
              )}
            </div>
          </div>

          {current && (
            <Label className="whitespace-nowrap flex items-center gap-2 text-xs font-medium tracking-tight mt-1">
              <span
                className={`h-2 w-2 rounded-full ${colorScheme.status.finished}`}
              />
              Current
            </Label>
          )}
        </>
      }
      cardContent={
        <>
          <p className={cn("text-sm", colorScheme.text.primary)}>
            {description}
          </p>

          {highlights.length > 0 && (
            <ul className={cn("space-y-0.5 text-sm", colorScheme.text.primary)}>
              {highlights.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500 dark:bg-zinc-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <TagBadge tags={tags} />
          {companyUrl && (
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonStyle, colorScheme.button.hover.primary)}
            >
              Company <ExternalLink className={iconSize} />
            </Link>
          )}
        </>
      }
    />
  );
}
