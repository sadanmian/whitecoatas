"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { footerNav } from "@/lib/data/navigation";
import { contactInfo } from "@/lib/data/contact";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Facebook", href: contactInfo.social.facebook, icon: Facebook },
  { name: "Twitter", href: contactInfo.social.twitter, icon: Twitter },
  { name: "Instagram", href: contactInfo.social.instagram, icon: Instagram },
  { name: "LinkedIn", href: contactInfo.social.linkedin, icon: Linkedin },
];

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-sm text-background/70 hover:text-background transition-colors"
      >
        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          {children}
        </span>
      </Link>
    </li>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="text-lg font-semibold text-background mb-4 font-heading">
      {children}
    </h3>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-background font-heading">
                Stay Updated
              </h3>
              <p className="mt-1 text-sm text-background/70">
                Get the latest updates on MBBS abroad programs, scholarships,
                and admission deadlines delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-72 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-background/30"
              />
              <Button
                type="submit"
                size="default"
                className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="WhiteCoatAs"
                width={34}
                height={36}
                className="h-9 w-auto object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"
              />
              <span className="font-heading font-bold text-xl text-background">
                WhiteCoat<span className="text-accent">As</span>
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-5">
              Your trusted partner for pursuing MBBS abroad. We guide students
              through every step, from university selection to settling in.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 mb-5">
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-start gap-2.5 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2.5 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{contactInfo.address.full}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 text-background/70 hover:bg-background/20 hover:text-background transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5">
              {footerNav.quickLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 3: Study Destinations */}
          <div>
            <FooterHeading>Study Destinations</FooterHeading>
            <ul className="space-y-2.5">
              {footerNav.countries.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-background/60">
            <p>
              &copy; {currentYear} WhiteCoatAs. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
