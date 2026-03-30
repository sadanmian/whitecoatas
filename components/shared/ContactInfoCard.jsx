import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfoCard({
  icon: Icon,
  title,
  description,
  details,
  className,
}) {
  return (
    <Card className={cn("h-full border-border/60", className)}>
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
          <Icon className="size-5" />
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg text-foreground">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {details && details.length > 0 && (
          <div className="space-y-1">
            {details.map((line, index) => (
              <p key={index} className="text-sm text-foreground">
                {line}
              </p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
