import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Cta, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { SERVICE_GROUPS } from "@/content/site";
import { cn } from "@/lib/utils";
import library from "@/assets/library.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Book Marketing Services for Authors | Magahit" },
      {
        name: "description",
        content:
          "Author marketing services across discovery, conversion, audience, author brand, launch, and paid campaigns — including Amazon and Goodreads marketing.",
      },
      { property: "og:title", content: "Book Marketing Services for Authors | Magahit" },
      {
        property: "og:description",
        content:
          "Discovery, conversion, audience growth, author branding, launch strategy, and paid campaign management for authors.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services;
});

function Services() {
  const [active, setActive] = useState<string>("all");
  const groups =
    active === "all" ? SERVICE_GROUPS : SERVICE_GROUPS.filter((g) => g.id === active);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A Marketing System Built Around Your Book"
        intro="Six disciplines, sequenced according to what your book needs first. Every service begins with research and ends with something you own."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={library}
        imageAlt="A quiet library reading room with shelves of bound books in warm light"
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {[{ id: "all", label: "All Services" }, ...SERVICE_GROUPS].map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={cn(
                "min-h-11 rounded-sm border px-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                active === g.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {groups.map((group) => (
            <div key={group.id} id={group.id}>
              <SectionHeading eyebrow={group.label} title={group.intro} />
              <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
                {group.items.map(([title, body], i) => (
                  <Reveal key={title} delay={i * 40} className="h-full">
                    <div className="flex h-full flex-col bg-background p-7 transition-colors hover:bg-parchment">
                      <h3 className="font-serif text-lg text-foreground">{title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                      <Cta to="/book-audit" variant="ghost" className="mt-5 self-start px-0">
                        Get Your Book Audit →
                      </Cta>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
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
                <Cta to={to!} variant="ghost" className="mt-5 self-start px-0">
                  Explore →
                </Cta>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Which Services Does Your Book Actually Need?"
        body="Start with a free book audit. We'll review your positioning, listing, and audience opportunities and recommend only the work that will move the needle."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
      />
    </>
  );
}
