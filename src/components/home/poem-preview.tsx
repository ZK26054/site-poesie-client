import Link from "next/link";
import { Container } from "@/components/ui/container";
import { poemPreview } from "@/lib/mock-data";

export function PoemPreview() {
  return (
    <section className="bg-[#0d0b0a] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Extrait poetique
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0] sm:text-4xl">
            {poemPreview.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#cfc4b4]">
            {poemPreview.note}
          </p>
          <Link
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/lecture"
          >
            Rejoindre la salle de lecture
          </Link>
        </div>
        <div className="border border-[#3a3028] bg-[#15110f] p-7 sm:p-10">
          <div className="border-l border-[#c7a46c] pl-6">
            {poemPreview.poem.map((line) => (
              <p
                className="text-2xl leading-loose text-[#fff8ea] sm:text-3xl"
                key={line}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
