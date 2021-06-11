import React from "react";

import "./PostsTrendingCard.scss";

const PostsTrendingCard = ({ image, caption, heading, content }) => {
  console.log("image", image);
  return (
    <div className="postsTrendingCard">
      <div>
        <img src={image} alt={caption} className="postsTrendingCard__img" />
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
