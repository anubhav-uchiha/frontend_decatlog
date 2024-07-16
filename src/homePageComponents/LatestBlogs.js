import React from "react";
import style from "../styles/LatestBlogs.module.css";
import LatestBlogsCard1 from "./LatestBlogsCard1";
import LatestBlogsCard2 from "./LatestBlogsCard2";
import LatestBlogsCard3 from "./LatestBlogsCard3";

function LatestBlogs() {
  return (
    <div className={style.blogsOutermostContainer}>
      <div className={style.blogsInnerContainer}>
        <div className={style.blogsTopDiv}>
          <div className={style.topLeft}>
            <h1 className={style.heading}>
              LATEST<span className={style.headingSpan}> BLOGS</span>
            </h1>
            <p className={style.paraCard}>
              Stay Informed: Explore Our Latest Insights and Updates
            </p>
          </div>
          <div className={`${style.topRight}`}>
            <button className={style.view}>VIEW ALL</button>
          </div>
        </div>

        <div className={style.campaignBtmDiv}>
          <LatestBlogsCard1 img="/images/blogs/farmer.svg" />
          <LatestBlogsCard2 img="/images/blogs/doc.svg" />
          <LatestBlogsCard3 img="/images/blogs/engg.svg" />
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
