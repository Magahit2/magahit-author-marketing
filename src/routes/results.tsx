import { createFileRoute } from "@tanstack/react-router";
import {
  CtaBand,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  TestimonialCarousel,
} from "@/components/site/blocks";
import manuscript from "@/assets/manuscript.jpg";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Author Case Studies & Results | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "How we measure book marketing results, what we report, and verified author case studies as they are approved for publication.",
      },
      { property: "og:title", content: "Author Case Studies & Results | Magahit" },
      {
        property: "og:description",
        content:
          "Our reporting standards and case-study format for author marketing engagements. We publish verified results only.",
      },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: Results,
});

const FIELDS = [
  "Author",
  "Book",
  "Genre",
  "Challenge",
  "Strategy",
  "Execution",
  "Results",
  "Lessons",
];

function TikTokButton({ label }: { label: string }) {
  return (
    <a
      href={BRAND.tiktok}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lift"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13v-3.5a6.41 6.41 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.45-4.79V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-.63-.21z" />
      </svg>
      {label}
    </a>
  );
}

function Results() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Good Books Create the Foundation. Strategy Creates Discoverability."
        intro="We publish case studies only once results are verified and the author has approved the write-up. Until then, the slots below stay clearly marked as pending."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={manuscript}
        imageAlt="An annotated manuscript beside reading glasses and hardcover books"
      />

      <Section>
        <SectionHeading
          eyebrow="Case studies"
          title="Our Case-Study Format"
          intro="Every published case study follows the same structure, so you can judge the reasoning rather than a headline number."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 70} className="h-full">
              <article className="flex h-full flex-col border border-border bg-card p-8">
                <span className="inline-flex w-fit border border-gold/50 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-foreground">
                  Client result coming soon
                </span>
                <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                  {FIELDS.map((label) => (
                    <div key={label}>
                      <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground/60">To be published</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <TikTokButton label="See Proof on TikTok" />
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="How we measure"
          title="What We Report On"
          intro="Marketing outcomes for books are rarely a single number. These are the measures we track and share."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Visibility", "Keyword and category presence, listing impressions, and referral traffic."],
            ["Conversion", "Detail-page conversion, click-through from campaigns, and description performance."],
            ["Audience", "Email subscribers, list engagement, and reader community growth."],
            ["Efficiency", "Advertising spend against measurable outcomes, reviewed and pruned regularly."],
          ].map(([title, body], i) => (
            <FeatureCard key={title} title={title!} body={body!} index={i} />
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          We do not publish invented statistics, borrowed screenshots, or unattributed numbers. If a
          figure appears on this site, it came from a client engagement and the author approved
          sharing it.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Author voices"
          title="Testimonials"
          align="center"
          intro="Real author quotes are added here as engagements complete and authors approve their words."
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
        <div className="mt-10 flex justify-center">
          <TikTokButton label="Watch Author Proof on TikTok" />
        </div>
      </Section>

      <CtaBand
        title="Want Your Book to Be the Next Case Study?"
        body="Start with a free book audit. We'll tell you honestly what we think can be improved and what results would be realistic."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Apply to Work With Us", to: "/work-with-us" }}
      />
    </>
  );
}
