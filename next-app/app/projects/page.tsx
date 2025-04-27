import React from "react";
import CenterPiece from "../components/CenterPiece/CenterPiece";
import NavBar from "../components/PageWrapper/NavBar/NavBar";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import StoryCard from "../components/StoryCards/StoryCard";

const ProjectsPage = () => {
  return (
    <>
      <PageWrapper>
        <CenterPiece
          header="Projects!"
          buttonBool={true}
          buttonTxt="Random Project"
        >
          Heres the projects that I like to work on in my spare time. Click here
          to learn about one of them.
        </CenterPiece>
        <StoryCard title="This website!" link="https://github.com/Codster177/web-dev-learning" linkText="See Project">
          This site is my most recent project. It is made using the next.js framework and utilizing the react library. 
          To find out more about it, click the link to find its github repo!
        </StoryCard>
        <StoryCard title="D&D Helper Project" link="https://github.com/Codster177/dnd-helper-project" linkText="See Project">
          A passion project I have been experimenting with since July of 2024. It is a C++ application made with the Qt
          framework. It can roll dice and keep track of the rolls, and it has generators to come up with ideas for scenarios
          instantly. It has taught me a lot about the Qt framework on both the developer and designer sides of the software.
          Go check it out!
        </StoryCard>
        <StoryCard title="Time Management Calculator" link="https://github.com/Codster177/TimeManagementCalc" linkText="See Project">
          This is a project I completed for my previous position at the S.I.M. Lab. The goal of the project is to allow students
          input the time they have allocated for specific activities and allow them to plan the rest of their time accordingly.
          It taught me much more about using HTML, CSS, and Javascript.
        </StoryCard>
        <StoryCard title="Skill Game Project" link="https://github.com/Codster177/skill-game-1" linkText="See Project">
          The skill game project is a simple game that allowed for me to explore multiplayer networking in Unity. Although the
          gameplay was simple, this project taught me about lobbying and client-server interaction in the Unity Engine, and it
          taught me a lot about using AWS for server hosting.
        </StoryCard>
      </PageWrapper>
    </>
  );
};

export default ProjectsPage;
