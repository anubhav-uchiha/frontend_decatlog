import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { SubmitFeedback } from "../doctorPages/PatientReviews";
import AdvocateReviews from "./AdvocateReviews";

function AdvocateDetailAboutSection() {
  return (
    <>
      <div className={style.about} style={{ paddingRight: "23px" }}>
        <p className={style.information1}>
          Advocate Sudershani has since been practicing and handling cases
          independently with a result oriented approach, both professionally and
          ethically and has now acquired 8 years of professional experience in
          providing legal consultancy and advisory services. Read More
          <span className={style.info1Span2} style={{ marginLeft: "258px" }}>
            Read More
          </span>
        </p>

        <div className={style.eduDiv}>
          <h1 className={style.eduHeading}>Education</h1>
          <ul style={{ listStyle: "disc" }}>
            <li className={style.information2}>
              Bachelor of Laws (LL.B) - Harvard Law School, Cambridge,
              Massachusetts, USA, 2012
            </li>
            <li className={style.information2}>
              Master of Laws (LL.M) - Yale Law School, New Haven, Connecticut,
              USA, 2014
            </li>
          </ul>
        </div>
      </div>
      <div
        className={style.eduDiv2}
        style={{height: "140px", }}
      >
        <h1 className={style.eduHeading2}>Practice Areas</h1>
        <div className={style.eduInner} style={{ gap: "97px" }}>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Family Law</li>
              <li className={style.information3}>Property Law</li>
              <li className={style.information3}>Business Law</li>
            </ul>
          </div>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Criminal Law</li>
              <li className={style.information3}>Civil Law</li>
              <li className={style.information3}>Consumer Law</li>
            </ul>
          </div>
        </div>
      </div>
      <AdvocateReviews />
      <SubmitFeedback forWhom="Ms. Esther Howard" />
    </>
  );
}

export default AdvocateDetailAboutSection;
