import React from "react";

import "./Comments.scss";
import Avatar from "components/Avatar/Avatar";
import { HeartIcon, VerifiedIcon, ThreeDots, ReplyIcon } from "components/Icons";

/**
 * This renders Comment component
 * @param {author, comment} objects
 * @returns Comment object
 */
export const Comment = ({ author = { authorName: "Xettri Aleen" }, comment = { time: 5 } }) => {
  const { authorName } = author;
  const { time, contents } = comment;
  return (
    <div className='comment'>
      <div className='avatar'>
        <Avatar variant='small' />
      </div>

      <div className='comment__top'>
        <div>
          <div className='comment__author'>
            {authorName}
            <em>{time} min ago</em>
          </div>
          <VerifiedIcon />
        </div>
        <div className='comment__detailsIcon'>
          <ThreeDots />
        </div>
      </div>

      <div className='comment__mid'>
        <p>
          {comment.contents ||
            `Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean
          you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift. Whether a
          funny quote from a famous celebrity or an encouraging message about giving it your best from a successful
          business person, we can all use a little motivation and inspiration these days via a life quote.
          `}
        </p>
      </div>

      <div className='comment__bot'>
        <div>
          <HeartIcon />
          <div className='author'>
            <span>{author.followerNum || 0}</span>
            {/* Shame: Cant think of better name- comment list refers to people who have commented */}
            <div className='comment__bot__name'>
              {comment.list || "Subedi bibek, BOT, Awebisam"} and {205} others
            </div>
          </div>
        </div>
        <div className='reply'>
          <ReplyIcon />
          Reply
        </div>
      </div>
    </div>
  );
};
