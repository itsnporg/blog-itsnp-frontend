import React from "react";

import "./Home.scss";
<<<<<<< HEAD

import MomoImage from "../../resources/images/global/momo.png";
import SaladImage from "../../resources/images/global/salad.png";
import UserAvatar from "../../resources/images/global/user.png";
import LoveIcon from "../../resources/images/icons/love.png";
import ItsnpImage from "../../resources/images/global/itsnp.png";
import SandwichImage from "../../resources/images/global/sandwich.png";

import ChatIcon from "../../resources/images/icons/chat.png";
import BookmarkIcon from "../../resources/images/icons/bookmark.png";

import SmallCardBlogPost from "components/SmallCardBlogPost";
=======
>>>>>>> a7bcd3511b268b1eabaa91efde7a658c98a4c52e
import MediumCardBlogPost from "components/PostMediumBlogPost";
import JoinMadhyamCard from "components/JoinMadhyamCard";
import SmallCardBlogPost from "components/SmallCardBlogPost";
import PostsTrendingCard from "components/PostsTrendingCard";
import BlogPostCard from "components/BlogPostCard";

import MOMO from "../../resources/images/global/momo.png";
import SALAD from "../../resources/images/global/salad.png";
import ITSNP from "../../resources/images/global/itsnp.png";
import USER from "../../resources/images/global/user.png";
import SANDWICH from "../../resources/images/global/sandwich.png";

export default (props) => {
  return (
    <div className="homePage">
      <PostsTrendingCard
<<<<<<< HEAD
        image={MomoImage}
        caption="momo"
=======
        image={MOMO}
        imageTitle="momo"
>>>>>>> a7bcd3511b268b1eabaa91efde7a658c98a4c52e
        heading="How momo helps to think like bill gates"
        content="I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......"
      />

      <SmallCardBlogPost
<<<<<<< HEAD
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
=======
        authorImg={USER}
        image={SALAD}
        imageTitle={"salad"}
        content="This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butter"
      />
      <BlogPostCard
        image={ITSNP}
        imageTitle="itsnp"
        authorImg={USER}
        date="May 17"
        authorName="XettriAl."
>>>>>>> a7bcd3511b268b1eabaa91efde7a658c98a4c52e
        heading="The Front-End Web Developer Roadmap for 2021"
        content="You’ve read all your free member-only stories. Become a member to get unlimitedYou’ve read all your free member-only stories. Become a member to get You’ve read all your free ..."
      />

      <MediumCardBlogPost
<<<<<<< HEAD
        image={SandwichImage}
        imageTitle={"sandwich"}
        user={UserAvatar}
=======
        image={SANDWICH}
        imageTitle={"sandwich"}
        authorImg={USER}
>>>>>>> a7bcd3511b268b1eabaa91efde7a658c98a4c52e
        content={
          "This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butterThis is butterThis is butterThis is butter "
        }
      />
      <JoinMadhyamCard />
    </div>
  );
};
