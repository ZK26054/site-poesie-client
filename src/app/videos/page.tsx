import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { VideoCard } from "@/components/ui/video-card";
import { videos } from "@/lib/mock-data";

export default function VideosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Videos"
        intro="Lectures filmees, entretiens et carnets d'ecriture pourront etre rassembles ici sans plateforme complexe pour le moment."
        title="La voix d'Elise Veyrin en images."
      />
      <section className="bg-[#0d0b0a] py-16 sm:py-24">
        <Container className="grid gap-5">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </Container>
      </section>
    </>
  );
}
