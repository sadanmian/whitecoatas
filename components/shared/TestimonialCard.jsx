import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, className }) {
  return (
    <Card
      className={cn(
        "h-full transition-shadow duration-300 hover:shadow-md border-border/60",
        className
      )}
    >
      <CardContent className="p-6 flex flex-col h-full">
        {/* Star rating */}
        <div className="flex items-center gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < testimonial.rating
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>

        {/* Quote */}
        <div className="relative flex-1 mb-6">
          <Quote className="absolute -top-1 -left-1 size-6 text-primary/15" aria-hidden="true" />
          <p className="text-foreground text-sm leading-relaxed pl-5">
            {testimonial.text}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/60">
          <span className="text-2xl" role="img" aria-label={`${testimonial.name} avatar`}>
            {testimonial.avatar}
          </span>
          <div className="min-w-0">
            <p className="font-heading font-semibold text-sm text-foreground truncate">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.course && `${testimonial.course}, `}
              {testimonial.university}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.country}
              {testimonial.year && ` - Batch ${testimonial.year}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
