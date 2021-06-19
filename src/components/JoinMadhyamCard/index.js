import React from "react";

import "./style.scss";

import LargePink from "components/Circles/LargePink";
import Yellow from "components/Circles/Yellow";
import SmallPink from "components/Circles/SmallPink";
import Purple from "components/Circles/Purple";
const JoinMadhyamCard = ({
  topic = "Join Mnadhyam!",
  heading = `Learn Share and Innovate :)`,
  btnTitle = "Get Started",
  route,
}) => {
  return (
    <div className="joinMadhyamCard">
      <div className="joinMadhyamCard__container">
        <h2>{topic}!</h2>
        <h1>{heading}</h1>
      </div>
      <div className="joinMadhyamCard__button" onClick={route}>
        <div>{btnTitle}</div>
      </div>

      <div className="circle  circle__largePink">
        <LargePink />
      </div>
      <div className="circle circle__yellow">
        <Yellow />
      </div>
      <div className="circle circle__smallPink">
        <SmallPink />
      </div>
      <div className="circle circle__purple">
        <Purple />
      </div>
    </div>
  );
};

export default JoinMadhyamCard;
