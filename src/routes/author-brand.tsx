import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import {
  CheckList,
  CtaBand,
  FeatureCard,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/blocks";

export const Route = createFileRoute("/author-brand")({
  head: () => ({
    meta: [
      { title: "Author Brand Development & Author Branding | Magahit" },
      {
        name: "description",
        content:
          "Author brand development: positioning, messaging, ideal reader definition, content strategy, social presence, email list, and long-term author platform building.",
      },
      { property: "og:title", content: "Author Brand Development | Magahit" },
      {
        property: "og:description",
        content:
          "Your book is one product. Your author brand is the business behind it. We help you build it deliberately.",
      },
      { property: "og:url", content: "/author-brand" },
    ],
    links: [{ rel: "canonical", href: "/author-brand" }],
  }),
  component: AuthorBrand,
});

const AREAS = [
  ["Author positioning", "What you are known for, and which readers you are for. Everything else follows this."],
  ["Brand messaging", "Consistent language for your bio, site, listings, pitches, and interviews."],
  ["Ideal reader", "A behavioural profile built from comparable titles and real review language."],
  ["Content strategy", "Three to five pillars you can sustain, with formats suited to your energy."],
  ["Social media presence", "The one or two platforms worth your time, and how to show up on them."],
  ["Audience building", "Turning attention into a reachable audience rather than passing traffic."],
  ["Email list", "The only audience asset you own — set up properly, with a welcome sequence."],
  ["Long-term author platform", "A site, list, and presence that support book two, five, and ten."],
];

function AuthorBrand() {
  return (
    <>
      <PageHero
        eyebrow="Author brand development"
        title="Your Book Is One Product. Your Author Brand Is the Business Behind It."
        intro="Readers buy the next book because they trust the name on the cover. Author branding is how that trust gets built, deliberately and consistently."
        primary={{ label: "Build My Author Brand", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={library}
        imageAlt="A warm library interior with shelves of bound books and an armchair"
      />

      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="Eight Components of a Durable Author Brand"
          intro="Author branding is not a logo or a colour palette. It is the consistent promise your work makes to a specific reader."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map(([title, body], i) => (
            <FeatureCard key={title} title={title!} body={body!} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What You Receive" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Author positioning statement",
                  "Ideal reader profile",
                  "Messaging guide with approved language",
                  "Bio set (short, medium, long)",
                  "Content pillars and format plan",
                  "Platform recommendation and posting rhythm",
                  "Email welcome sequence outline",
                  "Reader magnet recommendation",
                  "90-day brand-building schedule",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="Marketing Gets Cheaper as the Brand Gets Clearer."
              intro="Every book launched without a brand starts from zero. Every book launched with one starts from an audience."
            />
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Authors who invest in brand spend less on paid promotion over time, because a portion
                of each launch is carried by readers who are already waiting.
              </p>
              <p>
                It also makes every other marketing decision easier. When you know who you are for,
                choosing categories, keywords, partners, and content stops being guesswork.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Build the Business Behind Your Books."
        body="Start with a free book audit. We'll look at how your current presence reads to a reader meeting you for the first time."
        primary={{ label: "Build My Author Brand", to: "/book-audit" }}
        secondary={{ label: "Explore All Services", to: "/services" }}
      />
    </>
  );
}
