import React from "react";

import "./Home.scss";
import { ProfileTop, ProfileBottom, ProfileCard } from "../../components/Profile/Profile";

import avatarImg from "../../Assets/6hk992di5pn61.jpg";

export default (props) => {
  return (
    <div className='HomePage'>
      <ProfileTop authorName='Aleen Xetri' followerNum='2.5' />
      <ProfileBottom authorName='Aleen Xetri' image={avatarImg} />
      <ProfileCard authorName='Aleen Xetri' followerNum='1.2' commentsNum='50' />
    </div>
  );
};
