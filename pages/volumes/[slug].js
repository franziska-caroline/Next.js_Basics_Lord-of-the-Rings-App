import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return <h2>Not Found!</h2>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        {" "}
        <Link href="/volumes"> ← Back to all Volumes</Link>
      </nav>
      <main>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book) => (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>
        <Image
          src={`/images/${volume.slug}.png`}
          width={140}
          height={230}
          alt="The return of the king"
        />
      </main>
    </>
  );
}
