import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Clapperboard } from "lucide-react";
import { CheckList, Cta, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { BRAND, GENRES } from "@/content/site";
import { cn } from "@/lib/utils";

const URL_BASE = "https://magahit-author-marketing.lovable.app/book-trailer-packages";
const TRAILER_SHOWREEL = "https://vt.tiktok.com/ZSsYkHCTs/";

export const Route = createFileRoute("/book-trailer-packages")({
  head: () => ({
    meta: [
      { title: "Book Trailer Packages | Magahit Author Marketing" },
      {
        name: "description",
        content:
          "Cinematic book trailer packages for authors: free preview, Essential, Professional, and Cinematic Premium trailers, plus optional add-ons.",
      },
      { property: "og:title", content: "Book Trailer Packages | Magahit Author Marketing" },
      {
        property: "og:description",
        content: "Bring your book to life through cinematic storytelling — compare our four book trailer packages.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL_BASE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_BASE }],
  }),
  component: BookTrailerPackages,
});

type Pkg = {
  name: string;
  label: string;
  price: string;
  description: string;
  features: string[];
  delivery?: string;
  conditions?: string;
  cta: string;
  variant: "free" | "default" | "popular" | "premium";
};

const PACKAGES: Pkg[] = [
  {
    name: "Book Trailer Preview",
    label: "Free Trial",
    price: "$0",
    description: "Experience what your book could look like as a video trailer.",
    features: [
      "10–15-second book trailer preview",
      "Creative visual concept",
      "Book cover integration",
      "2–3 visual scenes",
      "Background music",
      "Basic text animation",
      "Author name and book title",
      "HD video preview",
    ],
    conditions:
      "One free preview per author/book, limited to new clients. The preview is watermarked and does not include revisions or the complete trailer.",
    cta: "Request Your Free Preview",
    variant: "free",
  },
  {
    name: "Essential Trailer",
    label: "Starter Package",
    price: "$99",
    description: "A simple and engaging introduction to your book.",
    features: [
      "30–45-second book trailer",
      "Custom trailer concept",
      "Promotional script",
      "3–5 visual scenes",
      "Book cover integration",
      "Background music",
      "Text animations",
      "Book title and author name",
      "HD 1080p video",
      "1 revision",
      "1 social media format",
    ],
    delivery: "3–5 business days.",
    cta: "Choose Essential",
    variant: "default",
  },
  {
    name: "Professional Trailer",
    label: "Most Popular",
    price: "$199",
    description: "A cinematic presentation designed to capture attention and spark curiosity.",
    features: [
      "45–60-second book trailer",
      "Custom creative direction",
      "Professionally developed script",
      "6–10 visual scenes",
      "Book cover animation",
      "Cinematic transitions",
      "Advanced text animations",
      "AI or human voiceover",
      "Background music and sound effects",
      "Subtitles and captions",
      "HD 1080p video",
      "2 social media formats",
      "2 revisions",
    ],
    delivery: "5–7 business days.",
    cta: "Choose Professional",
    variant: "popular",
  },
  {
    name: "Cinematic Premium Trailer",
    label: "Premium Experience",
    price: "$399",
    description:
      "A complete cinematic experience for authors who want a more developed promotional video.",
    features: [
      "60–90-second cinematic trailer",
      "Detailed creative concept",
      "Custom storyboard",
      "Professionally written trailer script",
      "10–15 visual scenes",
      "Advanced cinematic effects",
      "Animated book cover presentation",
      "Premium voiceover",
      "Professional sound design",
      "Background music",
      "Subtitles and captions",
      "Promotional quotes and taglines",
      "HD 1080p or 4K export where supported",
      "3 social media formats",
      "3 revisions",
    ],
    delivery: "7–10 business days.",
    cta: "Choose Premium",
    variant: "premium",
  },
];

const ADDONS: [string, string][] = [
  ["15-second teaser", "$30"],
  ["Additional 15 seconds", "$25"],
  ["Additional revision", "$20"],
  ["Extra social media format", "$20"],
  ["Professional voiceover upgrade", "$50"],
  ["4K export upgrade", "$25"],
  ["Rush delivery", "From $50"],
];

const inputClass =
  "mt-2 w-full min-h-12 rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelClass =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

function trailerEnquiry(p: Pkg) {
  const text = [
    "Book Trailer Enquiry",
    `Selected package: ${p.name}`,
    `Package price: ${p.price}`,
  ].join("\n");
  return `${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
}

function PackageCard({ p }: { p: Pkg }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "relative flex h-full flex-col border p-7 sm:p-8",
        p.variant === "popular" && "border-primary/50 bg-parchment shadow-editorial",
        p.variant === "free" && "border-gold/60 bg-card",
        p.variant === "premium" && "border-border bg-ink text-ink-foreground",
        p.variant === "default" && "border-border bg-card",
      )}
    >
      <span
        className={cn(
          "self-start border px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em]",
          p.variant === "popular" ? "border-primary bg-primary text-primary-foreground" : "border-gold/60 text-gold",
        )}
      >
        {p.label}
      </span>
      <h2 className={cn("display-3 mt-5", p.variant === "premium" ? "text-ink-foreground" : "text-foreground")}>
        {p.name}
      </h2>
      <p className={cn("mt-3 font-serif text-4xl", p.variant === "premium" ? "text-gold" : "text-primary")}>
        {p.price}
      </p>
      <p className={cn("mt-4 text-sm leading-relaxed", p.variant === "premium" ? "text-ink-foreground/70" : "text-muted-foreground")}>
        {p.description}
      </p>

      <div className={cn("mt-6 border-t pt-5", p.variant === "premium" ? "border-ink-foreground/15" : "border-border")}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={cn(labelClass, "flex w-full items-center justify-between md:pointer-events-none", p.variant === "premium" && "text-ink-foreground/60")}
        >
          What's Included
          <ChevronDown className={cn("h-4 w-4 transition-transform md:hidden", open && "rotate-180")} />
        </button>
        <div className={cn("mt-3", open ? "block" : "hidden md:block")}>
          <CheckList items={p.features} tone={p.variant === "premium" ? "dark" : "light"} />
        </div>
      </div>

      {p.delivery ? (
        <p className={cn("mt-5 text-sm", p.variant === "premium" ? "text-ink-foreground/80" : "text-foreground/80")}>
          <span className="font-semibold">Estimated Delivery:</span> {p.delivery}
        </p>
      ) : null}
      {p.conditions ? (
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground/80">Conditions:</span> {p.conditions}
        </p>
      ) : null}

      <div className="mt-8 flex-1" />
      <a
        href={trailerEnquiry(p)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:shadow-lift",
          p.variant === "premium" || p.variant === "free"
            ? "bg-gold text-gold-foreground hover:bg-gold/85"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        {p.cta}
      </a>
    </div>
  );
}

function BookTrailerPackages() {
  const [selected, setSelected] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const text = [
      "Book Trailer Enquiry",
      `Selected package: ${get("package")}`,
      `Author name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Book title: ${get("title")}`,
      `Book genre: ${get("genre")}`,
      `Book description / Amazon link: ${get("description")}`,
      `Additional project details: ${get("details") || "—"}`,
    ].join("\n");
    window.open(`${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Book Trailer Packages"
        title="Book Trailer Packages"
        intro="Bring Your Book to Life Through Cinematic Storytelling."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <Clapperboard className="h-10 w-10 text-gold" aria-hidden="true" />
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              Your book has a story worth sharing. A professionally crafted book trailer can help introduce that
              story through compelling visuals, engaging narration, music, and cinematic storytelling.
            </p>
            <p>
              At Magahit Author Marketing, we create book trailers that help authors present their books in an
              engaging visual format and give potential readers another way to discover their work.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <PackageCard p={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Previous Work</p>
          <h2 className="display-2 mt-5 text-ink-foreground">See Our Previous Book Trailers</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            If you want to check some of our previous book trailers, click the button below to watch them.
          </p>
          <div className="mt-10 flex justify-center">
            <Cta to={TRAILER_SHOWREEL} variant="gold">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.05.88.13v-3.5a6.41 6.41 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.45-4.79V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-.63-.21z" />
              </svg>
              Watch Previous Book Trailers
            </Cta>
          </div>
        </div>
      </Section>

      <Section tone="parchment">
        <SectionHeading eyebrow="Add-ons" title="Enhance Your Book Trailer" />
        <div className="mt-10 max-w-2xl border-t border-border">
          {ADDONS.map(([name, price]) => (
            <div key={name} className="flex items-baseline justify-between gap-6 border-b border-border/70 py-4">
              <span className="text-sm text-foreground">{name}</span>
              <span className="font-serif text-lg text-primary">{price}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="trailer-enquiry">
        <SectionHeading
          eyebrow="Enquire"
          title="Request Your Book Trailer"
          intro="Tell us about your book and the package you're interested in. Submitting opens WhatsApp with your details ready to send to our team — no payment is taken here."
        />
        <form onSubmit={onSubmit} className="mt-10 border border-border bg-card p-6 shadow-editorial sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="package" className={labelClass}>Selected package<span className="ml-1 text-primary">*</span></label>
              <select id="package" name="package" required value={selected} onChange={(e) => setSelected(e.target.value)} className={inputClass}>
                <option value="" disabled>Select a package</option>
                {PACKAGES.map((p) => (
                  <option key={p.name} value={p.name}>{p.name} ({p.price})</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="name" className={labelClass}>Author's name<span className="ml-1 text-primary">*</span></label>
              <input id="name" name="name" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email address<span className="ml-1 text-primary">*</span></label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="title" className={labelClass}>Book title<span className="ml-1 text-primary">*</span></label>
              <input id="title" name="title" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="genre" className={labelClass}>Book genre<span className="ml-1 text-primary">*</span></label>
              <select id="genre" name="genre" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select an option</option>
                {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className={labelClass}>Book description or Amazon book link<span className="ml-1 text-primary">*</span></label>
              <textarea id="description" name="description" rows={3} required className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="details" className={labelClass}>Additional project details</label>
              <textarea id="details" name="details" rows={3} className={inputClass} />
            </div>
          </div>
          {selected === "Book Trailer Preview" ? (
            <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-foreground/80">
              Free preview requests are reviewed individually. Submitting a request does not automatically
              guarantee acceptance — each request must be reviewed and approved.
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-primary px-8 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lift sm:w-auto"
          >
            Send Enquiry on WhatsApp
          </button>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Free trial requests are subject to review and approval. Your final quote is confirmed after we
            review your book.
          </p>
        </form>
      </Section>
    </>
  );
}
