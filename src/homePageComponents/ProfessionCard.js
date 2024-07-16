import React from "react";
import style from "../styles/Professions.module.css";

function ProfessionCard({ img, title }) {
  return (
    <div className={`${style.outerContainer}`}>
      <div className={style.innerContainer}>
        <div className={style.leftDiv}>
          <img src={img} alt="" className={style.image} />
        </div>
        <div className={style.rightDiv}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.paraCard}>Lorem Ipsum Dolor Sit Amet...</p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionCard;
