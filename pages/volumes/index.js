import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function RandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        {" "}
        <title>Lord of the Rings</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={RandomVolume}>Navigate to random Volume</button>
      </main>
    </>
  );
}
