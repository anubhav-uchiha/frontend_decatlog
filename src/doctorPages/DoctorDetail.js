import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import CommonCard from "../commonComponents/CommonCard";
import { AppointCard } from "../commonComponents/LeftOverCommonComponents";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import DoctorDetailAboutSection from "./DoctorDetailAboutSection";
import DoctorDetailServiceSection from "./DoctorDetailServiceSection";
import DoctorDetailReviewsSection from "./DoctorDetailReviewsSection";
import DoctorDetailAddressSection from "./DoctorDetailAddressSection";
import BookAppointment from "../commonComponents/BookAppointment";
import MostViewed2 from "../commonComponents/MostViewed2";
function DoctorDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, address, doctorListing } =
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
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search doctors, advocates, teachers and many more....."
            />
          </div>

          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Allopathic Doctors in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dentists in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dr. Ronald Richards</p>
          </div>

          <CommonCard
            doctorDetail="true"
            doctorListing={doctorListing}
            img={img}
            name={name}
            title={title}
            qual1={qual1}
            qual2={qual2}
            address={address}
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
                    select === "services" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("services");
                  }}
                >
                  Services
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
                    select === "address" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("address");
                  }}
                >
                  Address
                </p>
              </div>
              {select === "about" && <DoctorDetailAboutSection />}
              {select === "services" && <DoctorDetailServiceSection />}
              {select === "reviews" && <DoctorDetailReviewsSection />}
              {select === "address" && <DoctorDetailAddressSection />}
            </div>
            <div className={style.rightDetail}>
              <BookAppointment
                divHeading="Book appointment"
                btnHeading="Book Now"
              />
              <AppointCard
                background="linear-gradient(76.05deg, #337f8c 1.21%, #6ab1a5 99.58%)"
                rightImg="/images/doctor/appointImg.svg"
                teethImage="/images/doctor/teeth.svg"
                heading1a="DENTAL"
                heading2a="Health Clinic"
                heading3a="Treat your teeth with us"
                service1="Dental Surgeries"
                service2="Dental Radiography"
                service3="Implant Dentistry"
                service4="Cavity Protection"
              />
            </div>
          </div>
          <MostViewed2 category="Dentist" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DoctorDetail;
