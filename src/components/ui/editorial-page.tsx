import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { EditorialPage as EditorialPageType } from "@/types/page";

type EditorialPageProps = {
  page: EditorialPageType;
};

export function EditorialPage({ page }: EditorialPageProps) {
  return (
    <section className="bg-[#0d0b0a] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={page.eyebrow}
          intro={page.intro}
          title={page.title}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {page.details.map((detail) => (
            <article
              className="min-h-48 border border-[#322a24] bg-[#15110f] p-6"
              key={detail}
            >
              <p className="text-sm leading-7 text-[#cfc4b4]">{detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
