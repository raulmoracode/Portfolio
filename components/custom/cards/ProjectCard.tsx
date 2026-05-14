"use client";

import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import type { ProjectCardProps } from "@/types/card";
import { buttonStyle, colorScheme, iconSize } from "@/styles/styles";
import { cn } from "@/lib/utils";
import CardBase from "./CardBase";

const statusDot: Record<NonNullable<ProjectCardProps["status"]>, string> = {
  Finished: "bg-green-500",
  "In Progress": "bg-yellow-500",
  Archived: "bg-red-500",
};

export default function ProjectCard({
  title,
  description,
  tags = [],
  demoUrl,
  repoUrl,
  status,
}: ProjectCardProps) {
  return (
    <CardBase
      cardHeader={
        <>
          <h3 className="text-base font-medium tracking-tight">{title}</h3>

          <div className="flex items-center gap-5">
            {status && (
              <Label className="flex font-medium tracking-tight items-center gap-2 text-xs whitespace-nowrap mt-1">
                <span className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
                {status}
              </Label>
            )}
          </div>
        </>
      }
      cardContent={
        <>
          <p className={cn("text-sm", colorScheme.text.primary)}>
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5  min-h-[1.6rem]">
              {tags.slice(0, 10).map((tag) => (
                <Badge
                  key={tag}
                  className={cn(
                    "text-xs px-2 py-1 rounded-md ",
                    colorScheme.background.badge,
                    "text-zinc-800 dark:text-zinc-300",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View demo"
                className={cn(buttonStyle, colorScheme.button.hover.success)}
              >
                Demo
                <TbExternalLink className={iconSize} />
              </Link>
            )}

            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code"
                className={cn(buttonStyle, colorScheme.button.hover.secondary)}
              >
                Github
                <BsGithub className={iconSize} />
              </Link>
            )}
          </div>
        </>
      }
    />
  );
}
