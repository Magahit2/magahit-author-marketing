import { createFileRoute } from "@tanstack/react-router";
import {
  CheckList,
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  Timeline,
} from "@/components/site/blocks";
import heroDesk from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/book-launch")({
  head: () => ({
    meta: [
      { title: "Book Launch Marketing & Campaign Strategy | Magahit" },
      {
        name: "description",
        content:
          "Book launch marketing for authors: 60-day pre-launch planning, ARC strategy, launch-week campaigns, advertising, and post-launch discoverability.",
      },
      { property: "og:title", content: "Book Launch Marketing & Strategy | Magahit" },
      {
        property: "og:description",
        content:
          "A structured 60-day launch plan through launch week and into long-term discoverability.",
      },
      { property: "og:url", content: "/book-launch" },
    ],
    links: [{ rel: "canonical", href: "/book-launch" }],
  }),
  component: BookLaunch,
});

const PHASES = [
  {
    label: "60 days before",
    title: "Foundation",
    points: [
      "Strategy and success measures agreed",
      "Positioning, comparable titles, and messaging finalised",
      "Audience building begins",
      "ARC programme prepared and readers recruited",
    ],
  },
  {
    label: "30 days before",
    title: "Momentum",
    points: [
      "Content published on a consistent rhythm",
      "Blogger, podcast, and reviewer outreach",
      "Email list growth and reader magnet in place",
      "Pre-launch visibility: cover reveal, preorder page, excerpts",
    ],
  },
  {
    label: "14 days before",
    title: "Intensify",
    points: [
      "Promotion frequency increases across channels",
      "Direct reader engagement in communities",
      "Review coordination with advance readers",
      "Advertising creative and audiences prepared",
    ],
  },
  {
    label: "Launch week",
    title: "Activate",
    points: [
      "Campaign activation across all channels",
      "Social promotion on a daily schedule",
      "Email campaigns to your list",
      "Advertising live, monitored daily",
    ],
  },
  {
    label: "After launch",
    title: "Sustain",
    points: [
      "Listing and campaign optimisation based on real data",
      "Continued discoverability work",
      "Ongoing honest review growth",
      "Long-term audience building toward the next book",
    ],
  },
];

function BookLaunch() {
  return (
    <>
      <PageHero
        eyebrow="Book launch"
        title="Launch Week Amplifies What You Built Before It."
        intro="A launch is not an event, it is a sixty-day sequence. We plan and run that sequence so nothing important depends on improvisation."
        primary={{ label: "Plan My Book Launch", to: "/book-audit" }}
        secondary={{ label: "View Pricing", to: "/pricing" }}
        image={heroDesk}
        imageAlt="An open book and fountain pen on a writing desk in warm light"
      />

      <Section>
        <SectionHeading
          eyebrow="The timeline"
          title="From 60 Days Out to Long After Launch Day"
          intro="Every phase has a job. Miss one and the next has to work twice as hard."
        />
        <div className="mt-16">
          <Timeline items={PHASES} />
        </div>
      </Section>

      <Section tone="parchment">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What a Launch Engagement Includes" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Launch strategy document with dates and owners",
                  "Positioning and messaging for launch assets",
                  "ARC programme plan and reader recruitment",
                  "Outreach target list and pitch templates",
                  "Content and email calendar",
                  "Launch-week day-by-day schedule",
                  "Advertising structure and budget guidance",
                  "Post-launch optimisation plan",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Already published?"
              title="Relaunches Work Too."
              intro="A backlist title with reviews and history is often easier to relaunch than a new book is to launch."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We treat a relaunch as a fresh sequence: reposition, improve the listing, rebuild
              interest with readers who already like your work, then amplify. If your book launched
              quietly the first time, that is not the end of its life.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Give Your Launch a Real Plan."
        body="Tell us your publication date and we'll show you what the next sixty days should look like."
        primary={{ label: "Plan My Book Launch", to: "/book-audit" }}
        secondary={{ label: "Explore All Services", to: "/services" }}
      />
    </>
  );
}
