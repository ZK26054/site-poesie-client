import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { universePage } from "@/lib/mock-data";

export default function UniversPage() {
  return (
    <>
      <PageIntro
        eyebrow={universePage.eyebrow}
        intro={universePage.intro}
        title={universePage.title}
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {universePage.pillars.map((pillar) => (
              <article
                className="min-h-64 border border-[#322a24] bg-[#15110f] p-6 sm:p-8"
                key={pillar.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a46c]">
                  Motif
                </p>
                <h2 className="mt-6 text-3xl font-semibold text-[#fff8ea]">
                  {pillar.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#cfc4b4]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-[#2b241f] bg-[#100d0b] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
                Carnet d&apos;atelier
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#fffaf0]">
                Une methode par retrait
              </h2>
            </div>
            <div className="grid gap-4">
              {universePage.studioNotes.map((note) => (
                <p
                  className="border-l border-[#c7a46c] bg-[#15110f] py-4 pl-5 text-base leading-8 text-[#d8cdbc]"
                  key={note}
                >
                  {note}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
