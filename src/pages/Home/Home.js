import React from "react";

import "./Home.scss";

import { AuthorProfileTop, AuthorProfileBottom, AuthorProfileCard } from "../../components/Profile";
import { Comment } from "../../components/Comment";

export default (props) => {
  return (
    <div className='HomePage'>
      <AuthorProfileTop authorName='Aleen Xetri' followerNum='25' />
      <AuthorProfileBottom authorName='Aleen Xetri' image={"https://picsum.photos/200"} />
      <AuthorProfileCard authorName='Aleen Xetri' followerNum='1.2k' commentsNum='50' />
      <Comment />
    </div>
  );
};
