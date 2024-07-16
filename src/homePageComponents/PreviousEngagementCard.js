import React from "react";
import style from "../styles/PreviousEngagements.module.css";

function PreviousEngagementCard({
  img,
  name,
  service,
  about,
  date,
  stars,
  rating,
}) {
  let newStars = parseInt(stars);
  const starEmojis = Array(newStars).fill("⭐");

  return (
    <div className={`${style.outer} cursor-pointer`}>
      <div className={style.innerContainer}>
        <div className={style.left}>
          <div className={style.imgContainer}>
            <img src={img} alt="" className="" />
          </div>

          <h1 className={style.name}>{name}</h1>
        </div>

        <div className={style.right}>
          <div className={style.rightTopDiv}>
            <h1 className={style.title}>{service}</h1>
            <p className={style.about}>{about}</p>
            <p className={style.date}>{date}</p>
          </div>

          <div className={style.rightBtmDiv}>
            <div className={style.stars}>
              {starEmojis.map((star, index) => (
                <span key={index} className={style.starSpan}>
                  {star}
                </span>
              ))}
            </div>
            <p className={style.rating}>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviousEngagementCard;
