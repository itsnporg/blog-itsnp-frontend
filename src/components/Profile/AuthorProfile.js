import React from "react";

import { Avatar } from "../Avatar";
import { Button } from "../button/Button";

import "./Profile.scss";

/**
 * This component returns author avatar, word:'author', name of author and a floating follow button
 * @use: End of blog
 * @params {author}
 * @returns Avatar image and right floating follow botton
 */
export const AuthorProfile = ({ image, authorName = "John Doe" }) => {
  return (
    <div className='author__profile'>
      <Avatar image={image} variant='large' border='dashed' />
      <div className='author__profile__info'>
        <p>Author</p>
        <h4 className='author__title'>{authorName}</h4>
      </div>
      <Button className='author__profile__btn' label='Follow' />
    </div>
  );
};
