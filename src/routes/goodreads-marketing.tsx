import { createFileRoute } from "@tanstack/react-router";
import {
  CheckList,
  CtaBand,
  FeatureCard,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/blocks";
import library from "@/assets/library.jpg";

export const Route = createFileRoute("/goodreads-marketing")({
  head: () => ({
    meta: [
      { title: "Goodreads Marketing for Authors — Ethical Visibility | Magahit" },
      {
        name: "description",
        content:
          "Ethical Goodreads marketing for authors: reader targeting, reviewer outreach, comparable-book research, Listopia strategy, and genuine reader engagement.",
      },
      { property: "og:title", content: "Ethical Goodreads Marketing for Authors | Magahit" },
      {
        property: "og:description",
        content:
          "Build Goodreads visibility the honest way — genuine reader engagement, never paid or manipulated reviews.",
      },
      { property: "og:url", content: "/goodreads-marketing" },
    ],
    links: [{ rel: "canonical", href: "/goodreads-marketing" }],
  }),
  component: Goodreads,
});

const AREAS = [
  ["Reader targeting", "Identify the shelves, groups, and reading habits where your book belongs."],
  ["Reviewer outreach", "Respectful, individual approaches to reviewers who read your genre."],
  ["Comparable-book research", "Learn what readers of similar titles praise and criticise."],
  ["Goodreads visibility", "A complete author profile, correct book data, and consistent presence."],
  ["Listopia strategy", "Appear on the lists readers actually browse when choosing their next book."],
  ["Reader engagement", "Participate as a reader and author without turning the space into an ad."],
];

function Goodreads() {
  return (
    <>
      <PageHero
        eyebrow="Goodreads marketing"
        title="Be Visible Where Readers Decide What to Read Next."
        intro="Goodreads is a reader community first. Done respectfully, it is one of the most valuable discovery spaces available to an author. Done badly, it damages trust permanently."
        primary={{ label: "Build My Goodreads Strategy", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={library}
        imageAlt="Shelves of bound books in a warm reading room"
      />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Six Areas of Ethical Goodreads Work"
          intro="Everything below is built on genuine reader interest — never on artificial activity."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(([title, body], i) => (
            <FeatureCard key={title} title={title!} body={body!} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Our ethical commitment</p>
          <h2 className="display-2 mt-5 text-ink-foreground">
            We Encourage Genuine Reader Engagement and Honest Reviews.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-ink-foreground/70">
            We do not buy reviews, sell reviews, arrange reviews disguised as organic ones,
            coordinate ratings, create fake reader accounts, or manipulate reader activity in any
            form. We never ask a reader for a positive review — only an honest one.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/60">
            This protects your reputation, respects reader communities, and keeps your book compliant
            with platform guidelines. If an agency offers you reviews, that is the moment to walk
            away.
          </p>
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What You Receive" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Goodreads author profile review and setup guidance",
                  "Book data and edition audit",
                  "Comparable-title and shelving research",
                  "Listopia opportunity list",
                  "Reviewer and group outreach plan",
                  "Advance reader (ARC) guidance for honest reviews",
                  "Engagement calendar you can maintain",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Expectations"
              title="Goodreads Rewards Patience."
              intro="Presence compounds over months, not days. Reviews arrive when readers finish books — not on a schedule we control."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We can improve how many of the right readers encounter your book and how clearly it is
              presented to them. We cannot promise a number of reviews, ratings, or shelvings, and we
              will never quote one.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Build Goodreads Visibility the Honest Way."
        body="Start with a free book audit and we'll show you where your book currently sits in the reader landscape."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Explore All Services", to: "/services" }}
      />
    </>
  );
}
