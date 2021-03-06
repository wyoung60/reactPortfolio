import React from "react";
import "./style.css";

//Stateless component takes in props and returns projects
const ProjectsSection = ({ name, img, website, github, description }) => {
  return (
    <section className="col-md-4 child">
      <div className="card mb-2">
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + img}
          alt="Project"
        />
        <div className="card-body">
          <h3 className="card-title row justify-content-center">{name}</h3>
          <p className="description">{description}</p>
          <section className="row justify-content-center">
            <a
              href={github}
              className="btn btn-secondary col projectButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
            <a
              href={website}
              className="btn btn-secondary col projectButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
