import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookGrid } from "@/components/ui/book-grid";
import { Container } from "@/components/ui/container";
import { poems, books } from "@/lib/mock-data";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    notFound();
  }

  return {
    title: `${book.title} | Recueil`,
    description: book.summary,
  };
}

export default async function BookDetailPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBook(slug);

  if (!book) {
    notFound();
  }

  const relatedPoems = poems.filter((poem) => poem.bookSlug === book.slug);
  const suggestions = books
    .filter((suggestion) => suggestion.slug !== book.slug)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-[#2b241f] bg-[linear-gradient(135deg,#15100d,#0d0b0a_58%,#181310)] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm border border-[#4a4037] bg-[linear-gradient(145deg,#3a2a1e,#171310_52%,#090807)] p-6">
            <div className="flex aspect-[3/4] flex-col justify-between border border-[#6d5740]/35 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#c7a46c]">
                {book.publisher}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[#fff8ea]">
                {book.title}
              </h1>
              <p className="text-sm uppercase tracking-[0.22em] text-[#8f806f]">
                {book.year}
              </p>
            </div>
          </div>
          <div>
            <Link
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
              href="/recueils"
            >
              Retour aux recueils
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              {book.status}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#fffaf0] sm:text-6xl">
              {book.summary}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#cfc4b4]">
              {book.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {book.formats.map((format) => (
                <span
                  className="border border-[#3d332b] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#bdb2a3]"
                  key={format}
                >
                  {format}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-2xl font-semibold text-[#fff8ea]">
                {book.price}
              </p>
              <button
                className="h-12 border border-[#c7a46c] bg-[#c7a46c] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#120f0d]"
                type="button"
              >
                Acheter bientot disponible
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Description
            </p>
            <div className="mt-6 grid gap-5">
              {book.longDescription.map((paragraph) => (
                <p className="text-base leading-8 text-[#cfc4b4]" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <aside className="border border-[#322a24] bg-[#15110f] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Extrait
            </p>
            <div className="mt-8 border-l border-[#c7a46c] pl-6">
              {book.excerpt.map((line) => (
                <p className="text-2xl leading-loose text-[#fff8ea]" key={line}>
                  {line}
                </p>
              ))}
            </div>
            {relatedPoems.length > 0 ? (
              <Link
                className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
                href={`/lecture/${relatedPoems[0].slug}`}
              >
                Lire un texte associe
              </Link>
            ) : null}
          </aside>
        </Container>
      </section>

      <section className="border-t border-[#2b241f] bg-[#100d0b] py-16 sm:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Suggestions
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0]">
            Continuer la bibliotheque
          </h2>
          <div className="mt-10">
            <BookGrid books={suggestions} />
          </div>
        </Container>
      </section>
    </>
  );
}
