import { allImage } from "../../constants";
import React from "react";
import "./PostsTrendingCard.scss";

const PostsTrendingCard = () => {
  return (
    <div className="postsTrendingCard">
      <div>
        <img
          src={allImage.momo}
          alt="momo"
          className="postsTrendingCard__img"
        />
      </div>

      <div className="postsTrendingCard__content">
        <h1>How momo helps to think like bill gates</h1>
        <h3>
          I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......
          <span>Read More</span>
        </h3>
      </div>
    </div>
  );
};

export default PostsTrendingCard;
