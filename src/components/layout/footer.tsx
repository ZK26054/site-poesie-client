import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[#2b241f] bg-[#090807]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Maison d&apos;autrice
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#bdb2a3]">
            Une presence litteraire sombre, elegante et pensee comme une
            galerie intime.
          </p>
        </div>
        <nav aria-label="Navigation secondaire" className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link
              className="text-sm text-[#bdb2a3] transition-colors hover:text-[#f7d99b]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
