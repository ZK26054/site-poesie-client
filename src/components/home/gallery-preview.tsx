import Link from "next/link";
import { Container } from "@/components/ui/container";
import { galleryItems } from "@/lib/mock-data";

export function GalleryPreview() {
  return (
    <section className="border-y border-[#2b241f] bg-[#100d0b] py-20 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Galerie
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0] sm:text-4xl">
              Fragments visuels de l&apos;atelier
            </h2>
          </div>
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/galerie"
          >
            Ouvrir la galerie
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              className="min-h-72 border border-[#322a24] bg-[linear-gradient(145deg,#2b2018,#15110f_52%,#090807)] p-5"
              key={item.title}
            >
              <div className="flex h-full flex-col justify-between border border-[#6d5740]/35 p-4">
                <span className="text-xs text-[#8f806f]">0{index + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#c7a46c]">
                    {item.tone}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#fff8ea]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
