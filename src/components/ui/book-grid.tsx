import { BookCard } from "@/components/ui/book-card";

type BookGridProps = {
  books: Parameters<typeof BookCard>[0]["book"][];
};

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard book={book} key={book.title} />
      ))}
    </div>
  );
}
