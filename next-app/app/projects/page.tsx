import React from "react";
import CenterPiece from "../components/CenterPiece/CenterPiece";
import NavBar from "../components/PageWrapper/NavBar/NavBar";
import PageWrapper from "../components/PageWrapper/PageWrapper";

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
      </PageWrapper>
    </>
  );
};

export default ProjectsPage;
