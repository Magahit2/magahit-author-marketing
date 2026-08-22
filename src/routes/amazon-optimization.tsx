import { createFileRoute } from "@tanstack/react-router";
import {
  CheckList,
  CtaBand,
  CtaBand as _CtaBand,
  PageHero,
  Section,
  SectionHeading,
  StepGrid,
} from "@/components/site/blocks";
import manuscript from "@/assets/manuscript.jpg";

export const Route = createFileRoute("/amazon-optimization")({
  head: () => ({
    meta: [
      { title: "Amazon Book Marketing & Listing Optimization | Magahit" },
      {
        name: "description",
        content:
          "Amazon book optimization for authors: keyword research, category research, metadata, book description copy, A+ Content, and competitive listing analysis.",
      },
      { property: "og:title", content: "Amazon Book Optimization for Authors | Magahit" },
      {
        property: "og:description",
        content:
          "Make your Amazon book page work harder — search, click, convince, convert, improve.",
      },
      { property: "og:url", content: "/amazon-optimization" },
    ],
    links: [{ rel: "canonical", href: "/amazon-optimization" }],
  }),
  component: AmazonOptimization,
});

const STAGES = [
  { step: "01", title: "Search", body: "Keywords and categories that match how readers in your genre actually search and browse." },
  { step: "02", title: "Click", body: "Cover impression, title, subtitle, and series positioning working as one signal." },
  { step: "03", title: "Convince", body: "A book description written as sales copy, supported by A+ Content modules." },
  { step: "04", title: "Convert", body: "Social proof and listing structure that answer a hesitant reader's last question." },
  { step: "05", title: "Improve", body: "Ongoing testing and refinement as data accumulates." },
];

function AmazonOptimization() {
  return (
    <>
      <PageHero
        eyebrow="Amazon optimization"
        title="Make Your Amazon Book Page Work Harder."
        intro="Your detail page is where most buying decisions happen. Small improvements to keywords, copy, and structure compound across every visitor you earn."
        primary={{ label: "Optimize My Book", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={manuscript}
        imageAlt="A marked-up manuscript page beside books and reading glasses"
      />

      <Section>
        <SectionHeading
          eyebrow="The five stages"
          title="How Readers Move From Search to Purchase"
          intro="Each stage has its own failure point. We diagnose which one is costing you readers before changing anything."
        />
        <div className="mt-16">
          <StepGrid steps={STAGES} columns={5} />
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Services" title="What's Included" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Keyword research across reader search behaviour",
                  "Category research and placement recommendations",
                  "Metadata optimization (title, subtitle, series, back-end fields)",
                  "Book description rewrite and formatting",
                  "A+ Content module planning",
                  "Competitive listing research",
                  "Conversion review of your detail page",
                  "Follow-up refinement recommendations",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Honest expectations"
              title="What Optimization Can and Cannot Do."
            />
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Optimization improves relevance and persuasion. It makes your book easier to find for
                readers who want what it offers, and more convincing once they arrive.
              </p>
              <p>
                It cannot force placement, control recommendation engines, or guarantee rank. We do
                not claim to influence the algorithm, and we will never sell you a tactic that
                depends on doing so.
              </p>
              <p>
                What we can say is that most listings we audit have clear, fixable gaps — and fixing
                them is the cheapest marketing work available to an author.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Let's Review Your Amazon Listing."
        body="Send us your book link. We'll tell you what we'd change first, and why, before you commit to anything."
        primary={{ label: "Optimize My Book", to: "/book-audit" }}
        secondary={{ label: "Explore All Services", to: "/services" }}
      />
    </>
  );
}
