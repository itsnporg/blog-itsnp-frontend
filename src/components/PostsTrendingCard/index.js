import React from "react";

import "./style.scss";

const PostsTrendingCard = ({ image, imageTitle, heading, content }) => {
  return (
    <div className="postsTrendingCard">
      <div>
        <img src={image} alt={imageTitle} className="postsTrendingCard__img" />
      </div>

      <div className="postsTrendingCard__content">
        <h1>{heading}</h1>
        <h3>
          {content}
          <span>Read More</span>
        </h3>
      </div>
    </div>
  );
};

export default PostsTrendingCard;
