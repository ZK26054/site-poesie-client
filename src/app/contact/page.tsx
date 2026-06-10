import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { contactInfo } from "@/lib/mock-data";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        intro="Un espace de correspondance pour lectures, presse, festivals, librairies et projets editoriaux."
        title="Ecrire a la maison d'autrice."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border border-[#322a24] bg-[#15110f] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a46c]">
              Coordonnees
            </p>
            <h2 className="mt-6 text-3xl font-semibold text-[#fff8ea]">
              {contactInfo.agent}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#cfc4b4]">
              {contactInfo.note}
            </p>
            <a
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </a>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
