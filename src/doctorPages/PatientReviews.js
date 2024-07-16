import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

export function SubmitFeedback({ forWhom, officerDetail }) {
  return (
    <div
      className={style.outerSubmit}
      style={officerDetail ? { width: "1128px" } : {}}
    >
      <p className={style.submitheading}>Submit Feedback</p>
      <div className={style.lwer}>
        <div className={style.leftDiv}>
          <p className={style.feedback}>Submit a review for {forWhom}</p>
          <p className={style.feedback2}>Your feedback matters!</p>
        </div>
        <button className={style.submit}>Write a Review</button>
      </div>
    </div>
  );
}

export function Address() {
  return (
    <div className={style.addOuter}>
      <h1 className={style.addHeading}>Address</h1>
      <p className={style.addDetail}>
        123 Main Street, Suite 100, Chicago, IL 60601
      </p>
      <img src="/images/doctor/address.svg" alt="" className={style.imgAdd} />
    </div>
  );
}

export function MostViewed({ category }) {
  const mostViewedArray = [
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
    {
      img: "/images/doctor/mostViewed.svg",
      name: "Theresa Webb",
      speciality: "Dental Surgeon",
      qualification: "BDS, PhD",
      experience: "34 years of experience in speciality",
    },
  ];
  return (
    <div className={style.viewedOuter}>
      <h1 className={style.viewedHeading}>
        Most viewed {category} in Bangalore
      </h1>
      <div className={style.imgContainer}>
        <div className={style.allCardContainer}>
          {mostViewedArray.map((item) => (
            <div className={style.viewedCardContainer}>
              <img src={item.img} alt="" className={style.viewedImg} />
              <div className={style.detailsContainer}>
                <h1 className={style.detail1}>{item.name}</h1>
                <p className={style.detail}>{category}</p>
                <p className={style.detail2}>{item.qualification}</p>
                <p className={style.detail2}>{item.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.imgContainerView}>
          <img
            src="/images/doctor/specArrow.svg"
            alt=""
            className={style.imageView}
          />
        </div>
      </div>
    </div>
  );
}
