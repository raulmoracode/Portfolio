"use client";

import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventCardProps } from "@/types/card";
import { buttonStyle, colorScheme, iconSize } from "@/styles/styles";
import { Label } from "@/components/ui/label";
import CardBase from "./CardBase";

const statusDot: Record<NonNullable<EventCardProps["status"]>, string> = {
  Upcoming: "bg-blue-500",
  Finished: "bg-zinc-500",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function EventCard({
  title,
  description,
  date,
  meetupUrl,
  lumaUrl,
  eventbriteUrl,
  status,
}: EventCardProps) {
  const formattedDate = formatDate(date);

  return (
    <CardBase
      cardHeader={
        <>
          <div>
            <h3 className="text-base font-medium tracking-tight">{title}</h3>
            <div
              className={cn(
                "flex items-center gap-2 text-xs mt-1",
                colorScheme.text.primary,
              )}
            >
              <Calendar className={iconSize} />
              {formattedDate}
            </div>
          </div>

          {status && (
            <Label className="flex font-medium tracking-tight items-center gap-2 text-xs whitespace-nowrap mt-1">
              <span className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
              {status}
            </Label>
          )}
        </>
      }
      cardContent={
        <>
          <p className={cn("text-sm ", colorScheme.text.primary)}>
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            {meetupUrl && (
              <Link
                href={meetupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonStyle, colorScheme.events.meetup)}
              >
                Meetup <ExternalLink className={iconSize} />
              </Link>
            )}

            {lumaUrl && (
              <Link
                href={lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonStyle, colorScheme.events.luma)}
              >
                Luma <ExternalLink className={iconSize} />
              </Link>
            )}

            {eventbriteUrl && (
              <Link
                href={eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonStyle, colorScheme.events.eventbrite)}
              >
                Eventbrite <ExternalLink className={iconSize} />
              </Link>
            )}
          </div>
        </>
      }
    />
  );
}
