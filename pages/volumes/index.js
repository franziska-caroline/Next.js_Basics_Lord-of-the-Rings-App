import Link from "next/link";
import styled from "styled-components";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

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
        <title>The Lord of the Rings</title>
      </Head>
      <StyledMain>
        <StyledTitle>The Lord of the Rings</StyledTitle>
        <StyledIntro>{introduction}</StyledIntro>
        <StyledSubtitle>All Volumes</StyledSubtitle>
        <StyledList>
          {volumes.map(({ slug, title }) => (
            <StyledListItem key={slug}>
              <StyledLink href={`/volumes/${slug}`}>
                <StyledImage
                  src={`/images/${slug}.png`}
                  width={140}
                  height={230}
                  alt="The return of the king"
                />
                {title}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
        <StyledButton onClick={RandomVolume}>Random Volume</StyledButton>
      </StyledMain>
    </>
  );
}

const StyledTitle = styled.h1`
  font: var(--font-headline-1);
`;

const StyledMain = styled.main`
  color: var(--color-earth);
`;

const StyledIntro = styled.p`
  hyphens: auto;
  font: var(--font-body);
`;

const StyledSubtitle = styled.h2`
  font: var(--font-headline-2);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 80px;
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
  font: var(--font-caption);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-earth);
`;

const StyledButton = styled.button`
  background-color: var(--color-smoke);
  font: var(--font-title);
  border: none;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
