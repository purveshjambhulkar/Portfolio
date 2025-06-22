import React from "react";
import arrow from "../assets/arrow.png";
import Skill from "./Skill";
import { technologies} from "../data/skillsData";

export const Experience = () => {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <p className="section__description">
          As a full-stack developer, I have expertise in MERN stack, Django, Next.js, and Python. I am skilled in Data Structures and Algorithms using C++.
        </p>
        <div className="exp-details-container">
          <div className="about-containers">
            <div className="details-containers">
              <h2 className="exp-sub-title">Full-Stack Skills</h2>
              <div
                className="article-container"
                style={{ overflowY: "auto", maxHeight: "300px" }}
              >
                {technologies.map((skill) => {
                  return (
                    <Skill
                      skillName={skill.skillName}
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
