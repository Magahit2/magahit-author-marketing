import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { BLOG_POSTS, RESOURCES } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Author Marketing Resources & Guides | Magahit" },
      {
        name: "description",
        content:
          "Free book marketing resources for authors: discoverability checklists, Amazon keyword worksheets, Goodreads guides, launch timelines, and author branding tools.",
      },
      { property: "og:title", content: "Author Marketing Resources & Guides | Magahit" },
      {
        property: "og:description",
        content:
          "Practical guides, worksheets, and templates for book marketing, Amazon, Goodreads, author branding, launches, and audience growth.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const CATEGORIES = [
  "All",
  "Book Marketing",
  "Amazon",
  "Goodreads",
  "Author Branding",
  "Book Launches",
  "Social Media",
  "Audience Growth",
];

function Resources() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === active);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical Tools for Authors Who Want to Be Found."
        intro="The frameworks we use internally, written so you can apply them yourself. Request any resource and we'll send it to you directly."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Read the Blog", to: "/blog" }}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "min-h-11 rounded-sm border px-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r, i) => (
            <Reveal key={r.title} delay={i * 50} className="h-full">
              <article className="flex h-full flex-col border border-border bg-card p-7">
                <p className="eyebrow">{r.category}</p>
                <h2 className="mt-4 font-serif text-xl leading-snug text-foreground">{r.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                <p className="mt-5 text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {r.type}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  <Download className="h-3.5 w-3.5" />
                  Request this resource
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="From the blog"
          title="Recent Reading"
          intro="Longer-form thinking on discoverability, Amazon, Goodreads, launches, and author brand."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-editorial"
              >
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-4 font-serif text-xl leading-snug text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Prefer a Review of Your Actual Book?"
        body="Guides help, but nothing beats a strategic look at your specific title, genre, and listing. That's what the book audit is for."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Read the Blog", to: "/blog" }}
      />
    </>
  );
}
