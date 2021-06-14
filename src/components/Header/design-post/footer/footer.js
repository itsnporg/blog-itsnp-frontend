import React from "react";
import like from "../images/like.svg";
import comment from "../images/comment.svg";
import facebook from "../images/facebook.svg";
import linkendin from "../images/linkedin.svg";
import more from "../images/more-horizontal.svg";
import save from "../images/save.svg";
import twitter from "../images/twitter.svg";
import "./footer.scss";

const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_right">
        <div className="footer_icons">
          <div className="img">
            <img src={like} alt="like" />
          </div>
          <div className="img">
            <img src={comment} alt="comment" />
          </div>
          <div className="img">
            <img src={save} alt="save" />
          </div>
          <div className="img">
            <img src={more} alt="more" />
          </div>
        </div>
      </div>
      <div className="footer_left">
        <div className="footer_img">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="footer_img">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="footer_img">
          <img src={linkendin} alt="linkendin" />
        </div>
      </div>
    </div>
  );
};

export default footer;
