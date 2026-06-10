import Link from "next/link";

type PoemCardProps = {
  poem: {
    slug?: string;
    title: string;
    origin: string;
    lines: string[];
  };
};

export function PoemCard({ poem }: PoemCardProps) {
  const card = (
    <article className="border border-[#322a24] bg-[#15110f] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a46c]">
        {poem.origin}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-[#fff8ea]">
        {poem.title}
      </h2>
      <div className="mt-8 border-l border-[#c7a46c] pl-5">
        {poem.lines.map((line) => (
          <p className="text-xl leading-loose text-[#f3eee6]" key={line}>
            {line}
          </p>
        ))}
      </div>
    </article>
  );

  if (!poem.slug) {
    return card;
  }

  return (
    <Link className="block transition-colors hover:border-[#c7a46c]" href={`/lecture/${poem.slug}`}>
      {card}
    </Link>
  );
}
