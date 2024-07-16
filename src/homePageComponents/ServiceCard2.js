import React from "react";
import style from "../styles/ServiceCard2.module.css";

function ServiceCard2({ title1, img, bcg }) {
  return (
    <div
      className={`${style.outerContainer} flex `}
      style={{
        background: `${bcg}`,
      }}
    >
      <div className={`${style.left}`}>
        <div className={style.leftOne}>
          <img src="/images/services/hash.svg" alt="" />
        </div>

        <div className={style.leftTwo}>
          <p className={`${style.para1} w-1/2`}>{title1}</p>
        </div>
      </div>
      <div className={`${style.right}`}>
        <img src={img} alt="" className={`${style.image} rounded-[27px]`} />
      </div>
    </div>
  );
}

export default ServiceCard2;
