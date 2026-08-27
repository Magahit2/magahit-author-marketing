import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { BLOG_POSTS } from "@/content/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Author Marketing Blog | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Practical, honest articles on book marketing, Amazon discoverability, Goodreads strategy, author branding, book launches, and audience growth.",
      },
      { property: "og:title", content: "Author Marketing Blog | Magahit" },
      {
        property: "og:description",
        content:
          "Articles on book marketing, Amazon, Goodreads, author branding, launches, and audience growth for self-published and established authors.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Honest, Practical Writing on Book Marketing."
        intro="No hype, no hacks, no 'beat the algorithm'. Just the reasoning behind discoverability, positioning, and author growth."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Browse Resources", to: "/resources" }}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50} className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial"
              >
                <p className="eyebrow">{p.category}</p>
                <h2 className="mt-4 font-serif text-xl leading-snug text-foreground">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-5 text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {p.readTime}
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
        title="Want a Review of Your Actual Book?"
        body="Reading helps. A strategic look at your specific book helps more. Start with a free book audit."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
      />
    </>
  );
}
