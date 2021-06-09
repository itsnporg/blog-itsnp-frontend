import React from "react";

import "./Avatar.scss";

let defaultPlaceholder = "https://i.picsum.photos/id/1081/200/300.jpg?hmac=ntCnXquH7cpEF0vi5yvz1wKAlRyd2EZwZJQbgtfknu8";

//this component expects avatar image from backend
// if not passed, it displays a default image

const Avatar = ({ image, dotted, variant }) => {
  return (
    <>
      <div className={`container ${dotted ? "dotted" : variant === "lg" ? "lg" : "sm"}`}>
        <img src={image || defaultPlaceholder} alt='AvatarImage' />
      </div>
    </>
  );
};

export default Avatar;
