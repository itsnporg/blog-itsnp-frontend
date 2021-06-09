import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";

export const AuthorProfileBottom = ({ image, authorName }) => {
  return (
    <div className='profile profileBottomWrap'>
      <Avatar image={image} variant='lg' dotted={true} />
      <div className='authorInfo'>
        <p>Author</p>
        <h4 className='profile__title'>{authorName || "John Doe"}</h4>
      </div>
      <Button label='Follow' />
    </div>
  );
};
