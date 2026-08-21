import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, BRAND } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";

const SECONDARY = [
  { label: "Book Marketing", to: "/book-marketing" },
  { label: "Author Brand", to: "/author-brand" },
  { label: "Amazon Optimization", to: "/amazon-optimization" },
  { label: "Goodreads Marketing", to: "/goodreads-marketing" },
  { label: "Book Launch", to: "/book-launch" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/92 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-foreground sm:text-[1.375rem]">
            Magahit
          </span>
          <span className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Author Marketing
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-[0.8125rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book-audit"
            className="hidden items-center rounded-sm bg-primary px-6 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lift sm:inline-flex"
          >
            Get Your Book Audit
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="py-6">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="border-b border-border/70 py-4 font-serif text-lg text-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {SECONDARY.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[0.8125rem] text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/book-audit"
              className="mt-7 flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Get Your Book Audit
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">{BRAND.tagline}</p>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
