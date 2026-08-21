import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "parchment" | "ink";
  id?: string;
}) {
  const tones = {
    default: "bg-background text-foreground",
    muted: "bg-secondary text-secondary-foreground",
    parchment: "bg-parchment text-foreground",
    ink: "bg-ink text-ink-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-20 sm:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "dark" && "text-gold")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("display-2 mt-4", tone === "dark" ? "text-ink-foreground" : "text-foreground")}>
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type CtaProps = {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold" | "ghost";
  className?: string;
};

export function Cta({ to, children, variant = "solid", className }: CtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 min-h-11";
  const variants = {
    solid:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lift",
    outline:
      "border border-current/25 text-foreground hover:border-primary hover:text-primary",
    gold: "bg-gold text-gold-foreground hover:bg-gold/85 hover:shadow-lift",
    ghost: "text-primary hover:opacity-70",
  } as const;
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <span className={cn("block h-px w-14 bg-gold", className)} />;
}
