import React from "react";
import style from "../styles/ServiceCard2.module.css";

function ServicesCard3() {
  return (
    <div
      className={`${style.outerContainer} flex hover:scale-110`}
      style={{
        background: "rgba(143, 51, 51, 1)",
      }}
    >
      <div className={`${style.left}`}>
        <div className={style.leftOne}>
          <img src="/images/services/hash.svg" alt="" />
        </div>

        <div className={style.leftTwo}>
          <p className={`${style.para1} w-3/5`}>RAISE A COMPLAINT</p>
        </div>
      </div>
      <div
        className={`${style.right} flex items-end justify-end`}
        style={{
          background: "url(/images/services/card3.svg)",
          backgroundSize: "cover",
          borderRadius: "16px",
        }}
      >
        <img
          src="/images/services/card3Img.svg"
          alt="11111"
          className={`${style.image2} relative top-[2px] right-[10px]  rounded-[0px]`}
        />
      </div>
    </div>
  );
}

export default ServicesCard3;
