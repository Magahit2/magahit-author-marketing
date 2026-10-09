import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import { BRAND } from "@/content/site";
import { Container, GoldRule } from "./primitives";
import logoAsset from "@/assets/magahit-logo.png.asset.json";

const COLUMNS = [
  {
    title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Author Website Offer", to: "/author-website" },
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
              src="/magahit-logo.png"
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
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {BRAND.phone}
                </a>
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
