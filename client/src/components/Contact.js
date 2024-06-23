import React from "react";
import email from "../assets/email.png";
import linkedIn from "../assets/linkedin.png";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={`${email}`}
              alt="email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:purveshjambhulkar16@gmail.com">
                purveshjambhulkar16@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={`${linkedIn}`}
              alt="linked icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/purvesh-jambhulkar-9b3412263/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
