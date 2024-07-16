import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import MostViewed2 from "../commonComponents/MostViewed2";
import { AdvertisementCard } from "../commonComponents/LeftOverCommonComponents";
import BookAppointment from "../commonComponents/BookAppointment";

import EngineerCards from "./EngineerCards";
import EngineerDetailAboutSection from "./EngineerDetailAboutSection";
import EngineerDetailSpecialitiesSection from "./EngineerDetailSpecialitiesSection";
import EngineerDetailReviewsSection from "./EngineerDetailReviewsSection";
import EngineerDetailPortfolioSection from "./EngineerDetailPortfolioSection";
import EngineerImagesCarousel from "./EngineerImagesCarousel";

function EnggDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4 } = location.state || {};

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
              placeholderProp="Search Speciality, product, Website....."
            />
          </div>

          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Engineers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>
              Websites IT & Software Engineers in Bangalore
            </p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Jacob Jones</p>
          </div>
          <EngineerCards
            doctorDetail="true"
            enggListing="true"
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
                <p
                  className={`${style.option} ${
                    select === "portfolio" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("portfolio");
                  }}
                >
                  Portfolio
                </p>
              </div>
              {select === "about" && <EngineerDetailAboutSection />}
              {select === "specialities" && (
                <EngineerDetailSpecialitiesSection />
              )}
              {select === "reviews" && <EngineerDetailReviewsSection />}
              {select === "portfolio" && <EngineerDetailPortfolioSection />}
            </div>
            <div className={style.btmRight} style={{ marginLeft: "-8px" }}>
              <BookAppointment divHeading="Hire Jacob " btnHeading="Hire Now" />

              <AdvertisementCard img="images/ca/enggAdBanner.png" />
            </div>
          </div>
          <MostViewed2 category="engineers" />
          <EngineerImagesCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnggDetail;
