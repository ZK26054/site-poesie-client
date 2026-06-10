import Link from "next/link";
import { Container } from "@/components/ui/container";
import { featuredBooks } from "@/lib/mock-data";

export function FeaturedBooks() {
  return (
    <section className="border-y border-[#2b241f] bg-[#100d0b] py-20 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Recueils
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0] sm:text-4xl">
              Trois livres comme trois salles obscures
            </h2>
          </div>
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/recueils"
          >
            Voir tous les recueils
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredBooks.map((book) => (
            <article
              className="flex min-h-80 flex-col justify-between border border-[#322a24] bg-[#171310] p-6"
              key={book.title}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f806f]">
                  {book.accent}
                </p>
                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#fff8ea]">
                  {book.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#cfc4b4]">
                  {book.description}
                </p>
              </div>
              <p className="mt-8 text-sm text-[#c7a46c]">{book.year}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
