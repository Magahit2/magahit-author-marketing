import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import manuscript from "@/assets/manuscript.jpg";
import {
  CtaBand,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Magahit Author Marketing | Author Growth Agency" },
      {
        name: "description",
        content:
          "Magahit Author Marketing exists to bridge the gap between authors, books, and readers through research-led book marketing and author brand development.",
      },
      { property: "og:title", content: "About Magahit Author Marketing" },
      {
        property: "og:description",
        content:
          "Our mission, philosophy, and approach to author marketing and long-term book discoverability.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { title: "Honesty over hype", body: "We describe what marketing can and cannot do, before you spend anything." },
  { title: "Research before recommendation", body: "No strategy is proposed until we understand the genre and the reader." },
  { title: "Reader respect", body: "We never buy reviews, manipulate ratings, or mislead reader communities." },
  { title: "Craft in the details", body: "Metadata, copy, and creative are treated as work worth doing properly." },
  { title: "Transparency in reporting", body: "You see what was done, what it cost, and what it produced." },
  { title: "Author ownership", body: "Everything we build belongs to you — accounts, assets, and audience." },
];

const DIFFERENT = [
  { title: "We are book specialists", body: "Publishing has its own discovery mechanics. We work in them daily rather than adapting generic tactics." },
  { title: "We start with the reader", body: "Comparable titles, review language, and shelving behaviour shape every plan we write." },
  { title: "We think in author careers", body: "A single title is a project. Your body of work is the business." },
  { title: "We say no", body: "If a book isn't ready, or a tactic wouldn't be ethical, we tell you instead of billing you." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Magahit"
        title="Great Books Deserve Discoverability."
        intro="Magahit Author Marketing is an author growth and book marketing agency. We exist to close the distance between the author who wrote the book and the readers who would love it."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Explore Our Services", to: "/services" }}
        image={library}
        imageAlt="A warm wood-panelled library reading room with tall shelves of cloth-bound books"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading eyebrow="Our mission" title="Authors → Books → Readers" />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Our mission is to make good books findable. Publishing has never been easier; being
              discovered has never been harder. Between an author's finished manuscript and the
              reader who would happily buy it sits a chain of decisions — positioning, metadata,
              copy, outreach, audience, timing — and most of that chain is invisible to the person
              who wrote the book.
            </p>
            <p>
              Magahit Author Marketing exists to build that chain deliberately. We research the
              genre, define the reader, position the book, improve the assets that convert, and
              create audience systems the author still owns when the campaign ends.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why we exist"
              title="Because Good Books Were Getting Lost."
              intro="We kept meeting authors with strong reviews, professional covers, and almost no visibility. The books were not the problem."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              What those authors lacked was a system: someone researching how readers in their genre
              actually search and browse, someone writing the description as sales copy, someone
              building an audience they could reach again for the next release. Magahit was created
              to be that system.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our philosophy"
              title="Marketing Should Serve the Reader Too."
              intro="Marketing works best when it helps the right reader find a book they will genuinely enjoy."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              That belief shapes what we will and will not do. We do not chase readers who will be
              disappointed, we do not inflate expectations, and we do not manufacture social proof.
              Sustainable author careers are built on readers who finish the book and want the next
              one.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="Research, Strategy, Execution, Optimisation."
          intro="Every engagement moves through the same disciplined sequence, adapted to the genre and the stage of the author's career."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Research", "Genre, comparable titles, keywords, categories, reader behaviour, competitive listings."],
            ["Strategy", "Positioning, messaging, channel plan, sequencing, budget, and success measures."],
            ["Execution", "Copy, metadata, outreach, content, launch coordination, and paid campaigns."],
            ["Optimisation", "Review, refine, prune, and scale based on what the data actually shows."],
          ].map(([title, body], i) => (
            <FeatureCard key={title} title={title!} body={body!} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What makes us different" title="Not a Promotion Service. A Growth Partner." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {DIFFERENT.map((d, i) => (
            <Reveal key={d.title} delay={i * 60} className="h-full">
              <div className="h-full border border-border bg-card p-7">
                <h3 className="font-serif text-xl text-foreground">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <img
            src={manuscript}
            alt="A manuscript with handwritten margin notes beside two closed novels"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[7/5] w-full object-cover shadow-editorial"
          />
          <div>
            <SectionHeading
              eyebrow="Founder's note"
              title="Written for Authors, by People Who Read."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Magahit was founded on a simple frustration: the advice available to authors was
                either vague encouragement or aggressive tactics that treated readers as targets.
                Neither builds a career.
              </p>
              <p>
                We built the agency we wished existed — one that does the unglamorous research,
                writes the description twelve times, and tells an author honestly when the cover,
                not the marketing, is the thing holding the book back.
              </p>
              <p className="font-serif text-lg italic text-foreground">
                — Founder, Magahit Author Marketing
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="Our values" title="How We Work" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <FeatureCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Who we serve"
        title="Fiction, Nonfiction, First Book or Tenth."
        body="If you have written something worth reading, the next question is whether the right readers can find it. Let's answer that together."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Apply to Work With Us", to: "/work-with-us" }}
      />
    </>
  );
}
