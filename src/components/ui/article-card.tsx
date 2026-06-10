type ArticleCardProps = {
  article: {
    title: string;
    date: string;
    category: string;
    excerpt: string;
  };
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="border border-[#322a24] bg-[#15110f] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a46c]">
        {article.category}
      </p>
      <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#fff8ea]">
        {article.title}
      </h2>
      <p className="mt-3 text-sm text-[#8f806f]">{article.date}</p>
      <p className="mt-5 text-sm leading-7 text-[#cfc4b4]">
        {article.excerpt}
      </p>
    </article>
  );
}
