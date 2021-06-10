import React from "react";

import AllImage from "../../constants";
import "./PostsTrendingCard.scss";

const PostsTrendingCard = ({ heading, content }) => {
  return (
    <div className="postsTrendingCard">
      <div>
        <img
          src={AllImage.momo}
          alt="momo"
          className="postsTrendingCard__img"
        />
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
