"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext({
  value: [],
  onToggle: () => {},
  type: "single",
});

const Accordion = React.forwardRef(
  (
    {
      className,
      type = "single",
      collapsible = true,
      defaultValue,
      value: controlledValue,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      }
      return [];
    });

    const value =
      controlledValue !== undefined
        ? Array.isArray(controlledValue)
          ? controlledValue
          : [controlledValue]
        : internalValue;

    const onToggle = React.useCallback(
      (itemValue) => {
        let next;
        if (type === "single") {
          const isOpen = value.includes(itemValue);
          next = isOpen && collapsible ? [] : [itemValue];
        } else {
          next = value.includes(itemValue)
            ? value.filter((v) => v !== itemValue)
            : [...value, itemValue];
        }

        if (controlledValue === undefined) {
          setInternalValue(next);
        }

        onValueChange?.(type === "single" ? next[0] ?? "" : next);
      },
      [type, collapsible, value, controlledValue, onValueChange]
    );

    return (
      <AccordionContext.Provider value={{ value, onToggle, type }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItemContext = React.createContext({ value: "", isOpen: false });

const AccordionItem = React.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const { value: openValues } = React.useContext(AccordionContext);
    const isOpen = openValues.includes(value);

    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div
          ref={ref}
          data-state={isOpen ? "open" : "closed"}
          className={cn("border-b", className)}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { onToggle } = React.useContext(AccordionContext);
    const { value, isOpen } = React.useContext(AccordionItemContext);

    return (
      <h3 className="flex">
        <button
          ref={ref}
          type="button"
          aria-expanded={isOpen}
          data-state={isOpen ? "open" : "closed"}
          onClick={() => onToggle(value)}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </button>
      </h3>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(AccordionItemContext);
    const contentRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [children, isOpen]);

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className="overflow-hidden transition-[height] duration-200 ease-in-out"
        style={{ height: isOpen ? height : 0 }}
        role="region"
        {...props}
      >
        <div ref={contentRef} className={cn("pb-4 pt-0 text-sm", className)}>
          {children}
        </div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
