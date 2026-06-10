type GalleryGridProps = {
  items: {
    title: string;
    category: string;
    caption: string;
  }[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          className="min-h-80 border border-[#322a24] bg-[linear-gradient(145deg,#2b2018,#15110f_52%,#090807)] p-5"
          key={item.title}
        >
          <div className="flex h-full flex-col justify-between border border-[#6d5740]/35 p-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#8f806f]">
              <span>{item.category}</span>
              <span>0{index + 1}</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-[#fff8ea]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#cfc4b4]">
                {item.caption}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
