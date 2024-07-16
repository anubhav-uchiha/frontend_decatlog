import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { PatientReviews } from "../doctorPages/NewReviews";
import { SubmitFeedback } from "../doctorPages/PatientReviews";
function DoctorDetailAboutSection() {
  return (
    <>
      <div
        className={style.about}
        style={{ height: "517px", paddingRight: "20px" }}
      >
        <p className={style.information1}>
          Mr. Warren is a seasoned Chartered Accountant with a proven track
          record of delivering exceptional financial guidance and support. With
          over 10 years of experience in financial management, taxation, and
          auditing, he brings a wealth of expertise to every client interaction.{" "}
          <br />
          <br />
          Specializing in providing tailored financial solutions to individuals
          and businesses, Mr. Warren is committed to fostering long-term
          relationships built on trust, integrity, and professionalism.
          <span className={style.info1Span2} style={{ marginLeft: "407x" }}>
            Read More
          </span>
        </p>
        <div className={style.eduDiv}>
          <h1 className={style.eduHeading}>Education</h1>
          <ul>
            <li className={style.information2}>
              Bachelor's Degree in Accounting, Finance, or Business
              Administration - University of XYZ, London, UK, 2014
            </li>

            <li className={style.information2}>
              Completion of the Association of Chartered Certified Accountants
              (ACCA) Program
            </li>

            <li className={style.information2}>
              Successful Completion of the Chartered Accountant (CA) Examination
              - Institute of Chartered Accountants in England and Wales (ICAEW),
              London, UK, 2016
            </li>
          </ul>
        </div>
      </div>
      <div
        className={style.eduDiv2}
        style={{
          height: "204px",
        }}
      >
        <h1 className={style.eduHeading2}>Specialization</h1>
        <div className={style.eduInner} style={{ gap: "97px" }}>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Income Tax</li>
              <li className={style.information3}>GST</li>
              <li className={style.information3}>VAT</li>
              <li className={style.information3}>Property Tax</li>
              <li className={style.information3}>Audit</li>
            </ul>
          </div>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Capital Gains Tax</li>
              <li className={style.information3}>Service Tax</li>
              <li className={style.information3}>Corporate Tax</li>
              <li className={style.information3}>Professional Tax</li>
            </ul>
          </div>
        </div>
      </div>
      <PatientReviews clientReview="true" />
      <SubmitFeedback forWhom="Mr. Wade Warren" />
    </>
  );
}

export default DoctorDetailAboutSection;
