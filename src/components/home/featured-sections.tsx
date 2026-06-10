import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/navigation";

export function FeaturedSections() {
  return (
    <section className="bg-[#100d0b] py-20">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Parcours
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0] sm:text-4xl">
              Les salles de la maison
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#bdb2a3]">
            Une architecture simple, extensible et sans CMS, prete pour les
            prochains sprints editoriaux.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {navItems.slice(0, 6).map((item) => (
            <Link
              className="min-h-44 border border-[#322a24] bg-[#171310] p-6 transition-colors hover:border-[#c7a46c]"
              href={item.href}
              key={item.href}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f806f]">
                Espace
              </span>
              <h3 className="mt-10 text-2xl font-semibold text-[#fff8ea]">
                {item.label}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
