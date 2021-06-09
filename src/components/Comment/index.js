import React from "react";

import "./Comments.scss";
import Avatar from "components/Avatar/Avatar";
import { HeartIcon } from "components/Icons/HeartIcon";
import { VerifiedIcon } from "components/Icons/VerifiedIcon";
import { ThreeDots } from "components/Icons/ThreeDots";
import { DetailIcon } from "components/Icons/DetailIcon";

export const Comment = ({ authorName, time, followerNum, authorDetails }) => {
  return (
    <div className='comment'>
      <div className='avatar'>
        <Avatar variant='small' />
      </div>

      <div className='comment__top'>
        <div className='comment__author'>
          {authorName || "Xettri Aleen"}
          <VerifiedIcon />
          <em>{time || "21  min ago"}</em>
        </div>
        <div className='comment__detailsIcon'>
          <ThreeDots />
        </div>
      </div>

      <div className='comment__mid'>
        <p>
          Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean
          you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift. Whether a
          funny quote from a famous celebrity or an encouraging message about giving it your best from a successful
          business person, we can all use a little motivation and inspiration these days via a life quote.
        </p>
      </div>

      <div className='comment__bot'>
        <div>
          <HeartIcon />
          {followerNum || 30}
          {authorDetails || "Subedi bibek, BOT, Awebisam"}
        </div>
        <div>
          <DetailIcon />
          Reply
        </div>
      </div>
    </div>
  );
};
