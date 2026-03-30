import { cn } from "@/lib/utils";

export default function Container({ children, className }) {
  return (
    <div className={cn("max-w-6xl mx-auto px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
