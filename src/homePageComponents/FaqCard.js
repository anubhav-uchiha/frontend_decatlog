import React from "react";
import style from "../styles/FAQ.module.css";

function FaqCard({ isExpanded, onClick }) {
  return (
    <div
      className={`${style.cardContainer} hover:bg-gray-100`}
      style={{
        height: `${isExpanded ? "192px" : ""}`,
      }}
    >
      <div className={style.cardInnerContainer}>
        <div
          className={style.topDiv}
          style={{
            alignItems: `${isExpanded ? "center" : "center"}`,
          }}
        >
          <h1 className={style.heading}>Lorem Ipsum Dolor Sit Amet?</h1>
          <div className="showMore" onClick={onClick}>
            {isExpanded ? (
              <img src="/images/close.svg" alt="" className={style.image} />
            ) : (
              <img src="/images/show.svg" alt="" className={style.image} />
            )}
          </div>
        </div>
        {isExpanded && (
          <div className={style.btmDiv}>
            <p className={style.para}>
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqCard;
