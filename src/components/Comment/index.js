import React from "react";

import { Avatar } from "../Avatar";
import { HeartIcon, VerifiedIcon, ThreeDots, ReplyIcon } from "components/Icons";

import "./Comments.scss";

/**
 * This renders Comment component
 * @param {author, comment} objects
 * @returns Comment object
 */
export const Comment = ({
  author = { authorName: "Xettri Aleen" },
  comment = {
    time: 5,
    contents:
      "Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift. Whether a funny quote from a famous celebrity or an encouraging message about giving it your best from a successful business person, we can all use a little motivation and inspiration these days via a life quote.",
    list: ["Subedi Bibek", "BOT", "Awebisam"],
  },
}) => {
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
        <p>{contents}</p>
      </div>

      <div className='comment__bot'>
        <div>
          <HeartIcon />
          <div className='author'>
            <span>{comment.list.length}</span>
            {/* WIP: Comment list refers to people who have commented. Also logic to implement a, b c and 20 others- unclear: Have to communicate with backend */}
            <div className='comment__bot__name'>
              {comment.list.map((name) => `${name}, `)} {`and ${comment.list.length - 3} others`}
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
