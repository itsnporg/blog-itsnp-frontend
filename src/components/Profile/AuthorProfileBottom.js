import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";

import "./Profile.scss";

/**
 * @params {author}
 * @returns Avatar and floating right follow botton
 */
export const AuthorProfileBottom = ({ image, authorName = "John Doe" }) => {
  return (
    <div className='profile profileBottom'>
      <Avatar image={image} variant='lg' dotted={true} />
      <div className='authorInfo'>
        <p>Author</p>
        <h4 className='profile__title'>{authorName}</h4>
      </div>
      <Button label='Follow' />
    </div>
  );
};