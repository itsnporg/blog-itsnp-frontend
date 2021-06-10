import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";

/**
 * @params {author}
 * @returns Avatar and floating right follow botton
 */
export const AuthorProfileBottom = ({ image, authorName }) => {
  return (
    <div className='profile profileBottom'>
      <Avatar image={image} variant='lg' dotted={true} />
      <div className='authorInfo'>
        <p>Author</p>
        <h4 className='profile__title'>{authorName || "John Doe"}</h4>
      </div>
      <Button label='Follow' />
    </div>
  );
};
