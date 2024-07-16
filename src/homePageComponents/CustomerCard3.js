import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard3() {
  return (
    <div className={`${style.outerDivCard3}`}>
      <div className={style.leftDivCard3}>
        <img src="/images/miss/card3.svg" alt="" />
      </div>

      <div className={style.rightDivCard3}>
        <p className={style.paraMidDivCard1}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam
        </p>
        <div className={style.btmDivCard3}>
          <h1 className={style.nameBtmDivCard3}>Krish Chadha </h1>
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
    </div>
  );
}

export default CustomerCard3;
