import { createFileRoute } from "@tanstack/react-router";
import { Container, GoldRule, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/book-audit")({
  head: () => ({
    meta: [
      { title: "Free Book Audit for Authors | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Request a free book audit. We review your book's positioning, discoverability, Amazon listing, marketing assets, and audience opportunities.",
      },
      { property: "og:title", content: "Free Book Audit for Authors | Magahit" },
      {
        property: "og:description",
        content:
          "Find out what's holding your book back: a strategic review of positioning, discoverability, and marketing assets.",
      },
      { property: "og:url", content: "/book-audit" },
    ],
    links: [{ rel: "canonical", href: "/book-audit" }],
  }),
  component: BookAudit,
});

const REVIEW = [
  ["Positioning", "Whether your genre signals, comparable titles, and promise are clear to the right reader."],
  ["Discoverability", "Keyword and category fit, metadata gaps, and where readers are likely missing you."],
  ["Marketing assets", "Description, listing structure, cover impression, and social proof presentation."],
  ["Audience", "Whether you have a reachable audience and what the fastest ethical route to one is."],
];

function BookAudit() {
  return (
    <>
      <section className="border-b border-border bg-parchment">
        <Container className="py-20 text-center sm:py-24">
          <p className="eyebrow">Free book audit</p>
          <h1 className="display-1 mx-auto mt-6 max-w-3xl text-foreground">
            Find Out What's Holding Your Book Back.
          </h1>
          <GoldRule className="mx-auto mt-8" />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us about your book and we'll take a strategic look at its positioning,
            discoverability, marketing assets, and audience opportunities — then send you an honest
            assessment with the first improvements we'd make.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="What we review" title="Four Areas, One Honest Assessment" />
            <div className="mt-10 space-y-8">
              {REVIEW.map(([title, body], i) => (
                <Reveal key={title} delay={i * 60}>
                  <div className="border-t border-border pt-5">
                    <h3 className="font-serif text-lg text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              There is no obligation and no pressure. If we don't think we can help, we'll say so and
              point you somewhere more useful.
            </p>
          </div>

          <LeadForm
            submitLabel="Request My Free Book Audit"
            confirmation={{
              title: "Your audit request has been received.",
              body: "Thank you — we'll review your book and reply by email within two business days with our initial assessment and recommended next step. If we need anything else, we'll ask in that same email.",
            }}
            note="We use your details only to prepare and discuss your audit. No lists, no resale, no spam. We do not guarantee sales, rankings, reviews, or bestseller status."
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "book", label: "Book title", required: true },
              { name: "amazon", label: "Amazon book link", type: "url", placeholder: "https://" },
              { name: "website", label: "Website", type: "url", placeholder: "https://" },
              { name: "genre", label: "Genre", type: "select", required: true },
              {
                name: "efforts",
                label: "Current marketing efforts",
                type: "textarea",
                placeholder: "What have you tried so far?",
              },
              {
                name: "challenge",
                label: "Biggest marketing challenge",
                type: "textarea",
                required: true,
              },
              { name: "goal", label: "Desired goal", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading
          eyebrow="What happens next"
          title="A Simple, Transparent Process"
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-3">
          {[
            ["01", "You share your book", "Details, links, and the challenge you're facing."],
            ["02", "We review it", "Positioning, listing, discoverability, and audience."],
            ["03", "You get our assessment", "Honest findings and the first improvements we'd make."],
          ].map(([step, title, body], i) => (
            <Reveal key={step} delay={i * 70}>
              <div className="border-t border-gold/50 pt-6">
                <span className="font-serif text-3xl text-gold">{step}</span>
                <h3 className="mt-3 font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
