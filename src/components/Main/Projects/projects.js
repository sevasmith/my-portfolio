import React from "react";
import project1 from "../../../assets/project-1.png";
import project2 from "../../../assets/project-2.png";
import project3 from "../../../assets/project-3.png";
import arrow from "../../../assets/arrow.png";

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-text-p1">Explore My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1} className="project-img" alt="Project 1" />
            </div>
            <h3 className="sub-title project-title">Project One</h3>
            <div className="btn-container">
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://github.com/sevasmith/weather-app", "_blank")}
              >
                GitHub
              </button>
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://sevasmith.github.io/weather-app/", "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2} className="project-img" alt="Project 2" />
            </div>
            <h3 className="sub-title project-title">Project Two</h3>
            <div className="btn-container">
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://github.com/sevasmith/tenzies-game", "_blank")}
              >
                GitHub
              </button>
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://sevasmith.github.io/tenzies-game/", "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3} className="project-img" alt="Project 3" />
            </div>
            <h3 className="sub-title project-title">Project Three</h3>
            <div className="btn-container">
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://github.com/sevasmith/movie-buff-quiz", "_blank")}
              >
                GitHub
              </button>
              <button
                className="btn-color-1 project-btn"
                onClick={() => window.open("https://sevasmith.github.io/movie-buff-quiz/", "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        className="icon arrow"
        alt="Arrow icon"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}
