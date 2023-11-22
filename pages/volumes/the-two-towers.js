import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volume2() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <nav>
        {" "}
        <Link href="/volumes">Back</Link>
      </nav>
      <main>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        {book.books.map((book) => {
          return (
            <ul key={book.title}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </ul>
          );
        })}
        <Image src={book.cover} width={140} height={230} alt="The two towers" />
      </main>
    </>
  );
}
