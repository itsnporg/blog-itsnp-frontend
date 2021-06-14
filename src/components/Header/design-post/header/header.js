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
          <div className="img">
            <img src={img1} alt="logo" />
          </div>
          <div className="img">
            <img src={img2} alt="logo1" />
          </div>
          <div className="img">
            <img src={img3} alt="logo2" />
          </div>
        </div>
      </div>
      <div className="header_left">
        <div className="left_titles">
          <h6>18-20-2021</h6>
          <div className="vertical_line"></div>
          <h6>19 Min Read</h6>
        </div>
      </div>
    </div>
  );
};

export default header;
