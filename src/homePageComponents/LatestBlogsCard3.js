import React from "react";
import style from "../styles/LatestBlogs.module.css";
function LatestBlogsCard3({ img }) {
  return (
    <div className={`${style.cardOuterDiv3}`}>
      <div className={style.cardTopDiv3}>
        <img src={img} alt="" className={style.image} />
      </div>
      <div className={style.cardLowerDiv3}>
        <h1 className={style.headingCard}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className={style.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          finibus arcu ut nibh porta, ac porta diam vehicula. Quisque dignissim
          ullamcorper mauris sit amet egestas. Pellentesque sed magna ac nisl
          dapibus
          <br />{" "}
          <span className="text-appGreen hover:text-black cursor-pointer">
            Read More...
          </span>
        </p>
      </div>
    </div>
  );
}

export default LatestBlogsCard3;
