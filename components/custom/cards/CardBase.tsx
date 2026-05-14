"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { CardBaseProps } from "@/types/card";

export default function CardBase({
  cardHeader,
  cardContent,
  cardHeaderStyle,
}: CardBaseProps) {
  return (
    <Card className="border-zinc-700 dark:border-zinc-800 bg-transparent hover:bg-[#ececec] dark:hover:bg-zinc-900 transition-colors">
      <CardHeader className="space-y-2">
        <div className={cardHeaderStyle || "flex items-start justify-between"}>
          {cardHeader}
        </div>
      </CardHeader>

      <CardContent className="wrap-break-word space-y-4">
        {cardContent}
      </CardContent>
    </Card>
  );
}
