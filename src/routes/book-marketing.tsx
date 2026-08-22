import { createFileRoute } from "@tanstack/react-router";
import heroDesk from "@/assets/hero-desk.jpg";
import {
  CheckList,
  CtaBand,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  StepGrid,
} from "@/components/site/blocks";

export const Route = createFileRoute("/book-marketing")({
  head: () => ({
    meta: [
      { title: "Book Marketing Services | Published to Discoverable | Magahit" },
      {
        name: "description",
        content:
          "Our complete book marketing system for authors: audience research, genre positioning, Amazon and Goodreads strategy, reader outreach, email, paid ads, and launch planning.",
      },
      { property: "og:title", content: "Book Marketing Services for Authors | Magahit" },
      {
        property: "og:description",
        content:
          "Research, position, promote, convert, grow — the full book marketing system we build around your title.",
      },
      { property: "og:url", content: "/book-marketing" },
    ],
    links: [{ rel: "canonical", href: "/book-marketing" }],
  }),
  component: BookMarketing,
});

const JOURNEY = [
  { step: "01", title: "Research", body: "Genre, comparable titles, reader behaviour, keywords, categories, and competing listings." },
  { step: "02", title: "Position", body: "The promise your book makes and the reader it makes that promise to." },
  { step: "03", title: "Promote", body: "Outreach, content, social, Goodreads presence, and paid amplification." },
  { step: "04", title: "Convert", body: "Description, listing structure, A+ Content, and social proof." },
  { step: "05", title: "Grow", body: "Email list, reader community, and systems that carry into the next book." },
];

const PILLARS = [
  ["Audience research", "We define your reader by behaviour: what they already buy, finish, and recommend."],
  ["Genre positioning", "Your book is placed where its readers already browse, with signals they recognise."],
  ["Amazon optimization", "Keywords, categories, metadata, description, and A+ Content working together."],
  ["Goodreads strategy", "Ethical presence in the space where readers decide what to read next."],
  ["Reader outreach", "Bloggers, reviewers, podcasts, and book clubs approached individually, never in bulk."],
  ["Social media", "A platform plan you can actually sustain between releases."],
  ["Paid advertising", "Amazon and Meta campaigns with agreed budgets and honest reporting."],
  ["Email marketing", "A reader list you own, with a welcome sequence and a sending rhythm."],
  ["Launch strategy", "A 60-day plan through launch week and into post-launch discoverability."],
];

function BookMarketing() {
  return (
    <>
      <PageHero
        eyebrow="Book marketing"
        title="Turn Your Book From Published to Discoverable."
        intro="A complete marketing system built around one title — researched first, executed deliberately, and measured honestly."
        primary={{ label: "Build My Book Marketing Strategy", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={heroDesk}
        imageAlt="An open book, fountain pen and hardcovers arranged on a writing desk"
      />

      <Section>
        <SectionHeading
          eyebrow="The journey"
          title="Research → Position → Promote → Convert → Grow"
          intro="Skipping a stage is the most common reason book marketing budgets disappear without result."
        />
        <div className="mt-16">
          <StepGrid steps={JOURNEY} columns={5} />
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="What's included"
          title="Nine Disciplines, Sequenced for Your Book"
          intro="Not every book needs all nine at once. The audit determines the order and the emphasis."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(([title, body], i) => (
            <FeatureCard key={title} title={title!} body={body!} index={i} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What You Actually Receive" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Reader and comparable-title research document",
                  "Positioning and messaging summary",
                  "Keyword and category recommendations",
                  "Rewritten book description",
                  "A+ Content module plan",
                  "Outreach target list and pitch templates",
                  "Content and email plan",
                  "Advertising structure and budget guidance",
                  "A prioritised action schedule",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="What we won't do" title="Our Ethical Lines" />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We do not buy reviews, arrange reviews in exchange for payment, manufacture reader
                activity, or misrepresent your book to reach a wider audience.
              </p>
              <p>
                We do not promise sales, rankings, review counts, bestseller status, or specific
                algorithm outcomes. Anyone who does is guessing, or worse.
              </p>
              <p>
                What we commit to is the work: research done properly, assets improved measurably,
                outreach conducted respectfully, and reporting you can verify.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Timeline" title="How an Engagement Runs" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Weeks 1–2", "Research, audit findings, and strategy agreement."],
            ["Weeks 3–4", "Assets: description, metadata, listing, and A+ plan."],
            ["Weeks 5–8", "Outreach, content, email setup, and campaign launch."],
            ["Ongoing", "Optimisation, reporting, and audience growth."],
          ].map(([label, body], i) => (
            <Reveal key={label} delay={i * 70} className="h-full">
              <div className="h-full border border-border bg-card p-7">
                <p className="eyebrow">{label}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Build a Marketing Strategy Around Your Book."
        body="Start with a free book audit. We'll identify the highest-impact improvements before you spend anything on promotion."
        primary={{ label: "Build My Book Marketing Strategy", to: "/book-audit" }}
        secondary={{ label: "Explore All Services", to: "/services" }}
      />
    </>
  );
}
