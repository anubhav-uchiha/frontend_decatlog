import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Pagination from "../commonComponents/Pagination";
import Faq from "../commonComponents/Faq";
import Footer from "../commonComponents/Footer";
import {
  AdvertisementCard,
  Query,
} from "../commonComponents/LeftOverCommonComponents";
import Header from "../commonComponents/Header";
import EnginnerCards from "./EngineerCards";
import {
  EnginnerFilterCards,
  EngineerSpecialityCards,
} from "./EngineerSpecialityAndFilterCards";

function EnggListing() {
  const enggCardData = [
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
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
              placeholderProp="Search Speciality, product, Website....."
            />
          </div>
          <EngineerSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/ca/enggBanner.png" alt="" />
        </div>
        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Engineers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>
              Websites IT & Software Engineers in Bangalore
            </p>
          </div>
          <h1 className={style.heading}>
            Best Websites IT & Software Engineers in HSR Layout
          </h1>
          <EnginnerFilterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {enggCardData.map((data) => (
                <EnginnerCards
                  enggListing="true"
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
            <div className={style.btmRight} style={{ marginLeft: "-8px" }}>
              <Query forWhom="Websites IT & Software Engineers" />
              <AdvertisementCard img="images/ca/enggAdBanner.png" />
            </div>
          </div>
        </div>
      </div>
      <Faq engineerListing="true" />

      <Footer shadow="true"/>
    </>
  );
}

export default EnggListing;
