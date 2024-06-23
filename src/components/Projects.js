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
            {projectsData.map((project) => {
              return (
                <Project
                  projectName={project.projectName}
                  img={project.img}
                  githubLink={project.githubLink}
                  liveDemo={project.liveDemo}
                  imgDescription={project.imgDescription}
                ></Project>
              );
            })}
          </div>
        </div>
        <img
          src={`${arrow}`}
          alt="arrow image "
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
