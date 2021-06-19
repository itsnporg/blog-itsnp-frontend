import React from "react";

import "./style.scss";

import LargePink from "components/Circles/LargePink";
import Yellow from "components/Circles/Yellow";
import SmallPink from "components/Circles/SmallPink";
import Purple from "components/Circles/Purple";
const JoinMadhyamCard = () => {
  return (
    <div className="joinMadhyamCard">
      <div className="joinMadhyamCard__container">
        <h2>Join Madhyam !</h2>
        <h1>Learn Share and Innovate :{")"}</h1>
      </div>
      <div className="joinMadhyamCard__button" onClick={() => {}}>
        <div>Get Started</div>
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
