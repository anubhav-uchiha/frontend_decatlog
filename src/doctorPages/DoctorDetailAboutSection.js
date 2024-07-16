import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { Address, SubmitFeedback } from "./PatientReviews";
import { PatientReviews } from "./NewReviews";
function DoctorDetailAboutSection() {
  return (
    <>
      <div className={style.about} style={{ height: "305px" }}>
        <p className={style.information1}>
          Dr. Richards is a dedicated and compassionate dental professional
          committed to providing high-quality oral healthcare to patients of all
          ages. With{" "}
          <span className={style.info1Span}>34 years of experience, </span>
          Dr. Richards is known for his expertise in cosmetic dentistry and
          orthodontics. Dr. Richards believes in a personalized approach to
          dentistry, focusing....{" "}
          <span className={style.info1Span2}>Read More</span>
        </p>
        <div className={style.eduDiv}>
          <h1 className={style.eduHeading}>Education</h1>
          <ul>
            <li className={style.information2}>
              Bachelor of Dental Surgery (BDS) - XYZ Dental College, New York,
              USA, 1980
            </li>
            <li className={style.information2}>
              Doctor of Philosophy (PhD) in Orthodontics & Dentofacial
              Orthopaedics - ABC University, Chicago, USA, 1986
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
              <li className={style.information3}>
                Routine Dental Exams and Cleanings
              </li>
              <li className={style.information3}>Fillings and Restorations</li>
              <li className={style.information3}>Dental Implants</li>
              <li className={style.information3}>Root Canal Therapy</li>
              <li className={style.information3}>Cosmetic Dentistry</li>
              <li className={style.information3}>Oral Surgery</li>
              <li className={style.information3}>TMJ Treatment</li>
            </ul>
          </div>
          <div>
            <ul className={style.eduLeft}>
              <li className={style.information3}>Dental X-Rays</li>
              <li className={style.information3}>Dental Crowns and Bridges</li>
              <li className={style.information3}>Tooth Extractions</li>
              <li className={style.information3}>Orthodontic Treatment</li>
              <li className={style.information3}>Periodontal (Gum) Care</li>
              <li className={style.information3}>
                Dentures and Partial Dentures
              </li>
              <li className={style.information3}>Pediatric Dentistry</li>
            </ul>
          </div>
        </div>
      </div>
      <PatientReviews patientReview="true" />
      <SubmitFeedback forWhom="Dr Ronald Richard" />
      <Address />
    </>
  );
}

export default DoctorDetailAboutSection;
