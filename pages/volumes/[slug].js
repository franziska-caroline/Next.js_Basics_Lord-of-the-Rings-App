import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);

  const currentIndex = volumes.indexOf(volume);
  const nextVolume = volumes.at(currentIndex + 1);
  const previousVolume = currentIndex > 0 ? volumes.at(currentIndex - 1) : null;

  function NavigateToSlug(targetSlug) {
    router.push(`/volumes/${targetSlug}`);
  }

  if (!volume) {
    return <h2>Not Found!</h2>;
  }

  return (
    <>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <nav>
        {" "}
        <Link href="/volumes">← All Volumes</Link>
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
        {nextVolume && (
          <button onClick={() => NavigateToSlug(nextVolume.slug)}>Next</button>
        )}
        {previousVolume && (
          <button onClick={() => NavigateToSlug(previousVolume.slug)}>
            Previous
          </button>
        )}
      </main>
    </>
  );
}
