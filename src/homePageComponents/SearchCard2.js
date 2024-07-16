import React from "react";
import style from "../styles/Searches.module.css";

function SearchCard2({ img, title }) {
  return (
    <div className={`${style.cardOuterDiv}`}>
      <div className={style.cardTopDiv}>
        <img src={img} alt="" className={style.image1} />
        <div className={style.childDiv}>
          <img
            src="/images/searches/arrow.svg"
            alt=""
            className={style.image2}
          />
        </div>
      </div>
      <h1 className={style.heading2}>{title}</h1>
    </div>
  );
}

export default SearchCard2;
