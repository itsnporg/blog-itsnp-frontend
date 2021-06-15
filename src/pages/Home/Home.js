import React from "react";

import "./Home.scss";

import { AuthorFollow, AuthorProfile, ProfileCard } from "../../components/Profile";
import { Comment } from "../../components/Comment";

export default (props) => {
  return (
    <div className='HomePage'>
      <AuthorFollow authorName='Aleen Xetri' followerNum='25' />
      <AuthorProfile authorName='Aleen Xetri' image={"https://picsum.photos/200"} />
      <ProfileCard authorName='Aleen Xetri' followerNum='1.2k' commentsNum='50' />
      <Comment />
    </div>
  );
};
