import React from "react";

import "./style.scss";
import { Avatar } from "../Avatar";
const SmallCardBlogPost = ({ image, content, authorImg, imageTitle }) => {
  return (
    <div className="smallCardBlogPost">
      <div className="smallCardBlogPost__container">
        <div className="smallCardBlogPost smallCardBlogPost__img">
          <img src={image} alt={imageTitle} />
        </div>
        <div className="smallCardBlogPost__content">
          <p>{content}</p>
        </div>
      </div>

      <div className="smallCardBlogPost__user">
        <Avatar image={authorImg} />
      </div>
    </div>
  );
};

export default SmallCardBlogPost;
