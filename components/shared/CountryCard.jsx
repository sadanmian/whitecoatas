import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, Wallet, ArrowRight } from "lucide-react";

export default function CountryCard({ country, className }) {
  return (
    <Link href={`/countries/${country.slug}`} className="group block">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60",
          className
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl" role="img" aria-label={`${country.name} flag`}>
              {country.flag}
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {country.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {country.universities} universities
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Key stats */}
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 shrink-0 text-primary" />
              <span>Duration: <span className="text-foreground font-medium">{country.duration}</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="size-4 shrink-0 text-primary" />
              <span>Tuition: <span className="text-foreground font-medium">{country.tuitionFee}</span></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wallet className="size-4 shrink-0 text-primary" />
              <span>Living: <span className="text-foreground font-medium">{country.livingCost}</span></span>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {country.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="text-xs font-normal">
                {highlight}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
            Learn more
            <ArrowRight className="size-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
