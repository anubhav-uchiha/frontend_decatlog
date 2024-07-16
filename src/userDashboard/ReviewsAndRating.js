import React, { useState } from "react";
import style from "./PersonalInfoAndManageAddress.module.css";
function Reviews() {
  const allReviews = [
    {
      name: "Dr. Ronald Richards",
      rating: "4.5",
      recommendation: "Highly Recommended",
      detail:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
      reviewer: "Jenny Wilson",
      time: "2 Months ago",
    },
    {
      name: "Dr. Ronald Richards",
      rating: "4.5",
      recommendation: "Highly Recommended",
      detail:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
      reviewer: "Jenny Wilson",
      time: "2 Months ago",
    },
    {
      name: "Dr. Ronald Richards",
      rating: "4.5",
      recommendation: "Highly Recommended",
      detail:
        "Dr. Richard is an exceptional dentist who truly cares about his patients. His attention to detail and gentle approach put me at ease during my visit. I highly recommend him to anyone in need of dental care.",
      reviewer: "Jenny Wilson",
      time: "2 Months ago",
    },
  ];
  return (
    <div className={style.reviewOuter}>
      <div className={style.topDivReview}>
        <p className={style.reviewHeading}>
          My Reviews <span className={style.reviewHeadingSpan}>(10)</span>
        </p>
        <div className={style.sortDiv}>
          <p className={style.sort}>Sort By </p>
          <img src="/images/reviews/reviewDownArrow.svg" alt="" />
        </div>
      </div>
      <div className={style.reviewCardContainer}>
        {allReviews.map((review, index) => (
          <div key={index} className={style.cardDivReview}>
            <div className={style.reviewImage}>
              <img src="/images/reviews/reviewImg.svg" alt="" />
            </div>
            <div className={style.reviewDetails}>
              <h1 className={style.nameHeadingReview}>{review.name}</h1>
              <div className={style.ratingContainer}>
                <div className={style.ratingStarDiv}>
                  <p className={style.ratingNumber}>{review.rating}</p>
                  <img
                    src="/images/reviews/reviewStar.svg"
                    alt=""
                    className={style.reviewStar}
                  />
                </div>
                <p className={style.recommendation}>{review.recommendation}</p>
              </div>

              <p className={style.detailedReview}>{review.detail}</p>
              <div className={style.reviewedByDiv}>
                <p className={style.reviewedBy}>{review.reviewer}</p>
                <p className={style.time}>({review.time})</p>
              </div>
              <div className={style.reviewBtnDiv}>
                <button className={style.editReview}>Edit</button>
                <button className={style.deleteReview}>Delete</button>
                <button className={style.shareReview}>Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
