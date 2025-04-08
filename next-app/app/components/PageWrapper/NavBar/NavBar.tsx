import React from "react";
import NavBarItem from "./NavBarItem";

const NavBarCss = "navbar fixed bg-base-100 shadow-sm -ml-4 -mt-4 z-5";

interface Props {
  websiteName?: string;
}

const NavBar = ({ websiteName = "cody-taylor.com" }: Props) => {
  const projectsList = [
    "Symptomatch",
    "Bound by the Book",
    "Time Management Calculator",
  ];
  const gamesList = [
    "Boomerang Bunnie",
    "Growing Up",
    "Floral Felines",
    "Stray Spirit",
  ];

  return (
    <div className={NavBarCss}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{websiteName}</a>
      </div>
      <NavBarItem>Home</NavBarItem>
      <NavBarItem dropDown={true} dropDownList={projectsList}>
        Projects
      </NavBarItem>
      <NavBarItem dropDown={true} dropDownList={gamesList}>
        Games
      </NavBarItem>
      <NavBarItem>Resume</NavBarItem>
      <NavBarItem>Contact</NavBarItem>
    </div>
  );
};

export default NavBar;
