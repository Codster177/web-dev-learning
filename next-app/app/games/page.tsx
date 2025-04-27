import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import CenterPiece from "../components/CenterPiece/CenterPiece";
import StoryCard from "../components/StoryCards/StoryCard";

const GamesPage = () => {
  return (
    <>
      <PageWrapper>
        <CenterPiece header="Games!" buttonBool={true} buttonTxt="Random Game">
          Here are the games I have made! Feel free to try them out on itch.io!
        </CenterPiece>
      </PageWrapper>
    </>
  );
};

export default GamesPage;
