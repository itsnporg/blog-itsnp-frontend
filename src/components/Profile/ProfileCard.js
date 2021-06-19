import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";
import { HeartIcon, CommentIcon, FavouriteIcon } from "../Icons";

import "./Profile.scss";

/**
 * This component returns a card with author profile description
 * Contains: Author avatar, follow button, author name, author description, number of follower and comments
 * @use Side of blog post
 * @param {author, comment}
 * @returns Author card with follow button and author description
 */
export const ProfileCard = ({
  image,
  authorName = "Rajesh Hamal",
  authorDesc = "This is some placeholder text. This author is the best person alive",
  followerNum,
  commentsNum,
}) => {
  return (
    <>
      <div className='profileCard'>
        <div className='profileCard__top'>
          <Avatar image={image} border='dotted' variant='small' />
          <Button label='Follow' />
        </div>

        <div className='profileCard__mid'>
          <h4 className='author__title'>{authorName}</h4>
          <p className='profileCard__mid__desc'>{authorDesc}</p>
        </div>

        <div className='profileCard__bot'>
          <div className='iconContainer'>
            <HeartIcon />
            <span>{followerNum}</span>
          </div>
          <div className='iconContainer'>
            <CommentIcon />
            <span>{commentsNum}</span>
          </div>
          <FavouriteIcon />
        </div>
      </div>
    </>
  );
};
