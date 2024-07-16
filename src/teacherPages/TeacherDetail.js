import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../commonComponents/CommonCard";
import { AppointCard } from "../commonComponents/LeftOverCommonComponents";
import BookAppointment from "../commonComponents/BookAppointment";
import MostViewed2 from "../commonComponents/MostViewed2";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import TeacherDetailAboutSection from "./TeacherDetailAboutSection";
import TeacherDetailReviewsSection from "./TeacherDetailReviewsSection";
import TeacherDetailSpecialitiesSection from "./TeacherDetailSpecilitiesSection";
import TeacherFee from "../commonComponents/FeeStructure";

function TeacherDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4, teacherListing } =
    location.state || {};

  const [select, setSelect] = useState("about");
  const handleSelect = (value) => {
    setSelect(value);
  };
  return (
    <>
      <Header userDashboard="true" />
      <div
        className={style.listingOuter}
        style={{ background: "url(/images/Backgrounds.svg)" }}
      >
        <div className={style.listingInner} style={{ marginBottom: "100px" }}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, English, Mathematics, Physics......."
            />
          </div>

          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>English Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Jenny Wilson</p>
          </div>

          <DoctorCard
            teacherDetail="true"
            teacherListing={teacherListing}
            img={img}
            name={name}
            title={title}
            qual1={qual1}
            qual2={qual2}
            qual3={qual3}
            qual4={qual4}
          />
          <div className={style.detailBtm}>
            <div className={style.leftDetail}>
              <div className={style.navOptionDetail}>
                <p
                  className={`${style.option} ${
                    select === "about" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("about");
                  }}
                >
                  About
                </p>
                <p
                  className={`${style.option} ${
                    select === "specialities" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("specialities");
                  }}
                >
                  Specialities
                </p>
                <p
                  className={`${style.option} ${
                    select === "reviews" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("reviews");
                  }}
                >
                  Reviews
                </p>
              </div>
              {select === "about" && <TeacherDetailAboutSection />}
              {select === "reviews" && <TeacherDetailReviewsSection />}
              {select === "specialities" && (
                <TeacherDetailSpecialitiesSection />
              )}
            </div>
            <div className={style.rightDetail}>
              <TeacherFee />
              <BookAppointment
                divHeading="Schedule a Lesson"
                btnHeading="Schedule Now"
              />
              <AppointCard
                rightImg="/images/teacher/student.png"
                heading1a="English"
                heading2a="Speaking Clases"
                background="linear-gradient(76.05deg, #D67849 1.21%, #E3CD27 99.58%)"
                service1="One-to-One Tutoring"
                service2="Exam Preparation"
                service3="Advanced Learning"
              />
            </div>
          </div>
          <MostViewed2 category="English Teachers" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeacherDetail;
