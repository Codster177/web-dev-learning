// import Link from "next/link";
import NavBar from "./components/PageWrapper/NavBar/NavBar";
import CenterPiece from "./components/CenterPiece/CenterPiece";
import StoryCard from "./components/StoryCards/StoryCard";
import PageWrapper from "./components/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <CenterPiece header="Welcome!">
          Venture below to find out more about me!
        </CenterPiece>
        <div className="divider" />
        <StoryCard
          title="About Me"
          image="/Pictures/Disney Photo.jpg"
          textRight={true}
        >
          I'm a currently a junior at the University of Central Florida studying
          Computer Science. I have strong interests in full stack development,
          software engineering, machine learning, and game development. I
          absolutely love seeing a project come together.
        </StoryCard>
      </PageWrapper>
    </>
  );
}
