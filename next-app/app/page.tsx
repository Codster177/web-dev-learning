// import Link from "next/link";
import NavBar from "./components/PageWrapper/NavBar/NavBar";
import CenterPiece from "./components/CenterPiece/CenterPiece";
import StoryCard from "./components/StoryCards/StoryCard";
import PageWrapper from "./components/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <CenterPiece header="Welcome!"></CenterPiece>
        <div className="divider" />
        <StoryCard
          title="About Me"
          image="https://media.licdn.com/dms/image/v2/D4D12AQFCBd_by-z9dw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706851421227?e=2147483647&v=beta&t=K_IdssydSB6cneMqKEpDC_BGVFRj73ee9ql-vD5IiRs"
          textRight={true}
        >
          I'm a student at the University of Central Florida studying Computer
          Science and I have a strong love for programming and game development.
          I am very passionate, determined, and strong willed when pursuing work
          with computer science, as I find it extremely joyous to see a project
          I've worked on come to life. I especially enjoy projects that
          challenge me creatively.
        </StoryCard>
        <StoryCard
          title="About Me"
          image="https://media.licdn.com/dms/image/v2/D4D12AQFCBd_by-z9dw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706851421227?e=2147483647&v=beta&t=K_IdssydSB6cneMqKEpDC_BGVFRj73ee9ql-vD5IiRs"
          textRight={false}
        >
          I'm a student at the University of Central Florida studying Computer
          Science and I have a strong love for programming and game development.
          I am very passionate, determined, and strong willed when pursuing work
          with computer science, as I find it extremely joyous to see a project
          I've worked on come to life. I especially enjoy projects that
          challenge me creatively.
        </StoryCard>
      </PageWrapper>
    </>
  );
}
