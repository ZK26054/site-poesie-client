type VideoCardProps = {
  video: {
    title: string;
    duration: string;
    type: string;
    description: string;
  };
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="grid gap-6 border border-[#322a24] bg-[#15110f] p-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div className="aspect-video border border-[#4a4037] bg-[radial-gradient(circle_at_center,rgba(199,164,108,0.18),transparent_32%),linear-gradient(145deg,#2b2018,#080706)] p-4">
        <div className="flex h-full items-center justify-center border border-[#6d5740]/35">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c7a46c] text-[#f7d99b]">
            <span className="ml-0.5 text-xl" aria-hidden="true">
              ▶
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a46c]">
          {video.type} · {video.duration}
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-[#fff8ea]">
          {video.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#cfc4b4]">
          {video.description}
        </p>
      </div>
    </article>
  );
}
