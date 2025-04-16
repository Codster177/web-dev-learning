import React from "react";
import Link from "next/link";
import NavBarItem from "./NavBarItem";
import NavBarIcon from "./NavBarIcon";

interface Props {
  websiteName?: string;
  className?: string;
}

const NavBar = ({ websiteName = "cody-taylor.com", className = "" }: Props) => {
  const projectsList = [
    "Symptomatch",
    "Time Management Calculator",
    "Bound by the Book",
  ];
  const gamesList = [
    "Boomerang Bunnie",
    "Growing Up",
    "Floral Felines",
    "Stray Spirit",
  ];

  if (className != "")
  {
    className = "navbar fixed bg-base-100 shadow-sm -ml-4 -mt-4 z-5 " + className;
  }
  else
  {
    className = "navbar fixed bg-base-100 shadow-sm -ml-4 -mt-4 z-5"
  }

  return (
    <div className={className}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl hover:animate-rainbow" href={"./"}>
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
