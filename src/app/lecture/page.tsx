import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { PoemCard } from "@/components/ui/poem-card";
import { poems } from "@/lib/mock-data";

export default function LecturePage() {
  return (
    <>
      <PageIntro
        eyebrow="Lecture"
        intro="Une salle calme pour approcher les textes par fragments, sans effet de scene, avec le souffle et le blanc comme guides."
        title="Extraits poetiques, carnets de voix et premiers fragments."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container className="grid gap-5 lg:grid-cols-3">
          {poems.map((poem) => (
            <PoemCard key={poem.title} poem={poem} />
          ))}
        </Container>
      </section>
    </>
  );
}
