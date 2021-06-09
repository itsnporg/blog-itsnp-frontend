import React from "react";

import "./Home.scss";

import { AuthorProfileTop } from "../../components/Profile/AuthorProfileTop";
import { AuthorProfileBottom } from "../../components/Profile/AuthorProfileBottom";
import { AuthorProfileCard } from "../../components/Profile/AuthorProfileCard";
import { Comment } from "../../components/Comment";

export default (props) => {
  return (
    <div className='HomePage'>
      {/* {/* <AuthorProfileTop authorName='Aleen Xetri' followerNum='25' /> */}
      {/* <AuthorProfileBottom authorName='Aleen Xetri' image={"https://picsum.photos/200"} /> */}
      {/* <AuthorProfileCard authorName='Aleen Xetri' followerNum='1.2' commentsNum='50' /> */}
      <Comment authorName='' likedNum='' commentContents='' />
    </div>
  );
};
