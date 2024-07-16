import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./GovtOfficeCard.module.css";
function GovtOfficeCard({
  heading,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={style.cardOuter}
      onClick={() => {
        navigate("/govt-offices-detail", {
          state: { detail1, detail2, detail3, detail4, detail5 },
        });
      }}
    >
      <h1 className={style.cardHeading}>{heading}</h1>
      <ul className={style.detailContainer}>
        <li className={style.detail}>{detail1}</li>
        <li className={style.detail}>{detail2}</li>
        <li className={style.detail}>{detail3}</li>
        {detail4 && <li className={style.detail}>{detail4}</li>}
        {detail5 && <li className={style.detail}>{detail5}</li>}
      </ul>
    </div>
  );
}

export default GovtOfficeCard;
