import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";

import "./Profile.scss";

/**
 *
 * @param {author}
 * @returns Avatar with dotted border and follow button beside
 */
export const AuthorProfileTop = ({ image, authorName = "John Doe", followerNum = "" }) => {
  return (
    <div className='profile profileTop'>
      <Avatar image={image} variant='large' />
      <h4 className='profile__title'>{authorName}</h4>
      <Button label={`Follow ${followerNum}`} />
    </div>
  );
};
