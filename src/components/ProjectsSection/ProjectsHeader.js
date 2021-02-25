import React from "react";
import "./style.css";

const ProjectsHeader = ({ children }) => {
  return (
    <section className="infoBlock" id="projects">
      <div className="internalElements">
        <header>
          <h1>Projects</h1>
        </header>
        <hr />
        <div className="center">{children}</div>
      </div>
    </section>
  );
};

export default ProjectsHeader;
