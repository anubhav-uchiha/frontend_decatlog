import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

function EnggReviews({ enggReview }) {
  const reviews = {
    engg: [
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jacob is outstanding. In my 30 years he stands out as one of the best people I've worked with - great attitude, helpful, creative, understands what you need before you do, communicates excellently, delivers on time, does more than you expect",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jacob is outstanding. In my 30 years he stands out as one of the best people I've worked with - great attitude, helpful, creative, understands what you need before you do, communicates excellently, delivers on time, does more than you expect",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jacob is outstanding. In my 30 years he stands out as one of the best people I've worked with - great attitude, helpful, creative, understands what you need before you do, communicates excellently, delivers on time, does more than you expect",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jacob is outstanding. In my 30 years he stands out as one of the best people I've worked with - great attitude, helpful, creative, understands what you need before you do, communicates excellently, delivers on time, does more than you expect",
      },
    ],
    student: [
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jenny is dedicated, knowledgeable, and very passionate about teaching. She always makes sure her students understand the material by going the extra mile. In my opinion, Hollie is an outstanding teacher who cares about her students' success.",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jenny is dedicated, knowledgeable, and very passionate about teaching. She always makes sure her students understand the material by going the extra mile. In my opinion, Hollie is an outstanding teacher who cares about her students' success.",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jenny is dedicated, knowledgeable, and very passionate about teaching. She always makes sure her students understand the material by going the extra mile. In my opinion, Hollie is an outstanding teacher who cares about her students' success.",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Months ago",
        review:
          "Jenny is dedicated, knowledgeable, and very passionate about teaching. She always makes sure her students understand the material by going the extra mile. In my opinion, Hollie is an outstanding teacher who cares about her students' success.",
      },
    ],
    client: [
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Working with Mr. Warren has been a game-changer for our business. Their expertise and personalized approach have helped us navigate complex financial challenges with confidence. We couldn't be happier with the results!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Working with Mr. Warren has been a game-changer for our business. Their expertise and personalized approach have helped us navigate complex financial challenges with confidence. We couldn't be happier with the results!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Working with Mr. Warren has been a game-changer for our business. Their expertise and personalized approach have helped us navigate complex financial challenges with confidence. We couldn't be happier with the results!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Working with Mr. Warren has been a game-changer for our business. Their expertise and personalized approach have helped us navigate complex financial challenges with confidence. We couldn't be happier with the results!",
      },
    ],
    labour: [
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Anna was amazing! We booked her with very short notice and she was kind, thorough, and detail oriented as she did a deep clean of our home. She did an excellent job cleaning our apartment and we will definitely be booking her again. Thank you, Anna!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Anna was amazing! We booked her with very short notice and she was kind, thorough, and detail oriented as she did a deep clean of our home. She did an excellent job cleaning our apartment and we will definitely be booking her again. Thank you, Anna!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Anna was amazing! We booked her with very short notice and she was kind, thorough, and detail oriented as she did a deep clean of our home. She did an excellent job cleaning our apartment and we will definitely be booking her again. Thank you, Anna!",
      },
      {
        img: "/images/doctor/patient.svg",
        name: "Emily W.",
        time: "2 Month ago",
        review:
          "Anna was amazing! We booked her with very short notice and she was kind, thorough, and detail oriented as she did a deep clean of our home. She did an excellent job cleaning our apartment and we will definitely be booking her again. Thank you, Anna!",
      },
    ],
  };

  let selectedReviews = [];
  let heading = "";

  if (enggReview) {
    selectedReviews = reviews.engg;
    heading = "Client Reviews";
  }

  return (
    <div className={style.patientOuter}>
      <div className={style.upr}>
        <h1 className={style.reviewheading}>{heading}</h1>
        <button className={style.view}>View All</button>
      </div>

      <div className={style.cardContainer}>
        {selectedReviews.map((item, index) => (
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

export default EnggReviews;
