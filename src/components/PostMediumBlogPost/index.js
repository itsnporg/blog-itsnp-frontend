import React from "react";

import "./style.scss";
const MediumCardBlogPost = ({ image, content, user, imageTitle }) => {
  return (
    <div className="mediumCardBlogPost">
      <div className="mediumCardBlogPost__container">
        <div className="mediumCardBlogPost__container--img">
          <img src={image} alt={imageTitle} />
        </div>
        <div className="mediumCardBlogPost__container--content">
          <p>{content}</p>
        </div>
      </div>

      <div className="mediumCardBlogPost__user">
        <div className="mediumCardBlogPost__user--img">
          <img src={user} alt="user" />
        </div>
        <div className="mediumCardBlogPost__user--follow"></div>
      </div>
    </div>
  );
};

export default MediumCardBlogPost;
