import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import {
  CheckList,
  Cta,
  CtaBand,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/blocks";
import { COMPARISON, PACKAGES } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Book Marketing Pricing & Packages | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Transparent book marketing packages for authors: Starter, Growth Accelerator, Author Brand & Sales Domination, and custom author marketing strategies.",
      },
      { property: "og:title", content: "Book Marketing Pricing & Packages | Magahit" },
      {
        property: "og:description",
        content:
          "Clear deliverables, timelines, and pricing for author marketing engagements — with a package comparison table.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Packages. Clear Deliverables."
        intro="Every package states who it is for, what you receive, and how long it takes. If none of them fits, we scope a custom strategy after a book audit."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Compare Services", to: "/services" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col border p-8 sm:p-10",
                  p.featured
                    ? "border-primary/40 bg-parchment shadow-editorial"
                    : "border-border bg-card",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="display-3 text-foreground">{p.name}</h2>
                  {p.featured ? (
                    <span className="shrink-0 border border-gold/60 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-foreground">
                      Most chosen
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 font-serif text-4xl text-primary">{p.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Who it's for
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.who}</p>
                </div>

                <div className="mt-6">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Deliverables
                  </p>
                  <div className="mt-3">
                    <CheckList items={p.features} />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Timeline
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">{p.timeline}</p>
                </div>

                <div className="mt-8 flex-1" />
                <Cta to={p.price === "Custom" ? "/work-with-us" : "/book-audit"}>
                  {p.price === "Custom" ? "Apply to Work With Us" : "Get Your Book Audit"}
                </Cta>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="Compare"
          title="What's Included in Each Package"
          intro="A side-by-side view of the three fixed packages. Custom engagements are scoped individually."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Deliverable
                </th>
                {["Starter", "Growth Accelerator", "Author Brand & Sales"].map((h) => (
                  <th
                    key={h}
                    className="py-4 pr-4 font-serif text-base font-normal text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row[0]} className="border-b border-border/70">
                  <td className="py-4 pr-4 text-sm text-foreground">{row[0]}</td>
                  {[row[1], row[2], row[3]].map((cell, i) => (
                    <td key={i} className="py-4 pr-4 text-sm text-muted-foreground">
                      {cell === true ? (
                        <Check className="h-4 w-4 text-primary" aria-label="Included" />
                      ) : cell === false ? (
                        <Minus className="h-4 w-4 text-border" aria-label="Not included" />
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Advertising budgets are paid directly to the platforms and are separate from management
          fees. We do not guarantee sales, rankings, reviews, or bestseller status.
        </p>
      </Section>

      <CtaBand
        title="Not Sure Which Package Fits?"
        body="Request a book audit. We'll review your positioning, listing, and audience opportunities and recommend the package that matches where your book actually is."
        primary={{ label: "Request a Book Audit", to: "/book-audit" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
      />
    </>
  );
}
