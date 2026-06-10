import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageIntro({ eyebrow, title, intro }: PageIntroProps) {
  return (
    <section className="border-b border-[#2b241f] bg-[linear-gradient(135deg,#15100d,#0d0b0a_58%,#181310)] py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} intro={intro} title={title} />
      </Container>
    </section>
  );
}
