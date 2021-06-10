import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";
import { HeartIcon, CommentIcon, FavouriteIcon } from "../Icons";

/**
 *
 * @param {author, comment}
 * @returns Author card with follow and author description
 */
export const AuthorProfileCard = ({ image, authorName, authorDesc, followerNum, commentsNum }) => {
  return (
    <>
      <div className='profile card'>
        <div className='first'>
          <Avatar image={image} variant='sm' />
          <Button label='Follow' />
        </div>
        <h4 className='profile__title'>{authorName}</h4>
        <p className='desc'>
          {authorDesc || "This is some placeholder text. Kitten Cat Kitty Cat Kitty Cat Kitty Cat"}
        </p>
        <div className='iconContainer'>
          <div className='heart'>
            <HeartIcon />
            <span>{followerNum}k</span>
          </div>
          <div className='heart'>
            <CommentIcon />
            <span>{commentsNum}</span>
          </div>
          <FavouriteIcon />
        </div>
      </div>
    </>
  );
};
