import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Pagination from "../commonComponents/Pagination";
import {
  Query,
  AppointCard,
  AdvertisementCard,
} from "../commonComponents/LeftOverCommonComponents";
import Faq from "../commonComponents/Faq";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import {
  LabourFilterCards,
  LabourSpecialityCards,
} from "./LabourSpecialityAndFilterCards";
import LabourCard from "./LabourCard";

function LabourListing() {
  const docCardData = [
    {
      img: "/images/ca/labour.png",
      name: "Anna J.",
      title: "Immediate Availability",
      qual1: "Fluent in Hindi, English",
      qual2: "30 Years Old (F)",
      qual3: "3 Years of experience",
      qual4: "Cleaner, Cook, Baby Sitter",
    },
    {
      img: "/images/ca/labour.png",
      name: "Anna J.",
      title: "Immediate Availability",
      qual1: "Fluent in Hindi, English",
      qual2: "30 Years Old (F)",
      qual3: "3 Years of experience",
      qual4: "Cleaner, Cook, Baby Sitter",
    },
    {
      img: "/images/ca/labour.png",
      name: "Anna J.",
      title: "Immediate Availability",
      qual1: "Fluent in Hindi, English",
      qual2: "30 Years Old (F)",
      qual3: "3 Years of experience",
      qual4: "Cleaner, Cook, Baby Sitter",
    },
    {
      img: "/images/ca/labour.png",
      name: "Anna J.",
      title: "Immediate Availability",
      qual1: "Fluent in Hindi, English",
      qual2: "30 Years Old (F)",
      qual3: "3 Years of experience",
      qual4: "Cleaner, Cook, Baby Sitter",
    },
    {
      img: "/images/ca/labour.png",
      name: "Anna J.",
      title: "Immediate Availability",
      qual1: "Fluent in Hindi, English",
      qual2: "30 Years Old (F)",
      qual3: "3 Years of experience",
      qual4: "Cleaner, Cook, Baby Sitter",
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
              placeholderProp="Search Speciality, maids, plumber, carpenter....."
            />
          </div>
          <LabourSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/ca/labourBanner.png" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Labours in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Maids in Bangalore</p>
          </div>
          <h1 className={style.heading}>Best Maid in HSR Layout</h1>
          <LabourFilterCards />

          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {docCardData.map((data) => (
                <LabourCard
                  labourListing="Hire Now"
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
              <Query forWhom="Maids" />
              <AdvertisementCard img="/images/ca/Adv.png" />
            </div>
          </div>
        </div>
      </div>
      <Faq labourListing="true" />
      <Footer shadow="true" />
    </>
  );
}
export default LabourListing;
