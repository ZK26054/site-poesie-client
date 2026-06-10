import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ui/article-card";
import { Container } from "@/components/ui/container";
import { articles } from "@/lib/mock-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} | Actualites`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((related) => related.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <article className="border-b border-[#2b241f] bg-[#0d0b0a]">
        <Container className="py-16 sm:py-24">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/actualites"
          >
            Retour aux actualites
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
                {article.category} · {article.date}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#fffaf0] sm:text-6xl">
                {article.title}
              </h1>
              <p className="mt-6 text-base leading-8 text-[#cfc4b4]">
                {article.excerpt}
              </p>
            </div>
            <div className="aspect-[4/3] border border-[#3a3028] bg-[linear-gradient(145deg,#3a2a1e,#15110f_52%,#090807)] p-5">
              <div className="flex h-full flex-col justify-end border border-[#6d5740]/35 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#c7a46c]">
                  Bloc visuel
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-[#fff8ea]">
                  {article.visualTone}
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <section className="bg-[#100d0b] py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="grid gap-7">
            {article.content.map((paragraph) => (
              <p
                className="text-lg leading-9 text-[#d8cdbc] sm:text-xl"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2b241f] bg-[#0d0b0a] py-16 sm:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Articles lies
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0]">
            Continuer le fil
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <ArticleCard article={related} key={related.slug} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
