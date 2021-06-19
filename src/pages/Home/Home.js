import React from "react";
import PostsTrendingCard from "components/PostsTrendingCard/PostsTrendingCard";
import BlogPostCard from "components/BlogPostCard/BlogPostCard";
import "./Home.scss";

import MomoImage from "../../resources/images/global/momo.png";
import SaladImage from "../../resources/images/global/salad.png";
import UserAvatar from "../../resources/images/global/user.png";
import LoveIcon from "../../resources/images/icons/love.png";
import ItsnpImage from "../../resources/images/global/itsnp.png";
import SandwichImage from "../../resources/images/global/sandwich.png";

import ChatIcon from "../../resources/images/icons/chat.png";
import BookmarkIcon from "../../resources/images/icons/bookmark.png";

import SmallCardBlogPost from "components/SmallCardBlogPost";
import MediumCardBlogPost from "components/PostMediumBlogPost";
import JoinMadhyamCard from "components/JoinMadhyamCard";
export default (props) => {
  return (
    <div className="HomePage">
      <PostsTrendingCard
        image={MomoImage}
        caption="momo"
        heading="How momo helps to think like bill gates"
        content="I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......"
      />

      <SmallCardBlogPost
        image={SaladImage}
        imageTitle={"salad"}
        user={UserAvatar}
        love={LoveIcon}
        chat={ChatIcon}
        bookmark={BookmarkIcon}
        content="This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butter"
      />
      <BlogPostCard
        image={ItsnpImage}
        user={UserAvatar}
        heading="The Front-End Web Developer Roadmap for 2021"
        content="You’ve read all your free member-only stories. Become a member to get unlimitedYou’ve read all your free member-only stories. Become a member to get You’ve read all your free ..."
      />

      <MediumCardBlogPost
        image={SandwichImage}
        imageTitle={"sandwich"}
        user={UserAvatar}
        content={
          "This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butterThis is butterThis is butterThis is butter "
        }
      />
      <JoinMadhyamCard />
    </div>
  );
};
