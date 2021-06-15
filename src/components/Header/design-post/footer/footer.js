import React from "react";
import like from "../images/like.svg";
import comment from "../images/comment.svg";
import facebook from "../images/facebook.svg";
import linkendin from "../images/linkedin.svg";
import more from "../images/more-horizontal.svg";
import save from "../images/save.svg";
import twitter from "../images/twitter.svg";
import links from "../images/link.svg";
import "./footer.scss";

const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_right">
        <div className="footer_icons">
          <ul className="img">
            <li>
              <a href="#">
                <img src={like} alt="like" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={comment} alt="comment" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={save} alt="save" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={more} alt="more" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_left">
        <ul className="footer_img">
          <li>
            <a href="#">
              <img src={links} alt="Links" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkendin} alt="linkendin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
