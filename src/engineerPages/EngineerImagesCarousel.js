import React from "react";
import style from "./EngineerImagesCarousel.module.css";

function EngineerImagesCarousel() {
  return (
    <div className={style.outer}>
      <div className={style.itemContainer}>
        <img
          src="/images/ca/fullStack.png"
          alt=""
          className={style.carouselImage}
        />
        <p className={style.about}>Full Stack Developer</p>
      </div>

      <div className={style.itemContainer}>
        <img
          src="/images/ca/fullStack.png"
          alt=""
          className={style.carouselImage}
        />
        <p className={style.about}>Full Stack Developer</p>
      </div>

      <div className={style.itemContainer}>
        <img
          src="/images/ca/fullStack.png"
          alt=""
          className={style.carouselImage}
        />
        <p className={style.about}>Full Stack Developer</p>
      </div>

      <div className={style.itemContainer}>
        <img
          src="/images/ca/fullStack.png"
          alt=""
          className={style.carouselImage}
        />
        <p className={style.about}>Full Stack Developer</p>
      </div>

      <div className={style.imgContainerView}>
        <img
          src="/images/doctor/specArrow.svg"
          alt=""
          className={style.imageView}
        />
      </div>
    </div>
  );
}

export default EngineerImagesCarousel;
