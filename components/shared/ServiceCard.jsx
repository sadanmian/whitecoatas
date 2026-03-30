import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  FileText,
  GraduationCap,
  Plane,
  Home,
  CreditCard,
  Headphones,
  Users,
  CheckCircle,
  Check,
  Briefcase,
  Shield,
  Heart,
  Globe,
  BookOpen,
  Stethoscope,
  Award,
} from "lucide-react";

const iconMap = {
  FileText,
  GraduationCap,
  Plane,
  Home,
  CreditCard,
  Headphones,
  Users,
  CheckCircle,
  Check,
  Briefcase,
  Shield,
  Heart,
  Globe,
  BookOpen,
  Stethoscope,
  Award,
};

export default function ServiceCard({ service, className }) {
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <Card
      className={cn(
        "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60",
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
            <IconComponent className="size-5" />
          </div>
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {service.title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-primary shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
