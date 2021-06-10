import React from "react";
import PostsTrendingCard from "components/PostsTrendingCard/PostsTrendingCard";

import "./Home.scss";

export default (props) => {
  return (
    <div className="HomePage">
      <PostsTrendingCard
        heading="How momo helps to think like bill gates"
        content="I used to have 5 plates momo per day, Which helps me to build
          microsoft. Bill Gates says “Momo helped me to I see the ......"
      />
    </div>
  );
};
