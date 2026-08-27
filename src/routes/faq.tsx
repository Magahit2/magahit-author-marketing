import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, FaqAccordion, PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { HOME_FAQS } from "@/content/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Answers about Magahit's author marketing services, pricing, process, genres, Amazon and Goodreads work, launch campaigns, guarantees, and client responsibilities.",
      },
      { property: "og:title", content: "FAQ | Magahit Author Marketing" },
      {
        property: "og:description",
        content:
          "Transparent answers on services, pricing, process, timelines, advertising, and what we will and will not guarantee.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

const SECTIONS: { label: string; items: readonly (readonly [string, string])[] }[] = [
  {
    label: "Services",
    items: HOME_FAQS,
  },
  {
    label: "Pricing & Custom Campaigns",
    items: [
      ["What do packages cost?", "Starter is $497, Growth Accelerator is $797, and Author Brand & Sales Domination is $1,200. Custom engagements are scoped individually after a book audit. Advertising budgets are paid directly to platforms and are separate from management fees."],
      ["Can I customise a package?", "Yes. Many authors start with a book audit and we scope a custom engagement from there. You can also add individual services to a fixed package."],
      ["Do you offer payment plans?", "For larger engagements we can split payments across milestones. We'll agree this before work begins."],
      ["What's included in a custom strategy?", "Whatever your book needs — chosen from the disciplines across discovery, conversion, audience, author brand, launch, and paid marketing. The scope is agreed in writing before any work starts."],
    ],
  },
  {
    label: "Process & Timelines",
    items: [
      ["How do engagements begin?", "With a free book audit. If we're a fit, we agree a scope, deliverables, timeline, and price, then begin with research."],
      ["How long does foundation work take?", "Three to four weeks for positioning, keywords, categories, and description work."],
      ["How long does a full engagement take?", "Six to twelve weeks for visibility and audience work, with optimisation continuing beyond that."],
      ["How often do you report?", "At minimum at agreed milestones. For ongoing engagements, monthly reporting calls are standard."],
    ],
  },
  {
    label: "Amazon, Goodreads & Reviews",
    items: [
      ["Do you guarantee Amazon rankings?", "No. No honest agency can. We improve relevance and persuasion; we do not control the algorithm."],
      ["Will you buy reviews for my book?", "Never. We do not buy, sell, arrange, or coordinate reviews. We encourage genuine reader engagement and honest reviews only."],
      ["Is your Goodreads work ethical?", "Yes. We build presence through genuine participation and correct book data — never through manipulated ratings or fake reader activity."],
      ["Can you remove a bad review?", "No. We don't attempt to remove legitimate reviews. We focus on earning more genuine reviews from readers who genuinely like the book."],
    ],
  },
  {
    label: "Launch Campaigns & Advertising",
    items: [
      ["When should I start launch marketing?", "Ideally 60 days before publication. Earlier is better; later is still possible but harder."],
      ["Do you manage Amazon and Meta ads?", "Yes, with agreed budgets, testing plans, and honest reporting on spend and outcomes."],
      ["Who pays the ad budget?", "You do, directly to the platforms. Our fees are for strategy, setup, management, and optimisation."],
      ["Can you market a book that already launched?", "Yes. Backlist and post-launch titles are often the fastest to improve."],
    ],
  },
  {
    label: "Results, Guarantees & Client Responsibilities",
    items: [
      ["Do you guarantee sales?", "No. We guarantee the work, the strategy, the reporting, and the transparency — not marketplace outcomes."],
      ["What do I need to provide?", "Access to your listings, any existing assets, honest answers about your goals and constraints, and timely decisions."],
      ["What's expected of me as a client?", "Responsiveness on decisions, provision of assets and access, and openness about what you want and can sustain."],
      ["What if the work isn't producing results?", "We report honestly. If something isn't working, we say so, diagnose why, and either adjust or recommend stopping. We don't extend a failing approach to protect a fee."],
    ],
  },
];

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Transparent Answers to Honest Questions."
        intro="We'd rather you know exactly what we can and cannot do before you spend anything. If your question isn't here, just ask us."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />

      <Section>
        <div className="space-y-16">
          {SECTIONS.map((section) => (
            <div key={section.label}>
              <SectionHeading eyebrow={section.label} title={section.label} />
              <div className="mt-8">
                <FaqAccordion items={section.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Still Have a Question?"
        body="Send it over. We answer every genuine enquiry, and we'll never pressure you into an engagement."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Get Your Book Audit", to: "/book-audit" }}
      />
    </>
  );
}
