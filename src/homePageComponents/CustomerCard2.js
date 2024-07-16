import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard2() {
  return (
    <div className={style.outerDivCard2}>
      <div className={style.innerDivCard2}>
        <div className={style.topDivCard2}>
          <div className={style.topLeftDivCard2}>
            <img src="/images/miss/card2.svg" alt="" />
          </div>
          <div className={style.topRightDivCard2}>
            <h1 className={style.nameBtmDivCard1}>Sumit Kumar </h1>
            <h1 className={style.titleBtmDivCard1}>CEO, Avito</h1>

            <div className={style.ratingBtmDivCardDiv2}>
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
        <div className={style.btmDivCard2}>
          <p className={style.paraMidDivCard1}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard2;
