import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";
import { GENRES } from "@/content/site";

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: "Work With Magahit Author Marketing | Apply for Author Marketing" },
      {
        name: "description",
        content:
          "Apply to work with Magahit Author Marketing. Submit your application, we review your book, identify opportunities, recommend a strategy, and begin execution.",
      },
      { property: "og:title", content: "Work With Magahit Author Marketing" },
      {
        property: "og:description",
        content:
          "A simple application process to build a marketing strategy around your book.",
      },
      { property: "og:url", content: "/work-with-us" },
    ],
    links: [{ rel: "canonical", href: "/work-with-us" }],
  }),
  component: WorkWithUs,
});

const STEPS = [
  ["01", "Submit your application", "Tell us about your book, your goals, and where you are today."],
  ["02", "We review your book", "Positioning, listing, discoverability, and audience — assessed honestly."],
  ["03", "We identify opportunities", "The highest-impact improvements, sequenced realistically."],
  ["04", "We recommend the right strategy", "A clear plan, with deliverables, timeline, and price."],
  ["05", "We begin execution", "Research first, then assets, then promotion, then optimisation."],
];

function WorkWithUs() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Ready to Build a Marketing Strategy Around Your Book?"
        intro="We take on a limited number of authors at a time so each engagement gets real attention. Start with the application below."
        primary={{ label: "Apply to Work With Us", to: "#apply" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
      />

      <Section>
        <SectionHeading
          eyebrow="The process"
          title="Five Steps From Application to Execution"
          intro="No pressure, no obligation at the application stage. You'll only commit once you've seen the recommended strategy."
        />
        <div className="mt-16 grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-5">
          {STEPS.map(([step, title, body], i) => (
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

      <Section tone="parchment" id="apply">
        <SectionHeading
          eyebrow="Application"
          title="Apply to Work With Us"
          intro="The more detail you share, the more useful our first response will be."
        />
        <div className="mt-12">
          <LeadForm
            submitLabel="Apply to Work With Us"
            confirmation={{
              title: "Application received.",
              body: "Thank you. We'll review your book and reply within three business days with our assessment and, if we're a fit, a recommended strategy.",
            }}
            note="Submitting an application is not a commitment. We do not guarantee sales, rankings, reviews, or bestseller status."
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "book", label: "Book title", required: true },
              { name: "amazon", label: "Amazon book link", type: "url", placeholder: "https://", required: true },
              { name: "website", label: "Website or author page", type: "url", placeholder: "https://" },
              { name: "genre", label: "Genre", type: "select", required: true },
              {
                name: "stage",
                label: "Where is the book?",
                type: "select",
                options: [
                  "Not yet published",
                  "Recently published (0–3 months)",
                  "Published, needs a relaunch",
                  "Backlist title",
                  "Preparing for launch",
                ],
              },
              {
                name: "budget",
                label: "Budget range",
                type: "select",
                options: [
                  "Under $500",
                  "$500 – $1,000",
                  "$1,000 – $2,500",
                  "$2,500 – $5,000",
                  "$5,000+",
                  "Not decided",
                ],
              },
              { name: "challenge", label: "Biggest challenge right now", type: "textarea", required: true },
              { name: "goal", label: "What does success look like?", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title="Prefer to Talk First?"
        body="No problem. Send us a message and we'll arrange a short call before any application."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Get Your Book Audit", to: "/book-audit" }}
      />
    </>
  );
}
