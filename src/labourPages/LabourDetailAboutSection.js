import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { PatientReviews } from "../doctorPages/NewReviews";
import { SubmitFeedback } from "../doctorPages/PatientReviews";

function LabourDetailAboutSection() {
  return (
    <>
      <div className={style.about} style={{ height: "279px" }}>
        <p className={style.information1}>
          My first job was on Saudi Arabia as domestic helper for two years and
          two months I served 5 members of the family two adults and three
          children ages. 13,7 and 4 and my second job was on Qatar as domestic
          helper for two years and one month i also served 5 members in the
          family 2 adults and 3 children. My job duties are general cleaning,
          cooking food for the children and taking care of them. I am
          trustworthy, patience, honest and loving children.{" "}
          <span className={style.info1Span2} style={{ marginLeft: "358px" }}>
            Read More
          </span>
        </p>

        <div className={style.eduDiv}>
          <h1 className={style.eduHeading}>Education</h1>
          <ul>
            <li className={style.information2}>
              2007 - High School Graduate (6 Months course)
            </li>
          </ul>
        </div>
      </div>
      <div
        className={style.eduDiv2}
        style={{
          height: "140px",
        }}
      >
        <h1 className={style.eduHeading2}>Specialization</h1>
        <div className={style.eduInner} style={{ gap: "97px" }}>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Baby Care</li>
              <li className={style.information3}>Housekeeping</li>
              <li className={style.information3}>Groceries</li>
            </ul>
          </div>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Child Care</li>
              <li className={style.information3}>Cooking</li>
              <li className={style.information3}>Elderly Care</li>
            </ul>
          </div>
        </div>
      </div>
      <PatientReviews labourReview="true" />
      <SubmitFeedback forWhom="Ms. Anna J." />
    </>
  );
}

export default LabourDetailAboutSection;
