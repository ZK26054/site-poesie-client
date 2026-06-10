import Link from "next/link";
import { Container } from "@/components/ui/container";
import { author, universePreview } from "@/lib/mock-data";

export function UniversePreview() {
  return (
    <section className="bg-[#0d0b0a] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            L&apos;autrice
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0] sm:text-4xl">
            {author.name}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#cfc4b4]">
            {author.shortBio}
          </p>
        </div>
        <div className="border-l border-[#3a3028] pl-6 sm:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Univers
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-5xl">
            {universePreview.title}
          </h3>
          <p className="mt-6 text-base leading-8 text-[#cfc4b4]">
            {universePreview.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {universePreview.fragments.map((fragment) => (
              <span
                className="border border-[#3d332b] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#bdb2a3]"
                key={fragment}
              >
                {fragment}
              </span>
            ))}
          </div>
          <Link
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/univers"
          >
            Entrer dans l&apos;univers
          </Link>
        </div>
      </Container>
    </section>
  );
}
