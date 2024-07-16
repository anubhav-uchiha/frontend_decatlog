import React from "react";
import styles from "./OfficerListing.module.css";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import Pagination from "../commonComponents/Pagination";

import { OfficersSpecialityCards } from "./OfficersSpecialityAndFilterCards";
import OfficerCards from "./OfficerCards";

function OfficersListing() {
  const officerCardData = [
    {
      img: "/images/officers/officerReview.svg",
      name: "Jacob Jones",
      title: "Income Tax Officer",
      qual1: "IT Department, ABC City",
    },
    {
      img: "/images/officers/officerReview.svg",
      name: "Jacob Jones",
      title: "Income Tax Officer",
      qual1: "IT Department, ABC City",
    },
    {
      img: "/images/officers/officerReview.svg",
      name: "Jacob Jones",
      title: "Income Tax Officer",
      qual1: "IT Department, ABC City",
    },
    {
      img: "/images/officers/officerReview.svg",
      name: "Jacob Jones",
      title: "Income Tax Officer",
      qual1: "IT Department, ABC City",
    },
    {
      img: "/images/officers/officerReview.svg",
      name: "Jacob Jones",
      title: "Income Tax Officer",
      qual1: "IT Department, ABC City",
    },
  ];
  return (
    <>
      <Header userDashboard="true" />
      <div className={style.listingOuter}>
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" placeholderProp="Search" />
          </div>
          <OfficersSpecialityCards />
        </div>
        <div className={style.bannerContainer}>
          <img src="/images/officers/banner.png" alt="" />
        </div>

        <div className={style.listingInner2} style={{ height: "fit-content" }}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Home</p>
            <img
              src="/images/doctor/rightArrow.svg"
              alt=""
              style={{ marginLeft: "1px", marginRight: "1px" }}
            />
            <p className={style.para}>Officers</p>
            <img
              src="/images/doctor/rightArrow.svg"
              alt=""
              style={{ marginLeft: "1px", marginRight: "1px" }}
            />
            <p className={style.para}>Service Related Complaints</p>
          </div>
          <div className={styles.headingContainer}>
            <h1 className={styles.headingLeft}>Service Related Complaints</h1>
            <h1 className={styles.headingRight}>Raise a Complaint</h1>
          </div>
          <div className={style.btmContainer} style={{ marginBottom: "93px" }}>
            <div
              className={style.btmLeft}
              style={{ width: "fit-content", height: "fit-content" }}
            >
              {officerCardData.map((data) => (
                <OfficerCards
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                />
              ))}
            </div>
          </div>
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OfficersListing;
