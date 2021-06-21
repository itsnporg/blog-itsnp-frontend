import React from "react";

import "./Home.scss";
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
        image={MOMO}
        imageTitle="momo"
        heading="How momo helps to think like bill gates"
        content="I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......"
      />

      <SmallCardBlogPost
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
        heading="The Front-End Web Developer Roadmap for 2021"
        content="You’ve read all your free member-only stories. Become a member to get unlimitedYou’ve read all your free member-only stories. Become a member to get You’ve read all your free ..."
      />

      <MediumCardBlogPost
        image={SANDWICH}
        imageTitle={"sandwich"}
        authorImg={USER}
        content={
          "This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butterThis is butterThis is butterThis is butter "
        }
      />
      <JoinMadhyamCard />
    </div>
  );
};
