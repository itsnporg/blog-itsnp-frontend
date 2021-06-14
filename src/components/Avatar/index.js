import React from "react";

import "./Avatar.scss";

/**
 * This component returns author profile or avatar image
 * @param {authorImage: imageSrc, dottedBorder: boolean, variant: large or small}
 */
export const Avatar = ({ image, dotted, variant }) => {
  const img = image || "https://i.picsum.photos/id/1081/200/300.jpg?hmac=ntCnXquH7cpEF0vi5yvz1wKAlRyd2EZwZJQbgtfknu8";
  return (
    <>
      <div className={`${dotted ? "dotted" : variant === "large" ? "large" : "small"}`}>
        <img src={img} alt='AvatarImage' />
      </div>
    </>
  );
};
