import React from "react";

import "./Avatar.scss";

/**
 * This component returns author profile or avatar image
 * For dotted- pass 2 for small dotted border; 1 or large dashed border; 0 for no border(default)
 * Als avatar has 2 sizes small and large taht may be passes as varaint argument
 * @param {authorImage: imageSrc, dottedBorder: boolean, variant: large or small}
 */
export const Avatar = ({ image, dotted, variant }) => {
  const img = image || "https://i.picsum.photos/id/1081/200/300.jpg?hmac=ntCnXquH7cpEF0vi5yvz1wKAlRyd2EZwZJQbgtfknu8";
  return (
    <>
      <div className='avatar'>
        <img
          src={img}
          className={`avatar__img ${
            dotted === "2"
              ? "avatar__img--dotted"
              : dotted
              ? "avatar__img--dashed"
              : variant === "large"
              ? "avatar__img--large"
              : "avatar__img--small"
          }`}
          alt='AvatarImage'
        />
      </div>
    </>
  );
};
