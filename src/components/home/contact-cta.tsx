import Link from "next/link";
import { Container } from "@/components/ui/container";
import { contactCta } from "@/lib/mock-data";

export function ContactCTA() {
  return (
    <section className="border-t border-[#2b241f] bg-[#100d0b] py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 border border-[#3a3028] bg-[#15110f] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
              Correspondance
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
              {contactCta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#cfc4b4]">
              {contactCta.text}
            </p>
          </div>
          <Link
            className="inline-flex h-12 items-center justify-center border border-[#c7a46c] bg-[#c7a46c] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#120f0d]"
            href="/contact"
          >
            Ecrire
          </Link>
        </div>
      </Container>
    </section>
  );
}
