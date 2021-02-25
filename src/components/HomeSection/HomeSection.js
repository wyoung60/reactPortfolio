import React from "react";
import "./style.css";

const HomeSection = () => {
  function onClick(link) {
    let url;
    if (link === "github") {
      url = "https://github.com/wyoung60";
    } else if (link === "linkedin") {
      url = "https://www.linkedin.com/in/wesley-young-0953821b2";
    }
    window.open(url);
  }

  return (
    <div className="bg" id="home">
      <div className="titlePosition">
        <h1 className="firstTitle">Wesley</h1>
        <h1 className="firstTitle">Young</h1>
        <h2 className="secondTitle">Web Developer</h2>
        <section>
          <i
            className="fab fa-github-square fa-2x secondTitle"
            id="icon0"
            onClick={() => onClick("github")}
          ></i>
          <i
            className="fab fa-linkedin fa-2x secondTitle"
            id="icon1"
            onClick={() => onClick("linkedin")}
          ></i>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
