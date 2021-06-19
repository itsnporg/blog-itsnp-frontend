import React from "react";
import PostsTrendingCard from "components/PostsTrendingCard/PostsTrendingCard";
import BlogPostCard from "components/BlogPostCard/BlogPostCard";
import "./Home.scss";
import { AllImage } from "../../constants/index";
import SmallCardBlogPost from "components/SmallCardBlogPost";
import MediumCardBlogPost from "components/PostMediumBlogPost";
import JoinMadhyamCard from "components/JoinMadhyamCard";
export default (props) => {
  return (
    <div className="HomePage">
      <PostsTrendingCard
        image={AllImage.momo}
        caption="momo"
        heading="How momo helps to think like bill gates"
        content="I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......"
      />

      <SmallCardBlogPost
        image={AllImage.salad}
        imageTitle={"salad"}
        user={AllImage.user}
        love={AllImage.love}
        chat={AllImage.chat}
        bookmark={AllImage.bookmark}
        content="This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butter"
      />
      <BlogPostCard
        image={AllImage.itsnp}
        user={AllImage.user}
        heading="The Front-End Web Developer Roadmap for 2021"
        content="You’ve read all your free member-only stories. Become a member to get unlimitedYou’ve read all your free member-only stories. Become a member to get You’ve read all your free ..."
      />

      <MediumCardBlogPost
        image={AllImage.sandwich}
        imageTitle={"sandwich"}
        user={AllImage.user}
        content={
          "This is butter This is butterThis is butterThis is butterThis is butterThis is butter This is butterThis is butterThis is butterThis is butterThis is butter "
        }
      />
      <JoinMadhyamCard />
    </div>
  );
};
