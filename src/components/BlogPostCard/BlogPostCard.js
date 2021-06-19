import React from "react";
import "./BlogPostCard.scss";
const BlogPostCard = ({
  heading,
  content,
  image,
  love,
  chat,
  user,
  bookmark,
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
          <span>Readmore</span>
          <p>May 17</p>
        </div>
      </div>
      <div className="blogPostCard__icons">
        <div className="blogPostCard__icon">
          <img src={love} alt="" className="blogPostCard__icon--love" />
          <img src={chat} alt="" className="blogPostCard__icon--chat" />
          <img src={bookmark} alt="" className="blogPostCard__icon--bookmark" />
        </div>
        <div className="blogPostCard__circle">
          <span>XettriAl.</span>
          <img src={user} alt="" className="blogPostCard__circle--user" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
