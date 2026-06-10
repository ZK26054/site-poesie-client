import { Container } from "@/components/ui/container";
import { mainQuote } from "@/lib/mock-data";

export function AnimatedQuote() {
  return (
    <section className="border-b border-[#2b241f] bg-[#100d0b] py-16 sm:py-20">
      <Container>
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-5xl">
            &ldquo;{mainQuote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a46c]">
            {mainQuote.source}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
