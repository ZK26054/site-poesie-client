import { ArticleCard } from "@/components/ui/article-card";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { articles } from "@/lib/mock-data";

export default function ActualitesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Actualites"
        intro="Un fil editorial pour les rencontres, parutions, residences et nouvelles de l'autrice, en attendant une future source de contenu."
        title="Publications, lectures et rendez-vous litteraires."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.title} />
          ))}
        </Container>
      </section>
    </>
  );
}
