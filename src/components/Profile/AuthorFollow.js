import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";

import "./Profile.scss";

/**
 * This components returns author avatar, name and a follow button with number of followers
 * @param {author}
 * @returns Avatar with dotted border and follow button beside
 */
export const AuthorFollow = ({ image, authorName = "John Doe", followerNum = "" }) => {
  return (
    <div className='authorFollow'>
      <Avatar image={image} variant='large' />
      <h4 className='author__title'>{authorName}</h4>
      <Button label={`Follow ${followerNum}`} />
    </div>
  );
};
