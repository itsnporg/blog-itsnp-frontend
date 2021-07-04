import React from "react";

import { Avatar } from "../Avatar";
import "./style.scss";
const MediumCardBlogPost = ({ image, content, authorImg, imageTitle }) => {
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
        <Avatar image={authorImg} variant="large" />
        <div className="mediumCardBlogPost__user--follow"></div>
      </div>
    </div>
  );
};

export default MediumCardBlogPost;
