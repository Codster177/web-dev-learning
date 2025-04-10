import React from "react";
import Link from "next/link";
import NavBarItem from "./NavBarItem";
import NavBarIcon from "./NavBarIcon";

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
        <Link className="btn btn-ghost text-xl" href={"./"}>
          {websiteName}
        </Link>
      </div>
      <div role="tablist" className="tabs">
        <NavBarItem linkString="./">Home</NavBarItem>
        <NavBarItem dropDownList={projectsList} linkString="/projects">
          Projects
        </NavBarItem>
        <NavBarItem dropDownList={gamesList} linkString="/games">
          Games
        </NavBarItem>
        {/* <NavBarItem>Resume</NavBarItem> */}
        <NavBarItem linkString="/contact">Contact</NavBarItem>
        <div className="divider divider-horizontal" />
        <NavBarIcon
          icon="/Icons/LinkedIn_Icon.svg/"
          linkString="https://www.linkedin.com/in/cody-taylor-36a6aa24b/"
        ></NavBarIcon>
        <NavBarIcon
          icon="/Icons/Itch-Icon.svg/"
          linkString="https://codster177.itch.io/"
        ></NavBarIcon>
        <NavBarIcon
          icon="/Icons/Github-Icon.svg/"
          linkString="https://github.com/Codster177"
        ></NavBarIcon>
      </div>
    </div>
  );
};

export default NavBar;
