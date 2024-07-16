import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import { AdvertisementCard } from "../commonComponents/LeftOverCommonComponents";
import MostViewed2 from "../commonComponents/MostViewed2";
import BookAppointment from "../commonComponents/BookAppointment";

import AdvocateCard from "./AdvocateCard";
import AdvocateDetailReviewSection from "./AdvocateDetailReviewSection";
import AdvocateDetailAboutSection from "./AdvocateDetailAboutSection";
import AdvocateDetailPracticeSection from "./AdvocateDetailPracticeSection";

function AdvocateDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3 } = location.state || {};

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
        <div className={style.listingInner} style={{marginBottom:"100px"}}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, Family, divorce....."
            />
          </div>

          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Advocates in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Family Law Advocates in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Esther Howard</p>
          </div>
          <AdvocateCard
            advocateDetail="true"
            img={img}
            name={name}
            title={title}
            titleSpan="and others"
            qual1={qual1}
            qual2={qual2}
            qual3={qual3}
            qual4="Fluent in Hindi, English"
          />
          <div className={style.detailBtm} style={{ gap: "027px" }}>
            <div
              className={style.leftDetail}
            >
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
                    select === "practice" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("practice");
                  }}
                >
                  Practice Areas
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
              {select === "about" && <AdvocateDetailAboutSection />}
              {select === "practice" && <AdvocateDetailPracticeSection />}
              {select === "reviews" && <AdvocateDetailReviewSection />}
            </div>
            <div
              className={style.btmRight}
            >
              <BookAppointment
                divHeading="Schedule a Consultation"
                btnHeading="Schedule Now"
              />
              <AdvertisementCard img="images/advocate/advocateAdv.png" />
            </div>
          </div>
          <MostViewed2 category="advocates" />
        </div>
      </div>
      <Footer shadow="true"/>
    </>
  );
}

export default AdvocateDetail;
