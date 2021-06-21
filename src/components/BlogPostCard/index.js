import React from "react";
import "./style.scss";

import { LoveIcon } from "components/Icons/LoveIcon";
import { ChatIcon } from "components/Icons/ChatIcon";
import { BookMarkIcon } from "components/Icons/BookMarkIcon";
import { Avatar } from "../Avatar";
const BlogPostCard = ({
  heading,
  content,
  image,
  imageTitle,
  authorImg,
  date = "May 17",
  authorName = "XettriAl.",
}) => {
  return (
    <div className="blogPostCard">
      <div className="blogPostCard__image">
        <img className="blogPostCard__img" src={image} alt={imageTitle} />
      </div>
      <div className="blogPostCard__content">
        <h2>{heading}</h2>
        <h3>{content}</h3>
        <div className="blogPostCard__content--readmore">
          <p className="para1">Readmore</p>
          <p className="para2">{date}</p>
        </div>
      </div>
      <div className="blogPostCard__icons">
        <div className="blogPostCard__icon">
          <LoveIcon />
          <ChatIcon />
          <BookMarkIcon />
        </div>
        <div className="blogPostCard__circle">
          <span>{authorName}</span>
          <Avatar image={authorImg} variant="xs" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
