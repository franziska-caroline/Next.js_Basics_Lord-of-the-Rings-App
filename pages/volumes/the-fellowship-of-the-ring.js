import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volume1() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <nav>
        {" "}
        <Link href="/volumes">Back</Link>
      </nav>
      <main>
        <Link href="/volumes">Back</Link>
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
        <Image
          src={book.cover}
          width={140}
          height={230}
          alt="The fellowship of the Ring"
        />
      </main>
    </>
  );
}
