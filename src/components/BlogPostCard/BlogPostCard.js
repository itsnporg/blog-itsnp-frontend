import React from "react";
import "./BlogPostCard.scss";

import { Love } from "components/Icons/Love";
import { ChatIcon } from "components/Icons/ChatIcon";
import { BookMark } from "components/Icons/BookMark";
const BlogPostCard = ({
  heading,
  content,
  image,
  user,
  readMore = "ReadMore",
  date = "May 17",
  userName = "XettriAl.",
}) => {
  return (
    <div className="blogPostCard">
      <div className="blogPostCard__image">
        <img className="blogPostCard__img" src={image} alt="" />
      </div>
      <div className="blogPostCard__content">
        <h2>{heading}</h2>
        <h3>{content}</h3>
        <div className="blogPostCard__content--readmore">
          <p className="para1">{readMore}</p>
          <p className="para2">{date}</p>
        </div>
      </div>
      <div className="blogPostCard__icons">
        <div className="blogPostCard__icon">
          <Love />
          <ChatIcon />
          <BookMark />
        </div>
        <div className="blogPostCard__circle">
          <span>{userName}</span>
          <img src={user} alt="" className="blogPostCard__circle--user" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
