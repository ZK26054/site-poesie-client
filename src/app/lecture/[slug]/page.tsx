import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { books, poems } from "@/lib/mock-data";

type PoemPageProps = {
  params: Promise<{ slug: string }>;
};

function getPoem(slug: string) {
  return poems.find((poem) => poem.slug === slug);
}

export function generateStaticParams() {
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

export async function generateMetadata({
  params,
}: PoemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const poem = getPoem(slug);

  if (!poem) {
    notFound();
  }

  return {
    title: `${poem.title} | Lecture`,
    description: poem.mood,
  };
}

export default async function PoemDetailPage({ params }: PoemPageProps) {
  const { slug } = await params;
  const poem = getPoem(slug);

  if (!poem) {
    notFound();
  }

  const currentIndex = poems.findIndex((item) => item.slug === poem.slug);
  const previousPoem = currentIndex > 0 ? poems[currentIndex - 1] : undefined;
  const nextPoem =
    currentIndex < poems.length - 1 ? poems[currentIndex + 1] : undefined;
  const associatedBook = books.find((book) => book.slug === poem.bookSlug);

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(circle_at_50%_10%,rgba(199,164,108,0.16),transparent_32%),linear-gradient(145deg,#15100d,#0d0b0a_58%,#060504)] py-10 sm:py-16">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/lecture"
          >
            Retour a la lecture
          </Link>
          <div className="flex gap-4">
            {previousPoem ? (
              <Link
                className="text-sm text-[#cfc4b4] hover:text-[#f7d99b]"
                href={`/lecture/${previousPoem.slug}`}
              >
                Precedent
              </Link>
            ) : null}
            {nextPoem ? (
              <Link
                className="text-sm text-[#cfc4b4] hover:text-[#f7d99b]"
                href={`/lecture/${nextPoem.slug}`}
              >
                Suivant
              </Link>
            ) : null}
          </div>
        </div>

        <article className="mx-auto max-w-4xl border border-[#322a24] bg-[#100d0b]/82 p-7 shadow-2xl shadow-black/30 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            {poem.origin}
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-[#fffaf0] sm:text-7xl">
            {poem.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#cfc4b4]">
            {poem.mood}
          </p>

          <div className="mt-12 border-l border-[#c7a46c] pl-6 sm:pl-10">
            {poem.fullText.map((line, index) =>
              line ? (
                <p
                  className="text-2xl leading-loose text-[#fff8ea] sm:text-4xl"
                  key={`${line}-${index}`}
                >
                  {line}
                </p>
              ) : (
                <div className="h-7" key={`space-${index}`} />
              ),
            )}
          </div>

          {associatedBook ? (
            <Link
              className="mt-12 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
              href={`/recueils/${associatedBook.slug}`}
            >
              Voir le recueil associe
            </Link>
          ) : null}
        </article>
      </Container>
    </section>
  );
}
