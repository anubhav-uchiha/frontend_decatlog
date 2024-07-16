import React from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import styles from "./GovtOfficeCard.module.css";
import SearchBar from "../commonComponents/SearchBar";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Faq from "../commonComponents/Faq";
import GovtOfficesSpecialityCards from "./GovtOfficesSpecialityCards";
import GovtOfficeCard from "./GovtOfficeCard";

function GovtOfficesListing() {
  const cards = [
    {
      heading: "Executive Branch Offices",
      detail1: "State Department of Finance",
      detail2: "State Department of Administration",
      detail3: "State Department of Human Resources",
      detail4: "Governor's Office",
    },
    {
      heading: "Legislative Branch Offices:",
      detail1: "State Legislature (Assembly/Senate)",
      detail2: "Legislative Committees and Commissions",
      detail3: "State Capitol Building",
    },
    {
      heading: "Judicial Branch Offices",
      detail1: "State Supreme Court",
      detail2: "Appellate Courts",
      detail3: "Trial Courts (Superior/County/District Courts)",
    },
    {
      heading: "Administrative",
      detail1: "Department of Health",
      detail2: "Department of Education",
      detail3: "Department of Transportation",
      detail4: "Department of Environmental Protection",
      detail5: "Department of Revenue",
    },
    {
      heading: "Law Enforcement and Public Safety",
      detail1: "State Police/Highway Patrol",
      detail2: "State Bureau of Investigation",
      detail3: "Department of Corrections",
      detail4: "Department of Public Safety",
    },
    {
      heading: "Health and Human Services",
      detail1: "Department of Health and Human Services",
      detail2: "Department of Social Services",
      detail3: "Department of Aging",
      detail4: "Department of Disabilities Services",
    },
    {
      heading: "Economic Development and Business Services",
      detail1: "Department of Natural Resources",
      detail2: "Department of Environmental Conservation",
      detail3: "Department of Wildlife and Fisheries",
    },
    {
      heading: "Natural Resources and Environmental",
      detail1: "Department of Natural Resources",
      detail2: "Department of Environmental Conservation",
      detail3: "Department of Wildlife and Fisheries",
    },
    {
      heading: "Education",
      detail1: "Department of Education",
      detail2: "State Board of Education",
      detail3: "Higher Education Commission or Board",
    },
    {
      heading: "Revenue and Taxation",
      detail1: "Department of Revenue",
      detail2: "Department of Revenue",
      detail3: "Department of Treasury",
    },
  ];

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
              placeholderProp="Search offices, keywords....."
            />
          </div>
          <GovtOfficesSpecialityCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/officers/govtOfficeBanner.png" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Government Offices in Banglore</p>
          </div>

          <h1 className={style.heading}>Government Offices in Bangalore</h1>
          <div className={styles.allCardContainer}>
            {cards.map((card) => (
              <GovtOfficeCard
                heading={card.heading}
                detail1={card.detail1}
                detail2={card.detail2}
                detail3={card.detail3}
                detail4={card.detail4}
                detail5={card.detail5}
              />
            ))}
          </div>
        </div>
      </div>
      <Faq govtOfficesListing="true" marginBtm="true" />
      <Footer shadow="true" />
    </>
  );
}

export default GovtOfficesListing;
