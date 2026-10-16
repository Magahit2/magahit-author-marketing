import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { Container, GoldRule, Section } from "@/components/site/primitives";
import article from "@/content/author-community.md?raw";

const PAGE_TITLE = "How to Build an Author Community: A Roadmap to 50,000 Readers";
const DESCRIPTION =
  "Learn how to build an author community, grow your email list, attract ideal readers, and create a long-term book marketing strategy that supports future releases.";
const CANONICAL = "https://magahit-author-marketing.lovable.app/how-to-build-an-author-community";

export const Route = createFileRoute("/how-to-build-an-author-community")({
  head: () => ({
    meta: [
      { title: `${PAGE_TITLE} | Magahit Author Marketing` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${PAGE_TITLE} | Magahit Author Marketing` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${PAGE_TITLE} | Magahit Author Marketing` },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: AuthorCommunityPage,
});

function inlineContent(text: string): ReactNode[] {
  const token = /(\*\*.+?\*\*|\*.+?\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g;
  const pieces = text.split(token).filter(Boolean);

  return pieces.map((piece, index) => {
    if (piece.startsWith("**") && piece.endsWith("**")) {
      return <strong key={index}>{piece.slice(2, -2)}</strong>;
    }
    if (piece.startsWith("*") && piece.endsWith("*")) {
      return <em key={index}>{piece.slice(1, -1)}</em>;
    }
    const link = piece.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) {
      return (
        <a
          key={index}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={index}>{piece}</span>;
  });
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function ReaderJourney() {
  const stages = [
    ["1. Relevant advertisement", "Introduce a reader freebie or useful resource."],
    ["2. Signup page", "Explain the offer and invite voluntary email signup."],
    ["3. Welcome email sequence", "Deliver value and introduce the author."],
    ["4. Reader community", "Invite interested subscribers to join, without pressure."],
    ["5. Ongoing relationship", "Share relevant content, book updates, and future opportunities."],
  ] as const;

  return (
    <figure className="my-8 border border-border bg-secondary/50 p-5 sm:p-7">
      <figcaption className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary">
        The reader journey
      </figcaption>
      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
        {stages.map(([title, description], index) => (
          <div key={title} className="contents">
            <div className="min-w-0 border border-border bg-card px-4 py-4 text-center">
              <p className="font-serif text-base text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
            {index < stages.length - 1 ? (
              <ArrowDown
                aria-hidden="true"
                className="mx-auto h-4 w-4 text-primary lg:rotate-[-90deg]"
              />
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

function ArticleBody() {
  const lines = article.split(/\r?\n/);
  const output: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index]?.trim() ?? "";
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("<box ")) {
      while (index < lines.length && !lines[index]?.trim().startsWith("</box>")) index += 1;
      index += 1;
      output.push(<ReaderJourney key={`journey-${index}`} />);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1]?.length ?? 1;
      const text = heading[2] ?? "";
      if (level === 1) {
        output.push(
          <h2 key={index} className="display-2 mt-0 border-b border-border pb-5 text-foreground">
            {inlineContent(text)}
          </h2>,
        );
      } else if (level === 2) {
        output.push(
          <h3 key={index} className="display-3 mb-0 mt-12 text-foreground">
            {inlineContent(text)}
          </h3>,
        );
      } else {
        output.push(
          <h4 key={index} className="mb-0 mt-8 font-serif text-xl text-foreground">
            {inlineContent(text)}
          </h4>,
        );
      }
      index += 1;
      continue;
    }

    if (line.startsWith("|") && lines[index + 1]?.includes("---")) {
      const headers = parseTableRow(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index]?.trim().startsWith("|")) {
        rows.push(parseTableRow(lines[index] ?? ""));
        index += 1;
      }
      output.push(
        <div key={`table-${index}`} className="my-6 overflow-x-auto border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="border-b border-border px-4 py-3 font-semibold">
                    {inlineContent(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="even:bg-secondary/40">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border-b border-border px-4 py-3 align-top leading-relaxed text-muted-foreground">
                      {inlineContent(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = /^\d+\.$/.test(listMatch[2] ?? "");
      const items: string[] = [];
      while (index < lines.length) {
        const current = lines[index]?.trim() ?? "";
        const currentMatch = current.match(/^([-*]|\d+\.)\s+(.+)$/);
        if (!currentMatch || /^\d+\.$/.test(currentMatch[1] ?? "") !== ordered) break;
        items.push(currentMatch[2] ?? "");
        index += 1;
      }
      const List = ordered ? "ol" : "ul";
      output.push(
        <List
          key={`list-${index}`}
          className={`my-5 space-y-2 pl-6 text-base leading-relaxed text-muted-foreground ${ordered ? "list-decimal" : "list-disc"}`}
        >
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-1">{inlineContent(item)}</li>
          ))}
        </List>,
      );
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length && lines[index]?.trim()) {
      const next = lines[index]?.trim() ?? "";
      if (/^(#{1,6})\s+/.test(next) || next.startsWith("|") || next.startsWith("<box ") || /^(\s*)([-*]|\d+\.)\s+/.test(next)) break;
      paragraphLines.push(next);
      index += 1;
    }
    output.push(
      <p key={`p-${index}`} className="my-5 text-base leading-[1.85] text-muted-foreground">
        {inlineContent(paragraphLines.join(" "))}
      </p>,
    );
  }

  return <div className="article-copy">{output}</div>;
}

function AuthorCommunityPage() {
  return (
    <>
      <section className="border-b border-border bg-parchment">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Author Community</p>
            <h1 className="display-1 mt-5 text-foreground">{PAGE_TITLE}</h1>
            <GoldRule className="mt-7" />
            <p className="mt-6 max-w-3xl font-serif text-xl italic leading-relaxed text-muted-foreground">
              A practical roadmap for building your author brand, attracting the right readers, nurturing genuine relationships, and creating a community that grows with every book.
            </p>
          </div>
        </Container>
      </section>
      <Section>
        <article className="mx-auto max-w-3xl">
          <ArticleBody />
        </article>
      </Section>
    </>
  );
}