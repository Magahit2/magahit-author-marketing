import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/blocks";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "How Magahit Author Marketing collects, uses, and protects personal information submitted through forms, email, and our website.",
      },
      { property: "og:title", content: "Privacy Policy | Magahit Author Marketing" },
      { property: "og:description", content: "How Magahit collects, uses, and protects personal information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const SECTIONS = [
  ["Information we collect", "We collect information you provide directly — through forms (such as book audits, applications, and contact messages), email correspondence, and any details you share during an engagement. This typically includes your name, email address, book details, links to listings, and any background you share about your goals."],
  ["How we use information", "We use your information to respond to enquiries, assess your book, propose and deliver services, send invoices, and communicate about your engagement. We do not sell or rent your personal information to third parties."],
  ["Service providers", "We may share information with service providers who help us operate — such as email, accounting, and analytics tools — under appropriate confidentiality obligations. These providers process data only as needed to deliver their service to us."],
  ["Cookies and analytics", "Our site may use analytics tools to understand traffic and improve content. These tools may use cookies. We do not use advertising cookies that track you across other sites."],
  ["Data retention", "We retain information only as long as needed to provide services, meet legal obligations, resolve disputes, and enforce agreements. You may request deletion of your information when it is no longer required for these purposes."],
  ["Your rights", "You may request access to, correction of, or deletion of personal information we hold about you. To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe."],
  ["Security", "We take reasonable measures to protect your information using industry-standard practices. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."],
  ["Changes", "We may update this policy. Material changes will be posted on this page with a revised date. Continued use of our services after a change constitutes acceptance of the updated policy."],
  ["Contact", `Contact us about privacy at ${BRAND.email}.`],
];

function PrivacyPolicy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="display-1 mt-4 text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 2026</p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          This policy describes how {BRAND.name} collects, uses, and protects personal information
          submitted through our website, forms, and email.
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
