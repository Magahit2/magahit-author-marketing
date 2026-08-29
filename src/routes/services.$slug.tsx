import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CheckList, CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { getCategory, getService, relatedServices } from "@/content/services";
import manuscript from "@/assets/manuscript.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service, category: getCategory(service.categoryId) ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service Not Found | Magahit Author Marketing" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | Magahit Author Marketing`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${service.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Not found"
        title="We couldn't find that service"
        intro="It may have been renamed. Browse the full services catalogue to find what your book needs."
      />
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary"
      >
        All Services
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Section>
  );
}

function ServiceDetail() {
  const { service, category } = Route.useLoaderData();
  const related = relatedServices(service.related);

  return (
    <>
      <PageHero
        eyebrow={category ? category.label : "Services"}
        title={service.name}
        intro={service.summary}
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "All Services", to: "/services" }}
        image={manuscript}
        imageAlt="An open manuscript and pen on a writing desk"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="The problem" title="Why This Work Matters" intro={service.problem} />
            <div className="mt-12">
              <p className="eyebrow">What we do</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.whatWeDo}</p>
            </div>
            <div className="mt-12">
              <p className="eyebrow">Our process</p>
              <ol className="mt-6 space-y-6">
                {service.process.map((step, i) => (
                  <Reveal key={step} delay={i * 50}>
                    <li className="flex gap-5 border-t border-gold/50 pt-5">
                      <span className="font-serif text-2xl text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-10">
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">What you receive</p>
              <div className="mt-5">
                <CheckList items={service.deliverables} />
              </div>
            </div>
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Best for</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.bestFor}</p>
            </div>
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Strategic benefits</p>
              <div className="mt-5">
                <CheckList items={service.benefits} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length ? (
        <Section tone="parchment">
          <SectionHeading
            eyebrow="Works well with"
            title="Related Services"
            intro="These services compound when combined — each one strengthens the outcome of the others."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60} className="h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group flex h-full flex-col border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
                >
                  <h3 className="font-serif text-lg text-foreground">{r.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {r.summary.length > 120 ? `${r.summary.slice(0, 120)}…` : r.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Explore Service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        title="Not Sure What Your Book Needs? Start With a Book Audit."
        body="We'll review your positioning, listing, and audience opportunities, then recommend only the services that will move the needle for this book."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
      />
    </>
  );
}
