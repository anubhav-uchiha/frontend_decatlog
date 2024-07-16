import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Header from "../commonComponents/Header";
import Pagination from "../commonComponents/Pagination";
import {
  AdvertisementCard,
  Query,
} from "../commonComponents/LeftOverCommonComponents";
import Faq from "../commonComponents/Faq";
import Footer from "../commonComponents/Footer";

import {
  AdvocateSpecialityCards,
  AdvocateFilterCards,
} from "./AdvocateSpecialityAndFilterCards";
import AdvocateCard from "./AdvocateCard";
function AdvocateListing() {
  const advocateCardData = [
    {
      img: "/images/advocate/advocateReview.svg",
      name: "Esther Howard",
      title: "Family Law, Property Law, Criminal Law,",
      titleSpan: "etc",
      qual1: "LLB, LLM",
      qual2: "911 Consultations",
      qual3: "Licensed for 10 Years",
    },
    {
      img: "/images/advocate/advocateReview.svg",
      name: "Esther Howard",
      title: "Family Law, Property Law, Criminal Law,",
      titleSpan: "etc",
      qual1: "LLB, LLM",
      qual2: "911 Consultations",
      qual3: "Licensed for 10 Years",
    },
    {
      img: "/images/advocate/advocateReview.svg",
      name: "Esther Howard",
      title: "Family Law, Property Law, Criminal Law,",
      titleSpan: "etc",
      qual1: "LLB, LLM",
      qual2: "911 Consultations",
      qual3: "Licensed for 10 Years",
    },
    {
      img: "/images/advocate/advocateReview.svg",
      name: "Esther Howard",
      title: "Family Law, Property Law, Criminal Law,",
      titleSpan: "etc",
      qual1: "LLB, LLM",
      qual2: "911 Consultations",
      qual3: "Licensed for 10 Years",
    },
    {
      img: "/images/advocate/advocateReview.svg",
      name: "Esther Howard",
      title: "Family Law, Property Law, Criminal Law,",
      titleSpan: "etc",
      qual1: "LLB, LLM",
      qual2: "911 Consultations",
      qual3: "Licensed for 10 Years",
    },
  ];
  return (
    <>
      <Header userDashboard="true" />
      <div className={style.listingOuter}>
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, Family, divorce....."
            />
          </div>
          <AdvocateSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/advocate/advocate.png" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Advocates in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Family Law Advocates in Bangalore</p>
          </div>
          <h1 className={style.heading}>
            Best Family Law Advocate in HSR Layout
          </h1>
          <AdvocateFilterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {advocateCardData.map((data) => (
                <AdvocateCard
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  titleSpan={data.titleSpan}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  qual3={data.qual3}
                />
              ))}
              <Pagination />
            </div>
            <div className={style.btmRight} style={{ marginLeft: "0px" }}>
              <Query forWhom="Advocates" />
              <AdvertisementCard img="images/advocate/advocateAdv.png" />
            </div>
          </div>
          *
        </div>
      </div>
      <Faq advocateListing="true" />

      <Footer shadow="true"/>
    </>
  );
}

export default AdvocateListing;
