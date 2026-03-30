"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/data/navigation";
import { contactInfo } from "@/lib/data/contact";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-background"
      )}
    >
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{contactInfo.email}</span>
              </a>
            </div>
            <span className="hidden md:inline text-primary-foreground/80">
              {contactInfo.hours.weekday}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="WhiteCoatAs"
              width={38}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="font-heading font-bold text-lg text-foreground">
              WhiteCoat<span className="text-primary">As</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors rounded-md group",
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                  {/* Underline slide-in from left */}
                  <span
                    className={cn(
                      "absolute left-3 right-3 bottom-0.5 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="/contact">
                Apply Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMobile}
              className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-secondary transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-out panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[100px] bg-black/40 z-40 lg:hidden"
              onClick={toggleMobile}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-[100px] right-0 bottom-0 w-full max-w-sm bg-background border-l border-border shadow-xl z-50 overflow-y-auto lg:hidden"
            >
              <nav className="flex flex-col p-6 gap-1">
                {mainNav.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-border">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Contact info in mobile menu */}
                <div className="mt-6 pt-4 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {contactInfo.email}
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
