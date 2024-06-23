import React from "react";
import checkMark from "../assets/checkmark.png";

const Skill = ({ skillName, level }) => {
  return (
    <>
      <article>
        <img src={`${checkMark}`} alt="checkmark icon" className="icon" />
        <div>
          <h3>{skillName}</h3>
          <p>{level}</p>
        </div>
      </article>
    </>
  );
};

export default Skill;
