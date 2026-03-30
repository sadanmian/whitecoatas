import { ShieldQuestion, Wallet, ShieldAlert, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

const painPoints = [
  {
    icon: ShieldQuestion,
    title: "Confused about NMC approval?",
    description:
      "Students struggle to verify which universities are truly approved and recognized for practice in India.",
  },
  {
    icon: Wallet,
    title: "Worried about hidden costs?",
    description:
      "Unclear fee structures and unexpected expenses cause anxiety for students and their families.",
  },
  {
    icon: ShieldAlert,
    title: "Concerned about safety?",
    description:
      "Parents worry about their children living in a foreign country far from home.",
  },
  {
    icon: Layers,
    title: "Overwhelmed by choices?",
    description:
      "Too many countries and universities make decision-making difficult and stressful.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            We Understand Your Concerns
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <Card
                key={point.title}
                className="h-full border-border/60 transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
