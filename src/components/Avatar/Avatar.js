import React from "react";

import defImage from "../../Assets/avatarDefault.png";
import "./Avatar.scss";

//this component expects a link to image source and not passed displays a default image
const Avatar = ({ image, dotted }) => {
  //category- large and medium introduce logic to make this happen
  return (
    <>
      <div className={`${dotted ? "dotted" : "container"}`}>
        <img src={image || defImage} alt='AvatarImage' />
      </div>
    </>
  );
};

export default Avatar;
