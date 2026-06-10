import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#2b241f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,164,108,0.16),transparent_32%),linear-gradient(135deg,#15100d_0%,#0d0b0a_48%,#1b1714_100%)]" />
      <Container className="relative grid min-h-[calc(100vh-5rem)] gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c7a46c]">
            Galerie litteraire
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-[#fffaf0] sm:text-6xl lg:text-7xl">
            Une oeuvre d&apos;autrice presentee comme une collection rare.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#cfc4b4]">
            Un site premium, sombre et artistique pour accueillir l&apos;univers,
            les recueils, les lectures et les traces visuelles d&apos;une voix
            litteraire.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center border border-[#c7a46c] bg-[#c7a46c] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#120f0d]"
              href="/recueils"
            >
              Voir les recueils
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center border border-[#4a4037] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#f3eee6]"
              href="/univers"
            >
              Explorer l&apos;univers
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Silence", "Encre", "Matiere", "Lumiere"].map((item, index) => (
            <div
              className="min-h-44 border border-[#3a3028] bg-[#16120f]/80 p-6 shadow-2xl shadow-black/20"
              key={item}
            >
              <span className="text-xs text-[#8f806f]">0{index + 1}</span>
              <p className="mt-16 text-2xl font-semibold text-[#fff8ea]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
