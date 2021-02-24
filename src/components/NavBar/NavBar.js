import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <ul class="navElements">
      <li class="navElement">
        <a href="#home">Home</a>
      </li>
      <li class="navElement">
        <a href="#about">About</a>
      </li>
      <li class="navElement">
        <a href="#projects">Projects</a>
      </li>
      <li class="navElement">
        <a href="#contact">Contact</a>
      </li>
      <li class="navElement">
        <a href="./Assets/Images/Resume.pdf" target="_blank">
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
