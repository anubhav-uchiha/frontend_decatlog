import React from "react";
import { useLocation } from "react-router-dom";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import { SubmitFeedback } from "../doctorPages/PatientReviews";

import OfficerCards from "./OfficerCards";
import Complaints from "./Complaints";

function OfficersDetail() {
  const location = useLocation();
  const { img, name, title, qual1 } = location.state || {};

  return (
    <>
      <Header userDashboard="true" />
      <div
        className={style.listingOuter}
        style={{ background: "url(/images/Backgrounds.svg)" }}
      >
        <div className={style.listingInner} style={{marginBottom:"100px"}}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" placeholderProp="Search" />
          </div>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Home</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Officers</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Service Related Complaints</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Jacob Jones</p>
          </div>
          <OfficerCards
            officerDetail="true"
            img={img}
            name={name}
            title={title}
            qual1={qual1}
          />
          <Complaints />
          <SubmitFeedback forWhom="Ms. Esther Howard" officerDetail="true"  />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default OfficersDetail;
