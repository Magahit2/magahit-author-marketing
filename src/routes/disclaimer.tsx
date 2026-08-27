import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/blocks";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Disclaimer for Magahit Author Marketing services, including no guarantees on sales, rankings, or reviews, and the limitations of book marketing outcomes.",
      },
      { property: "og:title", content: "Disclaimer | Magahit Author Marketing" },
      { property: "og:description", content: "Disclaimer regarding book marketing outcomes and guarantees." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

const SECTIONS = [
  ["No outcome guarantees", `${BRAND.name} provides marketing strategy, research, copy, metadata, audience building, and campaign management. We do not guarantee sales, rankings, reviews, bestseller status, or any specific marketplace outcome. Results depend on the book, the market, the reader response, and factors outside any marketer's control.`],
  ["No reviews or ratings manipulation", "We do not buy, sell, arrange, incentivise, or coordinate reviews. We do not manipulate ratings or reader communities. Any review earned through our work is the genuine opinion of a reader who chose to write it."],
  ["No platform compliance guarantees", "Marketplace terms of service (Amazon, Goodreads, Meta, Google, and others) change frequently and are interpreted by the platforms themselves. We work within them in good faith, but we cannot guarantee that a platform will not change how it treats any listing, ad, or account."],
  ["No legal, tax, or financial advice", "Our services are marketing services, not legal, tax, accounting, or financial advice. You remain responsible for your own compliance, filings, and business decisions."],
  ["Third-party reliance", "We may reference third-party tools, platforms, and data. We are not responsible for their accuracy, availability, or changes to their services. You should verify critical information independently."],
  ["External links", "Our site may link to external sites. We do not control and are not responsible for the content or practices of external sites."],
  ["Testimonials and case studies", "Any results, testimonials, or case studies are illustrative and not a promise of similar outcomes for your book. Your results will differ."],
  ["Contact", `Questions about this disclaimer can be sent to ${BRAND.email}.`],
];

function Disclaimer() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Disclaimer</p>
        <h1 className="display-1 mt-4 text-foreground">Disclaimer</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 2026</p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          Please read this disclaimer carefully. It sets out the limits of what {BRAND.name} can
          and cannot guarantee.
        </p>
        <div className="mt-12 space-y-10">
          {SECTIONS.map(([h, b]) => (
            <div key={h}>
              <h2 className="font-serif text-xl text-foreground">{h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
