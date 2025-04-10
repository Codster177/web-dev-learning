import React from "react";
import NavBarIcon from "../NavBar/NavBarIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Link href="./">
          <h1 className="footer-title link link-hover pt-10">
            cody-taylor.com
          </h1>
        </Link>
        <a className="link link-hover">Resume</a>
        <Link href="/contact">
          <p className="link link-hover">Contact</p>
        </Link>
      </aside>
      <nav>
        <Link href="/projects">
          <h2 className="footer-title link link-hover pt-10">Projects</h2>
        </Link>
        <a className="link link-hover">Time Management Project</a>
        <a className="link link-hover">D&D Project</a>
        <a className="link link-hover">Symptomatch</a>
      </nav>
      <nav>
        <Link href="/games">
          <h2 className="footer-title link link-hover pt-10">Games</h2>
        </Link>
        <a className="link link-hover">Boomerang Bunny</a>
        <a className="link link-hover">Growing Up</a>
        <a className="link link-hover">Floral Felines</a>
        <a className="link link-hover">Stray Spirit</a>
      </nav>
      <nav>
        <h2 className="footer-title pt-10">Socials</h2>
        <div className="grid grid-flow-col gap-4">
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
      </nav>
    </footer>
  );
};

export default Footer;
