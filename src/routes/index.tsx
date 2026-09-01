import { createFileRoute } from "@tanstack/react-router";
import heroDesk from "@/assets/hero-desk.jpg";
import manuscript from "@/assets/manuscript.jpg";
import {
  Container,
  Cta,
  CtaBand,
  FaqAccordion,
  FeatureCard,
  GoldRule,
  Reveal,
  Section,
  SectionHeading,
  ServiceCard,
  StepGrid,
  TestimonialCarousel,
} from "@/components/site/blocks";
import { HOME_FAQS, HOME_SERVICES, METHOD } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Book Marketing Agency for Authors | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Magahit Author Marketing is an author growth and book marketing agency. We improve book discoverability, Amazon positioning, author branding, and reader audience growth.",
      },
      {
        property: "og:title",
        content: "Book Marketing Agency for Authors | Magahit Author Marketing",
      },
      {
        property: "og:description",
        content:
          "Strategic book marketing, author branding, and audience growth for self-published and established authors.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PROBLEMS = [
  "Low discoverability",
  "Weak Amazon positioning",
  "Poor book descriptions",
  "Limited reviews",
  "Inconsistent social visibility",
  "No reader email list",
  "Unclear author positioning",
  "Scattered marketing efforts",
  "Launches that lose momentum",
];

const REASONS = [
  {
    title: "Reader-First Strategy",
    body: "We start with the readers most likely to connect with your book, then work backwards to the marketing.",
  },
  {
    title: "Data-Informed Positioning",
    body: "We research your genre, competitors, keywords, categories, and audience behaviour before recommending anything.",
  },
  {
    title: "Full-Funnel Thinking",
    body: "We don't focus only on attention. We think about discovery, conversion, and retention together.",
  },
  {
    title: "Long-Term Author Growth",
    body: "The goal isn't a temporary spike. It's an audience built around your author career.",
  },
];

const WHO = [
  ["First-Time Authors", "Build the foundation correctly from the beginning."],
  ["Self-Published Authors", "Create visibility without relying entirely on organic Amazon traffic."],
  ["Established Authors", "Expand reach and strengthen your author platform."],
  ["Authors Launching Their Next Book", "Build momentum before launch day."],
  ["Authors With Great Reviews but Low Visibility", "Turn existing reader satisfaction into greater discoverability."],
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-parchment">
        <Container className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="eyebrow">Author growth &amp; book marketing agency</p>
            <h1 className="display-1 mt-6 text-foreground">
              Your Book Deserves More Than a Publish Button.{" "}
              <em className="font-normal italic text-primary">It Deserves to Be Discovered.</em>
            </h1>
            <GoldRule className="mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Magahit Author Marketing helps authors increase book discoverability, reach the right
              readers, strengthen their author brand, and build marketing systems that support
              long-term growth.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Cta to="/book-audit">Get Your Book Audit</Cta>
              <Cta to="/services" variant="outline">
                Explore Our Services
              </Cta>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span>Discover</span>
              <span className="text-gold">·</span>
              <span>Attract</span>
              <span className="text-gold">·</span>
              <span>Convert</span>
              <span className="text-gold">·</span>
              <span>Retain</span>
              <span className="text-gold">·</span>
              <span>Grow</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-5 -top-5 hidden h-full w-full border border-gold/40 lg:block" />
            <img
              src={heroDesk}
              alt="An open hardcover book, fountain pen and literary hardcovers on a walnut writing desk in warm window light"
              width={1600}
              height={1200}
              className="relative aspect-[4/3] w-full object-cover shadow-editorial"
            />
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The real problem"
              title="Writing the Book Was Only the Beginning."
              intro="You spent months or years writing the book. But writing the book is only half the journey. Readers still need to discover it."
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A great book can still struggle when readers cannot find it. In almost every audit we
              run, the same patterns appear — and none of them are about the quality of the writing.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-serif text-xl leading-snug text-foreground sm:text-2xl">
              The problem isn't always the book. Sometimes it's the system around the book.
            </blockquote>
            <div className="mt-10">
              <Cta to="/services" variant="ghost">
                See How We Can Help →
              </Cta>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p} delay={i * 40}>
                <div className="flex h-full items-center gap-4 bg-background p-6">
                  <span className="font-serif text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* METHOD */}
      <Section tone="parchment">
        <SectionHeading
          eyebrow="The Magahit Method"
          title="Five Steps From Published to Discoverable."
          intro="Every engagement follows the same disciplined sequence: research first, then positioning, then promotion, conversion, and long-term growth."
        />
        <div className="mt-16">
          <StepGrid steps={METHOD} columns={5} />
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="A Marketing System Built Around Your Book"
          intro="Six disciplines that work together — chosen and sequenced according to what your book actually needs."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why Magahit"
              title="Because Book Marketing Should Be Strategic, Not Random."
            />
            <img
              src={manuscript}
              alt="A marked-up manuscript with reading glasses and coffee on a linen surface"
              width={1408}
              height={1008}
              loading="lazy"
              className="mt-10 aspect-[7/5] w-full object-cover shadow-editorial"
            />
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <FeatureCard key={r.title} {...r} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* WHO WE HELP */}
      <Section>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for Authors at Every Stage"
          intro="Fiction and nonfiction, first book or tenth — the strategy changes, the discipline doesn't."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHO.map(([title, body], i) => (
            <Reveal key={title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial">
                <h3 className="font-serif text-xl leading-snug text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={360} className="h-full">
            <div className="flex h-full flex-col justify-between border border-primary/25 bg-parchment p-7">
              <h3 className="font-serif text-xl leading-snug text-foreground">
                Not sure where you fit?
              </h3>
              <Cta to="/book-audit" variant="ghost" className="mt-6 self-start px-0">
                Get Your Book Audit →
              </Cta>
            </div>
          </Reveal>
        </div>
      </Section>


      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading
          eyebrow="Author voices"
          title="What Authors Say"
          align="center"
          intro="We never publish invented testimonials. This section holds space for real author quotes as engagements complete."
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* AUDIT CTA */}
      <CtaBand
        title="Not Sure What's Holding Your Book Back?"
        body="We'll take a strategic look at your book's positioning, discoverability, marketing assets, and audience opportunities."
        primary={{ label: "Request Your Free Book Audit", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
      />

      {/* FAQ */}
      <Section tone="muted">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <div className="mt-12">
          <FaqAccordion items={HOME_FAQS} />
        </div>
        <div className="mt-10">
          <Cta to="/faq" variant="ghost" className="px-0">
            Read the full FAQ →
          </Cta>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section tone="parchment">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Let's begin</p>
          <h2 className="display-1 mt-5 text-foreground">
            Your Next Reader Is Out There. Let's Help Them Find You.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your book doesn't need more random promotion. It needs a strategy built around the
            readers who are most likely to love it.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta to="/book-audit">Get Your Book Audit</Cta>
            <Cta to="/services" variant="outline">
              View Our Services
            </Cta>
          </div>
        </div>
      </Section>
    </>
  );
}
