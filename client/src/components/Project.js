import React from "react";

const Project = ({
  projectName,
  img,
  imgDescription,
  githubLink,
  liveDemo,
}) => {
  return (
    <div className="details-containers color-container">
      <div className="article-container">
        <img src={img} alt={projectName} className="project-img" />
        <div className="image-overlay">
          <p>{imgDescription}</p>
        </div>
      </div>
      <h2 className="exp-sub-title project-title">{projectName}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(githubLink, "_blank")}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(liveDemo, "_blank")}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Project;
