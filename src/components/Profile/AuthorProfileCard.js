import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";
import { HeartIcon, CommentIcon, FavouriteIcon } from "../Icons";

import "./Profile.scss";

/**
 * This component returns a card with author profile description
 * @param {author, comment}
 * @returns Author card with follow button and author description
 */
export const AuthorProfileCard = ({
  image,
  authorName = "Rajesh Hamal",
  authorDesc = "This is some placeholder text. This author is the best person alive",
  followerNum,
  commentsNum,
}) => {
  return (
    <>
      <div className='profile card'>
        <div className='first'>
          <Avatar image={image} variant='small' />
          <Button label='Follow' />
        </div>

        <h4 className='profile__title'>{authorName}</h4>
        <p className='desc'>{authorDesc}</p>

        <div className='iconContainer'>
          <div className='icon'>
            <HeartIcon />
            <span>{followerNum}</span>
          </div>
          <div className='icon'>
            <CommentIcon />
            <span>{commentsNum}</span>
          </div>
          <FavouriteIcon />
        </div>
      </div>
    </>
  );
};
