import React, { useState } from "react";
import style from "./officerCard.module.css";
import { useNavigate } from "react-router-dom";

function OfficerCards({ officerDetail, img, name, title, qual1 }) {
  const [clicked, setClicked] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className={`${style.cardOuter} ${
        officerDetail ? style.advocateDetailCardOuter : ""
      }`}
      onClick={() => {
        navigate("/officer-detail", {
          state: {
            img,
            name,
            title,
            qual1,
          },
        });
      }}
    >
      <div
        className={`${style.cardLeft} ${
          officerDetail ? style.advocateDetailCardLeft : ""
        }`}
      >
        <div
          className={`${style.imgDiv}   ${
            officerDetail ? style.advocateDetailImgDiv : ""
          }`}
        >
          <img src={img} alt="" className={style.image} />

          <div className={style.ratingContainer}>
            <p className={style.rating}>1.5</p>
            <img src="/images/doctor/whiteStar.svg" alt="123" />
          </div>
          <p className={style.reviews}>10 Reviews</p>
        </div>

        <div
          className={`${style.details} ${
            officerDetail ? style.advocateDetails : ""
          }`}
        >
          <h1
            className={`${style.name} ${
              officerDetail ? style.advocateDetailName : ""
            }`}
          >
            {name}
          </h1>
          <p className={style.title}>{title}</p>
          <p className={style.qual}>{qual1}</p>

          <div
            className={`${style.btnContainer} ${
              officerDetail ? style.advocateDetailBtnContainer : ""
            }`}
          >
            <div className={style.viewComplaint}>
              <img
                src="/images/doctor/phoneIcon2.svg"
                alt=""
                className={style.icon}
              />
              <p className={style.action1}>View Complaints</p>
            </div>

            {!officerDetail && (
              <div
                className={`${style.raiseComplaint} ${
                  clicked === "div2" ? style.clickedAppointment : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setClicked("div2");
                }}
              >
                <p className={style.action}>Write a Complaint </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.cardRight}>
        <img
          src="/images/doctor/shareIcon.svg"
          alt=""
          className={style.cardRightImg1}
        />
      </div>
    </div>
  );
}

export default OfficerCards;
