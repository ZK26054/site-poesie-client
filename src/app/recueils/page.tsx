import { BookGrid } from "@/components/ui/book-grid";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { books } from "@/lib/mock-data";

export default function RecueilsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Recueils"
        intro="Une bibliotheque mockee mais credible pour presenter les livres publies, les projets en cours et les motifs majeurs de l'autrice."
        title="Les livres d'Elise Veyrin, entre marees, vitres froides et objets patients."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container>
          <BookGrid books={books} />
        </Container>
      </section>
    </>
  );
}
