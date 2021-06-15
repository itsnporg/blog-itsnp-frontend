import React from "react";
import "./header.scss";
import img1 from "../images/vecter01.svg";
import img2 from "../images/vector002.svg";
import img3 from "../images/vector03.svg";

const header = () => {
  return (
    <div className="header_container">
      <div className="header_right">
        <div className="right_icons">
          <ul className="img">
            <li>
              <a href="#">
                <img src={img1} alt="logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img2} alt="logo1" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img3} alt="logo2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header_left">
        <div className="left_titles">
          <h6>
            18 <span>-</span> 20 <span>-</span>2021
          </h6>
          <div className="vertical_line"></div>
          <h6>19 Min Read</h6>
        </div>
      </div>
    </div>
  );
};

export default header;
