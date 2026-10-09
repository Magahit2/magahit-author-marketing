import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Section } from "@/components/site/blocks";
import { Cta } from "@/components/site/primitives";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/author-website")({
  head: () => ({
    meta: [
      {
        title: "5 Problems Authors Face When They Don't Have a Professional Website | Magahit Author Marketing",
      },
      {
        name: "description",
        content:
          "From scattered books to a weaker author brand — five practical problems authors face without a professional website, plus Magahit's free author website design and development offer.",
      },
      {
        property: "og:title",
        content:
          "5 Problems Authors Face When They Don't Have a Professional Website | Magahit Author Marketing",
      },
      {
        property: "og:description",
        content:
          "From scattered books to a weaker author brand — five practical problems authors face without a professional website, plus Magahit's free author website design and development offer.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://magahit-author-marketing.lovable.app/author-website",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://magahit-author-marketing.lovable.app/author-website",
      },
    ],
  }),
  component: AuthorWebsitePage,
});

type Seg = { t: string; b?: boolean };

type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "whatsapp" };

const BLOCKS: Block[] = [
  {
    kind: "h2",
    text: "A reader discovers your book, loves your writing, and wants to know more about you. But where should they go next?",
  },
  {
    kind: "p",
    text: "Let's say a reader comes across a book written by Sophia M. D., an independent female author. The book catches her attention, she reads it, and she enjoys the experience.",
  },
  { kind: "p", text: "Now she wants to know more about Sophia." },
  {
    kind: "p",
    text: "Does she have other books? What inspired her to become a writer? Is there a place where readers can explore all her published work? Does she have another book coming out soon?",
  },
  {
    kind: "p",
    text: "The reader searches for Sophia online. She finds a book listing on Amazon and perhaps a few social media posts, but there is no dedicated website where she can learn everything she wants to know about the author.",
  },
  {
    kind: "p",
    text: "She might continue searching. She might find some information elsewhere. Or she might simply move on.",
  },
  {
    kind: "p",
    text: "This does not mean Sophia has written a bad book or that the reader has lost interest in her work. It simply means that finding out more about Sophia requires extra effort.",
  },
  { kind: "p", text: "Now, think about your own situation as an author." },
  {
    kind: "p",
    text: "You have put time, thought, and creativity into writing and publishing your book. But after someone discovers your work, do you have a dedicated online place where that person can learn more about you and your books?",
  },
  {
    kind: "p",
    text: "If the answer is no, here are five challenges worth considering.",
  },

  {
    kind: "h2",
    text: "1. Readers May Struggle to Find All Your Books",
  },
  {
    kind: "p",
    text: "Suppose someone discovers one of Sophia M. D.'s books on Amazon and enjoys reading it. Naturally, she may want to explore other books by the same author.",
  },
  {
    kind: "p",
    text: "But what if Sophia has published several books and there is no central place where readers can see them all?",
  },
  {
    kind: "p",
    text: "The reader may have to search Amazon, scroll through social media posts, or try to remember where she saw Sophia's other titles mentioned.",
  },
  { kind: "p", text: "Some readers will make the effort. Others may not." },
  {
    kind: "p",
    text: "This is one of the practical challenges of not having a dedicated author website. Your books and information about them can end up scattered across different platforms, making it harder for interested readers to get a complete picture of your work.",
  },
  { kind: "p", text: "A professional author website can help bring everything together." },
  {
    kind: "p",
    text: "For example, Sophia could have a Books section featuring her published titles, their covers, short descriptions, genres, and links to the relevant purchase pages.",
  },
  {
    kind: "p",
    text: "A reader who discovers one book could then visit her website and explore her other work without having to search in several different places.",
  },
  {
    kind: "p",
    text: "The website would not guarantee that the reader purchases another book, but it would make discovering her catalogue more convenient.",
  },
  {
    kind: "strong",
    text: "Ask yourself: If someone enjoys one of your books today, how easily can that person find the rest of your work?",
  },

  {
    kind: "h2",
    text: "2. It Can Be Harder to Build a Recognizable Author Brand",
  },
  { kind: "p", text: "Publishing a book and building an author brand are two different things." },
  {
    kind: "p",
    text: "Your book introduces readers to your writing. Your author brand helps them understand who you are, what you write, and what they can expect from you.",
  },
  { kind: "p", text: "Let's return to Sophia M. D." },
  {
    kind: "p",
    text: "A reader discovers her book and becomes curious about the woman behind the story. She wants to know what inspired Sophia to write, what kinds of stories she enjoys creating, and whether she has written anything else.",
  },
  {
    kind: "p",
    text: "The reader finds a short biography on one platform and an occasional personal post on another. The information is useful, but it does not necessarily give her a complete picture of Sophia as an author.",
  },
  { kind: "p", text: "A dedicated website gives Sophia the opportunity to tell her story in her own words." },
  {
    kind: "p",
    text: "She could share her author biography, explain her writing interests, showcase her books, and introduce visitors to the ideas behind her work. She could also maintain a consistent visual identity through her website design, photographs, typography, and book covers.",
  },
  {
    kind: "p",
    text: "Over time, this can help readers develop a clearer understanding of who she is and what her author brand represents.",
  },
  {
    kind: "p",
    text: "You do not need to be a bestselling author before thinking about your brand. Whether you have published one book or ten, you can begin creating a professional online presence that reflects your work.",
  },
  {
    kind: "strong",
    text: "Your book tells a story. Your author brand helps readers get to know the person who wrote it.",
  },

  {
    kind: "h2",
    text: "3. Your Online Presence Depends Heavily on Other Platforms",
  },
  {
    kind: "p",
    text: "Amazon is useful for selling books. Facebook and Instagram can help authors connect with readers and promote new releases.",
  },
  {
    kind: "p",
    text: "These platforms have an important role to play in an author's marketing strategy.",
  },
  {
    kind: "p",
    text: "The challenge comes when they are the only places where readers can find information about you.",
  },
  { kind: "p", text: "Consider Sophia M. D. again." },
  {
    kind: "p",
    text: "She shares a post about her latest book on Facebook. A few days later, she publishes an update about her writing process. Several weeks later, she announces another project.",
  },
  {
    kind: "p",
    text: "Someone who discovers Sophia months afterward may have to scroll through numerous posts to find those updates.",
  },
  {
    kind: "p",
    text: "The way her content is displayed, how easily people discover it, and which features are available also depend on the platforms she uses.",
  },
  {
    kind: "p",
    text: "An author website provides another option. Sophia could create a dedicated online destination that she can link to from her social media profiles, book descriptions, email signature, and promotional materials.",
  },
  {
    kind: "p",
    text: "Instead of expecting readers to piece together information from different places, she can direct them to one website containing her biography, books, and other relevant details.",
  },
  { kind: "p", text: "This does not mean abandoning Amazon or social media. In fact, they can work together." },
  {
    kind: "p",
    text: "Social media can introduce new people to your work. Amazon and other retailers can provide places to purchase your books. Your website can connect these different parts of your author presence.",
  },
  {
    kind: "strong",
    text: "The goal is not to replace the platforms that help you reach readers. It is to give your author brand a dedicated home of its own.",
  },

  { kind: "h2", text: "4. You Have Limited Space to Showcase Your Work" },
  {
    kind: "p",
    text: "As an author, there may be more to your story than a book cover and a short biography.",
  },
  {
    kind: "p",
    text: "You might want to introduce yourself, display several books, explain what each book is about, share relevant reviews, announce upcoming releases, or provide information about your events.",
  },
  { kind: "p", text: "Trying to fit everything into a social media profile can be difficult." },
  {
    kind: "p",
    text: "Imagine Sophia M. D. has several published books and wants readers to learn about each one. She also wants to share her writing journey and give visitors an easy way to find her books online.",
  },
  {
    kind: "p",
    text: "On social media, she can publish posts about these things, but each post occupies its own place in the feed. Newer posts gradually push older ones out of view.",
  },
  { kind: "p", text: "On a professional author website, she can organize the information into clear sections." },
  {
    kind: "p",
    text: "A visitor might arrive at her homepage and see a brief introduction to Sophia. From there, the visitor could open her About the Author page, explore her book collection, read descriptions, and follow the purchase links for the titles that interest her.",
  },
  {
    kind: "p",
    text: "If appropriate for her goals, Sophia could also include a contact page, upcoming events, or a newsletter sign-up.",
  },
  {
    kind: "p",
    text: "The important thing is that visitors would have a more organized way to explore her work.",
  },
  {
    kind: "p",
    text: "Your website does not need dozens of pages to achieve this. It should include the information that matters most to your readers and suit your needs as an author.",
  },
  {
    kind: "strong",
    text: "You have worked hard on your books. Your online presence should make it easy for interested readers to explore them.",
  },

  {
    kind: "h2",
    text: "5. It Can Be Harder to Build Lasting Connections With Readers",
  },
  {
    kind: "p",
    text: "Have you ever seen an interesting social media post, planned to return to it later, and then struggled to find it again?",
  },
  { kind: "p", text: "Readers experience the same thing." },
  {
    kind: "p",
    text: "Someone might enjoy a book by Sophia M. D. and want to follow her writing journey. Perhaps she wants to hear about Sophia's next release, learn about an upcoming event, or receive occasional updates about her work.",
  },
  {
    kind: "p",
    text: "If Sophia relies entirely on social media posts, that reader may have to keep checking her profiles and hope the relevant updates appear in the feed.",
  },
  { kind: "p", text: "A professional website can give Sophia a more consistent place to direct interested readers." },
  {
    kind: "p",
    text: "For example, if she runs a newsletter, she could include a sign-up form on her website. If she participates in literary events, she could publish relevant event information. She could also provide a contact option for readers who want to get in touch.",
  },
  {
    kind: "p",
    text: "These features give readers different ways to stay connected, depending on what Sophia chooses to offer.",
  },
  {
    kind: "p",
    text: "Of course, having a website does not automatically create a loyal readership. Sophia would still need to share useful updates, write books her readers enjoy, and make an effort to communicate with her audience.",
  },
  { kind: "p", text: "But a website can provide a useful foundation for those relationships." },
  {
    kind: "strong",
    text: "Readers who want to follow your journey should have a convenient way to find you again.",
  },

  { kind: "h2", text: "So, What Can an Author Website Actually Do for You?" },
  { kind: "p", text: "Let's bring everything together." },
  {
    kind: "p",
    text: "A professional author website gives you a dedicated place to present your work and introduce yourself to readers.",
  },
  { kind: "p", text: "It can help you:" },
  {
    kind: "ul",
    items: [
      "Bring your published books together in one place.",
      "Tell your story through a professional author biography.",
      "Present a consistent author brand.",
      "Direct readers to the right places to purchase your books.",
      "Share relevant news, events, and upcoming releases.",
      "Give interested readers ways to contact you or join your newsletter.",
    ],
  },
  {
    kind: "p",
    text: "Think about Sophia M. D. and the reader who discovered her book at the beginning of this article.",
  },
  {
    kind: "p",
    text: "With a well-organized author website, that reader could learn more about Sophia, browse her other books, read about her writing journey, and find the appropriate purchase links.",
  },
  {
    kind: "p",
    text: "The website would not guarantee a sale or make Sophia successful overnight. It would simply give her a better organized online space to present her work and help interested readers discover more about her.",
  },
  { kind: "p", text: "That is the value of having your own professional author website." },
  {
    kind: "p",
    text: "And you do not have to wait until you have published ten books, signed a major publishing deal, or built a huge social media following before considering one.",
  },
  {
    kind: "p",
    text: "If you have published a book and want to establish your online presence, you can start planning for it now.",
  },

  {
    kind: "h2",
    text: "What If You Could Get a Complete Author Website Without Paying for the Design and Development?",
  },
  {
    kind: "p",
    text: "At Magahit Author Marketing, we understand that many independent authors want a professional website but may be unsure how to get started or what it will cost to have one built.",
  },
  {
    kind: "p",
    text: "That is why we are offering eligible authors a **complete custom author website with free website design and development**.",
  },
  {
    kind: "p",
    text: "The website can be designed around your author brand, your published books, and the information you want readers to discover.",
  },
  {
    kind: "p",
    text: "The offer also includes **two months of free technical support and hosting management** to help you get started.",
  },
  { kind: "p", text: "There is one important detail we want to make clear." },
  {
    kind: "p",
    text: "Although the website design and development are free under this offer, you will be responsible for paying the costs of your website domain, web hosting, and SSL certificate. These are the services needed to establish your website address, host your website online, and enable a secure HTTPS connection.",
  },
  {
    kind: "p",
    text: "We will explain the relevant costs and arrangements before proceeding, so you can understand what you are agreeing to.",
  },
  {
    kind: "p",
    text: "The two months of technical support and hosting management are included at no charge. Any arrangements or costs after those two months will be discussed with you clearly in advance.",
  },
  {
    kind: "p",
    text: "Our goal is to help authors establish a professional online home for their work without charging them for the website design and development covered by this offer.",
  },

  { kind: "h2", text: "What Could Your Own Author Website Look Like?" },
  { kind: "p", text: "Let's use Sophia M. D. as an example one last time." },
  {
    kind: "p",
    text: "If Sophia decided to establish her online presence, her website could feature a homepage introducing her to visitors, an About the Author section sharing her writing journey, and a Books section displaying her published titles.",
  },
  {
    kind: "p",
    text: "Each book could have its own description and a link directing readers to the appropriate place to purchase it.",
  },
  {
    kind: "p",
    text: "Depending on her needs, she could also have a contact page and a way for readers to sign up for future updates.",
  },
  { kind: "p", text: "The result would be a dedicated place where readers could discover Sophia and explore her work." },
  {
    kind: "p",
    text: "Your website would be planned around your own books, author identity, and goals. The exact pages and features would depend on the agreed scope of the project.",
  },
  {
    kind: "p",
    text: "You have already put effort into creating your books. Building an online presence is one way to help people discover the work you have created.",
  },

  {
    kind: "h2",
    text: "Have You Published a Book but Still Don't Have a Website?",
  },
  { kind: "p", text: "You do not need to figure everything out alone." },
  {
    kind: "p",
    text: "If you are an author without a professional website and want to learn more about our free website design and development offer, we would love to hear from you.",
  },
  { kind: "whatsapp" },
  {
    kind: "p",
    text: "We will explain how the offer works, discuss your author website needs, and clarify the costs of the domain, web hosting, and SSL certificate before you decide whether to proceed.",
  },
  {
    kind: "p",
    text: "Your books deserve to be discovered, and your author journey deserves a professional place online.",
  },
  { kind: "strong", text: "Magahit Author Marketing" },
  {
    kind: "p",
    text: "Helping authors turn great books into discoverable brands.",
  },
];

function renderInline(text: string): Seg[] {
  const parts = text.split("**");
  return parts.map((t, i) => ({ t, b: i % 2 === 1 }));
}

function Paragraph({ text }: { text: string }) {
  const segs = renderInline(text);
  return (
    <p>
      {segs.map((s, i) => (s.b ? <strong key={i} className="font-semibold text-foreground">{s.t}</strong> : <span key={i}>{s.t}</span>))}
    </p>
  );
}

function AuthorWebsitePage() {
  return (
    <>
      <section className="border-b border-border bg-parchment">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Author Websites</p>
          <h1 className="display-1 mt-5 text-foreground">
            5 Problems Authors Face When They Don't Have a Professional Website
          </h1>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-foreground/80">
          {BLOCKS.map((block, i) => {
            if (block.kind === "h2") {
              return (
                <h2 key={i} className="!mt-16 font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "strong") {
              return (
                <p key={i} className="!my-10 border-l-2 border-gold pl-5 font-serif text-lg leading-relaxed text-foreground">
                  {block.text}
                </p>
              );
            }
            if (block.kind === "ul") {
              return (
                <ul key={i} className="space-y-3 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.kind === "whatsapp") {
              return (
                <a
                  key={i}
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!my-10 block rounded-sm border border-primary/30 bg-primary/5 p-6 text-center transition-colors hover:border-primary/60"
                >
                  <span className="font-serif text-lg leading-relaxed text-foreground">
                    Send Magahit Author Marketing a message on WhatsApp with the word{" "}
                    <span className="text-primary">“WEBSITE”</span>.
                  </span>
                </a>
              );
            }
            return <Paragraph key={i} text={block.text} />;
          })}

          <div className="mt-12 border-t border-border pt-8">
            <Cta to="/book-audit" variant="ghost" className="px-0">
              Get Your Book Audit →
            </Cta>
          </div>
        </article>
      </Section>

      <CtaBand
        title="The Book Is Written. Now Let's Build the Path to Its Readers."
        body="Start with a free book audit and we'll apply this thinking to your specific title."
        primary={{ label: "Get Your Book Audit", to: "/book-audit" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />

      <Section tone="parchment">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl text-foreground">More reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { slug: "how-to-build-an-author-brand", title: "How to Build an Author Brand" },
              { slug: "how-authors-build-an-email-list", title: "How Authors Can Build an Email List" },
              { slug: "book-marketing-mistakes", title: "7 Book Marketing Mistakes Authors Make" },
            ].map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-editorial"
              >
                <p className="eyebrow">From the blog</p>
                <h3 className="mt-3 font-serif text-lg leading-snug text-foreground">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
