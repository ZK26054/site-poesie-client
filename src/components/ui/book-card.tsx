type BookCardProps = {
  book: {
    title: string;
    year: string;
    publisher: string;
    status: string;
    description: string;
    themes: string[];
  };
};

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="flex min-h-96 flex-col justify-between border border-[#322a24] bg-[#15110f] p-6">
      <div>
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#8f806f]">
          <span>{book.status}</span>
          <span>{book.year}</span>
        </div>
        <div className="mt-8 aspect-[3/4] border border-[#4a4037] bg-[linear-gradient(145deg,#3a2a1e,#171310_52%,#090807)] p-5">
          <div className="flex h-full items-end border border-[#6d5740]/35 p-4">
            <h2 className="text-3xl font-semibold leading-tight text-[#fff8ea]">
              {book.title}
            </h2>
          </div>
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#c7a46c]">
          {book.publisher}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#cfc4b4]">
          {book.description}
        </p>
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {book.themes.map((theme) => (
          <span
            className="border border-[#3d332b] px-3 py-1.5 text-xs text-[#bdb2a3]"
            key={theme}
          >
            {theme}
          </span>
        ))}
      </div>
    </article>
  );
}
