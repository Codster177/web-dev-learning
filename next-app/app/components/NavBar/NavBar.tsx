import React from 'react'
import NavBarItem from './NavBarItem';

const NavBarCss = "navbar bg-base-100 shadow-sm";

interface Props{
    websiteName: string;
}

const NavBar = (props: Props) => {
    let projectsList = ["Symptomatch", "Bound by the Book", "Time Management Calculator"]
    let gamesList = ["Boomerang Bunnie", "Growing Up", "Floral Felines", "Stray Spirit"]

    return (
    <div className={NavBarCss}>
        <div className = "flex-1">
            <a className = "btn btn-ghost text-xl">{props.websiteName}</a>
        </div>
        <NavBarItem>Home</NavBarItem>
        <NavBarItem dropDown={true} dropDownList={projectsList}>Projects</NavBarItem>
        <NavBarItem dropDown={true} dropDownList={gamesList}>Games</NavBarItem>
        <NavBarItem>Resume</NavBarItem>
        <NavBarItem>Contact</NavBarItem>
    </div>
  )
}

export default NavBar