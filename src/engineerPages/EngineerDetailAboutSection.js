import React from 'react'
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import EngineerReviews from "./EngineerReviews";
import { SubmitFeedback } from "../doctorPages/PatientReviews";

function EngineerDetailAboutSection() {
  return (
    <>
      <div className={style.about}>
        <p className={style.information1}>
          I am a full-stack software engineer who has strong knowledge of
          software architecture and engineering <br />
          I've focused my efforts on mastering the front-end architecture to
          create testable, adaptable, scalable, and robust web applications.
          <br />I also have a depth of experience working backend using Python
          and Nodejs and forth with designers to flush out good user interface
          experiences. .
          <span className={style.info1Span2} style={{ marginLeft: "105px" }}>
            Read More
          </span>
        </p>
        <div className={style.eduDiv}>
          <h1 className={style.eduHeading}>Education</h1>
          <ul style={{ listStyle: "none" }}>
            <li className={style.information2}>
              Bachelor of Engineering (BEng), Network Engineering, Victoria
              University of Wellington, 2007-2010
            </li>
          </ul>
        </div>
      </div>
      <div className={style.eduDiv2}>
        <h1 className={style.eduHeading2}>
          Dr. Richards Specializes in the following Services and Procedures
        </h1>
        <div className={style.eduInner}>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Angular</li>
              <li className={style.information3}>Engineering</li>
              <li className={style.information3}>
                Object Oriented Programming
              </li>
              <li className={style.information3}>Software Development</li>
              <li className={style.information3}>API</li>
            </ul>
          </div>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>App Development</li>
              <li className={style.information3}>Mobile Development</li>
              <li className={style.information3}>Programming</li>
              <li className={style.information3}>.NET</li>
              <li className={style.information3}>Back End Development</li>
            </ul>
          </div>
        </div>
      </div>
      <EngineerReviews enggReview="true" />
      <SubmitFeedback forWhom="Mr. Jacob Jones" />
    </>
  );
}

export default EngineerDetailAboutSection
