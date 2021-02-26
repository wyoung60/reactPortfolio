import React from "react";
import "./style.css";
import Resume from "../../Assets/Images/Resume.pdf";

const NavBar = () => {
  return (
    <ul className="navElements">
      <li className="navElement">
        <a className="anchor" href="#home">
          Home
        </a>
      </li>
      <li className="navElement">
        <a className="anchor" href="#about">
          About
        </a>
      </li>
      <li className="navElement">
        <a className="anchor" href="#projects">
          Projects
        </a>
      </li>
      <li className="navElement">
        <a className="anchor" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
