import React from "react";
import arrow from "../assets/arrow.png";
import projectsData from "../data/projectsData";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse my recent</p>
        <h1 className="title">Projects</h1>
        <div className="exp-details-container">
          <div className="about-containers">
            {projectsData.slice(0, 3).map((project) => {
              return (
                <Project
                  key={project.projectName}
                  projectName={project.projectName}
                  img={project.img}
                  githubLink={project.githubLink}
                  liveDemo={project.liveDemo}
                  imgDescription={project.imgDescription}
                />
              );
            })}
          </div>
        </div>
        <div className="exp-details-container">
          <div className="about-containers">
            {projectsData.slice(3, 6).map((project) => {
              return (
                <Project
                  key={project.projectName}
                  projectName={project.projectName}
                  img={project.img}
                  githubLink={project.githubLink}
                  liveDemo={project.liveDemo}
                  imgDescription={project.imgDescription}
                />
              );
            })}
          </div>
        </div>
        <div className="exp-details-container">
          <div className="about-containers">
            {projectsData.slice(6, 9).map((project) => {
              return (
                <Project
                  key={project.projectName}
                  projectName={project.projectName}
                  img={project.img}
                  githubLink={project.githubLink}
                  liveDemo={project.liveDemo}
                  imgDescription={project.imgDescription}
                />
              );
            })}
          </div>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open("https://github.com/purveshjambhulkar", "_blank")}
          >
            Click to Explore All Projects
          </button>
        </div>
        <img
          src={arrow}
          alt="arrow image"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#contact";
          }}
        />
      </section>
    </>
  );
};

export default Projects;
