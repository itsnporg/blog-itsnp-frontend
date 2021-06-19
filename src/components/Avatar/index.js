import React from "react";

import "./Avatar.scss";

/**
 * This component returns author profile or avatar image
 * For dotted- pass 2 for small dotted border; 1 or large dashed border; 0 for no border(default)
 * Also avatar has 2 sizes small and large taht may be passes as varaint argument
 * @use Display rounded author avatar image
 * @param {image, border: 'dotted or dashed', variant: 'large', 'small' or xs}
 */
export const Avatar = ({ image, border, variant }) => {
  const img = image || "https://i.picsum.photos/id/1081/200/300.jpg?hmac=ntCnXquH7cpEF0vi5yvz1wKAlRyd2EZwZJQbgtfknu8";
  return (
    <>
      <div className='avatar'>
        <img
          src={img}
          className={`avatar__img ${
            border === "dotted" ? "avatar__img--dotted" : border === "dashed" ? "avatar__img--dashed" : ""
          } ${
            variant === "large" ? "avatar__img--large" : variant === "xs" ? "avatar__img--xs" : "avatar__img--small"
          }`}
          alt='Author avatar'
        />
      </div>
    </>
  );
};
