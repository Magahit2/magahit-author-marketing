import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/blocks";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Terms and conditions for engaging Magahit Author Marketing, including scope of services, payments, client responsibilities, and guarantees.",
      },
      { property: "og:title", content: "Terms & Conditions | Magahit Author Marketing" },
      { property: "og:description", content: "Terms and conditions for engaging Magahit Author Marketing." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const SECTIONS = [
  ["Agreement to terms", `By engaging ${BRAND.name}, you agree to these terms. If you do not agree, do not proceed. These terms apply to all services unless a separate written agreement states otherwise.`],
  ["Scope of services", "Services are described in the proposal, invoice, or engagement letter we provide before work begins. Any change to scope must be agreed in writing. We are not obligated to deliver work outside the agreed scope."],
  ["No guarantees", "We do not guarantee specific sales, rankings, reviews, bestseller status, or marketplace outcomes. We guarantee the professional delivery of agreed work, transparent reporting, and honest advice. Book marketing results depend on factors we do not control."],
  ["Payments", "Payment terms are stated in your proposal or invoice. Fixed packages are paid in advance. Custom engagements may be split across milestones. Late payments may pause work until resolved."],
  ["Refunds", "Because marketing work is delivered over time and is non-recoverable, fees for completed work are non-refundable. If work has not started, we will refund the unfulfilled portion."],
  ["Client responsibilities", "You agree to provide accurate information, timely access to listings and assets, and prompt decisions. Delays in providing these may extend timelines and are not grounds for refund."],
  ["Ethical marketing", "We do not buy, sell, arrange, or coordinate reviews. We do not manipulate ratings, rankings, or reader communities. You agree not to ask us to perform any unethical or platform-violating activity, and we may decline or end engagements that request such work."],
  ["Intellectual property", "All assets we create for you — copy, metadata, creative, audience lists, and accounts — belong to you once invoices are paid. We retain the right to reference our work in general descriptions of our services, without disclosing confidential details."],
  ["Confidentiality", "We treat your information confidentially and do not share it with third parties except as needed to deliver services or as required by law. This obligation survives the end of an engagement."],
  ["Limitation of liability", `Our liability is limited to the fees paid for the specific engagement giving rise to a claim. We are not liable for indirect, incidental, or consequential damages, or for marketplace outcomes beyond our control.`],
  ["Termination", "Either party may terminate an engagement with written notice. Fees for work completed up to termination are due. Prepaid fees for unstarted work will be refunded on a pro-rata basis."],
  ["Changes to terms", "We may update these terms. Material changes will be posted on this page. Continued engagement after a change constitutes acceptance of the updated terms."],
  ["Contact", `Questions about these terms can be sent to ${BRAND.email}.`],
];

function Terms() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Terms & Conditions</p>
        <h1 className="display-1 mt-4 text-foreground">Terms & Conditions</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 2026</p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          These terms govern engagements with {BRAND.name}. Please read them before proceeding.
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
