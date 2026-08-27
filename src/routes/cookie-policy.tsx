import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/blocks";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "How Magahit Author Marketing uses cookies and similar technologies on its website, what they do, and how to manage them.",
      },
      { property: "og:title", content: "Cookie Policy | Magahit Author Marketing" },
      { property: "og:description", content: "How Magahit uses cookies and similar technologies." },
      { property: "og:url", content: "/cookie-policy" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicy,
});

const SECTIONS = [
  ["What are cookies", "Cookies are small text files stored on your device by your browser when you visit a website. They allow the site to remember your actions and preferences over time."],
  ["How we use cookies", `${BRAND.name} uses cookies for essential site functionality and to understand how visitors use the site through analytics. We do not use advertising cookies that track you across other websites.`],
  ["Types of cookies we use", "Essential cookies enable core functionality. Analytics cookies help us understand traffic and improve content. We do not set advertising or cross-site tracking cookies."],
  ["Third-party cookies", "Analytics providers may set cookies under their own policies. We configure these tools to minimise data collection where possible. Their use is governed by their respective privacy policies."],
  ["Managing cookies", "You can control and delete cookies through your browser settings. Restricting cookies may affect some features of the site. Most browsers also offer a 'Do Not Track' option, which we respect where supported."],
  ["Changes", "We may update this policy. Material changes will be posted on this page with a revised date."],
  ["Contact", `Questions about cookies can be sent to ${BRAND.email}.`],
];

function CookiePolicy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Cookie Policy</p>
        <h1 className="display-1 mt-4 text-foreground">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 2026</p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          This policy explains how {BRAND.name} uses cookies and similar technologies.
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
