import React from "react";
import arrow from "../assets/arrow.png";
import Skill from "./Skill";
import { backendSkills, frontendSkills } from "../data/skillsData";

export const Experience = () => {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="exp-details-container">
          <div className="about-containers">
            <div className="details-containers">
              <h2 className="exp-sub-title">Frontend Development</h2>
              <div
                className="article-container"
                style={{ overflowY: "auto", maxHeight: "300px" }}
              >
                {frontendSkills.map((skill) => {
                  return (
                    <Skill
                      skillName={skill.skillName}
                      level={skill.level}
                    ></Skill>
                  );
                })}
              </div>
            </div>

        
            <div className="details-containers">
              <h2 className="exp-sub-title">Backend Development</h2>
              <div
                className="article-container"
                style={{ overflowY: "auto", maxHeight: "300px" }}
              >
                {backendSkills.map((skill) => {
                  return (
                    <Skill
                      skillName={skill.skillName}
                      level={skill.level}
                    ></Skill>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${arrow}`}
          alt="arrow image "
          className="icon arrow"
          onClick={() => {
            window.location.href = "#projects";
          }}
        />
      </section>
    </>
  );
};
