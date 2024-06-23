import React from "react";
import aboutPic from "../assets/about-pic.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";

export const About = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get to know more</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={`${aboutPic}`} alt="About Pic" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={`${education}`}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Bachelor of Engineering (B.E), Information Technology
                  <br></br>D.Y.Patil College of Engineering, 2022 - 2026
                </p>
              </div>
              <div className="details-container">
                <img
                  src={`${experience}`}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Relevant Courses</h3>
                <p>
                  Data Structures, Algorithms, Web Development, Database
                  Management Systems
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Aspiring Software Engineer with a strong foundation in
                full-stack development, seeking entry-level software engineering
                roles.
              </p>
            </div>
          </div>
        </div>
        <img
          src={`${arrow}`}
          alt="arrow image "
          className="icon arrow"
          onClick={() => {
            window.location.href = "#experience";
          }}
        />
      </section>
    </>
  );
};
