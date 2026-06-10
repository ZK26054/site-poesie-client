import { Container } from "@/components/ui/container";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { PageIntro } from "@/components/ui/page-intro";
import { gallery } from "@/lib/mock-data";

export default function GaleriePage() {
  return (
    <>
      <PageIntro
        eyebrow="Galerie"
        intro="Un accrochage visuel pour donner corps aux carnets, couvertures, lieux de lecture et archives qui entourent l'oeuvre."
        title="Images d'atelier, de scene et de memoire."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container>
          <GalleryGrid items={gallery} />
        </Container>
      </section>
    </>
  );
}
