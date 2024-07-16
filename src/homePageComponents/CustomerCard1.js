import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard1() {
  return (
    <div className={`${style.outerDivCard1}`}>
      <div className={style.topDivCard1}>
        <img src="/images/miss/card1.svg" alt="" />
      </div>
      <div className={style.midDivCard1}>
        <p className={style.paraMidDivCard1}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className={style.btmDivCard1}>
        <h1 className={style.nameBtmDivCard1}>Sumit Kumar </h1>
        <h1 className={style.titleBtmDivCard1}>CEO, Avito</h1>

        <div className={style.ratingBtmDivCardDiv1}>
          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerCard1;
