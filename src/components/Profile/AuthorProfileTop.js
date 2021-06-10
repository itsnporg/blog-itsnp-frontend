import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";

/**
 *
 * @param {author}
 * @returns Avatar with dotted border and follow button beside
 */
export const AuthorProfileTop = ({ image, authorName, followerNum }) => {
  return (
    <div className='profile profileTop'>
      <Avatar image={image} variant='lg' />
      <h4 className='profile__title'>{authorName || "John Doe"}</h4>
      <Button label={`Follow ${followerNum || "1.2k"}`} />
    </div>
  );
};
