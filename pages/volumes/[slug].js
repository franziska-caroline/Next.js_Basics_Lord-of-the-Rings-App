import Link from "next/link";
import styled from "styled-components";
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
        <StyledLink href="/volumes">〈 All Volumes</StyledLink>
      </nav>
      <main>
        <StyledTitle>{volume.title}</StyledTitle>
        <StyledDescription>{volume.description}</StyledDescription>
        <StyledBox>
          <StyledList>
            {volume.books.map((book) => {
              return (
                <StyledList key={book.title}>
                  <StyledBookOrdinal>{book.ordinal}</StyledBookOrdinal>
                  <StyledBookTitle>{book.title}</StyledBookTitle>
                </StyledList>
              );
            })}
          </StyledList>
          <Image
            src={`/images/${volume.slug}.png`}
            width={140}
            height={230}
            alt="The return of the king"
          />
        </StyledBox>
      </main>
      <StyledFooter>
        {previousVolume && (
          <StyledButtonPrev onClick={() => NavigateToSlug(previousVolume.slug)}>
            Previous Volume
            <span>〈 {previousVolume.title}</span>
          </StyledButtonPrev>
        )}
        {nextVolume && (
          <StyledButtonNext onClick={() => NavigateToSlug(nextVolume.slug)}>
            Next Volume<span>{nextVolume.title} 〉</span>
          </StyledButtonNext>
        )}
      </StyledFooter>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-earth);
`;

const StyledTitle = styled.h1`
  font: var(--font-headline-1);
`;

const StyledDescription = styled.p`
  hyphens: auto;
  font: var(--font-body);
`;

const StyledBox = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  margin-bottom: 1.5rem;
  background-color: var(--color-earth);
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 2.5rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledBookOrdinal = styled.li`
  font: var(--font-caption--italic);
  align-items: flex-start;
  color: var(--color-clouds);
  &:nth-child(1) {
    margin-top: 2rem;
  }
`;

const StyledBookTitle = styled.li`
  font: var(--font-title);
  align-items: flex-start;
  color: var(--color-clouds);
`;

const StyledFooter = styled.footer`
  margin-top: 350px;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const StyledButtonNext = styled.button`
  font: var(--font-caption--italic);
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: end;
  border: none;
  span {
    font: var(--font-caption);
  }
`;

const StyledButtonPrev = styled.button`
  font: var(--font-caption--italic);
  justify-content: start;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: none;
  span {
    font: var(--font-caption);
  }
`;
