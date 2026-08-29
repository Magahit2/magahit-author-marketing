import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import {
  SERVICE_CATEGORIES,
  SERVICE_FILTERS,
  SERVICE_PATHWAYS,
  servicesByCategory,
} from "@/content/services";
import { cn } from "@/lib/utils";
import library from "@/assets/library.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Author Marketing Services | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Explore author marketing services across discovery, Amazon optimization, paid advertising, content, author brand, outreach, launch, and strategy.",
      },
      { property: "og:title", content: "Author Marketing Services | Magahit Author Marketing" },
      {
        property: "og:description",
        content:
          "Marketing built around how readers discover books — discovery, Amazon, advertising, content, author brand, outreach, launch, and strategy services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) =>
          SERVICE_FILTERS.find((f) => f.id === active)?.categories.includes(c.id),
        );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Marketing Built Around How Readers Discover Books."
        intro="Every service below exists because a book gets overlooked for a reason — the wrong category, an unclear listing, no audience to launch to. We start with what your book is missing, then choose only the work that fixes it."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
        image={library}
        imageAlt="A quiet library reading room with shelves of bound books in warm light"
      />

      <Section>
        <SectionHeading
          eyebrow="Browse by need"
          title="Start Where Your Book Is Weakest"
          intro="Filter by discipline, or scroll the full catalogue below. Each service opens into a full explanation of the problem it solves and what you receive."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {[{ id: "all", label: "All Services" }, ...SERVICE_FILTERS].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
              className={cn(
                "min-h-11 rounded-sm border px-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                active === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {visibleCategories.map((category) => {
            const items = servicesByCategory(category.id);
            return (
              <div key={category.id} id={category.id}>
                <div className="max-w-3xl">
                  <p className="eyebrow">
                    {category.number} · {category.label}
                  </p>
                  <h2 className="display-2 mt-4 text-foreground">{category.headline}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {category.intro}
                  </p>
                </div>

                <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 40} className="h-full">
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-parchment"
                      >
                        <h3 className="font-serif text-lg text-foreground">{service.name}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {service.summary}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary">
                          Explore Service
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="Strategic pathways"
          title="Services Work Better in Sequence"
          intro="These are the combinations we recommend most often. Each pathway solves one stage of an author's career — and each step builds on the one before it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICE_PATHWAYS.map((pathway, i) => (
            <Reveal key={pathway.label} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-8">
                <p className="eyebrow">{pathway.label}</p>
                <h3 className="display-3 mt-4 text-foreground">{pathway.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pathway.body}</p>
                <ol className="mt-6 space-y-2">
                  {pathway.steps.map((step, si) => (
                    <li key={step.slug} className="flex gap-3 text-sm">
                      <span className="font-serif text-gold">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <Link
                        to="/services/$slug"
                        params={{ slug: step.slug }}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {step.name}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Deep dives"
          title="Explore the Core Programmes"
          intro="Each programme page explains the process, deliverables, and what happens after the work is delivered."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Book Marketing", "Turn your book from published to discoverable.", "/book-marketing"],
            ["Author Brand Development", "Build the business behind the book.", "/author-brand"],
            ["Amazon Optimization", "Make your Amazon book page work harder.", "/amazon-optimization"],
            ["Goodreads Marketing", "Ethical visibility where readers decide.", "/goodreads-marketing"],
            ["Book Launch", "A 60-day plan through launch week and beyond.", "/book-launch"],
            ["Pricing & Packages", "Transparent packages and a comparison table.", "/pricing"],
          ].map(([title, body, to], i) => (
            <Reveal key={title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <Link
                  to={to!}
                  className="mt-5 inline-flex items-center gap-2 self-start text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Your Book Doesn't Need More Random Promotion."
        body="It needs the right work, in the right order. Start with a free book audit and we'll tell you which of these services your book actually needs — and which it does not."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
      />
    </>
  );
}
