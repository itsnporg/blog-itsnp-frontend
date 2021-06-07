import React from "react";

import "./Profile.scss";
import Avatar from "../Avatar/Avatar";
import { Button } from "../button/Button";

import { HeartIcon, CommentIcon, FavouriteIcon } from "../../Assets/Icons/Icons";

export const ProfileTop = ({ image, authorName, followerNum }) => {
  return (
    <div className='profile profileTopWrap'>
      <Avatar image={image} dotted={true} />
      <h4 className='title'>{authorName || "John Doe"}</h4>
      <Button label={`Follow ${followerNum || "1.2"}k`} />
    </div>
  );
};

export const ProfileBottom = ({ image, authorName }) => {
  return (
    <div className='profile profileBottomWrap'>
      <Avatar image={image} />
      <div className='authorInfo'>
        <p>
          <em>Author</em>
        </p>
        <h4 className='title'>{authorName || "John Doe"}</h4>
      </div>
      <Button label='Follow' />
    </div>
  );
};

export const ProfileCard = ({ image, authorName, authorDesc, followerNum, commentsNum }) => {
  return (
    <>
      <div className='profile card'>
        <div className='first'>
          <Avatar image={image} />
          <Button label='Follow' />
        </div>
        <h4 className='title'>{authorName}</h4>
        <p className='desc'>
          {authorDesc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        {/* <br /> */}
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
