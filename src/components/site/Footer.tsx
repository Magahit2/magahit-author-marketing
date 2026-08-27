import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND } from "@/content/site";
import { Container, GoldRule } from "./primitives";
import logoAsset from "@/assets/magahit-logo.png.asset.json";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Results", to: "/results" },
      { label: "Work With Us", to: "/work-with-us" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Book Marketing", to: "/book-marketing" },
      { label: "Author Branding", to: "/author-brand" },
      { label: "Amazon Optimization", to: "/amazon-optimization" },
      { label: "Goodreads Marketing", to: "/goodreads-marketing" },
      { label: "Book Launches", to: "/book-launch" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Guides", to: "/resources" },
      { label: "Free Book Audit", to: "/book-audit" },
      { label: "FAQ", to: "/faq" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logoAsset.url}
              alt="Magahit Author Marketing logo"
              width={56}
              height={56}
              loading="lazy"
              className="mb-5 h-14 w-14 rounded-sm object-cover"
            />
            <p className="font-serif text-2xl">Magahit</p>
            <p className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.3em] text-ink-foreground/60">
              Author Marketing
            </p>
            <GoldRule className="mt-6" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
              “{BRAND.tagline}”
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${BRAND.email}`} className="break-all hover:text-gold">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BRAND.phone}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{BRAND.location}</span>
              </li>
            </ul>
            <a
              href={BRAND.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-foreground/70 transition-colors hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13v-3.5a6.41 6.41 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.45-4.79V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-.63-.21z" />
              </svg>
              {BRAND.tiktokHandle}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-foreground/15 pt-8 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink-foreground">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-ink-foreground">
              Disclaimer
            </Link>
            <Link to="/cookie-policy" className="hover:text-ink-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
