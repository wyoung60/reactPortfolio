import React from "react";
import "./style.css";

const ProjectsSection = ({ name, img, website, github }) => {
  return (
    <section className="col-md-4 child">
      <div className="card mb-2">
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + img}
          alt="Project"
        />
        <div className="card-body">
          <h2 className="card-title row justify-content-center">{name}</h2>
          <section className="row justify-content-center">
            <a
              href={github}
              className="btn btn-secondary col"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
            <a
              href={website}
              className="btn btn-secondary col"
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
