import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUp, Check, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, Cta, GoldRule, Reveal, Section, SectionHeading } from "./primitives";

/* ---------------- Page hero ---------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  primary,
  secondary,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-parchment">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-1 mt-5 text-foreground">{title}</h1>
          <GoldRule className="mt-8" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
          {primary || secondary ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primary ? <Cta to={primary.to}>{primary.label}</Cta> : null}
              {secondary ? (
                <Cta to={secondary.to} variant="outline">
                  {secondary.label}
                </Cta>
              ) : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full border border-gold/40 lg:block" />
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover shadow-editorial"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

/* ---------------- Cards ---------------- */

export function ServiceCard({
  title,
  body,
  to,
  cta = "Learn More",
  index,
}: {
  title: string;
  body: string;
  to: string;
  cta?: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index ?? 0) * 60} className="h-full">
      <Link
        to={to}
        className="group flex h-full flex-col border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
      >
        <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-gold">
          {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        <h3 className="display-3 mt-5 text-foreground">{title}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary">
          {cta}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

export function FeatureCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index ?? 0) * 60} className="h-full">
      <div className="h-full border-t border-border pt-7">
        <h3 className="font-serif text-xl text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </Reveal>
  );
}

export function CheckList({ items, tone = "light" }: { items: readonly string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", tone === "dark" ? "text-gold" : "text-primary")} />
          <span className={tone === "dark" ? "text-ink-foreground/80" : "text-muted-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- FAQ accordion ---------------- */

export function FaqAccordion({
  items,
  className,
}: {
  items: readonly (readonly [string, string])[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-lg text-foreground sm:text-xl">{q}</span>
              <span className="mt-1 shrink-0 text-primary">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="min-h-0 max-w-3xl text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Testimonial carousel ---------------- */

const PLACEHOLDER_TESTIMONIALS = [
  { author: "Author name", book: "Book title", genre: "Genre", initials: "MA" },
  { author: "Author name", book: "Book title", genre: "Genre", initials: "MA" },
  { author: "Author name", book: "Book title", genre: "Genre", initials: "MA" },
];

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const total = PLACEHOLDER_TESTIMONIALS.length;
  const t = PLACEHOLDER_TESTIMONIALS[i];

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="border border-gold/30 bg-card px-6 py-12 shadow-editorial sm:px-12">
        <span className="inline-block border border-gold/50 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-gold-foreground">
          Placeholder content
        </span>
        <blockquote className="mt-8 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
          Verified author testimonials will be published here once clients approve their quotes. We
          do not publish invented reviews.
        </blockquote>
        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-serif text-sm text-muted-foreground">
            {t.initials}
          </span>
          <p className="text-sm font-medium text-foreground">{t.author}</p>
          <p className="text-xs text-muted-foreground">
            {t.book} · {t.genre}
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + total) % total)}
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs tracking-[0.2em] text-muted-foreground">
          {i + 1} / {total}
        </span>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % total)}
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- CTA band ---------------- */

export function CtaBand({
  eyebrow = "Free book audit",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h2 className="display-2 mt-5 text-ink-foreground">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
          {body}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Cta to={primary.to} variant="gold">
            {primary.label}
          </Cta>
          {secondary ? (
            <Cta
              to={secondary.to}
              variant="outline"
              className="border-ink-foreground/30 text-ink-foreground hover:border-gold hover:text-gold"
            >
              {secondary.label}
            </Cta>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Steps / timeline ---------------- */

export function StepGrid({
  steps,
  columns = 5,
}: {
  steps: { step: string; title: string; body: string }[];
  columns?: 3 | 4 | 5;
}) {
  return (
    <div
      className={cn(
        "grid gap-y-10 sm:grid-cols-2 sm:gap-x-8",
        columns === 5 && "lg:grid-cols-5",
        columns === 4 && "lg:grid-cols-4",
        columns === 3 && "lg:grid-cols-3",
      )}
    >
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 70}>
          <div className="relative border-t border-gold/50 pt-6">
            <span className="font-serif text-3xl text-gold">{s.step}</span>
            <h3 className="mt-3 font-serif text-xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Timeline({
  items,
}: {
  items: { label: string; title?: string; points: string[] }[];
}) {
  return (
    <div className="relative border-l border-border pl-8 sm:pl-12">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 70}>
          <div className="relative pb-14 last:pb-0">
            <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gold sm:-left-[3.28rem]" />
            <p className="eyebrow">{item.label}</p>
            {item.title ? (
              <h3 className="display-3 mt-3 text-foreground">{item.title}</h3>
            ) : null}
            <ul className="mt-4 space-y-2">
              {item.points.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Back to top ---------------- */

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-editorial transition-colors hover:border-primary hover:text-primary"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export function StickyAuditBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-40 w-full border-t border-border bg-card/95 backdrop-blur transition-transform duration-300 sm:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Link
        to="/book-audit"
        className="flex min-h-14 items-center justify-center bg-primary text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
      >
        Get Your Book Audit
      </Link>
    </div>
  );
}

export { SectionHeading, Section, Container, Cta, Reveal, GoldRule };
