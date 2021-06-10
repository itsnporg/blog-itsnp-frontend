import React from "react";

import "./Avatar.scss";

let defaultPlaceholder = "https://i.picsum.photos/id/1081/200/300.jpg?hmac=ntCnXquH7cpEF0vi5yvz1wKAlRyd2EZwZJQbgtfknu8";

/**
 *
 * @param {authorImage: src, dottedBorder: boolean, variant: large or small}
 * @returns Avatar Image
 * @variants: border none or dotted, small(50px) or large(70px) variant
 */
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
