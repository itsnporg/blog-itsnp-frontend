import React from "react";

import "./style.scss";
const SmallCardBlogPost = ({ image, content, user, imageTitle }) => {
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
        <div className="smallCardBlogPost__user--img">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default SmallCardBlogPost;
