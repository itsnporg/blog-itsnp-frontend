import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";

export const AuthorProfileTop = ({ image, authorName, followerNum }) => {
  return (
    <div className='profile profileTopWrap'>
      <Avatar image={image} variant='lg' />
      <h4 className='profile__title'>{authorName || "John Doe"}</h4>
      <Button label={`Follow ${followerNum || "1.2k"}`} />
    </div>
  );
};
