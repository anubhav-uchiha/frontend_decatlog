import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard4({
  name,
  img,
  height,
  para,
  width,
  paddingTop,
  paddingLeft,
  paraMarginLeft,
  paraWidth,
  paraHeight,
}) {
  return (
    <div
      className={`${style.outerDivCard4}`}
      style={{ height, width, paddingLeft, paddingTop }}
    >
      <div className={style.topDivCard4}>
        <div className={style.topLeftDivCard4}>
          <img src={img} alt="" />
        </div>
        <div className={style.topRightDivCard4}>
          <h1 className={style.nameBtmDivCard1}>{name}</h1>
          <h1 className={style.titleBtmDivCard1}>CEO, Avito</h1>

          <div className={style.ratingBtmDivCardDiv4}>
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
      <div className={style.btmDivCard4}>
        <p
          className={style.paraMidDivCard4}
          style={{
            marginLeft: `${paraMarginLeft}`,
            width: `${paraWidth}`,
            height: `${paraHeight}`,
          }}
        >
          {para}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard4;
