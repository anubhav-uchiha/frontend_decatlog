import React, { useState } from "react";
import style from "./EnginnerCard.module.css";
import { useNavigate } from "react-router-dom";

function EnggCard({
  doctorDetail,
  enggListing,
  img,
  name,
  title,
  qual1,
  qual2,
  qual3,
  qual4,
  address,
}) {
  const [clicked, setClicked] = useState("");
  const [heartImage, setHeartImage] = useState("/images/doctor/heartIcon.svg");
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (!isHeartClicked) {
      setHeartImage("/images/doctor/hoverHeartIcon2.svg");
    }
  };

  const handleMouseLeave = () => {
    if (!isHeartClicked) {
      setHeartImage("/images/doctor/heartIcon.svg");
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setHeartImage("/images/doctor/pressedHeartIcon.svg");
    setIsHeartClicked(true);
  };

  return (
    <div
      className={style.cardOuter}
      style={
        doctorDetail
          ? {
              width: "1128px",
              padding: "28px 77px 26px 31px",
              gap: "0px",
            }
          : {}
      }
      onClick={() => {
        if (enggListing) {
          navigate("/engineer-detail", {
            state: {
              enggListing,
              img,
              name,
              title,
              qual1,
              qual2,
              qual3,
              qual4,
            },
          });
        }
      }}
    >
      <div
        className={style.cardLeft}
        style={
          doctorDetail
            ? {
                width: "606px",
                height: "215px",
                gap: "30px",
              }
            : {}
        }
      >
        <div
          className={style.imgDiv}
          style={{ marginTop: "8.5px", }}
        >
          <img src={img} alt="" className={style.image} />
          <div className={style.ratingContainer}>
            <p className={style.rating}>4.5</p>
            <img src="/images/doctor/whiteStar.svg" alt="" />
          </div>
          <p className={style.reviews}>10 Reviews</p>
        </div>
        <div className={style.details}>
          <h1
            className={style.name}
            style={
              doctorDetail
                ? {
                    fontSize: "30px",
                    lineHeight: "45px",
                  }
                : {}
            }
          >
            {name}
          </h1>
          <p className={`${style.title} ${enggListing ? style.title2 : ""}`}>
            {title}
          </p>
          <p className={style.qual}>{qual1}</p>
          <p className={style.qual}>{qual2}</p>
          {qual3 && <p className={style.qual}>{qual3}</p>}
          {qual4 && (
            <p
              className={`${style.qual}
          ${enggListing ? style.customQual4 : ""}`}
            >
              {qual4}
            </p>
          )}
          {address && <p className={style.address}>{address}</p>}
          <div className={style.btnContainer}>
            <div className={style.call1}>
              <img
                src="/images/doctor/phoneIcon2.svg"
                alt=""
                className={style.icon}
              />
              <p className={style.action1}>Call Now</p>
            </div>
            <div
              className={`${style.call} ${
                clicked === "div2" ? style.clickedAppointment : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setClicked("div2");
              }}
            >
              <p className={style.action}>Hire Now</p>
            </div>
            <div
              className={`${style.call} ${
                clicked === "div3" ? style.clickedAppointment : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setClicked("div3");
              }}
            >
              <img
                src="/images/doctor/waIcon.svg"
                alt=""
                className={style.icon2}
              />
              <p className={style.action}>Chat</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.cardRight}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src="/images/doctor/shareIcon.svg"
          alt=""
          className={style.cardRightImg1}
        />
        <img
          src={heartImage}
          alt=""
          className={`${style.cardRightImg2} ${
            isHeartClicked ? style.heartClicked : ""
          }`}
        />
      </div>
    </div>
  );
}

export default EnggCard;
