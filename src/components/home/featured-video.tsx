import Link from "next/link";
import { Container } from "@/components/ui/container";
import { featuredVideo } from "@/lib/mock-data";

export function FeaturedVideo() {
  return (
    <section className="bg-[#0d0b0a] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="aspect-video border border-[#3a3028] bg-[radial-gradient(circle_at_center,rgba(199,164,108,0.16),transparent_30%),linear-gradient(145deg,#211711,#080706)] p-5">
          <div className="flex h-full items-center justify-center border border-[#6d5740]/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c7a46c] bg-[#0d0b0a]/60 text-[#f7d99b]">
              <span className="ml-1 text-3xl" aria-hidden="true">
                ▶
              </span>
              <span className="sr-only">Lire la video</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c7a46c]">
            Video mise en avant
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#fffaf0] sm:text-4xl">
            {featuredVideo.title}
          </h2>
          <p className="mt-3 text-sm text-[#8f806f]">{featuredVideo.duration}</p>
          <p className="mt-6 text-base leading-8 text-[#cfc4b4]">
            {featuredVideo.description}
          </p>
          <Link
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d99b]"
            href="/videos"
          >
            Voir les videos
          </Link>
        </div>
      </Container>
    </section>
  );
}
