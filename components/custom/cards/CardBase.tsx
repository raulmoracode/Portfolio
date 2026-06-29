import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { CardBaseProps } from "@/types/card";

export default function CardBase({
  cardHeader,
  cardContent,
  cardHeaderStyle,
}: CardBaseProps) {
  return (
    <Card className="border-border-card bg-transparent hover:bg-bg-card-hover transition-colors">
      <CardHeader className="space-y-2">
        <div
          className={
            cardHeaderStyle || "flex items-start justify-between font-sans"
          }
        >
          {cardHeader}
        </div>
      </CardHeader>
      <CardContent className="wrap-break-word space-y-4 font-mono">
        {cardContent}
      </CardContent>
    </Card>
  );
}
