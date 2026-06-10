type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
        {eyebrow}
      </p>
      <h1 className="text-4xl font-semibold leading-tight text-[#fffaf0] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 text-base leading-8 text-[#cfc4b4] sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
