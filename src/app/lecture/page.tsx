import { EditorialPage } from "@/components/ui/editorial-page";
import { editorialPages } from "@/lib/pages";

export default function LecturePage() {
  return <EditorialPage page={editorialPages.lecture} />;
}
