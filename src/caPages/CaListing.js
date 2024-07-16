import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import CommonCard from "../commonComponents/CommonCard";
import Pagination from "../commonComponents/Pagination";
import Faq from "../commonComponents/Faq";
import {
  AppointCard,
  Query,
} from "../commonComponents/LeftOverCommonComponents";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import { CaFilterCards, CaSpecialityCards } from "./CaSpecialityAndFilterCards";
function CaListing() {
  const docCardData = [
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
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
              placeholderProp="Search Speciality, Income Tax, GST, VAT....."
            />
          </div>

          <CaSpecialityCards />
        </div>
        <div className={style.bannerContainer}>
          <img src="/images/ca/Banner.png" alt="" />
        </div>
        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Income Tax CAs in Bangalore</p>
          </div>
          <h1 className={style.heading}>Best Income Tax CAs in HSR Layout</h1>

          <CaFilterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {docCardData.map((data) => (
                <CommonCard
                  caListing="Book a Consultation"
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  qual3={data.qual3}
                  qual4={data.qual4}
                />
              ))}
              <Pagination />
            </div>

            <div className={style.btmRight}>
              <Query forWhom="Income Tax CAs" />
              <AppointCard
                background="linear-gradient(76.05deg, #6E49D6 1.21%, #E33227 99.58%)"
                rightImg="/images/ca/appointImg.svg"
                heading1a="Business"
                heading2a="Accounting Services"
                service1="Tax Returns"
                service2="Tax Planning"
                service3="Financial Reporting"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq caListing="true" />
      <Footer shadow="true"/>
    </>
  );
}

export default CaListing;
