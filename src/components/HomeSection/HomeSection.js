import React from "react";
import "./style.css";

const HomeSection = () => {
  return (
    <div className="bg" id="home">
      <div className="titlePosition">
        <h1 className="firstTitle">Wesley</h1>
        <h1 className="firstTitle">Young</h1>
        <h2 className="secondTitle">Web Developer</h2>
        <section>
          <i className="fab fa-github-square fa-2x secondTitle" id="icon0"></i>
          <i className="fab fa-linkedin fa-2x secondTitle" id="icon1"></i>
        </section>
      </div>
    </div>
  );
};

export default HomeSection;
