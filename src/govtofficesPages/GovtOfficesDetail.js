import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";

import GovtOfficeDetailCard from "./GovtOfficeDetailCard";
import { useLocation } from "react-router-dom";
import GovtDetailOfficeSubheadingCard from "./GovtDetailOfficeSubheadingCard";
import StateDepartmentOfFinance from "./StateDepartmentOfFinance";
function GovtOfficesDetail() {
  const location = useLocation();
  const { detail1, detail2, detail3, detail4, detail5 } = location.state || {};
  const [component, setComponent] = useState("State Department of Finance");
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
              placeholderProp="Search offices, keywords....."
            />
          </div>
          <GovtOfficeDetailCard />
          <div
            className={style.locationFilterPara}
            style={{ marginTop: "10px" }}
          >
            <p className={style.para}>Home</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Government Offices in Banglore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Executive Branch Offices</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>State Department of Finance</p>
          </div>
          <h1 className={style.heading}>
            Executive Branch Offices in Bangalore
          </h1>
          <GovtDetailOfficeSubheadingCard
            component={component}
            setComponent={setComponent}
            detail1={detail1}
            detail2={detail2}
            detail3={detail3}
            detail4={detail4}
            detail5={detail5}
          />
          {component === "State Department of Finance" && (
            <StateDepartmentOfFinance />
          )}
        </div>
      </div>
      <Footer shadow="true"/>
    </>
  );
}

export default GovtOfficesDetail;
