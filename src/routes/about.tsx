import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import founderAsset from "@/assets/founder-emmanuel-ola.jpg.asset.json";
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

const TEAM_CAPABILITIES = [
  ["Strategy & Campaign Direction", "Research, positioning, campaign planning, prioritisation, sequencing, and performance review."],
  ["Book Discovery & Amazon Strategy", "Categories, keywords, metadata, book descriptions, A+ Content, reader positioning, and discoverability research."],
  ["Content & Author Branding", "Social content, book creative, reader-facing messaging, author positioning, and content systems."],
  ["Reader & Reviewer Outreach", "Book bloggers, reviewers, Goodreads communities, Bookstagram, book clubs, podcasts, YouTube channels, and relevant reader communities."],
  ["Audience Development", "Email systems, lead magnets, newsletters, reader engagement, and long-term audience building."],
  ["Campaign Execution & Optimisation", "Outreach coordination, advertising management, campaign monitoring, reporting, testing, and optimisation."],
] as const;

const TEAM_SEQUENCE = [
  ["01", "Discover", "We learn about your book, genre, audience, current positioning, existing marketing, and goals."],
  ["02", "Strategise", "We identify the highest-priority opportunities and build the campaign sequence."],
  ["03", "Execute", "Our team handles the agreed marketing activities, outreach, content, optimisation, and coordination."],
  ["04", "Review", "We report what happened, identify what we learned, and determine what should happen next."],
] as const;

const WHY_AUTHORS = [
  ["Book-Specific", "Every strategy begins with the book, genre, audience, and market."],
  ["Research-First", "Recommendations are based on research rather than assumptions."],
  ["Reader-Centered", "We focus on helping the right readers discover the right books."],
  ["Integrated", "Discovery, content, outreach, advertising, and audience building work together."],
  ["Transparent", "Authors know what is being done, why it is being done, and what the work produces."],
  ["Long-Term", "We think beyond one campaign and one title."],
] as const;

const TRANSPARENCY_POINTS = ["Clear Scope", "Clear Deliverables", "Clear Communication", "Clear Reporting"] as const;

const OPERATING_MODEL = [
  { title: "You Provide", items: ["Book materials", "Author insight", "Approvals", "Strategic decisions"] },
  { title: "We Handle", items: ["Research", "Planning", "Execution", "Outreach", "Campaign management", "Reporting"] },
  { title: "Together", items: ["Review results", "Refine strategy", "Identify next opportunities"] },
] as const;

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
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/40 lg:block" />
            <img
              src={founderAsset.url}
              alt="Emmanuel Ola, founder of Magahit Author Marketing, in a burgundy suit"
              width={768}
              height={1344}
              loading="lazy"
              className="relative aspect-square w-full object-cover object-[center_20%] shadow-editorial"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
               eyebrow="Meet the founder"
              title="Emmanuel Ola"
            />
            <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Founder &amp; Author Marketing Strategist
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Emmanuel Ola is the founder of Magahit Author Marketing, an author growth agency
                focused on helping writers turn published books into discoverable brands.
              </p>
              <p>
                His work is built around the intersection of book positioning, reader discovery,
                marketing strategy, digital outreach, audience development, and author brand growth.
              </p>
              <p>
                Emmanuel founded Magahit after seeing how frequently authors were encouraged to
                promote their books without first answering the more important questions: Who is the
                book for? How are those readers discovering books? What makes this particular title
                relevant to them? And what systems will continue working after the campaign ends?
              </p>
              <p>
                His approach is research-first, reader-aware, and focused on building sustainable
                marketing systems rather than relying on random promotional activity.
              </p>
            </div>
            <p className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              Magahit was founded by Emmanuel Ola on a simple frustration: the advice available to
              authors was either vague encouragement or aggressive tactics that treated readers as
              targets. Neither builds a career.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We built the agency we wished existed — one that does the unglamorous research,
              writes the description twelve times, and tells an author honestly when the cover,
              not the marketing, is the thing holding the book back.
            </p>
            <p className="mt-6 font-serif text-lg italic text-foreground">
              — Emmanuel Ola, Founder, Magahit Author Marketing
            </p>
            <p className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic leading-relaxed text-foreground">
              “Great books don&apos;t just need promotion. They need a path to the readers who will love them.”
            </p>
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

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our background"
            title="Built From a Frustration With How Authors Are Marketed."
          />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Magahit Author Marketing was founded from a simple observation: many authors finish
              the hardest part — writing and publishing the book — only to discover that getting the
              right readers to find it is an entirely different challenge.
            </p>
            <p>
              Too often, authors are presented with disconnected promotional tactics without first
              understanding their genre, positioning, audience, competitive landscape, or long-term
              goals.
            </p>
            <p>We built Magahit to take a different approach.</p>
            <p>
              Before recommending a campaign, we research the book, the market, the reader, and the
              opportunities around it. From there, we develop a strategy that connects discoverability,
              positioning, audience building, outreach, advertising, and launch execution.
            </p>
            <p>
              The objective is not simply to promote another book. It is to build a stronger path
              between the author, the book, and the reader.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our team"
          title="The People Behind the Work"
          intro="Great marketing requires more than one skill. Magahit brings together specialised capabilities around each campaign so authors have access to the expertise required at different stages of the work."
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_CAPABILITIES.map(([title, body], i) => (
            <FeatureCard key={title} title={title} body={body} index={i} />
          ))}
        </div>
        <p className="mt-14 max-w-3xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          Magahit operates with a core strategy function supported by specialist creative, outreach,
          advertising, and technical collaborators assembled according to each campaign&apos;s requirements.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How our team works"
          title="One Strategy. Multiple Specialisms."
          intro="Every author campaign has one strategic direction. The specialists involved in execution work from that shared strategy so that each activity supports the larger objective. Rather than handing an author from one disconnected service provider to another, we coordinate the work around the book, its readers, and the author's goals."
        />
        <div className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_SEQUENCE.map(([step, title, body]) => (
            <div key={step} className="border-t border-gold/50 pt-6">
              <span className="font-serif text-3xl text-gold">{step}</span>
              <h3 className="mt-3 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>


      <Section>
        <SectionHeading
          eyebrow="Our operating model"
          title="Built to Keep the Author Focused on the Work That Matters."
          intro="Authors should not have to become full-time marketers to build a readership. Our role is to take the research, planning, coordination, outreach, content, and campaign execution off the author's plate wherever possible. We keep the author involved where their perspective matters — approvals, creative direction, book knowledge, and important decisions — while Magahit manages the marketing workflow."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {OPERATING_MODEL.map(({ title, items }) => (
            <div key={title} className="border-t-2 border-primary pt-6">
              <p className="eyebrow">{title}</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why authors work with us"
          title="A Serious Marketing Partner for Serious Authors."
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_AUTHORS.map(([title, body], i) => (
            <FeatureCard key={title} title={title} body={body} index={i} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Transparency"
            title="You Should Always Know What Is Happening With Your Campaign."
          />
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              We believe authors should never have to wonder where their marketing budget went or
              what their marketing team actually did. Campaigns are structured around clear
              deliverables, defined activities, communication, and reporting. Where appropriate, we
              share the work completed, opportunities pursued, campaign performance, and
              recommendations for the next stage.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {TRANSPARENCY_POINTS.map((point) => (
                <div key={point} className="border-t border-border py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Start with clarity"
        title="The Book Is Written. Now Let's Build the Path to Its Readers."
        body="If you're looking for a marketing partner who will take the time to understand your book, your readers, and your goals before recommending what comes next, we'd be glad to start there."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Apply to Work With Us", to: "/work-with-us" }}
      />

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
