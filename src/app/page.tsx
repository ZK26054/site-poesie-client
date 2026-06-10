import {
  AnimatedQuote,
  ContactCTA,
  FeaturedBooks,
  FeaturedVideo,
  GalleryPreview,
  HeroImmersive,
  PoemPreview,
  UniversePreview,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroImmersive />
      <AnimatedQuote />
      <UniversePreview />
      <FeaturedBooks />
      <PoemPreview />
      <GalleryPreview />
      <FeaturedVideo />
      <ContactCTA />
    </>
  );
}
