import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { LeadForm } from "@/components/site/LeadForm";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Magahit Author Marketing | Talk About Your Book" },
      {
        name: "description",
        content:
          "Contact Magahit Author Marketing to discuss book marketing, author branding, Amazon optimization, or a book launch campaign.",
      },
      { property: "og:title", content: "Contact Magahit Author Marketing" },
      {
        property: "og:description",
        content: "Tell us about your book and the marketing help you're looking for.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Book."
        intro="Tell us where your book is today and what you would like it to do next. We reply to every genuine enquiry within two business days."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Direct" title="Reach Us" />
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${BRAND.email}`} className="text-foreground hover:text-primary">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  {BRAND.phone} <span className="text-muted-foreground">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 fill-current text-primary"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13v-3.5a6.41 6.41 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.45-4.79V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-.63-.21z" />
                </svg>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  {BRAND.tiktokHandle}
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">{BRAND.location}</span>
              </li>
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Prefer a strategic review before a conversation? Request a free book audit and we'll
              come to the call with findings already in hand.
            </p>
          </div>

          <LeadForm
            submitLabel="Let's Talk About Your Book"
            confirmation={{
              title: "Message received.",
              body: "Thank you for reaching out. We'll read your message properly and reply by email within two business days.",
            }}
            note="We use your details only to respond to your enquiry."
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "book", label: "Book title" },
              { name: "link", label: "Book link", type: "url", placeholder: "https://" },
              { name: "genre", label: "Genre", type: "select" },
              {
                name: "service",
                label: "Service interested in",
                type: "select",
                options: [
                  "Book marketing",
                  "Amazon optimization",
                  "Goodreads marketing",
                  "Author brand development",
                  "Book launch",
                  "Paid campaigns",
                  "Not sure yet",
                ],
              },
              {
                name: "budget",
                label: "Budget",
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
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
