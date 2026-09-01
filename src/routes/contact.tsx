import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
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
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
