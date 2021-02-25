import React from "react";
import "./style.css";
import ProjectOneImage from "../../Assets/Images/Project_photo.JPG";
import ProjectTwoImage from "../../Assets/Images/Project2.JPG";
import WeatherDashboardImage from "../../Assets/Images/Weather_Dashboard.JPG";

const ProjectsSection = () => {
  return (
    <section className="infoBlock" id="projects">
      <div className="internalElements">
        <header>
          <h1>Projects</h1>
        </header>
        <hr />
        <div className="justify-content-center">
          <section className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src={ProjectOneImage}
                alt="Project"
              />
              <div className="card-body">
                <h2 className="card-title row justify-content-center">
                  Pours In The Outdoors
                </h2>
                <section className="row justify-content-center">
                  <a
                    href="https://github.com/sethklusmire/Project1"
                    className="btn btn-secondary col"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://sethklusmire.github.io/Project1/"
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
          <section className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src={WeatherDashboardImage}
                alt="Project"
              />
              <div className="card-body">
                <h2 className="card-title row justify-content-center">
                  Weather Dashboard
                </h2>
                <section className="row justify-content-center">
                  <a
                    href="https://github.com/wyoung60/weatherDashboard"
                    className="btn btn-secondary col"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://wyoung60.github.io/weatherDashboard/"
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
          <section className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src={ProjectTwoImage}
                alt="Project"
              />
              <div className="card-body">
                <h2 className="card-title row justify-content-center">
                  Quiet Sands
                </h2>
                <section className="row justify-content-center">
                  <a
                    href="https://github.com/wyoung60/project2"
                    className="btn btn-secondary col"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://quiet-sands-70711.herokuapp.com/"
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
