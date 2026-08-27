import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaBand, Section } from "@/components/site/blocks";
import { Cta } from "@/components/site/primitives";
import { BLOG_POSTS } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) return { meta: [{ title: "Article not found | Magahit" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${post.title} | Magahit Author Marketing` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | Magahit Author Marketing` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="display-2 text-foreground">Article not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">This article may have moved or been removed.</p>
        <Link to="/blog" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
          Back to blog
        </Link>
      </div>
    </Section>
  ),
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) throw notFound();

  const more = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>
          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="display-1 mt-5 text-foreground">{post.title}</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
          </p>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-2xl">
          <p className="font-serif text-xl leading-relaxed text-foreground">{post.excerpt}</p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/80">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <Cta to="/book-audit" variant="ghost" className="px-0">
              Get Your Book Audit →
            </Cta>
          </div>
        </article>
      </Section>

      <Section tone="parchment">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl text-foreground">More reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-editorial"
              >
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-3 font-serif text-lg leading-snug text-foreground">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Reading Helps. A Review of Your Book Helps More."
        body="Start with a free book audit and we'll apply this thinking to your specific title."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
      />
    </>
  );
}
