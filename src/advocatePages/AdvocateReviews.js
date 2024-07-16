import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

function AdvocateReviews() {
  const advocateReviewsArray = [
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "The lawyer's understanding of my issue is laudable. The lawyer correctly advised me on the merits of my case. The lawyer helped me in reaching the right decision that was required in my legal issue.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "The lawyer's understanding of my issue is laudable. The lawyer correctly advised me on the merits of my case. The lawyer helped me in reaching the right decision that was required in my legal issue.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "The lawyer's understanding of my issue is laudable. The lawyer correctly advised me on the merits of my case. The lawyer helped me in reaching the right decision that was required in my legal issue.",
    },
    {
      img: "/images/doctor/patient.svg",
      name: "Emily W.",
      time: "2 Months ago",
      review:
        "The lawyer's understanding of my issue is laudable. The lawyer correctly advised me on the merits of my case. The lawyer helped me in reaching the right decision that was required in my legal issue.",
    },
  ];

  return (
    <div className={style.patientOuter}>
      <div className={style.upr}>
        <h1 className={style.reviewheading}>Client Reviews</h1>
        <button className={style.view}>View All</button>
      </div>

      <div className={style.cardContainer}>
        {advocateReviewsArray.map((item, index) => (
          <div key={index} className={style.cardOuter}>
            <div className={style.top}>
              <div className={style.details}>
                <img src={item.img} alt="" />
                <div className={style.nameDiv}>
                  <p className={style.name}>{item.name}</p>
                  <p className={style.time}>{item.time}</p>
                </div>
              </div>
              <div className={style.stars}>
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
                <img src="/images/doctor/reviewStar.svg" alt="" />
              </div>
            </div>
            <p className={style.review}>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvocateReviews;
