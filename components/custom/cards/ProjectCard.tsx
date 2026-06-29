"use client";

import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import type { ProjectCardProps } from "@/types/card";
import { buttonStyle, colorScheme, iconSize } from "@/styles/styles";
import { cn } from "@/lib/utils";
import CardBase from "./CardBase";
import TagBadge from "../TagBadge";

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
          <p className={cn("text-sm text-sub")}>
            {description}
          </p>

          <TagBadge tags={tags} />

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
