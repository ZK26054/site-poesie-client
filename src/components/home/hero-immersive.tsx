import Link from "next/link";
import { Container } from "@/components/ui/container";
import { author, homeHero } from "@/lib/mock-data";

export function HeroImmersive() {
  return (
    <section className="relative overflow-hidden border-b border-[#2b241f] bg-[#0d0b0a]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,11,10,0.86),rgba(13,11,10,0.54)),radial-gradient(circle_at_22%_18%,rgba(199,164,108,0.22),transparent_30%),linear-gradient(160deg,#211711_0%,#0d0b0a_54%,#1a1512_100%)]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c7a46c]/60 to-transparent" />
      <Container className="relative grid min-h-[calc(100vh-5rem)] gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c7a46c]">
            {homeHero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-[#fffaf0] sm:text-6xl lg:text-7xl">
            {homeHero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8cdbc]">
            {homeHero.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center border border-[#c7a46c] bg-[#c7a46c] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#120f0d]"
              href="/recueils"
            >
              Decouvrir les recueils
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center border border-[#4a4037] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#f3eee6]"
              href="/lecture"
            >
              Ecouter une lecture
            </Link>
          </div>
        </div>

        <aside className="border border-[#3a3028] bg-[#15110f]/82 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
          <div className="aspect-[4/5] border border-[#4a4037] bg-[linear-gradient(145deg,#35281e,#15110f_48%,#080706)] p-5">
            <div className="flex h-full flex-col justify-end border border-[#6d5740]/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c7a46c]">
                Portrait litteraire
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#fff8ea]">
                {author.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#cfc4b4]">
                {author.role} entre {author.location}.
              </p>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
