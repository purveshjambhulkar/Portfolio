import React from "react";
import profileimage from "../assets/purvesh-profile-pic.png";
import resume_Pdf from "../assets/RESUME.pdf";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";

const Profile = () => {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={`${profileimage}`}
            alt="Purvesh Jambhulkar profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello I'm</p>
          <h1 className="title">Purvesh Jambhulkar</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => {
                window.open(resume_Pdf);
              }}
            >
              Download Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={`${linkedIn}`}
              alt="LinkedIn Profile"
              className="icon"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/purvesh-jambhulkar-9b3412263/"
                );
              }}
            ></img>
            <img
              src={`${github}`}
              alt="Github Profile"
              className="icon"
              onClick={() => {
                window.open("https://github.com/purveshjambhulkar");
              }}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
