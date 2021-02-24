import React from "react";

const ProjectsSection = () => {
  return (
    <section class="infoBlock" id="projects">
      <div class="internalElements">
        <header>
          <h1>Projects</h1>
        </header>
        <hr />
        <div class="justify-content-center">
          <section class="col-md-4">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="./Assets/Images/Project_photo.JPG"
                alt="Project"
              />
              <div class="card-body">
                <h2 class="card-title row justify-content-center">
                  Pours In The Outdoors
                </h2>
                <section class="row justify-content-center">
                  <a
                    href="https://github.com/sethklusmire/Project1"
                    class="btn btn-secondary col"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    href="https://sethklusmire.github.io/Project1/"
                    class="btn btn-secondary col"
                    target="_blank"
                  >
                    Website
                  </a>
                </section>
              </div>
            </div>
          </section>
          <section class="col-md-4">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="./Assets/Images/Weather_Dashboard.JPG"
                alt="Project"
              />
              <div class="card-body">
                <h2 class="card-title row justify-content-center">
                  Weather Dashboard
                </h2>
                <section class="row justify-content-center">
                  <a
                    href="https://github.com/wyoung60/weatherDashboard"
                    class="btn btn-secondary col"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    href="https://wyoung60.github.io/weatherDashboard/"
                    class="btn btn-secondary col"
                    target="_blank"
                  >
                    Website
                  </a>
                </section>
              </div>
            </div>
          </section>
          <section class="col-md-4">
            <div class="card mb-2">
              <img
                class="card-img-top"
                src="./Assets/Images/Project2.JPG"
                alt="Project"
              />
              <div class="card-body">
                <h2 class="card-title row justify-content-center">
                  Quiet Sands
                </h2>
                <section class="row justify-content-center">
                  <a
                    href="https://github.com/wyoung60/project2"
                    class="btn btn-secondary col"
                    target="_blank"
                  >
                    Repository
                  </a>
                  <a
                    href="https://quiet-sands-70711.herokuapp.com/"
                    class="btn btn-secondary col"
                    target="_blank"
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
