import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../commonComponents/CommonCard";
import { AppointCard } from "../commonComponents/LeftOverCommonComponents";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import BookAppointment from "../commonComponents/BookAppointment";
import MostViewed2 from "../commonComponents/MostViewed2";
import { CaFee } from "../commonComponents/FeeStructure";
import CaDetailAboutSection from "./CaDetailAboutSection";
import CaDetailReviewsSection from "./CaDetailReviewsSection";
import CaDetailFeesSection from "./CaDetailFeesSection";
import CaDetailSpecialitiesSection from "./CaDetailSpecialitiesSection";
function CaDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4, caListing } =
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
        <div className={style.listingInner}
        style={{marginBottom:"104px"}}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, Income Tax, GST, VAT....."
            />
          </div>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Income Tax CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Wade Warren</p>
          </div>
          <DoctorCard
            caDetail="true"
            caListing={caListing}
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
                    select === "fees" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("fees");
                  }}
                >
                  Fees
                </p>
              </div>
              {select === "about" && <CaDetailAboutSection />}
              {select === "specialities" && <CaDetailSpecialitiesSection />}
              {select === "reviews" && <CaDetailReviewsSection />}
              {select === "fees" && <CaDetailFeesSection />}
            </div>
            <div className={style.rightDetail}>
              <BookAppointment
                divHeading="Schedule a Consultation"
                btnHeading="Schedule Now"
              />
              <AppointCard
                background="linear-gradient(76.05deg, #6E49D6 1.21%, #E33227 99.58%)"
                rightImg="/images/ca/appointImg.svg"
                heading1a="Business"
                heading2a="Accounting Services"
                service1="Tax Returns"
                service2="Tax Planning"
                service3="Financial Reporting"
                margin="true"
              />
            </div>
            {/* */}
          </div>
          <MostViewed2 category="CAs" />
          <CaFee />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CaDetail;
