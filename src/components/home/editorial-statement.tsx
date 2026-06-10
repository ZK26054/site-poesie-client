import { Container } from "@/components/ui/container";

export function EditorialStatement() {
  return (
    <section className="border-y border-[#2b241f] bg-[#0d0b0a] py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Intention
          </p>
          <p className="mt-6 text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
            Un ecrin numerique pour une autrice: sobre, profond, lisible, avec
            assez d&apos;ombre pour laisser respirer les textes.
          </p>
        </div>
      </Container>
    </section>
  );
}
